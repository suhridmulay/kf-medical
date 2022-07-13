import PermissionChecker from '../../services/user/permissionChecker';
import ApiResponseHandler from '../apiResponseHandler';
import Permissions from '../../security/permissions';
import SiteInventoryService from '../../services/siteInventoryService';

export default async (req, res, next) => {
  try {
    new PermissionChecker(req).validateHas(
      Permissions.values.siteInventoryRead,
    );

    const payload = await new SiteInventoryService(
      req,
    ).findAndCountAll(req.query);

    await ApiResponseHandler.success(req, res, payload);
  } catch (error) {
    await ApiResponseHandler.error(req, res, error);
  }
};
