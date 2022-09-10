import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.medicineBatch.fields.id'),
  },
  {
    name: 'invoice',
    label: i18n('entities.medicineBatch.fields.invoice'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'medicine',
    label: i18n('entities.medicineBatch.fields.medicine'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'quantity',
    label: i18n('entities.medicineBatch.fields.quantity'),
  },
  {
    name: 'qtyInStrips',
    label: i18n('entities.medicineBatch.fields.qtyInStrips'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'batchNumber',
    label: i18n('entities.medicineBatch.fields.batchNumber'),
  },
  {
    name: 'expiryDate',
    label: i18n('entities.medicineBatch.fields.expiryDate'),
  },
  {
    name: 'unitPrice',
    label: i18n('entities.medicineBatch.fields.unitPrice'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'totalPrice',
    label: i18n('entities.medicineBatch.fields.totalPrice'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'stateGST',
    label: i18n('entities.medicineBatch.fields.stateGST'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'centralGST',
    label: i18n('entities.medicineBatch.fields.centralGST'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'msrp',
    label: i18n('entities.medicineBatch.fields.msrp'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'description',
    label: i18n('entities.medicineBatch.fields.description'),
  },
  {
    name: 'medicineBatchLookup',
    label: i18n('entities.medicineBatch.fields.medicineBatchLookup'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.medicineBatch.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.medicineBatch.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
