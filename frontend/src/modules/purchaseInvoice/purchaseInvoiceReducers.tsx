import list from 'src/modules/purchaseInvoice/list/purchaseInvoiceListReducers';
import form from 'src/modules/purchaseInvoice/form/purchaseInvoiceFormReducers';
import view from 'src/modules/purchaseInvoice/view/purchaseInvoiceViewReducers';
import destroy from 'src/modules/purchaseInvoice/destroy/purchaseInvoiceDestroyReducers';
import importerReducer from 'src/modules/purchaseInvoice/importer/purchaseInvoiceImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
