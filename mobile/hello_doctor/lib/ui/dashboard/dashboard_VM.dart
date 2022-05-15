import 'package:hello_doctor/app/app.locator.dart';
import 'package:hello_doctor/app/app.router.dart';
import 'package:hello_doctor/services/api_service.dart';
import 'package:hello_doctor/services/prefetch_service.dart';
import 'package:hello_doctor/utils/demoData.dart';
import 'package:kf_openapi_generated/api.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:stacked/stacked.dart';
import 'package:stacked_services/stacked_services.dart';

class DashboardViewModel extends BaseViewModel {
  APIService _apiService = locator<APIService>();
  PrefetchService _prefetchService = locator<PrefetchService>();
  NavigationService _navigationService = locator<NavigationService>();

  List<Patient> getPatientsToday = [];

  initialise() {
    getPatientsToday = _prefetchService.patients;
  }

  Future<void> signOut() async {
    final perfs = await SharedPreferences.getInstance();
    perfs.remove("token");
    _navigationService.clearStackAndShow(Routes.loginView);
  }
}
