import MedicineBatchService from 'src/modules/medicineBatch/medicineBatchService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'MEDICINEBATCH_VIEW';

const medicineBatchViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: medicineBatchViewActions.FIND_STARTED,
      });

      const record = await MedicineBatchService.find(id);

      dispatch({
        type: medicineBatchViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: medicineBatchViewActions.FIND_ERROR,
      });

      getHistory().push('/medicine-batch');
    }
  },
};

export default medicineBatchViewActions;
