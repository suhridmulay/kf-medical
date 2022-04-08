import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'medicine',
    label: i18n('entities.medicineSupplies.fields.medicine'),
    schema: schemas.relationToOne(
      i18n('entities.medicineSupplies.fields.medicine'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'inventoryAddDate',
    label: i18n('entities.medicineSupplies.fields.inventoryAddDate'),
    schema: schemas.date(
      i18n('entities.medicineSupplies.fields.inventoryAddDate'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'count',
    label: i18n('entities.medicineSupplies.fields.count'),
    schema: schemas.integer(
      i18n('entities.medicineSupplies.fields.count'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'batchNumber',
    label: i18n('entities.medicineSupplies.fields.batchNumber'),
    schema: schemas.string(
      i18n('entities.medicineSupplies.fields.batchNumber'),
      {},
    ),
  },
  {
    name: 'expiryDate',
    label: i18n('entities.medicineSupplies.fields.expiryDate'),
    schema: schemas.date(
      i18n('entities.medicineSupplies.fields.expiryDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'rate',
    label: i18n('entities.medicineSupplies.fields.rate'),
    schema: schemas.decimal(
      i18n('entities.medicineSupplies.fields.rate'),
      {
        "scale": 2
      },
    ),
  },
];