import listActions from 'src/modules/purchaseInvoice/list/purchaseInvoiceListActions';
import PurchaseInvoiceService from 'src/modules/purchaseInvoice/purchaseInvoiceService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'PURCHASEINVOICE_DESTROY';

const purchaseInvoiceDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: purchaseInvoiceDestroyActions.DESTROY_STARTED,
      });

      await PurchaseInvoiceService.destroyAll([id]);

      dispatch({
        type: purchaseInvoiceDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.purchaseInvoice.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/purchase-invoice');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: purchaseInvoiceDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: purchaseInvoiceDestroyActions.DESTROY_ALL_STARTED,
      });

      await PurchaseInvoiceService.destroyAll(ids);

      dispatch({
        type: purchaseInvoiceDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.purchaseInvoice.destroyAll.success'),
      );

      getHistory().push('/purchase-invoice');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: purchaseInvoiceDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default purchaseInvoiceDestroyActions;
