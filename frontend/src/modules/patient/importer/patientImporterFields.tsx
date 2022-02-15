import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import patientEnumerators from 'src/modules/patient/patientEnumerators';
import moment from 'moment';

export default [
  {
    name: 'firstName',
    label: i18n('entities.patient.fields.firstName'),
    schema: schemas.string(
      i18n('entities.patient.fields.firstName'),
      {
        "required": true,
        "min": 2,
        "max": 50
      },
    ),
  },
  {
    name: 'middleName',
    label: i18n('entities.patient.fields.middleName'),
    schema: schemas.string(
      i18n('entities.patient.fields.middleName'),
      {},
    ),
  },
  {
    name: 'lastName',
    label: i18n('entities.patient.fields.lastName'),
    schema: schemas.string(
      i18n('entities.patient.fields.lastName'),
      {
        "required": true,
        "min": 2,
        "max": 100
      },
    ),
  },
  {
    name: 'fullName',
    label: i18n('entities.patient.fields.fullName'),
    schema: schemas.string(
      i18n('entities.patient.fields.fullName'),
      {
        "min": 2,
        "max": 255
      },
    ),
  },
  {
    name: 'gender',
    label: i18n('entities.patient.fields.gender'),
    schema: schemas.enumerator(
      i18n('entities.patient.fields.gender'),
      {
        "required": true,
        "options": patientEnumerators.gender
      },
    ),
  },
  {
    name: 'age',
    label: i18n('entities.patient.fields.age'),
    schema: schemas.integer(
      i18n('entities.patient.fields.age'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'localityName',
    label: i18n('entities.patient.fields.localityName'),
    schema: schemas.string(
      i18n('entities.patient.fields.localityName'),
      {},
    ),
  },
  {
    name: 'mobileNumber',
    label: i18n('entities.patient.fields.mobileNumber'),
    schema: schemas.string(
      i18n('entities.patient.fields.mobileNumber'),
      {},
    ),
  },
  {
    name: 'aadharNumber',
    label: i18n('entities.patient.fields.aadharNumber'),
    schema: schemas.string(
      i18n('entities.patient.fields.aadharNumber'),
      {},
    ),
  },
  {
    name: 'dateOfBirth',
    label: i18n('entities.patient.fields.dateOfBirth'),
    schema: schemas.date(
      i18n('entities.patient.fields.dateOfBirth'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'picture',
    label: i18n('entities.patient.fields.picture'),
    schema: schemas.images(
      i18n('entities.patient.fields.picture'),
      {},
    ),
  },
  {
    name: 'medicalHistory',
    label: i18n('entities.patient.fields.medicalHistory'),
    schema: schemas.relationToOne(
      i18n('entities.patient.fields.medicalHistory'),
      {},
    ),
  },
  {
    name: 'medicalVisits',
    label: i18n('entities.patient.fields.medicalVisits'),
    schema: schemas.relationToMany(
      i18n('entities.patient.fields.medicalVisits'),
      {},
    ),
  },
  {
    name: 'medicalDocuments',
    label: i18n('entities.patient.fields.medicalDocuments'),
    schema: schemas.relationToMany(
      i18n('entities.patient.fields.medicalDocuments'),
      {},
    ),
  },
];