import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.patientVisit.fields.id'),
  },
  {
    name: 'patient',
    label: i18n('entities.patientVisit.fields.patient'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'medicalCenter',
    label: i18n('entities.patientVisit.fields.medicalCenter'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'department',
    label: i18n('entities.patientVisit.fields.department'),
  },
  {
    name: 'doctor',
    label: i18n('entities.patientVisit.fields.doctor'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'visitDate',
    label: i18n('entities.patientVisit.fields.visitDate'),
  },
  {
    name: 'repeatVisit',
    label: i18n('entities.patientVisit.fields.repeatVisit'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'symptom1',
    label: i18n('entities.patientVisit.fields.symptom1'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'symptom2',
    label: i18n('entities.patientVisit.fields.symptom2'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'symptom3',
    label: i18n('entities.patientVisit.fields.symptom3'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'otherSymptoms',
    label: i18n('entities.patientVisit.fields.otherSymptoms'),
  },
  {
    name: 'height',
    label: i18n('entities.patientVisit.fields.height'),
  },
  {
    name: 'weight',
    label: i18n('entities.patientVisit.fields.weight'),
  },
  {
    name: 'temperature',
    label: i18n('entities.patientVisit.fields.temperature'),
  },
  {
    name: 'bloodPressure',
    label: i18n('entities.patientVisit.fields.bloodPressure'),
  },
  {
    name: 'pulseRate',
    label: i18n('entities.patientVisit.fields.pulseRate'),
  },
  {
    name: 'oxygenLevel',
    label: i18n('entities.patientVisit.fields.oxygenLevel'),
  },
  {
    name: 'vitalStatisticsOther',
    label: i18n('entities.patientVisit.fields.vitalStatisticsOther'),
  },
  {
    name: 'diagnosis',
    label: i18n('entities.patientVisit.fields.diagnosis'),
  },
  {
    name: 'caseSeverity',
    label: i18n('entities.patientVisit.fields.caseSeverity'),
  },
  {
    name: 'medicine1',
    label: i18n('entities.patientVisit.fields.medicine1'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'med1Qty',
    label: i18n('entities.patientVisit.fields.med1Qty'),
  },
  {
    name: 'med1Supplied',
    label: i18n('entities.patientVisit.fields.med1Supplied'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'medicine2',
    label: i18n('entities.patientVisit.fields.medicine2'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'med2Qty',
    label: i18n('entities.patientVisit.fields.med2Qty'),
  },
  {
    name: 'med2Supplied',
    label: i18n('entities.patientVisit.fields.med2Supplied'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'medicine3',
    label: i18n('entities.patientVisit.fields.medicine3'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'med3Qty',
    label: i18n('entities.patientVisit.fields.med3Qty'),
  },
  {
    name: 'med3Supplied',
    label: i18n('entities.patientVisit.fields.med3Supplied'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'medicine4',
    label: i18n('entities.patientVisit.fields.medicine4'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'med4Qty',
    label: i18n('entities.patientVisit.fields.med4Qty'),
  },
  {
    name: 'med4Supplied',
    label: i18n('entities.patientVisit.fields.med4Supplied'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'medicineInstructions',
    label: i18n('entities.patientVisit.fields.medicineInstructions'),
  },
  {
    name: 'requestedLabs',
    label: i18n('entities.patientVisit.fields.requestedLabs'),
  },
  {
    name: 'dietaryInstructions',
    label: i18n('entities.patientVisit.fields.dietaryInstructions'),
  },
  {
    name: 'isTelemedReferral',
    label: i18n('entities.patientVisit.fields.isTelemedReferral'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'medicineCopay',
    label: i18n('entities.patientVisit.fields.medicineCopay'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'doctorCopay',
    label: i18n('entities.patientVisit.fields.doctorCopay'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'telemedCopay',
    label: i18n('entities.patientVisit.fields.telemedCopay'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'referralHospital',
    label: i18n('entities.patientVisit.fields.referralHospital'),
  },
  {
    name: 'referredSpecialistDoctor',
    label: i18n('entities.patientVisit.fields.referredSpecialistDoctor'),
  },
  {
    name: 'returnIn',
    label: i18n('entities.patientVisit.fields.returnIn'),
  },
  {
    name: 'telemedicineDoctor',
    label: i18n('entities.patientVisit.fields.telemedicineDoctor'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'telemedicineConsultDate',
    label: i18n('entities.patientVisit.fields.telemedicineConsultDate'),
  },
  {
    name: 'differentialDiagnosis',
    label: i18n('entities.patientVisit.fields.differentialDiagnosis'),
  },
  {
    name: 'differentialRecommendation',
    label: i18n('entities.patientVisit.fields.differentialRecommendation'),
  },
  {
    name: 'finalNotes',
    label: i18n('entities.patientVisit.fields.finalNotes'),
  },
  {
    name: 'prescriptionFills',
    label: i18n('entities.patientVisit.fields.prescriptionFills'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.patientVisit.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.patientVisit.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
