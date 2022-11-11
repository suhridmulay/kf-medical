import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import transferEnumerators from 'src/modules/transfer/transferEnumerators';
import moment from 'moment';

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
      {
        "required": true
      },
    ),
  },
  {
    name: 'medicineBatch',
    label: i18n('entities.transfer.fields.medicineBatch'),
    schema: schemas.relationToOne(
      i18n('entities.transfer.fields.medicineBatch'),
      {
        "required": true
      },
    ),
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
    name: 'unit',
    label: i18n('entities.transfer.fields.unit'),
    schema: schemas.enumerator(
      i18n('entities.transfer.fields.unit'),
      {
        "options": transferEnumerators.unit
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