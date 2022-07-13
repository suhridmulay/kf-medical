import list from 'src/modules/purchaseOrderEntry/list/purchaseOrderEntryListReducers';
import form from 'src/modules/purchaseOrderEntry/form/purchaseOrderEntryFormReducers';
import view from 'src/modules/purchaseOrderEntry/view/purchaseOrderEntryViewReducers';
import destroy from 'src/modules/purchaseOrderEntry/destroy/purchaseOrderEntryDestroyReducers';
import importerReducer from 'src/modules/purchaseOrderEntry/importer/purchaseOrderEntryImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
