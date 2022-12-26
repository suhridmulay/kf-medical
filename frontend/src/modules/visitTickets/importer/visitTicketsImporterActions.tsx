import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/visitTickets/importer/visitTicketsImporterSelectors';
import VisitTicketsService from 'src/modules/visitTickets/visitTicketsService';
import fields from 'src/modules/visitTickets/importer/visitTicketsImporterFields';
import { i18n } from 'src/i18n';

const visitTicketsImporterActions = importerActions(
  'VISITTICKETS_IMPORTER',
  selectors,
  VisitTicketsService.import,
  fields,
  i18n('entities.visitTickets.importer.fileName'),
);

export default visitTicketsImporterActions;