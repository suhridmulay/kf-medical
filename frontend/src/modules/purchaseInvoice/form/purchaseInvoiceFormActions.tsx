import PurchaseInvoiceService from 'src/modules/purchaseInvoice/purchaseInvoiceService';
import PurchaseOrderService from 'src/modules/purchaseOrder/purchaseOrderService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'PURCHASEINVOICE_FORM';

const purchaseInvoiceFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id, purchaseOrderId) => async (dispatch) => {
    try {
      dispatch({
        type: purchaseInvoiceFormActions.INIT_STARTED,
      });
      let record = {};

      const isEdit = Boolean(id);

      if (purchaseOrderId) {
        let purchaseOrder = await PurchaseOrderService.find(purchaseOrderId);
        record['purchaseOrderId'] = purchaseOrderId;
        record['purchaseOrder'] = {'purchaseOrderLookup': purchaseOrder.purchaseOrderLookup};
      }

      if (isEdit) {
        record = await PurchaseInvoiceService.find(id);
      }
      
      dispatch({
        type: purchaseInvoiceFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: purchaseInvoiceFormActions.INIT_ERROR,
      });

      getHistory().push('/purchase-invoice');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: purchaseInvoiceFormActions.CREATE_STARTED,
      });

      await PurchaseInvoiceService.create(values);

      dispatch({
        type: purchaseInvoiceFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.purchaseInvoice.create.success'),
      );

      getHistory().push('/purchase-invoice');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: purchaseInvoiceFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: purchaseInvoiceFormActions.UPDATE_STARTED,
      });

      await PurchaseInvoiceService.update(id, values);

      dispatch({
        type: purchaseInvoiceFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.purchaseInvoice.update.success'),
      );

      getHistory().push('/purchase-invoice');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: purchaseInvoiceFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default purchaseInvoiceFormActions;
