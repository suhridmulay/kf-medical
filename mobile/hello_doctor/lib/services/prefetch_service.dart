import 'package:hello_doctor/app/app.locator.dart';
import 'package:hello_doctor/services/api_service.dart';
import 'package:hello_doctor/utils/demoData.dart';
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

  List<Patient> patients = [
    demoPatient,
    demoPatient,
    demoPatient,
    demoPatient,
  ];

  APIService _apiService = locator<APIService>();

  //TODO: Convert to api service methods

  Future<void> prefetch() async {
    print("Prefetching");
    healthCenters = (await HealthCenterApi(_apiService.defaultClient)
            .tenantTenantIdHealthCenterGet(_apiService.tenantId))
        .rows;
    symptoms = (await SymptomsEnumApi(_apiService.defaultClient)
            .tenantTenantIdSymptomsEnumGet(_apiService.tenantId))
        .rows;
    medicines = (await MedicineApi(_apiService.defaultClient)
            .tenantTenantIdMedicineEnumGet(_apiService.tenantId))
        .rows;
    doctors = (await DoctorApi(_apiService.defaultClient)
            .tenantTenantIdDoctorGet(_apiService.tenantId))
        .rows;
    patients = [
      demoPatient,
      ...(await PatientApi(_apiService.defaultClient)
              .tenantTenantIdPatientGet(_apiService.tenantId))
          .rows
    ];
  }
}
