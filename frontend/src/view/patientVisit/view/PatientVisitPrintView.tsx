import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { Document, Page, Text, Svg, Line, View, StyleSheet, PDFViewer } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFF",
    color: "black",
  },
  section1: {
    margin: 10,
    padding: 10,
    textAlign: 'center',
    fontSize: 14,
  },
  section2: {
    margin: 10,
    padding: 10,
    fontSize: 12,
  },
  textTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  textBold: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  viewer: {
    width: window.innerWidth * 0.8, //the pdf viewer will take up 80% 
    height: window.innerHeight * 0.8,
  },
});

function _medicineDetails(index, med, medQty, medSupplied) {
    if (med === null || med === undefined) {
        return " null ";
    }
    var medDescription = "#" + index + ": " + med.medicineName;

    if (med.genericName != null) {
        medDescription += " (Generic " + med.GenericName + ")";
    }
    if (medQty > 0) {
        medDescription += ". Quantity: " + medQty;
    }
    if (medSupplied) {
        medDescription += " supplied to patient";
    }
    return medDescription;
}
 
function _symptomDetails(index, symptom) {
    if (symptom === null || symptom === undefined) {
       return " ";
    }
    return "#" + index + ": " + symptom.symptomName;
}

function PatientVisitPrintView(props) {
  const renderView = () => {
    const { record } = props;
    var med1Str = _medicineDetails(1, record.medicine1, record.med1Qty, record.med1Supplied);
    var med2Str = _medicineDetails(2, record.medicine2, record.med2Qty, record.med2Supplied);
    var med3Str = _medicineDetails(3, record.medicine3, record.med3Qty, record.med3Supplied);
    var med4Str = _medicineDetails(4, record.medicine4, record.med4Qty, record.med4Supplied);
   
    var symptom1Str = _symptomDetails(1, record.symptom1);
    var symptom2Str = _symptomDetails(2, record.symptom2);
    var symptom3Str = _symptomDetails(3, record.symptom3);
 
    return (
        <PDFViewer style={styles.viewer}>
          <Document>
            <Page size="A4" style={styles.page}>
              <View style={styles.section1}>
                <Text style={styles.textTitle}>{record.doctor.name} </Text>
                <Text>Center: {record.medicalCenter.name} Date: {record.visitDate}</Text>
                <Text>Digital prescription for patient {record.patient.fullName} 
                      ({record.patient.gender}, {record.patient.age} yrs)</Text>
                <Svg height="2" width="500"><Line x1="0" y1="0" x2="500" y2="0" strokeWidth={2} stroke="rgb(0,0,0)" /></Svg>
              </View>
              <View style={styles.section2}>
                <Text>Height: {record.height}. Weight: {record.weight}. Temp: {record.temperature}.</Text> 
                <Text>BP: {record.bloodPressure}. Pulse Rate: {record.pulseRate}. SPO2: {record.oxygenLevel}
                      {record.vitalStatisticsOther}</Text>
              </View>
              <View style={styles.section2}>
                <Text style={styles.textBold}>Symptoms</Text>
                <Text>{symptom1Str}</Text>
                <Text>{symptom2Str}</Text>
                <Text>{symptom3Str}</Text>
                <Text>{record.otherSymptoms}</Text>
                <Text>Clinical Diagnosis: {record.diagnosis}</Text>
              </View>
              <View style={styles.section2}>
                <Text style={styles.textBold}>Medicines</Text> 
                <Text>{med1Str}</Text> 
                <Text>{med2Str}</Text> 
                <Text>{med3Str}</Text> 
                <Text>{med4Str}</Text> 
              </View>
              <View style={styles.section2}>
                <Text>Instructions: {record.medicineInstructions}</Text>
                <Text>Labs Requested: {record.requestedLabs}</Text>
                <Text>Diet: {record.dietaryInstructions}</Text>
                <Text></Text>
              </View>
              <View style={styles.section2}>
                <Text style={styles.textBold}>Telemedicine</Text> 
                <Text>Date: {record.telemedicineConsultDate}</Text>
                <Text>Diagnosis: {record.differentialDiagnosis}</Text>
                <Text>Recommendation: {record.differentialRecommendation}</Text>
                <Text>Final Notes: {record.finalNotes}</Text>
              </View>
              <View style={styles.section2}>
                <Text style={styles.textBold}>Payments</Text> 
                <Text>Medicine copay: Rs {Number(record.medicineCopay).toFixed(2)}</Text>
                <Text>Doctor copay: Rs {Number(record.doctorCopay).toFixed(2)}</Text>
                <Text>Telemed copay: Rs {Number(record.telemedCopay).toFixed(2)}</Text>
              </View>
              <View style={styles.section2}>
                <Text style={styles.textBold}>Referrals</Text> 
                <Text>Referral Hospital: {record.referralHospital}</Text>
                <Text>Referral Specialist: {record.referredSpecialistDoctor}</Text>
              </View>
              <View style={styles.section2}>
                <Text style={styles.textBold}>Return in {record.returnIn}</Text> 
              </View>
            </Page>
          </Document>
        </PDFViewer>
    );
  };

  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return renderView();
}
export default PatientVisitPrintView;
