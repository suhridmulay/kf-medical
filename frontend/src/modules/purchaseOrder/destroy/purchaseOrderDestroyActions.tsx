import listActions from 'src/modules/purchaseOrder/list/purchaseOrderListActions';
import PurchaseOrderService from 'src/modules/purchaseOrder/purchaseOrderService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'PURCHASEORDER_DESTROY';

const purchaseOrderDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: purchaseOrderDestroyActions.DESTROY_STARTED,
      });

      await PurchaseOrderService.destroyAll([id]);

      dispatch({
        type: purchaseOrderDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.purchaseOrder.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/purchase-order');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: purchaseOrderDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: purchaseOrderDestroyActions.DESTROY_ALL_STARTED,
      });

      await PurchaseOrderService.destroyAll(ids);

      dispatch({
        type: purchaseOrderDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.purchaseOrder.destroyAll.success'),
      );

      getHistory().push('/purchase-order');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: purchaseOrderDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default purchaseOrderDestroyActions;
