import list from 'src/modules/medicineCategoryEnum/list/medicineCategoryEnumListReducers';
import form from 'src/modules/medicineCategoryEnum/form/medicineCategoryEnumFormReducers';
import view from 'src/modules/medicineCategoryEnum/view/medicineCategoryEnumViewReducers';
import destroy from 'src/modules/medicineCategoryEnum/destroy/medicineCategoryEnumDestroyReducers';
import importerReducer from 'src/modules/medicineCategoryEnum/importer/medicineCategoryEnumImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
