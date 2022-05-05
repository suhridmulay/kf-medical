import 'package:http/src/response.dart';
import 'package:kf_openapi_generated/api.dart';
import 'package:shared_preferences/shared_preferences.dart';

class APIService {
  final defaultClient = ApiClient(
    basePath:
        "https://medical-service-dot-kf-apps-288002.uc.r.appspot.com/api/",
  );

  String tenantId = "";
  UserApi _userApi = UserApi();
  PatientApi _patientApi = PatientApi();

  void generateApiModels() {
    _userApi = UserApi(defaultClient);
    _patientApi = PatientApi(defaultClient);
  }

  Future<bool?> login(String username, String password, String tenentId) async {
    print("Logging in");
    final perfs = await SharedPreferences.getInstance();
    try {
      final resp = await AuthenticationApi(
        defaultClient,
      ).authSignInPostWithHttpInfo(
        InlineObject1(
          email: username,
          password: password,
          tenantId: tenentId,
        ),
      );
      String token = resp.body;
      perfs.setString("token", token);
      defaultClient
          .getAuthentication<HttpBearerAuth>('bearerAuth')
          .accessToken = token;
      this.tenantId = tenentId;
      generateApiModels();
      return true;
    } catch (e) {
      print("Exception" + e.toString());
      return false;
    }
  }

  Future<Response> addOrUpdatePatient(Map<String, dynamic> data) {
    var inlineObject9 = InlineObject9(data: PatientInput.fromJson(data));
    print(inlineObject9);
    return _patientApi.tenantTenantIdPatientPostWithHttpInfo(
        tenantId, inlineObject9);
  }
}
