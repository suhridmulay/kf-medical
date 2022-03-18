import MedicineCategoryEnumService from 'src/modules/medicineCategoryEnum/medicineCategoryEnumService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'MEDICINECATEGORYENUM_VIEW';

const medicineCategoryEnumViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: medicineCategoryEnumViewActions.FIND_STARTED,
      });

      const record = await MedicineCategoryEnumService.find(id);

      dispatch({
        type: medicineCategoryEnumViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: medicineCategoryEnumViewActions.FIND_ERROR,
      });

      getHistory().push('/medicine-category-enum');
    }
  },
};

export default medicineCategoryEnumViewActions;
