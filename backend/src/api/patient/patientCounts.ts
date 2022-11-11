import PermissionChecker from '../../services/user/permissionChecker';
import ApiResponseHandler from '../apiResponseHandler';
import Permissions from '../../security/permissions';
import PatientService from '../../services/patientService';

export default async (req, res, next) => {
  try {
    new PermissionChecker(req).validateHas(
      Permissions.values.patientAutocomplete, // FIXME
    );

    const patientCount = await new PatientService(
      req,
    ).count();

    await ApiResponseHandler.success(req, res, {'count': patientCount});
  } catch (error) {
    await ApiResponseHandler.error(req, res, error);
  }
};
