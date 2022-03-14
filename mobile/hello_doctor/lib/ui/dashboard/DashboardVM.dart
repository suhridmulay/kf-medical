import 'package:hello_doctor/app/app.locator.dart';
import 'package:hello_doctor/services/api/apiService.dart';
import 'package:hello_doctor/utils/demoData.dart';
import 'package:kf_openapi_generated/api.dart';
import 'package:stacked/stacked.dart';

class DashboardViewModel extends BaseViewModel {
  APIService apiService = locator<APIService>();

  List<Patient> patientsToday = [
    demoPatient,
    demoPatient,
    demoPatient,
    demoPatient,
    demoPatient,
    demoPatient,
  ];
}
