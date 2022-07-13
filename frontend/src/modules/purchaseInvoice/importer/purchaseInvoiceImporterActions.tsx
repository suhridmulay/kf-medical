import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/purchaseInvoice/importer/purchaseInvoiceImporterSelectors';
import PurchaseInvoiceService from 'src/modules/purchaseInvoice/purchaseInvoiceService';
import fields from 'src/modules/purchaseInvoice/importer/purchaseInvoiceImporterFields';
import { i18n } from 'src/i18n';

const purchaseInvoiceImporterActions = importerActions(
  'PURCHASEINVOICE_IMPORTER',
  selectors,
  PurchaseInvoiceService.import,
  fields,
  i18n('entities.purchaseInvoice.importer.fileName'),
);

export default purchaseInvoiceImporterActions;