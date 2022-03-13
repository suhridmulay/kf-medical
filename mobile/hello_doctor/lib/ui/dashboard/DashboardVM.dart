import 'package:hello_doctor/app/app.locator.dart';
import 'package:hello_doctor/services/api/apiService.dart';
import 'package:stacked/stacked.dart';

class DashboardViewModel extends BaseViewModel {
  APIService apiService = locator<APIService>();
}
