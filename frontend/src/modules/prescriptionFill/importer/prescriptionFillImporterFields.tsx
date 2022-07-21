import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'patientVisit',
    label: i18n('entities.prescriptionFill.fields.patientVisit'),
    schema: schemas.relationToOne(
      i18n('entities.prescriptionFill.fields.patientVisit'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'medicineBatch',
    label: i18n('entities.prescriptionFill.fields.medicineBatch'),
    schema: schemas.relationToOne(
      i18n('entities.prescriptionFill.fields.medicineBatch'),
      {},
    ),
  },
  {
    name: 'quantity',
    label: i18n('entities.prescriptionFill.fields.quantity'),
    schema: schemas.integer(
      i18n('entities.prescriptionFill.fields.quantity'),
      {
        "required": true
      },
    ),
  },
];