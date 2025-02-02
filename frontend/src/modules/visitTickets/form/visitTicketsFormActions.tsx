import VisitTicketsService from 'src/modules/visitTickets/visitTicketsService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'VISITTICKETS_FORM';

const visitTicketsFormActions = {
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
        type: visitTicketsFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await VisitTicketsService.find(id);
      }

      dispatch({
        type: visitTicketsFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: visitTicketsFormActions.INIT_ERROR,
      });

      getHistory().push('/visit-tickets');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: visitTicketsFormActions.CREATE_STARTED,
      });

      await VisitTicketsService.create(values);

      dispatch({
        type: visitTicketsFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.visitTickets.create.success'),
      );

      getHistory().push('/visit-tickets');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: visitTicketsFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: visitTicketsFormActions.UPDATE_STARTED,
      });

      await VisitTicketsService.update(id, values);

      dispatch({
        type: visitTicketsFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.visitTickets.update.success'),
      );

      getHistory().push('/visit-tickets');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: visitTicketsFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default visitTicketsFormActions;
