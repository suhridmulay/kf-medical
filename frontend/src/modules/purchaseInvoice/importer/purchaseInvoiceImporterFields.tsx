import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'purchaseOrder',
    label: i18n('entities.purchaseInvoice.fields.purchaseOrder'),
    schema: schemas.relationToOne(
      i18n('entities.purchaseInvoice.fields.purchaseOrder'),
      {},
    ),
  },
  {
    name: 'invoiceNumber',
    label: i18n('entities.purchaseInvoice.fields.invoiceNumber'),
    schema: schemas.string(
      i18n('entities.purchaseInvoice.fields.invoiceNumber'),
      {
        "required": true,
        "max": 255,
        "min": 2
      },
    ),
  },
  {
    name: 'invoiceAmount',
    label: i18n('entities.purchaseInvoice.fields.invoiceAmount'),
    schema: schemas.decimal(
      i18n('entities.purchaseInvoice.fields.invoiceAmount'),
      {
        "required": true,
        "scale": 2,
        "min": 0
      },
    ),
  },
  {
    name: 'invoiceTax',
    label: i18n('entities.purchaseInvoice.fields.invoiceTax'),
    schema: schemas.decimal(
      i18n('entities.purchaseInvoice.fields.invoiceTax'),
      {
        "scale": 2
      },
    ),
  },
  {
    name: 'invoiceTotal',
    label: i18n('entities.purchaseInvoice.fields.invoiceTotal'),
    schema: schemas.decimal(
      i18n('entities.purchaseInvoice.fields.invoiceTotal'),
      {
        "required": true,
        "scale": 2
      },
    ),
  },
  {
    name: 'invoiceDate',
    label: i18n('entities.purchaseInvoice.fields.invoiceDate'),
    schema: schemas.date(
      i18n('entities.purchaseInvoice.fields.invoiceDate'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'invoicePaidDate',
    label: i18n('entities.purchaseInvoice.fields.invoicePaidDate'),
    schema: schemas.date(
      i18n('entities.purchaseInvoice.fields.invoicePaidDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'paymentDetails',
    label: i18n('entities.purchaseInvoice.fields.paymentDetails'),
    schema: schemas.string(
      i18n('entities.purchaseInvoice.fields.paymentDetails'),
      {
        "max": 255
      },
    ),
  },
  {
    name: 'batches',
    label: i18n('entities.purchaseInvoice.fields.batches'),
    schema: schemas.relationToMany(
      i18n('entities.purchaseInvoice.fields.batches'),
      {},
    ),
  },
];