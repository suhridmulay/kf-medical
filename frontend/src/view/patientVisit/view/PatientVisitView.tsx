import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import PatientViewItem from 'src/view/patient/view/PatientViewItem';
import HealthCenterViewItem from 'src/view/healthCenter/view/HealthCenterViewItem';
import DoctorViewItem from 'src/view/doctor/view/DoctorViewItem';
import SymptomsEnumViewItem from 'src/view/symptomsEnum/view/SymptomsEnumViewItem';
import MedicineEnumViewItem from 'src/view/medicineEnum/view/MedicineEnumViewItem';
import PrescriptionFillViewItem from 'src/view/prescriptionFill/view/PrescriptionFillViewItem';

function PatientVisitView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <PatientViewItem
          label={i18n('entities.patientVisit.fields.patient')}
          value={record.patient}
        />

        <HealthCenterViewItem
          label={i18n('entities.patientVisit.fields.medicalCenter')}
          value={record.medicalCenter}
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.department')}
          value={
            record.department &&
            i18n(
              `entities.patientVisit.enumerators.department.${record.department}`,
            )
          }
        />

        <DoctorViewItem
          label={i18n('entities.patientVisit.fields.doctor')}
          value={record.doctor}
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.visitDate')}
          value={record.visitDate}
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.repeatVisit')}
          value={
            record.repeatVisit
              ? i18n('common.yes')
              : i18n('common.no')
          }
        />

        <SymptomsEnumViewItem
          label={i18n('entities.patientVisit.fields.symptom1')}
          value={record.symptom1}
        />

        <SymptomsEnumViewItem
          label={i18n('entities.patientVisit.fields.symptom2')}
          value={record.symptom2}
        />

        <SymptomsEnumViewItem
          label={i18n('entities.patientVisit.fields.symptom3')}
          value={record.symptom3}
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.otherSymptoms')}
          value={record.otherSymptoms}
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.height')}
          value={record.height}
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.weight')}
          value={record.weight}
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.temperature')}
          value={record.temperature}
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.bloodPressure')}
          value={record.bloodPressure}
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.pulseRate')}
          value={record.pulseRate}
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.oxygenLevel')}
          value={record.oxygenLevel}
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.vitalStatisticsOther')}
          value={record.vitalStatisticsOther}
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.diagnosis')}
          value={record.diagnosis}
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.caseSeverity')}
          value={
            record.caseSeverity &&
            i18n(
              `entities.patientVisit.enumerators.caseSeverity.${record.caseSeverity}`,
            )
          }
        />

        <MedicineEnumViewItem
          label={i18n('entities.patientVisit.fields.medicine1')}
          value={record.medicine1}
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.med1Qty')}
          value={record.med1Qty}
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.med1Supplied')}
          value={
            record.med1Supplied
              ? i18n('common.yes')
              : i18n('common.no')
          }
        />

        <MedicineEnumViewItem
          label={i18n('entities.patientVisit.fields.medicine2')}
          value={record.medicine2}
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.med2Qty')}
          value={record.med2Qty}
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.med2Supplied')}
          value={
            record.med2Supplied
              ? i18n('common.yes')
              : i18n('common.no')
          }
        />

        <MedicineEnumViewItem
          label={i18n('entities.patientVisit.fields.medicine3')}
          value={record.medicine3}
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.med3Qty')}
          value={record.med3Qty}
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.med3Supplied')}
          value={
            record.med3Supplied
              ? i18n('common.yes')
              : i18n('common.no')
          }
        />

        <MedicineEnumViewItem
          label={i18n('entities.patientVisit.fields.medicine4')}
          value={record.medicine4}
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.med4Qty')}
          value={record.med4Qty}
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.med4Supplied')}
          value={
            record.med4Supplied
              ? i18n('common.yes')
              : i18n('common.no')
          }
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.medicineInstructions')}
          value={record.medicineInstructions}
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.requestedLabs')}
          value={record.requestedLabs}
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.dietaryInstructions')}
          value={record.dietaryInstructions}
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.isTelemedReferral')}
          value={
            record.isTelemedReferral
              ? i18n('common.yes')
              : i18n('common.no')
          }
        />

        {record.medicineCopay != null && <TextViewItem
          label={i18n('entities.patientVisit.fields.medicineCopay')}
          value={Number(record.medicineCopay).toFixed(2)}
        />}

        {record.doctorCopay != null && <TextViewItem
          label={i18n('entities.patientVisit.fields.doctorCopay')}
          value={Number(record.doctorCopay).toFixed(2)}
        />}

        {record.telemedCopay != null && <TextViewItem
          label={i18n('entities.patientVisit.fields.telemedCopay')}
          value={Number(record.telemedCopay).toFixed(2)}
        />}

        <TextViewItem
          label={i18n('entities.patientVisit.fields.referralHospital')}
          value={record.referralHospital}
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.referredSpecialistDoctor')}
          value={record.referredSpecialistDoctor}
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.returnIn')}
          value={
            record.returnIn &&
            i18n(
              `entities.patientVisit.enumerators.returnIn.${record.returnIn}`,
            )
          }
        />

        <DoctorViewItem
          label={i18n('entities.patientVisit.fields.telemedicineDoctor')}
          value={record.telemedicineDoctor}
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.telemedicineConsultDate')}
          value={record.telemedicineConsultDate}
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.differentialDiagnosis')}
          value={record.differentialDiagnosis}
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.differentialRecommendation')}
          value={record.differentialRecommendation}
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.finalNotes')}
          value={record.finalNotes}
        />

        <PrescriptionFillViewItem
          label={i18n('entities.patientVisit.fields.prescriptionFills')}
          value={record.prescriptionFills}
        />        
      </div>
    );
  };

  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return renderView();
}

export default PatientVisitView;
