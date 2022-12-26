import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import visitTicketsEnumerators from 'src/modules/visitTickets/visitTicketsEnumerators';

export default [
  {
    name: 'patientVisit',
    label: i18n('entities.visitTickets.fields.patientVisit'),
    schema: schemas.relationToOne(
      i18n('entities.visitTickets.fields.patientVisit'),
      {},
    ),
  },
  {
    name: 'department',
    label: i18n('entities.visitTickets.fields.department'),
    schema: schemas.enumerator(
      i18n('entities.visitTickets.fields.department'),
      {
        "options": visitTicketsEnumerators.department
      },
    ),
  },
  {
    name: 'ticketCount',
    label: i18n('entities.visitTickets.fields.ticketCount'),
    schema: schemas.integer(
      i18n('entities.visitTickets.fields.ticketCount'),
      {
        "max": 20
      },
    ),
  },
];