import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import medicineBatchEnumerators from 'src/modules/medicineBatch/medicineBatchEnumerators';
import moment from 'moment';

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
    name: 'unit',
    label: i18n('entities.medicineBatch.fields.unit'),
    schema: schemas.enumerator(
      i18n('entities.medicineBatch.fields.unit'),
      {
        "required": true,
        "options": medicineBatchEnumerators.unit
      },
    ),
  },
  {
    name: 'qtyInStrips',
    label: i18n('entities.medicineBatch.fields.qtyInStrips'),
    schema: schemas.boolean(
      i18n('entities.medicineBatch.fields.qtyInStrips'),
      {},
    ),
  },
  {
    name: 'batchNumber',
    label: i18n('entities.medicineBatch.fields.batchNumber'),
    schema: schemas.string(
      i18n('entities.medicineBatch.fields.batchNumber'),
      {
        "max": 100,
        "min": 2,
        "required": true
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
    name: 'stateGST',
    label: i18n('entities.medicineBatch.fields.stateGST'),
    schema: schemas.decimal(
      i18n('entities.medicineBatch.fields.stateGST'),
      {
        "scale": 2
      },
    ),
  },
  {
    name: 'centralGST',
    label: i18n('entities.medicineBatch.fields.centralGST'),
    schema: schemas.decimal(
      i18n('entities.medicineBatch.fields.centralGST'),
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
    name: 'medicineBatchLookup',
    label: i18n('entities.medicineBatch.fields.medicineBatchLookup'),
    schema: schemas.string(
      i18n('entities.medicineBatch.fields.medicineBatchLookup'),
      {
        "max": 255,
        "min": 5
      },
    ),
  },
];