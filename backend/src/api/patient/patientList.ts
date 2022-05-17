import PermissionChecker from '../../services/user/permissionChecker';
import Roles from '../../security/roles';
import ApiResponseHandler from '../apiResponseHandler';
import Permissions from '../../security/permissions';
import PatientService from '../../services/patientService';
import DoctorService from '../../services/doctorService';

export default async (req, res, next) => {
  try {
    const permissions = new PermissionChecker(req);
    permissions.validateHas(
      Permissions.values.patientRead,
    );
    // Rural village doctors can only see their local patients - only telemedicine doctors
    // get to see all patients. Get the location affiliated with the doctor
    const currentUserRoles = permissions.currentUserRolesIds;
    if (currentUserRoles[0] === Roles.values.doctor) {
      const filter = {"user": req.currentUser.id};
      const doctor = await new DoctorService(req).findAndCountAll(
         {filter},
      );
      const affiliatedMedicalCenter = doctor.rows[0].medicalCenterId;
      if (affiliatedMedicalCenter) {
        req.query.filter['medicalCenter'] = affiliatedMedicalCenter;
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
