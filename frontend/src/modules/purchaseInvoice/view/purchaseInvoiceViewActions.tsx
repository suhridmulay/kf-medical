import PurchaseInvoiceService from 'src/modules/purchaseInvoice/purchaseInvoiceService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'PURCHASEINVOICE_VIEW';

const purchaseInvoiceViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: purchaseInvoiceViewActions.FIND_STARTED,
      });

      const record = await PurchaseInvoiceService.find(id);

      dispatch({
        type: purchaseInvoiceViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: purchaseInvoiceViewActions.FIND_ERROR,
      });

      getHistory().push('/purchase-invoice');
    }
  },
};

export default purchaseInvoiceViewActions;
