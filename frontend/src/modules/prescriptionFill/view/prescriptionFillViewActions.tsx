import PrescriptionFillService from 'src/modules/prescriptionFill/prescriptionFillService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'PRESCRIPTIONFILL_VIEW';

const prescriptionFillViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: prescriptionFillViewActions.FIND_STARTED,
      });

      const record = await PrescriptionFillService.find(id);

      dispatch({
        type: prescriptionFillViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: prescriptionFillViewActions.FIND_ERROR,
      });

      getHistory().push('/prescription-fill');
    }
  },
};

export default prescriptionFillViewActions;
