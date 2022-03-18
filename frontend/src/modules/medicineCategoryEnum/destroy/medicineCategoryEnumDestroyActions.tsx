import listActions from 'src/modules/medicineCategoryEnum/list/medicineCategoryEnumListActions';
import MedicineCategoryEnumService from 'src/modules/medicineCategoryEnum/medicineCategoryEnumService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'MEDICINECATEGORYENUM_DESTROY';

const medicineCategoryEnumDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: medicineCategoryEnumDestroyActions.DESTROY_STARTED,
      });

      await MedicineCategoryEnumService.destroyAll([id]);

      dispatch({
        type: medicineCategoryEnumDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.medicineCategoryEnum.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/medicine-category-enum');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: medicineCategoryEnumDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: medicineCategoryEnumDestroyActions.DESTROY_ALL_STARTED,
      });

      await MedicineCategoryEnumService.destroyAll(ids);

      dispatch({
        type: medicineCategoryEnumDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.medicineCategoryEnum.destroyAll.success'),
      );

      getHistory().push('/medicine-category-enum');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: medicineCategoryEnumDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default medicineCategoryEnumDestroyActions;
