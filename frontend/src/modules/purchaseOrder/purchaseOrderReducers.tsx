import list from 'src/modules/purchaseOrder/list/purchaseOrderListReducers';
import form from 'src/modules/purchaseOrder/form/purchaseOrderFormReducers';
import view from 'src/modules/purchaseOrder/view/purchaseOrderViewReducers';
import destroy from 'src/modules/purchaseOrder/destroy/purchaseOrderDestroyReducers';
import importerReducer from 'src/modules/purchaseOrder/importer/purchaseOrderImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
