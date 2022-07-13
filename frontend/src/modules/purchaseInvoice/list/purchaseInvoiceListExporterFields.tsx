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
    name: 'invoiceAmount',
    label: i18n('entities.purchaseInvoice.fields.invoiceAmount'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'invoiceTax',
    label: i18n('entities.purchaseInvoice.fields.invoiceTax'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'invoiceTotal',
    label: i18n('entities.purchaseInvoice.fields.invoiceTotal'),
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
    name: 'batches',
    label: i18n('entities.purchaseInvoice.fields.batches'),
    render: exporterRenders.relationToMany(),
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
