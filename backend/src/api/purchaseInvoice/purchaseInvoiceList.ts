import PermissionChecker from '../../services/user/permissionChecker';
import ApiResponseHandler from '../apiResponseHandler';
import Permissions from '../../security/permissions';
import PurchaseInvoiceService from '../../services/purchaseInvoiceService';

export default async (req, res, next) => {
  try {
    new PermissionChecker(req).validateHas(
      Permissions.values.purchaseInvoiceRead,
    );

    const payload = await new PurchaseInvoiceService(
      req,
    ).findAndCountAll(req.query);

    await ApiResponseHandler.success(req, res, payload);
  } catch (error) {
    await ApiResponseHandler.error(req, res, error);
  }
};
