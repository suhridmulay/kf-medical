//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;


class FileApi {
  FileApi([ApiClient apiClient]) : apiClient = apiClient ?? defaultApiClient;

  final ApiClient apiClient;

  /// Performs an HTTP 'GET /file/download' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] privateUrl:
  Future<Response> fileDownloadGetWithHttpInfo({ String privateUrl, }) async {
    // Verify required params are set.

    // ignore: prefer_const_declarations
    final path = r'/file/download';

    // ignore: prefer_final_locals
    Object postBody;

    final queryParams = <QueryParam>[];
    final headerParams = <String, String>{};
    final formParams = <String, String>{};

    if (privateUrl != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('', 'privateUrl', privateUrl));
    }

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
  /// * [String] privateUrl:
  Future<void> fileDownloadGet({ String privateUrl, }) async {
    final response = await fileDownloadGetWithHttpInfo( privateUrl: privateUrl, );
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
  }

  /// Performs an HTTP 'POST /file/upload' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] token:
  Future<Response> fileUploadPostWithHttpInfo({ String token, }) async {
    // Verify required params are set.

    // ignore: prefer_const_declarations
    final path = r'/file/upload';

    // ignore: prefer_final_locals
    Object postBody;

    final queryParams = <QueryParam>[];
    final headerParams = <String, String>{};
    final formParams = <String, String>{};

    if (token != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('', 'token', token));
    }

    const authNames = <String>[];
    const contentTypes = <String>[];


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
  /// * [String] token:
  Future<String> fileUploadPost({ String token, }) async {
    final response = await fileUploadPostWithHttpInfo( token: token, );
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'String',) as String;
    
    }
    return Future<String>.value();
  }

  /// Performs an HTTP 'GET /tenant/{tenantId}/file/credentials' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [String] filename:
  ///
  /// * [String] storageId:
  Future<Response> tenantTenantIdFileCredentialsGetWithHttpInfo(String tenantId, { String filename, String storageId, }) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/file/credentials'
      .replaceAll('{tenantId}', tenantId);

    // ignore: prefer_final_locals
    Object postBody;

    final queryParams = <QueryParam>[];
    final headerParams = <String, String>{};
    final formParams = <String, String>{};

    if (filename != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('', 'filename', filename));
    }
    if (storageId != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('', 'storageId', storageId));
    }

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

  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [String] filename:
  ///
  /// * [String] storageId:
  Future<InlineResponse20014> tenantTenantIdFileCredentialsGet(String tenantId, { String filename, String storageId, }) async {
    final response = await tenantTenantIdFileCredentialsGetWithHttpInfo(tenantId,  filename: filename, storageId: storageId, );
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'InlineResponse20014',) as InlineResponse20014;
    
    }
    return Future<InlineResponse20014>.value();
  }
}
