import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'siteBatchIdentifier',
    label: i18n('entities.siteInventory.fields.siteBatchIdentifier'),
    schema: schemas.string(
      i18n('entities.siteInventory.fields.siteBatchIdentifier'),
      {
        "max": 255
      },
    ),
  },
  {
    name: 'center',
    label: i18n('entities.siteInventory.fields.center'),
    schema: schemas.relationToOne(
      i18n('entities.siteInventory.fields.center'),
      {},
    ),
  },
  {
    name: 'batchNumber',
    label: i18n('entities.siteInventory.fields.batchNumber'),
    schema: schemas.relationToOne(
      i18n('entities.siteInventory.fields.batchNumber'),
      {},
    ),
  },
  {
    name: 'medicine',
    label: i18n('entities.siteInventory.fields.medicine'),
    schema: schemas.relationToOne(
      i18n('entities.siteInventory.fields.medicine'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'inventoryAddDate',
    label: i18n('entities.siteInventory.fields.inventoryAddDate'),
    schema: schemas.date(
      i18n('entities.siteInventory.fields.inventoryAddDate'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'expiryDate',
    label: i18n('entities.siteInventory.fields.expiryDate'),
    schema: schemas.date(
      i18n('entities.siteInventory.fields.expiryDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'initialcount',
    label: i18n('entities.siteInventory.fields.initialcount'),
    schema: schemas.integer(
      i18n('entities.siteInventory.fields.initialcount'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'currentCount',
    label: i18n('entities.siteInventory.fields.currentCount'),
    schema: schemas.integer(
      i18n('entities.siteInventory.fields.currentCount'),
      {},
    ),
  },
];