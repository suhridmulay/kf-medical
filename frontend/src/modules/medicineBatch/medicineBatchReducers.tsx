import list from 'src/modules/medicineBatch/list/medicineBatchListReducers';
import form from 'src/modules/medicineBatch/form/medicineBatchFormReducers';
import view from 'src/modules/medicineBatch/view/medicineBatchViewReducers';
import destroy from 'src/modules/medicineBatch/destroy/medicineBatchDestroyReducers';
import importerReducer from 'src/modules/medicineBatch/importer/medicineBatchImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
