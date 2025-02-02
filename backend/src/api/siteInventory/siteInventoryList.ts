import PermissionChecker from '../../services/user/permissionChecker';
import Roles from '../../security/roles';
import ApiResponseHandler from '../apiResponseHandler';
import Permissions from '../../security/permissions';
import SiteInventoryService from '../../services/siteInventoryService';
import StaffService from '../../services/staffService';

export default async (req, res, next) => {
  try {
    const permissions = new PermissionChecker(req);
    permissions.validateHas(
      Permissions.values.siteInventoryRead,
    );

    const currentUserRoles = permissions.currentUserRolesIds;
    const filter = {"user": req.currentUser.id};

    if (currentUserRoles[0] != Roles.values.admin) {
      const staff = await new StaffService(req).findAndCountAll( {filter},);
      if (staff.count > 0) {
        const affiliatedMedicalCenter = staff.rows[0].medicalCenterId;
        if (affiliatedMedicalCenter) {
          req.query.filter['center'] = affiliatedMedicalCenter;
        }
      }
    }

    const payload = await new SiteInventoryService(
      req,
    ).findAndCountAll(req.query);

    await ApiResponseHandler.success(req, res, payload);
  } catch (error) {
    await ApiResponseHandler.error(req, res, error);
  }
};
