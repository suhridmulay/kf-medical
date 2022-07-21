import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.siteInventory.fields.id'),
  },
  {
    name: 'siteBatchIdentifier',
    label: i18n('entities.siteInventory.fields.siteBatchIdentifier'),
  },
  {
    name: 'center',
    label: i18n('entities.siteInventory.fields.center'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'batchNumber',
    label: i18n('entities.siteInventory.fields.batchNumber'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'medicine',
    label: i18n('entities.siteInventory.fields.medicine'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'inventoryAddDate',
    label: i18n('entities.siteInventory.fields.inventoryAddDate'),
  },
  {
    name: 'expiryDate',
    label: i18n('entities.siteInventory.fields.expiryDate'),
  },
  {
    name: 'initialCount',
    label: i18n('entities.siteInventory.fields.initialCount'),
  },
  {
    name: 'currentCount',
    label: i18n('entities.siteInventory.fields.currentCount'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.siteInventory.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.siteInventory.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
