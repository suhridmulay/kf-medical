import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.medicineEnum.fields.id'),
  },
  {
    name: 'medicineName',
    label: i18n('entities.medicineEnum.fields.medicineName'),
  },
  {
    name: 'keptInStock',
    label: i18n('entities.medicineEnum.fields.keptInStock'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'isCommon',
    label: i18n('entities.medicineEnum.fields.isCommon'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'medicineCategory',
    label: i18n('entities.medicineEnum.fields.medicineCategory'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'genericName',
    label: i18n('entities.medicineEnum.fields.genericName'),
  },
  {
    name: 'compositionName',
    label: i18n('entities.medicineEnum.fields.compositionName'),
  },
  {
    name: 'msrp',
    label: i18n('entities.medicineEnum.fields.msrp'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'createdAt',
    label: i18n('entities.medicineEnum.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.medicineEnum.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
