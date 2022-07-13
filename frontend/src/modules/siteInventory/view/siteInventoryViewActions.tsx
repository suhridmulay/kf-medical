import SiteInventoryService from 'src/modules/siteInventory/siteInventoryService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'SITEINVENTORY_VIEW';

const siteInventoryViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: siteInventoryViewActions.FIND_STARTED,
      });

      const record = await SiteInventoryService.find(id);

      dispatch({
        type: siteInventoryViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: siteInventoryViewActions.FIND_ERROR,
      });

      getHistory().push('/site-inventory');
    }
  },
};

export default siteInventoryViewActions;
