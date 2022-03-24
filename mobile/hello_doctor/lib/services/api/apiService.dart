import 'package:kf_openapi_generated/api.dart';

class APIService {
  final authenticationApi = AuthenticationApi();

  Future<String?> login(
      String username, String password, String tenentId) async {
    final resp = await authenticationApi.authSignInPostWithHttpInfo(
        InlineObject1(email: username, password: password, tenantId: tenentId));
    print(resp.toString());
  }
}
