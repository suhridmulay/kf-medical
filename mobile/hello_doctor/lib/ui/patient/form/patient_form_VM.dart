import 'dart:collection';

import 'package:hello_doctor/app/app.locator.dart';
import 'package:hello_doctor/services/api_service.dart';
import 'package:hello_doctor/services/prefetch_service.dart';
import 'package:stacked/stacked.dart';

import '../../../services/api_service.dart';

class PatientFormViewModel extends BaseViewModel {
  final APIService _apiService = locator.get<APIService>();
  final PrefetchService _prefetchService = locator.get<PrefetchService>();

  Future<bool> addOrUpdatePatient(Map<String, dynamic> value) async {
    setBusy(true);
    HashMap data = HashMap.fromEntries(value.entries);
    data['fullName'] =
        "${value['firstName'] ?? ''} ${value['middleName'] ?? ''} ${value['lastName'] ?? ''}";
    var resp = await _apiService.addOrUpdatePatient(Map.from(data));
    print(resp.statusCode.toString() + " " + resp.body.toString());
    setBusy(false);
    if (resp.statusCode == 200) {
      await _prefetchService.prefetch();
      return true;
    } else {
      return false;
    }
  }
}
