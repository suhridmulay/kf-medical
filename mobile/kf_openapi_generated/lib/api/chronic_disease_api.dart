//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;


class ChronicDiseaseApi {
  ChronicDiseaseApi([ApiClient apiClient]) : apiClient = apiClient ?? defaultApiClient;

  final ApiClient apiClient;

  /// Performs an HTTP 'GET /tenant/{tenantId}/chronic-disease-enum/autocomplete' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [String] query:
  ///
  /// * [num] limit:
  Future<Response> tenantTenantIdChronicDiseaseEnumAutocompleteGetWithHttpInfo(String tenantId, { String query, num limit, }) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/chronic-disease-enum/autocomplete'
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
  Future<List<InlineResponse2001>> tenantTenantIdChronicDiseaseEnumAutocompleteGet(String tenantId, { String query, num limit, }) async {
    final response = await tenantTenantIdChronicDiseaseEnumAutocompleteGetWithHttpInfo(tenantId,  query: query, limit: limit, );
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

  /// Performs an HTTP 'DELETE /tenant/{tenantId}/chronic-disease-enum' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [List<String>] idsLeftSquareBracketRightSquareBracket:
  Future<Response> tenantTenantIdChronicDiseaseEnumDeleteWithHttpInfo(String tenantId, { List<String> idsLeftSquareBracketRightSquareBracket, }) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/chronic-disease-enum'
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
  Future<void> tenantTenantIdChronicDiseaseEnumDelete(String tenantId, { List<String> idsLeftSquareBracketRightSquareBracket, }) async {
    final response = await tenantTenantIdChronicDiseaseEnumDeleteWithHttpInfo(tenantId,  idsLeftSquareBracketRightSquareBracket: idsLeftSquareBracketRightSquareBracket, );
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
  }

  /// Performs an HTTP 'GET /tenant/{tenantId}/chronic-disease-enum' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [String] filterLeftSquareBracketIdRightSquareBracket:
  ///
  /// * [String] filterLeftSquareBracketDiseaseNameRightSquareBracket:
  ///
  /// * [List<DateTime>] filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket:
  ///
  /// * [num] offset:
  ///
  /// * [num] limit:
  ///
  /// * [String] orderBy:
  Future<Response> tenantTenantIdChronicDiseaseEnumGetWithHttpInfo(String tenantId, { String filterLeftSquareBracketIdRightSquareBracket, String filterLeftSquareBracketDiseaseNameRightSquareBracket, List<DateTime> filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, num offset, num limit, String orderBy, }) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/chronic-disease-enum'
      .replaceAll('{tenantId}', tenantId);

    // ignore: prefer_final_locals
    Object postBody;

    final queryParams = <QueryParam>[];
    final headerParams = <String, String>{};
    final formParams = <String, String>{};

    if (filterLeftSquareBracketIdRightSquareBracket != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('', 'filter[id]', filterLeftSquareBracketIdRightSquareBracket));
    }
    if (filterLeftSquareBracketDiseaseNameRightSquareBracket != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('', 'filter[diseaseName]', filterLeftSquareBracketDiseaseNameRightSquareBracket));
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
  /// * [String] filterLeftSquareBracketDiseaseNameRightSquareBracket:
  ///
  /// * [List<DateTime>] filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket:
  ///
  /// * [num] offset:
  ///
  /// * [num] limit:
  ///
  /// * [String] orderBy:
  Future<InlineResponse20012> tenantTenantIdChronicDiseaseEnumGet(String tenantId, { String filterLeftSquareBracketIdRightSquareBracket, String filterLeftSquareBracketDiseaseNameRightSquareBracket, List<DateTime> filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, num offset, num limit, String orderBy, }) async {
    final response = await tenantTenantIdChronicDiseaseEnumGetWithHttpInfo(tenantId,  filterLeftSquareBracketIdRightSquareBracket: filterLeftSquareBracketIdRightSquareBracket, filterLeftSquareBracketDiseaseNameRightSquareBracket: filterLeftSquareBracketDiseaseNameRightSquareBracket, filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket: filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, offset: offset, limit: limit, orderBy: orderBy, );
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'InlineResponse20012',) as InlineResponse20012;
    
    }
    return Future<InlineResponse20012>.value();
  }

  /// Performs an HTTP 'GET /tenant/{tenantId}/chronic-disease-enum/{id}' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [String] id (required):
  Future<Response> tenantTenantIdChronicDiseaseEnumIdGetWithHttpInfo(String tenantId, String id,) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }
    if (id == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: id');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/chronic-disease-enum/{id}'
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
  Future<ChronicDiseaseEnum> tenantTenantIdChronicDiseaseEnumIdGet(String tenantId, String id,) async {
    final response = await tenantTenantIdChronicDiseaseEnumIdGetWithHttpInfo(tenantId, id,);
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'ChronicDiseaseEnum',) as ChronicDiseaseEnum;
    
    }
    return Future<ChronicDiseaseEnum>.value();
  }

  /// Performs an HTTP 'PUT /tenant/{tenantId}/chronic-disease-enum/{id}' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [String] id (required):
  ///
  /// * [InlineObject41] inlineObject41 (required):
  Future<Response> tenantTenantIdChronicDiseaseEnumIdPutWithHttpInfo(String tenantId, String id, InlineObject41 inlineObject41,) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }
    if (id == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: id');
    }
    if (inlineObject41 == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: inlineObject41');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/chronic-disease-enum/{id}'
      .replaceAll('{tenantId}', tenantId)
      .replaceAll('{id}', id);

    // ignore: prefer_final_locals
    Object postBody = inlineObject41;

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
  /// * [InlineObject41] inlineObject41 (required):
  Future<ChronicDiseaseEnum> tenantTenantIdChronicDiseaseEnumIdPut(String tenantId, String id, InlineObject41 inlineObject41,) async {
    final response = await tenantTenantIdChronicDiseaseEnumIdPutWithHttpInfo(tenantId, id, inlineObject41,);
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'ChronicDiseaseEnum',) as ChronicDiseaseEnum;
    
    }
    return Future<ChronicDiseaseEnum>.value();
  }

  /// Performs an HTTP 'POST /tenant/{tenantId}/chronic-disease-enum/import' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [InlineObject43] inlineObject43 (required):
  Future<Response> tenantTenantIdChronicDiseaseEnumImportPostWithHttpInfo(String tenantId, InlineObject43 inlineObject43,) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }
    if (inlineObject43 == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: inlineObject43');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/chronic-disease-enum/import'
      .replaceAll('{tenantId}', tenantId);

    // ignore: prefer_final_locals
    Object postBody = inlineObject43;

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
  /// * [InlineObject43] inlineObject43 (required):
  Future<ChronicDiseaseEnum> tenantTenantIdChronicDiseaseEnumImportPost(String tenantId, InlineObject43 inlineObject43,) async {
    final response = await tenantTenantIdChronicDiseaseEnumImportPostWithHttpInfo(tenantId, inlineObject43,);
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'ChronicDiseaseEnum',) as ChronicDiseaseEnum;
    
    }
    return Future<ChronicDiseaseEnum>.value();
  }

  /// Performs an HTTP 'POST /tenant/{tenantId}/chronic-disease-enum' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [InlineObject42] inlineObject42 (required):
  Future<Response> tenantTenantIdChronicDiseaseEnumPostWithHttpInfo(String tenantId, InlineObject42 inlineObject42,) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }
    if (inlineObject42 == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: inlineObject42');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/chronic-disease-enum'
      .replaceAll('{tenantId}', tenantId);

    // ignore: prefer_final_locals
    Object postBody = inlineObject42;

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
  /// * [InlineObject42] inlineObject42 (required):
  Future<ChronicDiseaseEnum> tenantTenantIdChronicDiseaseEnumPost(String tenantId, InlineObject42 inlineObject42,) async {
    final response = await tenantTenantIdChronicDiseaseEnumPostWithHttpInfo(tenantId, inlineObject42,);
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'ChronicDiseaseEnum',) as ChronicDiseaseEnum;
    
    }
    return Future<ChronicDiseaseEnum>.value();
  }
}
