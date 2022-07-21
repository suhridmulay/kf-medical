import list from 'src/modules/prescriptionFill/list/prescriptionFillListReducers';
import form from 'src/modules/prescriptionFill/form/prescriptionFillFormReducers';
import view from 'src/modules/prescriptionFill/view/prescriptionFillViewReducers';
import destroy from 'src/modules/prescriptionFill/destroy/prescriptionFillDestroyReducers';
import importerReducer from 'src/modules/prescriptionFill/importer/prescriptionFillImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
