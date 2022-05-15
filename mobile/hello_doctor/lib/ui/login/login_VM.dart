import 'package:hello_doctor/app/app.locator.dart';
import 'package:hello_doctor/services/api_service.dart';
import 'package:hello_doctor/services/prefetch_service.dart';
import 'package:stacked/stacked.dart';

class LoginViewModel extends BaseViewModel {
  final APIService _apiService = locator<APIService>();
  final PrefetchService _prefetchService = locator<PrefetchService>();
  Future<bool> login({username, password, tenentId}) async {
    setBusy(true);
    bool loggedIn =
        await _apiService.login(username, password, tenentId) ?? false;

    if (loggedIn) {
      await _prefetchService.prefetch();
    }
    setBusy(false);
    return loggedIn;
  }
}
