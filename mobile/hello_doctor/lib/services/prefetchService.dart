import 'package:kf_openapi_generated/api.dart';

class PrefetchService {
  List<HealthCenter> healthCenters = [
    HealthCenter(name: "Anand Vatika 1", id: '001'),
    HealthCenter(name: "Anand Vatika 2", id: '002'),
    HealthCenter(name: "Anand Vatika 3", id: '003'),
    HealthCenter(name: "Anand Vatika 4", id: '004'),
  ];

  List<SymptomsEnum> symptoms = [
    SymptomsEnum(symptomName: 'Symptom 1', id: '001'),
    SymptomsEnum(symptomName: 'Symptom 2', id: '002'),
    SymptomsEnum(symptomName: 'Symptom 3', id: '003'),
    SymptomsEnum(symptomName: 'Symptom 4', id: '004'),
  ];

  List<MedicineEnum> medicines = [
    MedicineEnum(medicineName: "Medicine 1", id: '001'),
    MedicineEnum(medicineName: "Medicine 2", id: '002'),
    MedicineEnum(medicineName: "Medicine 3", id: '003'),
    MedicineEnum(medicineName: "Medicine 4", id: '004'),
  ];

  List<Doctor> doctors = [
    Doctor(name: "Doctor 1", id: '001'),
    Doctor(name: "Doctor 2", id: '002'),
    Doctor(name: "Doctor 3", id: '003'),
    Doctor(name: "Doctor 4", id: '004'),
  ];
}
