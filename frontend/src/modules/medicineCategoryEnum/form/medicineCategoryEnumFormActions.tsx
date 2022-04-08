import MedicineCategoryEnumService from 'src/modules/medicineCategoryEnum/medicineCategoryEnumService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'MEDICINECATEGORYENUM_FORM';

const medicineCategoryEnumFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: medicineCategoryEnumFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await MedicineCategoryEnumService.find(id);
      }

      dispatch({
        type: medicineCategoryEnumFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: medicineCategoryEnumFormActions.INIT_ERROR,
      });

      getHistory().push('/medicine-category-enum');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: medicineCategoryEnumFormActions.CREATE_STARTED,
      });

      await MedicineCategoryEnumService.create(values);

      dispatch({
        type: medicineCategoryEnumFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.medicineCategoryEnum.create.success'),
      );

      getHistory().push('/medicine-category-enum');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: medicineCategoryEnumFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: medicineCategoryEnumFormActions.UPDATE_STARTED,
      });

      await MedicineCategoryEnumService.update(id, values);

      dispatch({
        type: medicineCategoryEnumFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.medicineCategoryEnum.update.success'),
      );

      getHistory().push('/medicine-category-enum');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: medicineCategoryEnumFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default medicineCategoryEnumFormActions;
