import MedicineBatchService from 'src/modules/medicineBatch/medicineBatchService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'MEDICINEBATCH_FORM';

const medicineBatchFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: medicineBatchFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await MedicineBatchService.find(id);
      }

      dispatch({
        type: medicineBatchFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: medicineBatchFormActions.INIT_ERROR,
      });

      getHistory().push('/medicine-batch');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: medicineBatchFormActions.CREATE_STARTED,
      });

      await MedicineBatchService.create(values);

      dispatch({
        type: medicineBatchFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.medicineBatch.create.success'),
      );

      getHistory().push('/medicine-batch');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: medicineBatchFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: medicineBatchFormActions.UPDATE_STARTED,
      });

      await MedicineBatchService.update(id, values);

      dispatch({
        type: medicineBatchFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.medicineBatch.update.success'),
      );

      getHistory().push('/medicine-batch');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: medicineBatchFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default medicineBatchFormActions;
