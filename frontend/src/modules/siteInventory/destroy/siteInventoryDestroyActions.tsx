import listActions from 'src/modules/siteInventory/list/siteInventoryListActions';
import SiteInventoryService from 'src/modules/siteInventory/siteInventoryService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'SITEINVENTORY_DESTROY';

const siteInventoryDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: siteInventoryDestroyActions.DESTROY_STARTED,
      });

      await SiteInventoryService.destroyAll([id]);

      dispatch({
        type: siteInventoryDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.siteInventory.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/site-inventory');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: siteInventoryDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: siteInventoryDestroyActions.DESTROY_ALL_STARTED,
      });

      await SiteInventoryService.destroyAll(ids);

      dispatch({
        type: siteInventoryDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.siteInventory.destroyAll.success'),
      );

      getHistory().push('/site-inventory');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: siteInventoryDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default siteInventoryDestroyActions;
