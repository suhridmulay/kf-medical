//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;


class SettingsApi {
  SettingsApi([ApiClient apiClient]) : apiClient = apiClient ?? defaultApiClient;

  final ApiClient apiClient;

  /// Performs an HTTP 'GET /tenant/{tenantId}/settings' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  Future<Response> tenantTenantIdSettingsGetWithHttpInfo(String tenantId,) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/settings'
      .replaceAll('{tenantId}', tenantId);

    // ignore: prefer_final_locals
    Object postBody;

    final queryParams = <QueryParam>[];
    final headerParams = <String, String>{};
    final formParams = <String, String>{};

    const authNames = <String>[];
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

  /// Parameters:
  ///
  /// * [String] tenantId (required):
  Future<Settings> tenantTenantIdSettingsGet(String tenantId,) async {
    final response = await tenantTenantIdSettingsGetWithHttpInfo(tenantId,);
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'Settings',) as Settings;
    
    }
    return Future<Settings>.value();
  }

  /// Performs an HTTP 'PUT /tenant/{tenantId}/settings' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [InlineObject45] inlineObject45 (required):
  Future<Response> tenantTenantIdSettingsPutWithHttpInfo(String tenantId, InlineObject45 inlineObject45,) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }
    if (inlineObject45 == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: inlineObject45');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/settings'
      .replaceAll('{tenantId}', tenantId);

    // ignore: prefer_final_locals
    Object postBody = inlineObject45;

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
  /// * [String] tenantId (required):
  ///
  /// * [InlineObject45] inlineObject45 (required):
  Future<Settings> tenantTenantIdSettingsPut(String tenantId, InlineObject45 inlineObject45,) async {
    final response = await tenantTenantIdSettingsPutWithHttpInfo(tenantId, inlineObject45,);
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'Settings',) as Settings;
    
    }
    return Future<Settings>.value();
  }
}
