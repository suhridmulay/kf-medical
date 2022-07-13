import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/purchaseOrder/importer/purchaseOrderImporterSelectors';
import PurchaseOrderService from 'src/modules/purchaseOrder/purchaseOrderService';
import fields from 'src/modules/purchaseOrder/importer/purchaseOrderImporterFields';
import { i18n } from 'src/i18n';

const purchaseOrderImporterActions = importerActions(
  'PURCHASEORDER_IMPORTER',
  selectors,
  PurchaseOrderService.import,
  fields,
  i18n('entities.purchaseOrder.importer.fileName'),
);

export default purchaseOrderImporterActions;