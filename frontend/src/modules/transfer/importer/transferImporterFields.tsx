import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'fromCenter',
    label: i18n('entities.transfer.fields.fromCenter'),
    schema: schemas.relationToOne(
      i18n('entities.transfer.fields.fromCenter'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'toCenter',
    label: i18n('entities.transfer.fields.toCenter'),
    schema: schemas.relationToOne(
      i18n('entities.transfer.fields.toCenter'),
      {},
    ),
  },
  {
    name: 'medicineBatch',
    label: i18n('entities.transfer.fields.medicineBatch'),
    schema: schemas.relationToOne(
      i18n('entities.transfer.fields.medicineBatch'),
      {},
    ),
  },
  {
    name: 'medicineName',
    label: i18n('entities.transfer.fields.medicineName'),
    schema: schemas.string(
      i18n('entities.transfer.fields.medicineName'),
      {},
    ),
  },
  {
    name: 'expiryDate',
    label: i18n('entities.transfer.fields.expiryDate'),
    schema: schemas.date(
      i18n('entities.transfer.fields.expiryDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'transferQuantity',
    label: i18n('entities.transfer.fields.transferQuantity'),
    schema: schemas.integer(
      i18n('entities.transfer.fields.transferQuantity'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'transferDate',
    label: i18n('entities.transfer.fields.transferDate'),
    schema: schemas.date(
      i18n('entities.transfer.fields.transferDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
];