import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'invoice',
    label: i18n('entities.medicineBatch.fields.invoice'),
    schema: schemas.relationToOne(
      i18n('entities.medicineBatch.fields.invoice'),
      {},
    ),
  },
  {
    name: 'medicine',
    label: i18n('entities.medicineBatch.fields.medicine'),
    schema: schemas.relationToOne(
      i18n('entities.medicineBatch.fields.medicine'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'quantity',
    label: i18n('entities.medicineBatch.fields.quantity'),
    schema: schemas.integer(
      i18n('entities.medicineBatch.fields.quantity'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'batchNumber',
    label: i18n('entities.medicineBatch.fields.batchNumber'),
    schema: schemas.string(
      i18n('entities.medicineBatch.fields.batchNumber'),
      {
        "required": true,
        "max": 100,
        "min": 2
      },
    ),
  },
  {
    name: 'expiryDate',
    label: i18n('entities.medicineBatch.fields.expiryDate'),
    schema: schemas.date(
      i18n('entities.medicineBatch.fields.expiryDate'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'unitPrice',
    label: i18n('entities.medicineBatch.fields.unitPrice'),
    schema: schemas.decimal(
      i18n('entities.medicineBatch.fields.unitPrice'),
      {
        "required": true,
        "scale": 2
      },
    ),
  },
  {
    name: 'totalPrice',
    label: i18n('entities.medicineBatch.fields.totalPrice'),
    schema: schemas.decimal(
      i18n('entities.medicineBatch.fields.totalPrice'),
      {
        "scale": 2
      },
    ),
  },
  {
    name: 'msrp',
    label: i18n('entities.medicineBatch.fields.msrp'),
    schema: schemas.decimal(
      i18n('entities.medicineBatch.fields.msrp'),
      {
        "scale": 2
      },
    ),
  },
  {
    name: 'description',
    label: i18n('entities.medicineBatch.fields.description'),
    schema: schemas.string(
      i18n('entities.medicineBatch.fields.description'),
      {
        "max": 255
      },
    ),
  },
  {
    name: 'purchaseOrderNumber',
    label: i18n('entities.medicineBatch.fields.purchaseOrderNumber'),
    schema: schemas.integer(
      i18n('entities.medicineBatch.fields.purchaseOrderNumber'),
      {},
    ),
  },
  {
    name: 'vendor',
    label: i18n('entities.medicineBatch.fields.vendor'),
    schema: schemas.relationToOne(
      i18n('entities.medicineBatch.fields.vendor'),
      {},
    ),
  },
  {
    name: 'medicineBatchLookup',
    label: i18n('entities.medicineBatch.fields.medicineBatchLookup'),
    schema: schemas.string(
      i18n('entities.medicineBatch.fields.medicineBatchLookup'),
      {
        "max": 255,
        "required": true,
        "min": 5
      },
    ),
  },
];