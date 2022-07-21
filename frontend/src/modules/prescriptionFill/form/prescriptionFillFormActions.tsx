import PrescriptionFillService from 'src/modules/prescriptionFill/prescriptionFillService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'PRESCRIPTIONFILL_FORM';

const prescriptionFillFormActions = {
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
        type: prescriptionFillFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await PrescriptionFillService.find(id);
      }

      dispatch({
        type: prescriptionFillFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: prescriptionFillFormActions.INIT_ERROR,
      });

      getHistory().push('/prescription-fill');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: prescriptionFillFormActions.CREATE_STARTED,
      });

      await PrescriptionFillService.create(values);

      dispatch({
        type: prescriptionFillFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.prescriptionFill.create.success'),
      );

      getHistory().push('/prescription-fill');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: prescriptionFillFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: prescriptionFillFormActions.UPDATE_STARTED,
      });

      await PrescriptionFillService.update(id, values);

      dispatch({
        type: prescriptionFillFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.prescriptionFill.update.success'),
      );

      getHistory().push('/prescription-fill');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: prescriptionFillFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default prescriptionFillFormActions;
