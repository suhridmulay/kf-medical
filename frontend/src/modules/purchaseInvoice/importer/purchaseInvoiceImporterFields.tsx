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
    name: 'referenceNumber',
    label: i18n('entities.purchaseInvoice.fields.referenceNumber'),
    schema: schemas.string(
      i18n('entities.purchaseInvoice.fields.referenceNumber'),
      {},
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
  {
    name: 'grossAmount',
    label: i18n('entities.purchaseInvoice.fields.grossAmount'),
    schema: schemas.decimal(
      i18n('entities.purchaseInvoice.fields.grossAmount'),
      {
        "required": true,
        "scale": 2,
        "min": 0
      },
    ),
  },
  {
    name: 'stateGST',
    label: i18n('entities.purchaseInvoice.fields.stateGST'),
    schema: schemas.decimal(
      i18n('entities.purchaseInvoice.fields.stateGST'),
      {
        "scale": 2
      },
    ),
  },
  {
    name: 'centralGST',
    label: i18n('entities.purchaseInvoice.fields.centralGST'),
    schema: schemas.decimal(
      i18n('entities.purchaseInvoice.fields.centralGST'),
      {
        "scale": 2
      },
    ),
  },
  {
    name: 'grandTotal',
    label: i18n('entities.purchaseInvoice.fields.grandTotal'),
    schema: schemas.decimal(
      i18n('entities.purchaseInvoice.fields.grandTotal'),
      {
        "scale": 2
      },
    ),
  },
  {
    name: 'invoiceDate',
    label: i18n('entities.purchaseInvoice.fields.invoiceDate'),
    schema: schemas.date(
      i18n('entities.purchaseInvoice.fields.invoiceDate'),
      {},
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
    name: 'inventoryAddDate',
    label: i18n('entities.purchaseInvoice.fields.inventoryAddDate'),
    schema: schemas.date(
      i18n('entities.purchaseInvoice.fields.inventoryAddDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
];