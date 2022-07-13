import list from 'src/modules/siteInventory/list/siteInventoryListReducers';
import form from 'src/modules/siteInventory/form/siteInventoryFormReducers';
import view from 'src/modules/siteInventory/view/siteInventoryViewReducers';
import destroy from 'src/modules/siteInventory/destroy/siteInventoryDestroyReducers';
import importerReducer from 'src/modules/siteInventory/importer/siteInventoryImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
