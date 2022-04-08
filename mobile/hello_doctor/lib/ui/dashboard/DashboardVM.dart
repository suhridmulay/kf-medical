import 'package:hello_doctor/app/app.locator.dart';
import 'package:hello_doctor/services/apiService.dart';
import 'package:hello_doctor/services/prefetchService.dart';
import 'package:hello_doctor/utils/demoData.dart';
import 'package:kf_openapi_generated/api.dart';
import 'package:stacked/stacked.dart';

class DashboardViewModel extends BaseViewModel {
  APIService _apiService = locator<APIService>();
  PrefetchService _prefetchService = locator<PrefetchService>();

  List<Patient> getPatientsToday = [];

  initialise() {
    getPatientsToday = _prefetchService.patients;
  }
}
