import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.transfer.fields.id'),
  },
  {
    name: 'fromCenter',
    label: i18n('entities.transfer.fields.fromCenter'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'toCenter',
    label: i18n('entities.transfer.fields.toCenter'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'medicineBatch',
    label: i18n('entities.transfer.fields.medicineBatch'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'medicineName',
    label: i18n('entities.transfer.fields.medicineName'),
  },
  {
    name: 'expiryDate',
    label: i18n('entities.transfer.fields.expiryDate'),
  },
  {
    name: 'transferQuantity',
    label: i18n('entities.transfer.fields.transferQuantity'),
  },
  {
    name: 'transferDate',
    label: i18n('entities.transfer.fields.transferDate'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.transfer.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.transfer.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
