import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import patientVisitEnumerators from 'src/modules/patientVisit/patientVisitEnumerators';
import moment from 'moment';

export default [
  {
    name: 'patient',
    label: i18n('entities.patientVisit.fields.patient'),
    schema: schemas.relationToOne(
      i18n('entities.patientVisit.fields.patient'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'medicalCenter',
    label: i18n('entities.patientVisit.fields.medicalCenter'),
    schema: schemas.relationToOne(
      i18n('entities.patientVisit.fields.medicalCenter'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'doctor',
    label: i18n('entities.patientVisit.fields.doctor'),
    schema: schemas.relationToOne(
      i18n('entities.patientVisit.fields.doctor'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'visitDate',
    label: i18n('entities.patientVisit.fields.visitDate'),
    schema: schemas.date(
      i18n('entities.patientVisit.fields.visitDate'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'repeatVisit',
    label: i18n('entities.patientVisit.fields.repeatVisit'),
    schema: schemas.boolean(
      i18n('entities.patientVisit.fields.repeatVisit'),
      {},
    ),
  },
  {
    name: 'symptom1',
    label: i18n('entities.patientVisit.fields.symptom1'),
    schema: schemas.relationToOne(
      i18n('entities.patientVisit.fields.symptom1'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'symptom2',
    label: i18n('entities.patientVisit.fields.symptom2'),
    schema: schemas.relationToOne(
      i18n('entities.patientVisit.fields.symptom2'),
      {},
    ),
  },
  {
    name: 'symptom3',
    label: i18n('entities.patientVisit.fields.symptom3'),
    schema: schemas.relationToOne(
      i18n('entities.patientVisit.fields.symptom3'),
      {},
    ),
  },
  {
    name: 'otherSymptoms',
    label: i18n('entities.patientVisit.fields.otherSymptoms'),
    schema: schemas.string(
      i18n('entities.patientVisit.fields.otherSymptoms'),
      {},
    ),
  },
  {
    name: 'height',
    label: i18n('entities.patientVisit.fields.height'),
    schema: schemas.string(
      i18n('entities.patientVisit.fields.height'),
      {
        "max": 6
      },
    ),
  },
  {
    name: 'weight',
    label: i18n('entities.patientVisit.fields.weight'),
    schema: schemas.string(
      i18n('entities.patientVisit.fields.weight'),
      {
        "max": 6
      },
    ),
  },
  {
    name: 'temperature',
    label: i18n('entities.patientVisit.fields.temperature'),
    schema: schemas.string(
      i18n('entities.patientVisit.fields.temperature'),
      {
        "max": 5,
        "min": 2
      },
    ),
  },
  {
    name: 'bloodPressure',
    label: i18n('entities.patientVisit.fields.bloodPressure'),
    schema: schemas.string(
      i18n('entities.patientVisit.fields.bloodPressure'),
      {
        "max": 8
      },
    ),
  },
  {
    name: 'pulseRate',
    label: i18n('entities.patientVisit.fields.pulseRate'),
    schema: schemas.string(
      i18n('entities.patientVisit.fields.pulseRate'),
      {
        "min": 2,
        "max": 3
      },
    ),
  },
  {
    name: 'oxygenLevel',
    label: i18n('entities.patientVisit.fields.oxygenLevel'),
    schema: schemas.string(
      i18n('entities.patientVisit.fields.oxygenLevel'),
      {
        "max": 3
      },
    ),
  },
  {
    name: 'vitalStatisticsOther',
    label: i18n('entities.patientVisit.fields.vitalStatisticsOther'),
    schema: schemas.string(
      i18n('entities.patientVisit.fields.vitalStatisticsOther'),
      {},
    ),
  },
  {
    name: 'diagnosis',
    label: i18n('entities.patientVisit.fields.diagnosis'),
    schema: schemas.string(
      i18n('entities.patientVisit.fields.diagnosis'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'caseSeverity',
    label: i18n('entities.patientVisit.fields.caseSeverity'),
    schema: schemas.enumerator(
      i18n('entities.patientVisit.fields.caseSeverity'),
      {
        "options": patientVisitEnumerators.caseSeverity
      },
    ),
  },
  {
    name: 'medicine1',
    label: i18n('entities.patientVisit.fields.medicine1'),
    schema: schemas.relationToOne(
      i18n('entities.patientVisit.fields.medicine1'),
      {},
    ),
  },
  {
    name: 'med1Qty',
    label: i18n('entities.patientVisit.fields.med1Qty'),
    schema: schemas.integer(
      i18n('entities.patientVisit.fields.med1Qty'),
      {},
    ),
  },
  {
    name: 'med1Supplied',
    label: i18n('entities.patientVisit.fields.med1Supplied'),
    schema: schemas.boolean(
      i18n('entities.patientVisit.fields.med1Supplied'),
      {},
    ),
  },
  {
    name: 'medicine2',
    label: i18n('entities.patientVisit.fields.medicine2'),
    schema: schemas.relationToOne(
      i18n('entities.patientVisit.fields.medicine2'),
      {},
    ),
  },
  {
    name: 'med2Qty',
    label: i18n('entities.patientVisit.fields.med2Qty'),
    schema: schemas.integer(
      i18n('entities.patientVisit.fields.med2Qty'),
      {},
    ),
  },
  {
    name: 'med2Supplied',
    label: i18n('entities.patientVisit.fields.med2Supplied'),
    schema: schemas.boolean(
      i18n('entities.patientVisit.fields.med2Supplied'),
      {},
    ),
  },
  {
    name: 'medicine3',
    label: i18n('entities.patientVisit.fields.medicine3'),
    schema: schemas.relationToOne(
      i18n('entities.patientVisit.fields.medicine3'),
      {},
    ),
  },
  {
    name: 'med3Qty',
    label: i18n('entities.patientVisit.fields.med3Qty'),
    schema: schemas.integer(
      i18n('entities.patientVisit.fields.med3Qty'),
      {},
    ),
  },
  {
    name: 'med3Supplied',
    label: i18n('entities.patientVisit.fields.med3Supplied'),
    schema: schemas.boolean(
      i18n('entities.patientVisit.fields.med3Supplied'),
      {},
    ),
  },
  {
    name: 'medicine4',
    label: i18n('entities.patientVisit.fields.medicine4'),
    schema: schemas.relationToOne(
      i18n('entities.patientVisit.fields.medicine4'),
      {},
    ),
  },
  {
    name: 'med4Qty',
    label: i18n('entities.patientVisit.fields.med4Qty'),
    schema: schemas.integer(
      i18n('entities.patientVisit.fields.med4Qty'),
      {},
    ),
  },
  {
    name: 'med4Supplied',
    label: i18n('entities.patientVisit.fields.med4Supplied'),
    schema: schemas.boolean(
      i18n('entities.patientVisit.fields.med4Supplied'),
      {},
    ),
  },
  {
    name: 'medicineInstructions',
    label: i18n('entities.patientVisit.fields.medicineInstructions'),
    schema: schemas.string(
      i18n('entities.patientVisit.fields.medicineInstructions'),
      {},
    ),
  },
  {
    name: 'requestedLabs',
    label: i18n('entities.patientVisit.fields.requestedLabs'),
    schema: schemas.string(
      i18n('entities.patientVisit.fields.requestedLabs'),
      {},
    ),
  },
  {
    name: 'dietaryInstructions',
    label: i18n('entities.patientVisit.fields.dietaryInstructions'),
    schema: schemas.string(
      i18n('entities.patientVisit.fields.dietaryInstructions'),
      {},
    ),
  },
  {
    name: 'requestedLab',
    label: i18n('entities.patientVisit.fields.requestedLab'),
    schema: schemas.string(
      i18n('entities.patientVisit.fields.requestedLab'),
      {},
    ),
  },
  {
    name: 'referralHospital',
    label: i18n('entities.patientVisit.fields.referralHospital'),
    schema: schemas.string(
      i18n('entities.patientVisit.fields.referralHospital'),
      {},
    ),
  },
  {
    name: 'referredSpecialistDoctor',
    label: i18n('entities.patientVisit.fields.referredSpecialistDoctor'),
    schema: schemas.string(
      i18n('entities.patientVisit.fields.referredSpecialistDoctor'),
      {},
    ),
  },
  {
    name: 'returnIn',
    label: i18n('entities.patientVisit.fields.returnIn'),
    schema: schemas.enumerator(
      i18n('entities.patientVisit.fields.returnIn'),
      {
        "options": patientVisitEnumerators.returnIn
      },
    ),
  },
  {
    name: 'telemedicineDoctor',
    label: i18n('entities.patientVisit.fields.telemedicineDoctor'),
    schema: schemas.relationToOne(
      i18n('entities.patientVisit.fields.telemedicineDoctor'),
      {},
    ),
  },
  {
    name: 'telemedicineConsultDate',
    label: i18n('entities.patientVisit.fields.telemedicineConsultDate'),
    schema: schemas.date(
      i18n('entities.patientVisit.fields.telemedicineConsultDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'differentialDiagnosis',
    label: i18n('entities.patientVisit.fields.differentialDiagnosis'),
    schema: schemas.string(
      i18n('entities.patientVisit.fields.differentialDiagnosis'),
      {},
    ),
  },
  {
    name: 'differentialRecommendation',
    label: i18n('entities.patientVisit.fields.differentialRecommendation'),
    schema: schemas.string(
      i18n('entities.patientVisit.fields.differentialRecommendation'),
      {},
    ),
  },
  {
    name: 'finalNotes',
    label: i18n('entities.patientVisit.fields.finalNotes'),
    schema: schemas.string(
      i18n('entities.patientVisit.fields.finalNotes'),
      {},
    ),
  },
  {
    name: 'patientCopay',
    label: i18n('entities.patientVisit.fields.patientCopay'),
    schema: schemas.integer(
      i18n('entities.patientVisit.fields.patientCopay'),
      {},
    ),
  },
];