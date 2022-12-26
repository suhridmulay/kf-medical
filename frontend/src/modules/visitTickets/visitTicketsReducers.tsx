import list from 'src/modules/visitTickets/list/visitTicketsListReducers';
import form from 'src/modules/visitTickets/form/visitTicketsFormReducers';
import view from 'src/modules/visitTickets/view/visitTicketsViewReducers';
import destroy from 'src/modules/visitTickets/destroy/visitTicketsDestroyReducers';
import importerReducer from 'src/modules/visitTickets/importer/visitTicketsImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
