//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;


class DiagnosticLabApi {
  DiagnosticLabApi([ApiClient apiClient]) : apiClient = apiClient ?? defaultApiClient;

  final ApiClient apiClient;

  /// Performs an HTTP 'GET /tenant/{tenantId}/diagnostic-enum/autocomplete' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [String] query:
  ///
  /// * [num] limit:
  Future<Response> tenantTenantIdDiagnosticEnumAutocompleteGetWithHttpInfo(String tenantId, { String query, num limit, }) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/diagnostic-enum/autocomplete'
      .replaceAll('{tenantId}', tenantId);

    // ignore: prefer_final_locals
    Object postBody;

    final queryParams = <QueryParam>[];
    final headerParams = <String, String>{};
    final formParams = <String, String>{};

    if (query != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('', 'query', query));
    }
    if (limit != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('', 'limit', limit));
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
  /// * [String] query:
  ///
  /// * [num] limit:
  Future<List<InlineResponse2001>> tenantTenantIdDiagnosticEnumAutocompleteGet(String tenantId, { String query, num limit, }) async {
    final response = await tenantTenantIdDiagnosticEnumAutocompleteGetWithHttpInfo(tenantId,  query: query, limit: limit, );
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      final responseBody = await _decodeBodyBytes(response);
      return (await apiClient.deserializeAsync(responseBody, 'List<InlineResponse2001>') as List)
        .cast<InlineResponse2001>()
        .toList(growable: false);

    }
    return Future<List<InlineResponse2001>>.value();
  }

  /// Performs an HTTP 'DELETE /tenant/{tenantId}/diagnostic-enum' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [List<String>] idsLeftSquareBracketRightSquareBracket:
  Future<Response> tenantTenantIdDiagnosticEnumDeleteWithHttpInfo(String tenantId, { List<String> idsLeftSquareBracketRightSquareBracket, }) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/diagnostic-enum'
      .replaceAll('{tenantId}', tenantId);

    // ignore: prefer_final_locals
    Object postBody;

    final queryParams = <QueryParam>[];
    final headerParams = <String, String>{};
    final formParams = <String, String>{};

    if (idsLeftSquareBracketRightSquareBracket != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('multi', 'ids[]', idsLeftSquareBracketRightSquareBracket));
    }

    const authNames = <String>['bearerAuth'];
    const contentTypes = <String>[];


    return apiClient.invokeAPI(
      path,
      'DELETE',
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
  /// * [List<String>] idsLeftSquareBracketRightSquareBracket:
  Future<void> tenantTenantIdDiagnosticEnumDelete(String tenantId, { List<String> idsLeftSquareBracketRightSquareBracket, }) async {
    final response = await tenantTenantIdDiagnosticEnumDeleteWithHttpInfo(tenantId,  idsLeftSquareBracketRightSquareBracket: idsLeftSquareBracketRightSquareBracket, );
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
  }

  /// Performs an HTTP 'GET /tenant/{tenantId}/diagnostic-enum' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [String] filterLeftSquareBracketIdRightSquareBracket:
  ///
  /// * [String] filterLeftSquareBracketDiagnosticNameRightSquareBracket:
  ///
  /// * [List<DateTime>] filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket:
  ///
  /// * [num] offset:
  ///
  /// * [num] limit:
  ///
  /// * [String] orderBy:
  Future<Response> tenantTenantIdDiagnosticEnumGetWithHttpInfo(String tenantId, { String filterLeftSquareBracketIdRightSquareBracket, String filterLeftSquareBracketDiagnosticNameRightSquareBracket, List<DateTime> filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, num offset, num limit, String orderBy, }) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/diagnostic-enum'
      .replaceAll('{tenantId}', tenantId);

    // ignore: prefer_final_locals
    Object postBody;

    final queryParams = <QueryParam>[];
    final headerParams = <String, String>{};
    final formParams = <String, String>{};

    if (filterLeftSquareBracketIdRightSquareBracket != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('', 'filter[id]', filterLeftSquareBracketIdRightSquareBracket));
    }
    if (filterLeftSquareBracketDiagnosticNameRightSquareBracket != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('', 'filter[diagnosticName]', filterLeftSquareBracketDiagnosticNameRightSquareBracket));
    }
    if (filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('multi', 'filter[createdAtRange][]', filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket));
    }
    if (offset != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('', 'offset', offset));
    }
    if (limit != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('', 'limit', limit));
    }
    if (orderBy != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('', 'orderBy', orderBy));
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
  /// * [String] filterLeftSquareBracketIdRightSquareBracket:
  ///
  /// * [String] filterLeftSquareBracketDiagnosticNameRightSquareBracket:
  ///
  /// * [List<DateTime>] filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket:
  ///
  /// * [num] offset:
  ///
  /// * [num] limit:
  ///
  /// * [String] orderBy:
  Future<InlineResponse2005> tenantTenantIdDiagnosticEnumGet(String tenantId, { String filterLeftSquareBracketIdRightSquareBracket, String filterLeftSquareBracketDiagnosticNameRightSquareBracket, List<DateTime> filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, num offset, num limit, String orderBy, }) async {
    final response = await tenantTenantIdDiagnosticEnumGetWithHttpInfo(tenantId,  filterLeftSquareBracketIdRightSquareBracket: filterLeftSquareBracketIdRightSquareBracket, filterLeftSquareBracketDiagnosticNameRightSquareBracket: filterLeftSquareBracketDiagnosticNameRightSquareBracket, filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket: filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, offset: offset, limit: limit, orderBy: orderBy, );
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'InlineResponse2005',) as InlineResponse2005;
    
    }
    return Future<InlineResponse2005>.value();
  }

  /// Performs an HTTP 'GET /tenant/{tenantId}/diagnostic-enum/{id}' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [String] id (required):
  Future<Response> tenantTenantIdDiagnosticEnumIdGetWithHttpInfo(String tenantId, String id,) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }
    if (id == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: id');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/diagnostic-enum/{id}'
      .replaceAll('{tenantId}', tenantId)
      .replaceAll('{id}', id);

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

  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [String] id (required):
  Future<DiagnosticEnum> tenantTenantIdDiagnosticEnumIdGet(String tenantId, String id,) async {
    final response = await tenantTenantIdDiagnosticEnumIdGetWithHttpInfo(tenantId, id,);
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'DiagnosticEnum',) as DiagnosticEnum;
    
    }
    return Future<DiagnosticEnum>.value();
  }

  /// Performs an HTTP 'PUT /tenant/{tenantId}/diagnostic-enum/{id}' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [String] id (required):
  ///
  /// * [InlineObject20] inlineObject20 (required):
  Future<Response> tenantTenantIdDiagnosticEnumIdPutWithHttpInfo(String tenantId, String id, InlineObject20 inlineObject20,) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }
    if (id == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: id');
    }
    if (inlineObject20 == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: inlineObject20');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/diagnostic-enum/{id}'
      .replaceAll('{tenantId}', tenantId)
      .replaceAll('{id}', id);

    // ignore: prefer_final_locals
    Object postBody = inlineObject20;

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
  /// * [String] id (required):
  ///
  /// * [InlineObject20] inlineObject20 (required):
  Future<DiagnosticEnum> tenantTenantIdDiagnosticEnumIdPut(String tenantId, String id, InlineObject20 inlineObject20,) async {
    final response = await tenantTenantIdDiagnosticEnumIdPutWithHttpInfo(tenantId, id, inlineObject20,);
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'DiagnosticEnum',) as DiagnosticEnum;
    
    }
    return Future<DiagnosticEnum>.value();
  }

  /// Performs an HTTP 'POST /tenant/{tenantId}/diagnostic-enum/import' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [InlineObject22] inlineObject22 (required):
  Future<Response> tenantTenantIdDiagnosticEnumImportPostWithHttpInfo(String tenantId, InlineObject22 inlineObject22,) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }
    if (inlineObject22 == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: inlineObject22');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/diagnostic-enum/import'
      .replaceAll('{tenantId}', tenantId);

    // ignore: prefer_final_locals
    Object postBody = inlineObject22;

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
  /// * [String] tenantId (required):
  ///
  /// * [InlineObject22] inlineObject22 (required):
  Future<DiagnosticEnum> tenantTenantIdDiagnosticEnumImportPost(String tenantId, InlineObject22 inlineObject22,) async {
    final response = await tenantTenantIdDiagnosticEnumImportPostWithHttpInfo(tenantId, inlineObject22,);
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'DiagnosticEnum',) as DiagnosticEnum;
    
    }
    return Future<DiagnosticEnum>.value();
  }

  /// Performs an HTTP 'POST /tenant/{tenantId}/diagnostic-enum' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [InlineObject21] inlineObject21 (required):
  Future<Response> tenantTenantIdDiagnosticEnumPostWithHttpInfo(String tenantId, InlineObject21 inlineObject21,) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }
    if (inlineObject21 == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: inlineObject21');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/diagnostic-enum'
      .replaceAll('{tenantId}', tenantId);

    // ignore: prefer_final_locals
    Object postBody = inlineObject21;

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
  /// * [String] tenantId (required):
  ///
  /// * [InlineObject21] inlineObject21 (required):
  Future<DiagnosticEnum> tenantTenantIdDiagnosticEnumPost(String tenantId, InlineObject21 inlineObject21,) async {
    final response = await tenantTenantIdDiagnosticEnumPostWithHttpInfo(tenantId, inlineObject21,);
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'DiagnosticEnum',) as DiagnosticEnum;
    
    }
    return Future<DiagnosticEnum>.value();
  }
}
