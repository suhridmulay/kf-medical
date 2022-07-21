import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.purchaseInvoice.fields.id'),
  },
  {
    name: 'purchaseOrder',
    label: i18n('entities.purchaseInvoice.fields.purchaseOrder'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'invoiceNumber',
    label: i18n('entities.purchaseInvoice.fields.invoiceNumber'),
  },
  {
    name: 'referenceNumber',
    label: i18n('entities.purchaseInvoice.fields.referenceNumber'),
  },
  {
    name: 'batches',
    label: i18n('entities.purchaseInvoice.fields.batches'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'grossAmount',
    label: i18n('entities.purchaseInvoice.fields.grossAmount'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'stateGST',
    label: i18n('entities.purchaseInvoice.fields.stateGST'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'centralGST',
    label: i18n('entities.purchaseInvoice.fields.centralGST'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'grandTotal',
    label: i18n('entities.purchaseInvoice.fields.grandTotal'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'invoiceDate',
    label: i18n('entities.purchaseInvoice.fields.invoiceDate'),
  },
  {
    name: 'invoicePaidDate',
    label: i18n('entities.purchaseInvoice.fields.invoicePaidDate'),
  },
  {
    name: 'paymentDetails',
    label: i18n('entities.purchaseInvoice.fields.paymentDetails'),
  },
  {
    name: 'inventoryAddDate',
    label: i18n('entities.purchaseInvoice.fields.inventoryAddDate'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.purchaseInvoice.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.purchaseInvoice.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
