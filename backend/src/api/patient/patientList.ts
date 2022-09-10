import PermissionChecker from '../../services/user/permissionChecker';
import Roles from '../../security/roles';
import ApiResponseHandler from '../apiResponseHandler';
import DoctorService from '../../services/doctorService';
import Permissions from '../../security/permissions';
import PatientService from '../../services/patientService';
import StaffService from '../../services/staffService';

export default async (req, res, next) => {
  try {
    const permissions = new PermissionChecker(req);
    permissions.validateHas(
      Permissions.values.patientRead,
    );

    // Rural village doctors can only see their local patients - only telemedicine doctors
    // get to see all patients. Get the location affiliated with the doctor
    // Local pharmacists, managers, etc. also only see local patients
    const currentUserRoles = permissions.currentUserRolesIds;
    const filter = {"user": req.currentUser.id};

    if (currentUserRoles[0] === Roles.values.doctor) {
      const doctor = await new DoctorService(req).findAndCountAll( {filter},);
      if (doctor.count > 0) {
        const affiliatedMedicalCenter = doctor.rows[0].medicalCenterId;
        if (affiliatedMedicalCenter) {
          req.query.filter['medicalCenter'] = affiliatedMedicalCenter;
        }
      }
    } else if (currentUserRoles[0] != Roles.values.admin) {
      const staff = await new StaffService(req).findAndCountAll( {filter},);
      if (staff.count > 0) {
        const affiliatedMedicalCenter = staff.rows[0].medicalCenterId;
        if (affiliatedMedicalCenter) {
          req.query.filter['medicalCenter'] = affiliatedMedicalCenter;
        }
      }
    }

    const payload = await new PatientService(
      req,
    ).findAndCountAll(req.query);

    await ApiResponseHandler.success(req, res, payload);
  } catch (error) {
    await ApiResponseHandler.error(req, res, error);
  }
};
