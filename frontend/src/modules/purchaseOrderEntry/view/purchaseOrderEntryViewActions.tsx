import PurchaseOrderEntryService from 'src/modules/purchaseOrderEntry/purchaseOrderEntryService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'PURCHASEORDERENTRY_VIEW';

const purchaseOrderEntryViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: purchaseOrderEntryViewActions.FIND_STARTED,
      });

      const record = await PurchaseOrderEntryService.find(id);

      dispatch({
        type: purchaseOrderEntryViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: purchaseOrderEntryViewActions.FIND_ERROR,
      });

      getHistory().push('/purchase-order-entry');
    }
  },
};

export default purchaseOrderEntryViewActions;
