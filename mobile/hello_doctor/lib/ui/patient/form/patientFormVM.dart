import 'package:hello_doctor/app/app.locator.dart';
import 'package:hello_doctor/services/apiService.dart';
import 'package:hello_doctor/services/prefetchService.dart';
import 'package:stacked/stacked.dart';

import '../../../services/apiService.dart';

class PatientFormViewModel extends BaseViewModel {
  final APIService _apiService = locator.get<APIService>();
  final PrefetchService _prefetchService = locator.get<PrefetchService>();

  Future<bool> addOrUpdatePatient(Map<String, dynamic> value) async {
    var resp = await _apiService.addOrUpdatePatient(value);
    print(resp.statusCode.toString() + " " + resp.body.toString());
    if (resp.statusCode == 200) {
      await _prefetchService.prefetch();
      return true;
    } else {
      return false;
    }
  }
}
