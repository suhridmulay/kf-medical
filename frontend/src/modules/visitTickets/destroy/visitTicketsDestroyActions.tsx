import listActions from 'src/modules/visitTickets/list/visitTicketsListActions';
import VisitTicketsService from 'src/modules/visitTickets/visitTicketsService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'VISITTICKETS_DESTROY';

const visitTicketsDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: visitTicketsDestroyActions.DESTROY_STARTED,
      });

      await VisitTicketsService.destroyAll([id]);

      dispatch({
        type: visitTicketsDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.visitTickets.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/visit-tickets');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: visitTicketsDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: visitTicketsDestroyActions.DESTROY_ALL_STARTED,
      });

      await VisitTicketsService.destroyAll(ids);

      dispatch({
        type: visitTicketsDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.visitTickets.destroyAll.success'),
      );

      getHistory().push('/visit-tickets');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: visitTicketsDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default visitTicketsDestroyActions;
