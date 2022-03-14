//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;


class AuthenticationApi {
  AuthenticationApi([ApiClient apiClient]) : apiClient = apiClient ?? defaultApiClient;

  final ApiClient apiClient;

  /// Performs an HTTP 'PUT /auth/change-password' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [InlineObject2] inlineObject2 (required):
  Future<Response> authChangePasswordPutWithHttpInfo(InlineObject2 inlineObject2,) async {
    // Verify required params are set.
    if (inlineObject2 == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: inlineObject2');
    }

    // ignore: prefer_const_declarations
    final path = r'/auth/change-password';

    // ignore: prefer_final_locals
    Object postBody = inlineObject2;

    final queryParams = <QueryParam>[];
    final headerParams = <String, String>{};
    final formParams = <String, String>{};

    const authNames = <String>['bearerAuth'];
    const contentTypes = <String>['application/json'];


    return apiClient.invokeAPI(
      path,
      'PUT',
      queryParams,
      postBody,
      headerParams,
      formParams,
      contentTypes.isEmpty ? null : contentTypes[0],
      authNames,
    );
  }

  /// Parameters:
  ///
  /// * [InlineObject2] inlineObject2 (required):
  Future<UserCurrent> authChangePasswordPut(InlineObject2 inlineObject2,) async {
    final response = await authChangePasswordPutWithHttpInfo(inlineObject2,);
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'UserCurrent',) as UserCurrent;
    
    }
    return Future<UserCurrent>.value();
  }

  /// Performs an HTTP 'GET /auth/me' operation and returns the [Response].
  Future<Response> authMeGetWithHttpInfo() async {
    // ignore: prefer_const_declarations
    final path = r'/auth/me';

    // ignore: prefer_final_locals
    Object postBody;

    final queryParams = <QueryParam>[];
    final headerParams = <String, String>{};
    final formParams = <String, String>{};

    const authNames = <String>['bearerAuth'];
    const contentTypes = <String>[];


    return apiClient.invokeAPI(
      path,
      'GET',
      queryParams,
      postBody,
      headerParams,
      formParams,
      contentTypes.isEmpty ? null : contentTypes[0],
      authNames,
    );
  }

  Future<UserCurrent> authMeGet() async {
    final response = await authMeGetWithHttpInfo();
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'UserCurrent',) as UserCurrent;
    
    }
    return Future<UserCurrent>.value();
  }

  /// Performs an HTTP 'PUT /auth/password-reset' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [InlineObject5] inlineObject5 (required):
  Future<Response> authPasswordResetPutWithHttpInfo(InlineObject5 inlineObject5,) async {
    // Verify required params are set.
    if (inlineObject5 == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: inlineObject5');
    }

    // ignore: prefer_const_declarations
    final path = r'/auth/password-reset';

    // ignore: prefer_final_locals
    Object postBody = inlineObject5;

    final queryParams = <QueryParam>[];
    final headerParams = <String, String>{};
    final formParams = <String, String>{};

    const authNames = <String>[];
    const contentTypes = <String>['application/json'];


    return apiClient.invokeAPI(
      path,
      'PUT',
      queryParams,
      postBody,
      headerParams,
      formParams,
      contentTypes.isEmpty ? null : contentTypes[0],
      authNames,
    );
  }

  /// Parameters:
  ///
  /// * [InlineObject5] inlineObject5 (required):
  Future<void> authPasswordResetPut(InlineObject5 inlineObject5,) async {
    final response = await authPasswordResetPutWithHttpInfo(inlineObject5,);
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
  }

  /// Performs an HTTP 'PUT /auth/profile' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [InlineObject7] inlineObject7 (required):
  Future<Response> authProfilePutWithHttpInfo(InlineObject7 inlineObject7,) async {
    // Verify required params are set.
    if (inlineObject7 == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: inlineObject7');
    }

    // ignore: prefer_const_declarations
    final path = r'/auth/profile';

    // ignore: prefer_final_locals
    Object postBody = inlineObject7;

    final queryParams = <QueryParam>[];
    final headerParams = <String, String>{};
    final formParams = <String, String>{};

    const authNames = <String>['bearerAuth'];
    const contentTypes = <String>['application/json'];


    return apiClient.invokeAPI(
      path,
      'PUT',
      queryParams,
      postBody,
      headerParams,
      formParams,
      contentTypes.isEmpty ? null : contentTypes[0],
      authNames,
    );
  }

  /// Parameters:
  ///
  /// * [InlineObject7] inlineObject7 (required):
  Future<void> authProfilePut(InlineObject7 inlineObject7,) async {
    final response = await authProfilePutWithHttpInfo(inlineObject7,);
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
  }

  /// Performs an HTTP 'POST /auth/send-email-address-verification-email' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [InlineObject3] inlineObject3 (required):
  Future<Response> authSendEmailAddressVerificationEmailPostWithHttpInfo(InlineObject3 inlineObject3,) async {
    // Verify required params are set.
    if (inlineObject3 == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: inlineObject3');
    }

    // ignore: prefer_const_declarations
    final path = r'/auth/send-email-address-verification-email';

    // ignore: prefer_final_locals
    Object postBody = inlineObject3;

    final queryParams = <QueryParam>[];
    final headerParams = <String, String>{};
    final formParams = <String, String>{};

    const authNames = <String>['bearerAuth'];
    const contentTypes = <String>['application/json'];


    return apiClient.invokeAPI(
      path,
      'POST',
      queryParams,
      postBody,
      headerParams,
      formParams,
      contentTypes.isEmpty ? null : contentTypes[0],
      authNames,
    );
  }

  /// Parameters:
  ///
  /// * [InlineObject3] inlineObject3 (required):
  Future<void> authSendEmailAddressVerificationEmailPost(InlineObject3 inlineObject3,) async {
    final response = await authSendEmailAddressVerificationEmailPostWithHttpInfo(inlineObject3,);
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
  }

  /// Performs an HTTP 'POST /auth/send-password-reset-email' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [InlineObject4] inlineObject4 (required):
  Future<Response> authSendPasswordResetEmailPostWithHttpInfo(InlineObject4 inlineObject4,) async {
    // Verify required params are set.
    if (inlineObject4 == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: inlineObject4');
    }

    // ignore: prefer_const_declarations
    final path = r'/auth/send-password-reset-email';

    // ignore: prefer_final_locals
    Object postBody = inlineObject4;

    final queryParams = <QueryParam>[];
    final headerParams = <String, String>{};
    final formParams = <String, String>{};

    const authNames = <String>[];
    const contentTypes = <String>['application/json'];


    return apiClient.invokeAPI(
      path,
      'POST',
      queryParams,
      postBody,
      headerParams,
      formParams,
      contentTypes.isEmpty ? null : contentTypes[0],
      authNames,
    );
  }

  /// Parameters:
  ///
  /// * [InlineObject4] inlineObject4 (required):
  Future<void> authSendPasswordResetEmailPost(InlineObject4 inlineObject4,) async {
    final response = await authSendPasswordResetEmailPostWithHttpInfo(inlineObject4,);
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
  }

  /// Performs an HTTP 'POST /auth/sign-in' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [InlineObject1] inlineObject1 (required):
  Future<Response> authSignInPostWithHttpInfo(InlineObject1 inlineObject1,) async {
    // Verify required params are set.
    if (inlineObject1 == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: inlineObject1');
    }

    // ignore: prefer_const_declarations
    final path = r'/auth/sign-in';

    // ignore: prefer_final_locals
    Object postBody = inlineObject1;

    final queryParams = <QueryParam>[];
    final headerParams = <String, String>{};
    final formParams = <String, String>{};

    const authNames = <String>[];
    const contentTypes = <String>['application/json'];


    return apiClient.invokeAPI(
      path,
      'POST',
      queryParams,
      postBody,
      headerParams,
      formParams,
      contentTypes.isEmpty ? null : contentTypes[0],
      authNames,
    );
  }

  /// Parameters:
  ///
  /// * [InlineObject1] inlineObject1 (required):
  Future<void> authSignInPost(InlineObject1 inlineObject1,) async {
    final response = await authSignInPostWithHttpInfo(inlineObject1,);
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
  }

  /// Performs an HTTP 'POST /auth/sign-up' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [InlineObject] inlineObject (required):
  Future<Response> authSignUpPostWithHttpInfo(InlineObject inlineObject,) async {
    // Verify required params are set.
    if (inlineObject == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: inlineObject');
    }

    // ignore: prefer_const_declarations
    final path = r'/auth/sign-up';

    // ignore: prefer_final_locals
    Object postBody = inlineObject;

    final queryParams = <QueryParam>[];
    final headerParams = <String, String>{};
    final formParams = <String, String>{};

    const authNames = <String>[];
    const contentTypes = <String>['application/json'];


    return apiClient.invokeAPI(
      path,
      'POST',
      queryParams,
      postBody,
      headerParams,
      formParams,
      contentTypes.isEmpty ? null : contentTypes[0],
      authNames,
    );
  }

  /// Parameters:
  ///
  /// * [InlineObject] inlineObject (required):
  Future<void> authSignUpPost(InlineObject inlineObject,) async {
    final response = await authSignUpPostWithHttpInfo(inlineObject,);
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
  }

  /// Performs an HTTP 'PUT /auth/verify-email' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [InlineObject6] inlineObject6 (required):
  Future<Response> authVerifyEmailPutWithHttpInfo(InlineObject6 inlineObject6,) async {
    // Verify required params are set.
    if (inlineObject6 == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: inlineObject6');
    }

    // ignore: prefer_const_declarations
    final path = r'/auth/verify-email';

    // ignore: prefer_final_locals
    Object postBody = inlineObject6;

    final queryParams = <QueryParam>[];
    final headerParams = <String, String>{};
    final formParams = <String, String>{};

    const authNames = <String>[];
    const contentTypes = <String>['application/json'];


    return apiClient.invokeAPI(
      path,
      'PUT',
      queryParams,
      postBody,
      headerParams,
      formParams,
      contentTypes.isEmpty ? null : contentTypes[0],
      authNames,
    );
  }

  /// Parameters:
  ///
  /// * [InlineObject6] inlineObject6 (required):
  Future<void> authVerifyEmailPut(InlineObject6 inlineObject6,) async {
    final response = await authVerifyEmailPutWithHttpInfo(inlineObject6,);
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
  }
}
