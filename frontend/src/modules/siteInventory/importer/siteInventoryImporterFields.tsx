import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import siteInventoryEnumerators from 'src/modules/siteInventory/siteInventoryEnumerators';
import moment from 'moment';

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
      {},
    ),
  },
  {
    name: 'inventoryAddDate',
    label: i18n('entities.siteInventory.fields.inventoryAddDate'),
    schema: schemas.date(
      i18n('entities.siteInventory.fields.inventoryAddDate'),
      {},
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
    name: 'initialCount',
    label: i18n('entities.siteInventory.fields.initialCount'),
    schema: schemas.integer(
      i18n('entities.siteInventory.fields.initialCount'),
      {},
    ),
  },
  {
    name: 'unit',
    label: i18n('entities.siteInventory.fields.unit'),
    schema: schemas.enumerator(
      i18n('entities.siteInventory.fields.unit'),
      {
        "options": siteInventoryEnumerators.unit
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