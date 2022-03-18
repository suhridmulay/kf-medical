import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.medicineSupplies.fields.id'),
  },
  {
    name: 'medicine',
    label: i18n('entities.medicineSupplies.fields.medicine'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'inventoryAddDate',
    label: i18n('entities.medicineSupplies.fields.inventoryAddDate'),
  },
  {
    name: 'count',
    label: i18n('entities.medicineSupplies.fields.count'),
  },
  {
    name: 'batchNumber',
    label: i18n('entities.medicineSupplies.fields.batchNumber'),
  },
  {
    name: 'expiryDate',
    label: i18n('entities.medicineSupplies.fields.expiryDate'),
  },
  {
    name: 'rate',
    label: i18n('entities.medicineSupplies.fields.rate'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'createdAt',
    label: i18n('entities.medicineSupplies.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.medicineSupplies.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
