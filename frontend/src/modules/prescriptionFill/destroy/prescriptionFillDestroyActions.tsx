import listActions from 'src/modules/prescriptionFill/list/prescriptionFillListActions';
import PrescriptionFillService from 'src/modules/prescriptionFill/prescriptionFillService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'PRESCRIPTIONFILL_DESTROY';

const prescriptionFillDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: prescriptionFillDestroyActions.DESTROY_STARTED,
      });

      await PrescriptionFillService.destroyAll([id]);

      dispatch({
        type: prescriptionFillDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.prescriptionFill.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/prescription-fill');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: prescriptionFillDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: prescriptionFillDestroyActions.DESTROY_ALL_STARTED,
      });

      await PrescriptionFillService.destroyAll(ids);

      dispatch({
        type: prescriptionFillDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.prescriptionFill.destroyAll.success'),
      );

      getHistory().push('/prescription-fill');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: prescriptionFillDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default prescriptionFillDestroyActions;
