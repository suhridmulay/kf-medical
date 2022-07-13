import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'purchaseOrderNumber',
    label: i18n('entities.purchaseOrder.fields.purchaseOrderNumber'),
    schema: schemas.integer(
      i18n('entities.purchaseOrder.fields.purchaseOrderNumber'),
      {},
    ),
  },
  {
    name: 'vendor',
    label: i18n('entities.purchaseOrder.fields.vendor'),
    schema: schemas.relationToOne(
      i18n('entities.purchaseOrder.fields.vendor'),
      {},
    ),
  },
  {
    name: 'submittedDate',
    label: i18n('entities.purchaseOrder.fields.submittedDate'),
    schema: schemas.date(
      i18n('entities.purchaseOrder.fields.submittedDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'sumEntriesCost',
    label: i18n('entities.purchaseOrder.fields.sumEntriesCost'),
    schema: schemas.decimal(
      i18n('entities.purchaseOrder.fields.sumEntriesCost'),
      {},
    ),
  },
  {
    name: 'submittedTotalCost',
    label: i18n('entities.purchaseOrder.fields.submittedTotalCost'),
    schema: schemas.decimal(
      i18n('entities.purchaseOrder.fields.submittedTotalCost'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'entries',
    label: i18n('entities.purchaseOrder.fields.entries'),
    schema: schemas.relationToMany(
      i18n('entities.purchaseOrder.fields.entries'),
      {},
    ),
  },
  {
    name: 'invoices',
    label: i18n('entities.purchaseOrder.fields.invoices'),
    schema: schemas.relationToMany(
      i18n('entities.purchaseOrder.fields.invoices'),
      {},
    ),
  },
  {
    name: 'notes',
    label: i18n('entities.purchaseOrder.fields.notes'),
    schema: schemas.string(
      i18n('entities.purchaseOrder.fields.notes'),
      {},
    ),
  },
  {
    name: 'purchaseOrderLookup',
    label: i18n('entities.purchaseOrder.fields.purchaseOrderLookup'),
    schema: schemas.string(
      i18n('entities.purchaseOrder.fields.purchaseOrderLookup'),
      {
        "required": true
      },
    ),
  },
];