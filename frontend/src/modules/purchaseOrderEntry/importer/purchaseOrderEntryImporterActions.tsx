import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/purchaseOrderEntry/importer/purchaseOrderEntryImporterSelectors';
import PurchaseOrderEntryService from 'src/modules/purchaseOrderEntry/purchaseOrderEntryService';
import fields from 'src/modules/purchaseOrderEntry/importer/purchaseOrderEntryImporterFields';
import { i18n } from 'src/i18n';

const purchaseOrderEntryImporterActions = importerActions(
  'PURCHASEORDERENTRY_IMPORTER',
  selectors,
  PurchaseOrderEntryService.import,
  fields,
  i18n('entities.purchaseOrderEntry.importer.fileName'),
);

export default purchaseOrderEntryImporterActions;