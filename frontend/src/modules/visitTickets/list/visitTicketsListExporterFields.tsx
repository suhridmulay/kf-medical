import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.visitTickets.fields.id'),
  },
  {
    name: 'patientVisit',
    label: i18n('entities.visitTickets.fields.patientVisit'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'department',
    label: i18n('entities.visitTickets.fields.department'),
  },
  {
    name: 'ticketCount',
    label: i18n('entities.visitTickets.fields.ticketCount'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.visitTickets.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.visitTickets.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
