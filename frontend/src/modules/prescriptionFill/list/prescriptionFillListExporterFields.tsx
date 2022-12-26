import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.prescriptionFill.fields.id'),
  },
  {
    name: 'patientVisit',
    label: i18n('entities.prescriptionFill.fields.patientVisit'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'medicine',
    label: i18n('entities.prescriptionFill.fields.medicine'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'quantity',
    label: i18n('entities.prescriptionFill.fields.quantity'),
  },
  {
    name: 'siteInventory',
    label: i18n('entities.prescriptionFill.fields.siteInventory'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.prescriptionFill.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.prescriptionFill.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
