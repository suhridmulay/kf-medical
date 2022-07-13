import listActions from 'src/modules/purchaseOrderEntry/list/purchaseOrderEntryListActions';
import PurchaseOrderEntryService from 'src/modules/purchaseOrderEntry/purchaseOrderEntryService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'PURCHASEORDERENTRY_DESTROY';

const purchaseOrderEntryDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: purchaseOrderEntryDestroyActions.DESTROY_STARTED,
      });

      await PurchaseOrderEntryService.destroyAll([id]);

      dispatch({
        type: purchaseOrderEntryDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.purchaseOrderEntry.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/purchase-order-entry');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: purchaseOrderEntryDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: purchaseOrderEntryDestroyActions.DESTROY_ALL_STARTED,
      });

      await PurchaseOrderEntryService.destroyAll(ids);

      dispatch({
        type: purchaseOrderEntryDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.purchaseOrderEntry.destroyAll.success'),
      );

      getHistory().push('/purchase-order-entry');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: purchaseOrderEntryDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default purchaseOrderEntryDestroyActions;
