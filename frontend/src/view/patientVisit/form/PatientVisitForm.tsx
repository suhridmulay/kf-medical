import { Button, Grid } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import UndoIcon from '@material-ui/icons/Undo';
import React, { useState } from 'react';
import { i18n } from 'src/i18n';
import FormWrapper, {
  FormButtons,
} from 'src/view/shared/styles/FormWrapper';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import TextAreaFormItem from 'src/view/shared/form/items/TextAreaFormItem';
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import SwitchFormItem from 'src/view/shared/form/items/SwitchFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import patientVisitEnumerators from 'src/modules/patientVisit/patientVisitEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import PatientAutocompleteFormItem from 'src/view/patient/autocomplete/PatientAutocompleteFormItem';
import HealthCenterAutocompleteFormItem from 'src/view/healthCenter/autocomplete/HealthCenterAutocompleteFormItem';
import DoctorAutocompleteFormItem from 'src/view/doctor/autocomplete/DoctorAutocompleteFormItem';
import SymptomsEnumAutocompleteFormItem from 'src/view/symptomsEnum/autocomplete/SymptomsEnumAutocompleteFormItem';
import MedicineEnumAutocompleteFormItem from 'src/view/medicineEnum/autocomplete/MedicineEnumAutocompleteFormItem';

const schema = yup.object().shape({
  patient: yupFormSchemas.relationToOne(
    i18n('entities.patientVisit.fields.patient'),
    {
      "required": true
    },
  ),
  medicalCenter: yupFormSchemas.relationToOne(
    i18n('entities.patientVisit.fields.medicalCenter'),
    {
      "required": true
    },
  ),
  doctor: yupFormSchemas.relationToOne(
    i18n('entities.patientVisit.fields.doctor'),
    {
      "required": true
    },
  ),
  visitDate: yupFormSchemas.date(
    i18n('entities.patientVisit.fields.visitDate'),
    {
      "required": true
    },
  ),
  repeatVisit: yupFormSchemas.boolean(
    i18n('entities.patientVisit.fields.repeatVisit'),
    {},
  ),
  symptom1: yupFormSchemas.relationToOne(
    i18n('entities.patientVisit.fields.symptom1'),
    {
      "required": true
    },
  ),
  symptom2: yupFormSchemas.relationToOne(
    i18n('entities.patientVisit.fields.symptom2'),
    {},
  ),
  symptom3: yupFormSchemas.relationToOne(
    i18n('entities.patientVisit.fields.symptom3'),
    {},
  ),
  otherSymptoms: yupFormSchemas.string(
    i18n('entities.patientVisit.fields.otherSymptoms'),
    {},
  ),
  temperature: yupFormSchemas.string(
    i18n('entities.patientVisit.fields.temperature'),
    {
      "max": 5,
      "min": 2
    },
  ),
  bloodPressure: yupFormSchemas.string(
    i18n('entities.patientVisit.fields.bloodPressure'),
    {
      "max": 8
    },
  ),
  pulseRate: yupFormSchemas.string(
    i18n('entities.patientVisit.fields.pulseRate'),
    {
      "min": 2,
      "max": 3
    },
  ),
  oxygenLevel: yupFormSchemas.string(
    i18n('entities.patientVisit.fields.oxygenLevel'),
    {
      "max": 3
    },
  ),
  height: yupFormSchemas.string(
    i18n('entities.patientVisit.fields.height'),
    {
      "max": 6
    },
  ),
  weight: yupFormSchemas.string(
    i18n('entities.patientVisit.fields.weight'),
    {
      "max": 6
    },
  ),
  vitalStatisticsOther: yupFormSchemas.string(
    i18n('entities.patientVisit.fields.vitalStatisticsOther'),
    {},
  ),
  diagnosis: yupFormSchemas.string(
    i18n('entities.patientVisit.fields.diagnosis'),
    {
      "required": true
    },
  ),
  requestedLabs: yupFormSchemas.string(
    i18n('entities.patientVisit.fields.requestedLabs'),
    {},
  ),
  medicine1: yupFormSchemas.relationToOne(
    i18n('entities.patientVisit.fields.medicine1'),
    {},
  ),
  med1Qty: yupFormSchemas.integer(
    i18n('entities.patientVisit.fields.med1Qty'),
    {},
  ),
  med1Supplied: yupFormSchemas.boolean(
    i18n('entities.patientVisit.fields.med1Supplied'),
    {},
  ),
  medicine2: yupFormSchemas.relationToOne(
    i18n('entities.patientVisit.fields.medicine2'),
    {},
  ),
  med2Qty: yupFormSchemas.integer(
    i18n('entities.patientVisit.fields.med2Qty'),
    {},
  ),
  med2Supplied: yupFormSchemas.boolean(
    i18n('entities.patientVisit.fields.med2Supplied'),
    {},
  ),
  medicine3: yupFormSchemas.relationToOne(
    i18n('entities.patientVisit.fields.medicine3'),
    {},
  ),
  med3Qty: yupFormSchemas.integer(
    i18n('entities.patientVisit.fields.med3Qty'),
    {},
  ),
  med3Supplied: yupFormSchemas.boolean(
    i18n('entities.patientVisit.fields.med3Supplied'),
    {},
  ),
  medicine4: yupFormSchemas.relationToOne(
    i18n('entities.patientVisit.fields.medicine4'),
    {},
  ),
  med4Qty: yupFormSchemas.integer(
    i18n('entities.patientVisit.fields.med4Qty'),
    {},
  ),
  med4Supplied: yupFormSchemas.boolean(
    i18n('entities.patientVisit.fields.med4Supplied'),
    {},
  ),
  medicineInstructions: yupFormSchemas.string(
    i18n('entities.patientVisit.fields.medicineInstructions'),
    {},
  ),
  dietaryInstructions: yupFormSchemas.string(
    i18n('entities.patientVisit.fields.dietaryInstructions'),
    {},
  ),
  requestedLab: yupFormSchemas.string(
    i18n('entities.patientVisit.fields.requestedLab'),
    {},
  ),
  referralHospital: yupFormSchemas.string(
    i18n('entities.patientVisit.fields.referralHospital'),
    {},
  ),
  referredSpecialistDoctor: yupFormSchemas.string(
    i18n('entities.patientVisit.fields.referredSpecialistDoctor'),
    {},
  ),
  returnIn: yupFormSchemas.enumerator(
    i18n('entities.patientVisit.fields.returnIn'),
    {
      "options": patientVisitEnumerators.returnIn
    },
  ),
  telemedicineDoctor: yupFormSchemas.relationToOne(
    i18n('entities.patientVisit.fields.telemedicineDoctor'),
    {},
  ),
  telemedicineConsultDate: yupFormSchemas.date(
    i18n('entities.patientVisit.fields.telemedicineConsultDate'),
    {},
  ),
  differentialDiagnosis: yupFormSchemas.string(
    i18n('entities.patientVisit.fields.differentialDiagnosis'),
    {},
  ),
  differentialRecommendation: yupFormSchemas.string(
    i18n('entities.patientVisit.fields.differentialRecommendation'),
    {},
  ),
  finalNotes: yupFormSchemas.string(
    i18n('entities.patientVisit.fields.finalNotes'),
    {},
  ),
  patientCopay: yupFormSchemas.integer(
    i18n('entities.patientVisit.fields.patientCopay'),
    {},
  ),
});

function PatientVisitForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      patient: record.patient,
      medicalCenter: record.medicalCenter,
      doctor: record.doctor,
      visitDate: record.visitDate ? moment(record.visitDate, 'YYYY-MM-DD') : null,
      repeatVisit: record.repeatVisit,
      symptom1: record.symptom1,
      symptom2: record.symptom2,
      symptom3: record.symptom3,
      otherSymptoms: record.otherSymptoms,
      temperature: record.temperature,
      bloodPressure: record.bloodPressure,
      pulseRate: record.pulseRate,
      oxygenLevel: record.oxygenLevel,
      height: record.height,
      weight: record.weight,
      vitalStatisticsOther: record.vitalStatisticsOther,
      diagnosis: record.diagnosis,
      requestedLabs: record.requestedLabs,
      medicine1: record.medicine1,
      med1Qty: record.med1Qty,
      med1Supplied: record.med1Supplied,
      medicine2: record.medicine2,
      med2Qty: record.med2Qty,
      med2Supplied: record.med2Supplied,
      medicine3: record.medicine3,
      med3Qty: record.med3Qty,
      med3Supplied: record.med3Supplied,
      medicine4: record.medicine4,
      med4Qty: record.med4Qty,
      med4Supplied: record.med4Supplied,
      medicineInstructions: record.medicineInstructions,
      dietaryInstructions: record.dietaryInstructions,
      requestedLab: record.requestedLab,
      referralHospital: record.referralHospital,
      referredSpecialistDoctor: record.referredSpecialistDoctor,
      returnIn: record.returnIn,
      telemedicineDoctor: record.telemedicineDoctor,
      telemedicineConsultDate: record.telemedicineConsultDate ? moment(record.telemedicineConsultDate, 'YYYY-MM-DD') : null,
      differentialDiagnosis: record.differentialDiagnosis,
      differentialRecommendation: record.differentialRecommendation,
      finalNotes: record.finalNotes,
      patientCopay: record.patientCopay,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues as any,
  });

  const onSubmit = (values) => {
    props.onSubmit(props.record?.id, values);
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  const { saveLoading, modal } = props;

  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Grid spacing={2} container>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <PatientAutocompleteFormItem  
                name="patient"
                label={i18n('entities.patientVisit.fields.patient')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <HealthCenterAutocompleteFormItem  
                name="medicalCenter"
                label={i18n('entities.patientVisit.fields.medicalCenter')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DoctorAutocompleteFormItem  
                name="doctor"
                label={i18n('entities.patientVisit.fields.doctor')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="visitDate"
                label={i18n('entities.patientVisit.fields.visitDate')}
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SwitchFormItem
                name="repeatVisit"
                label={i18n('entities.patientVisit.fields.repeatVisit')}
              hint={i18n('entities.patientVisit.hints.repeatVisit')}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SymptomsEnumAutocompleteFormItem  
                name="symptom1"
                label={i18n('entities.patientVisit.fields.symptom1')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SymptomsEnumAutocompleteFormItem  
                name="symptom2"
                label={i18n('entities.patientVisit.fields.symptom2')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SymptomsEnumAutocompleteFormItem  
                name="symptom3"
                label={i18n('entities.patientVisit.fields.symptom3')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="otherSymptoms"
                label={i18n('entities.patientVisit.fields.otherSymptoms')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="temperature"
                label={i18n('entities.patientVisit.fields.temperature')}
              hint={i18n('entities.patientVisit.hints.temperature')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="bloodPressure"
                label={i18n('entities.patientVisit.fields.bloodPressure')}
              hint={i18n('entities.patientVisit.hints.bloodPressure')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="pulseRate"
                label={i18n('entities.patientVisit.fields.pulseRate')}
              hint={i18n('entities.patientVisit.hints.pulseRate')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="oxygenLevel"
                label={i18n('entities.patientVisit.fields.oxygenLevel')}
              hint={i18n('entities.patientVisit.hints.oxygenLevel')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="height"
                label={i18n('entities.patientVisit.fields.height')}
              hint={i18n('entities.patientVisit.hints.height')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="weight"
                label={i18n('entities.patientVisit.fields.weight')}
              hint={i18n('entities.patientVisit.hints.weight')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="vitalStatisticsOther"
                label={i18n('entities.patientVisit.fields.vitalStatisticsOther')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="diagnosis"
                label={i18n('entities.patientVisit.fields.diagnosis')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="requestedLabs"
                label={i18n('entities.patientVisit.fields.requestedLabs')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <MedicineEnumAutocompleteFormItem  
                name="medicine1"
                label={i18n('entities.patientVisit.fields.medicine1')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="med1Qty"
                label={i18n('entities.patientVisit.fields.med1Qty')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SwitchFormItem
                name="med1Supplied"
                label={i18n('entities.patientVisit.fields.med1Supplied')}
              hint={i18n('entities.patientVisit.hints.med1Supplied')}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <MedicineEnumAutocompleteFormItem  
                name="medicine2"
                label={i18n('entities.patientVisit.fields.medicine2')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="med2Qty"
                label={i18n('entities.patientVisit.fields.med2Qty')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SwitchFormItem
                name="med2Supplied"
                label={i18n('entities.patientVisit.fields.med2Supplied')}
              hint={i18n('entities.patientVisit.hints.med2Supplied')}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <MedicineEnumAutocompleteFormItem  
                name="medicine3"
                label={i18n('entities.patientVisit.fields.medicine3')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="med3Qty"
                label={i18n('entities.patientVisit.fields.med3Qty')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SwitchFormItem
                name="med3Supplied"
                label={i18n('entities.patientVisit.fields.med3Supplied')}
              hint={i18n('entities.patientVisit.hints.med3Supplied')}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <MedicineEnumAutocompleteFormItem  
                name="medicine4"
                label={i18n('entities.patientVisit.fields.medicine4')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="med4Qty"
                label={i18n('entities.patientVisit.fields.med4Qty')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SwitchFormItem
                name="med4Supplied"
                label={i18n('entities.patientVisit.fields.med4Supplied')}
              hint={i18n('entities.patientVisit.hints.med4Supplied')}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <TextAreaFormItem
                name="medicineInstructions"
                label={i18n('entities.patientVisit.fields.medicineInstructions')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <TextAreaFormItem
                name="dietaryInstructions"
                label={i18n('entities.patientVisit.fields.dietaryInstructions')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="requestedLab"
                label={i18n('entities.patientVisit.fields.requestedLab')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="referralHospital"
                label={i18n('entities.patientVisit.fields.referralHospital')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="referredSpecialistDoctor"
                label={i18n('entities.patientVisit.fields.referredSpecialistDoctor')}
              hint={i18n('entities.patientVisit.hints.referredSpecialistDoctor')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="returnIn"
                label={i18n('entities.patientVisit.fields.returnIn')}
                options={patientVisitEnumerators.returnIn.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.patientVisit.enumerators.returnIn.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DoctorAutocompleteFormItem  
                name="telemedicineDoctor"
                label={i18n('entities.patientVisit.fields.telemedicineDoctor')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="telemedicineConsultDate"
                label={i18n('entities.patientVisit.fields.telemedicineConsultDate')}
              hint={i18n('entities.patientVisit.hints.telemedicineConsultDate')}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <TextAreaFormItem
                name="differentialDiagnosis"
                label={i18n('entities.patientVisit.fields.differentialDiagnosis')}
              hint={i18n('entities.patientVisit.hints.differentialDiagnosis')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <TextAreaFormItem
                name="differentialRecommendation"
                label={i18n('entities.patientVisit.fields.differentialRecommendation')}
              hint={i18n('entities.patientVisit.hints.differentialRecommendation')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="finalNotes"
                label={i18n('entities.patientVisit.fields.finalNotes')}
              hint={i18n('entities.patientVisit.hints.finalNotes')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="patientCopay"
                label={i18n('entities.patientVisit.fields.patientCopay')}
              placeholder={i18n('entities.patientVisit.placeholders.patientCopay')}
              hint={i18n('entities.patientVisit.hints.patientCopay')}  
                required={false}
              />
            </Grid>
          </Grid>
          <FormButtons
            style={{
              flexDirection: modal
                ? 'row-reverse'
                : undefined,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              disabled={saveLoading}
              type="button"
              onClick={form.handleSubmit(onSubmit)}
              startIcon={<SaveIcon />}
              size="small"
            >
              {i18n('common.save')}
            </Button>

            <Button
              disabled={saveLoading}
              onClick={onReset}
              type="button"
              startIcon={<UndoIcon />}
              size="small"
            >
              {i18n('common.reset')}
            </Button>

            {props.onCancel ? (
              <Button
                disabled={saveLoading}
                onClick={() => props.onCancel()}
                type="button"
                startIcon={<CloseIcon />}
                size="small"
              >
                {i18n('common.cancel')}
              </Button>
            ) : null}
          </FormButtons>
        </form>
      </FormProvider>
    </FormWrapper>
  );
}

export default PatientVisitForm;
