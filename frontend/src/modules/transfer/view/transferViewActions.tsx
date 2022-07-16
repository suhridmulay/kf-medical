import TransferService from 'src/modules/transfer/transferService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'TRANSFER_VIEW';

const transferViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: transferViewActions.FIND_STARTED,
      });

      const record = await TransferService.find(id);

      dispatch({
        type: transferViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: transferViewActions.FIND_ERROR,
      });

      getHistory().push('/transfer');
    }
  },
};

export default transferViewActions;
