import VisitTicketsService from 'src/modules/visitTickets/visitTicketsService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'VISITTICKETS_VIEW';

const visitTicketsViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: visitTicketsViewActions.FIND_STARTED,
      });

      const record = await VisitTicketsService.find(id);

      dispatch({
        type: visitTicketsViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: visitTicketsViewActions.FIND_ERROR,
      });

      getHistory().push('/visit-tickets');
    }
  },
};

export default visitTicketsViewActions;
