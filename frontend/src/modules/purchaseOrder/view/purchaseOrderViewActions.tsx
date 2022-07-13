import PurchaseOrderService from 'src/modules/purchaseOrder/purchaseOrderService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'PURCHASEORDER_VIEW';

const purchaseOrderViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: purchaseOrderViewActions.FIND_STARTED,
      });

      const record = await PurchaseOrderService.find(id);

      dispatch({
        type: purchaseOrderViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: purchaseOrderViewActions.FIND_ERROR,
      });

      getHistory().push('/purchase-order');
    }
  },
};

export default purchaseOrderViewActions;
