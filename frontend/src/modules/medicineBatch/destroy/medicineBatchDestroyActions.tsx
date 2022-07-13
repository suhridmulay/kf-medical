import listActions from 'src/modules/medicineBatch/list/medicineBatchListActions';
import MedicineBatchService from 'src/modules/medicineBatch/medicineBatchService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'MEDICINEBATCH_DESTROY';

const medicineBatchDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: medicineBatchDestroyActions.DESTROY_STARTED,
      });

      await MedicineBatchService.destroyAll([id]);

      dispatch({
        type: medicineBatchDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.medicineBatch.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/medicine-batch');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: medicineBatchDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: medicineBatchDestroyActions.DESTROY_ALL_STARTED,
      });

      await MedicineBatchService.destroyAll(ids);

      dispatch({
        type: medicineBatchDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.medicineBatch.destroyAll.success'),
      );

      getHistory().push('/medicine-batch');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: medicineBatchDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default medicineBatchDestroyActions;
