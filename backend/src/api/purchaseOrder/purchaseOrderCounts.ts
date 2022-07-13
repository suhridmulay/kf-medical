import PermissionChecker from '../../services/user/permissionChecker';
import ApiResponseHandler from '../apiResponseHandler';
import Permissions from '../../security/permissions';
import PurchaseOrderService from '../../services/purchaseOrderService';

export default async (req, res, next) => {
  try {
    new PermissionChecker(req).validateHas(
      Permissions.values.purchaseOrderAutocomplete,
    );

    const payload = await new PurchaseOrderService(
      req,
    ).count();
    
    await ApiResponseHandler.success(req, res, payload);
  } catch (error) {
    await ApiResponseHandler.error(req, res, error);
  }
};
