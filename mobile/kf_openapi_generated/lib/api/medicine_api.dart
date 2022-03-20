//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;


class MedicineApi {
  MedicineApi([ApiClient apiClient]) : apiClient = apiClient ?? defaultApiClient;

  final ApiClient apiClient;

  /// Performs an HTTP 'GET /tenant/{tenantId}/medicine-enum/autocomplete' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [String] query:
  ///
  /// * [num] limit:
  Future<Response> tenantTenantIdMedicineEnumAutocompleteGetWithHttpInfo(String tenantId, { String query, num limit, }) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/medicine-enum/autocomplete'
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
  Future<List<InlineResponse2001>> tenantTenantIdMedicineEnumAutocompleteGet(String tenantId, { String query, num limit, }) async {
    final response = await tenantTenantIdMedicineEnumAutocompleteGetWithHttpInfo(tenantId,  query: query, limit: limit, );
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

  /// Performs an HTTP 'DELETE /tenant/{tenantId}/medicine-enum' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [List<String>] idsLeftSquareBracketRightSquareBracket:
  Future<Response> tenantTenantIdMedicineEnumDeleteWithHttpInfo(String tenantId, { List<String> idsLeftSquareBracketRightSquareBracket, }) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/medicine-enum'
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
  Future<void> tenantTenantIdMedicineEnumDelete(String tenantId, { List<String> idsLeftSquareBracketRightSquareBracket, }) async {
    final response = await tenantTenantIdMedicineEnumDeleteWithHttpInfo(tenantId,  idsLeftSquareBracketRightSquareBracket: idsLeftSquareBracketRightSquareBracket, );
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
  }

  /// Performs an HTTP 'GET /tenant/{tenantId}/medicine-enum' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [String] filterLeftSquareBracketIdRightSquareBracket:
  ///
  /// * [String] filterLeftSquareBracketMedicineNameRightSquareBracket:
  ///
  /// * [bool] filterLeftSquareBracketKeptInStockRightSquareBracket:
  ///
  /// * [bool] filterLeftSquareBracketIsCommonRightSquareBracket:
  ///
  /// * [List<num>] filterLeftSquareBracketMsrpRangeRightSquareBracketLeftSquareBracketRightSquareBracket:
  ///
  /// * [List<DateTime>] filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket:
  ///
  /// * [num] offset:
  ///
  /// * [num] limit:
  ///
  /// * [String] orderBy:
  Future<Response> tenantTenantIdMedicineEnumGetWithHttpInfo(String tenantId, { String filterLeftSquareBracketIdRightSquareBracket, String filterLeftSquareBracketMedicineNameRightSquareBracket, bool filterLeftSquareBracketKeptInStockRightSquareBracket, bool filterLeftSquareBracketIsCommonRightSquareBracket, List<num> filterLeftSquareBracketMsrpRangeRightSquareBracketLeftSquareBracketRightSquareBracket, List<DateTime> filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, num offset, num limit, String orderBy, }) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/medicine-enum'
      .replaceAll('{tenantId}', tenantId);

    // ignore: prefer_final_locals
    Object postBody;

    final queryParams = <QueryParam>[];
    final headerParams = <String, String>{};
    final formParams = <String, String>{};

    if (filterLeftSquareBracketIdRightSquareBracket != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('', 'filter[id]', filterLeftSquareBracketIdRightSquareBracket));
    }
    if (filterLeftSquareBracketMedicineNameRightSquareBracket != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('', 'filter[medicineName]', filterLeftSquareBracketMedicineNameRightSquareBracket));
    }
    if (filterLeftSquareBracketKeptInStockRightSquareBracket != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('', 'filter[keptInStock]', filterLeftSquareBracketKeptInStockRightSquareBracket));
    }
    if (filterLeftSquareBracketIsCommonRightSquareBracket != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('', 'filter[isCommon]', filterLeftSquareBracketIsCommonRightSquareBracket));
    }
    if (filterLeftSquareBracketMsrpRangeRightSquareBracketLeftSquareBracketRightSquareBracket != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('multi', 'filter[msrpRange][]', filterLeftSquareBracketMsrpRangeRightSquareBracketLeftSquareBracketRightSquareBracket));
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
  /// * [String] filterLeftSquareBracketMedicineNameRightSquareBracket:
  ///
  /// * [bool] filterLeftSquareBracketKeptInStockRightSquareBracket:
  ///
  /// * [bool] filterLeftSquareBracketIsCommonRightSquareBracket:
  ///
  /// * [List<num>] filterLeftSquareBracketMsrpRangeRightSquareBracketLeftSquareBracketRightSquareBracket:
  ///
  /// * [List<DateTime>] filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket:
  ///
  /// * [num] offset:
  ///
  /// * [num] limit:
  ///
  /// * [String] orderBy:
  Future<InlineResponse2004> tenantTenantIdMedicineEnumGet(String tenantId, { String filterLeftSquareBracketIdRightSquareBracket, String filterLeftSquareBracketMedicineNameRightSquareBracket, bool filterLeftSquareBracketKeptInStockRightSquareBracket, bool filterLeftSquareBracketIsCommonRightSquareBracket, List<num> filterLeftSquareBracketMsrpRangeRightSquareBracketLeftSquareBracketRightSquareBracket, List<DateTime> filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, num offset, num limit, String orderBy, }) async {
    final response = await tenantTenantIdMedicineEnumGetWithHttpInfo(tenantId,  filterLeftSquareBracketIdRightSquareBracket: filterLeftSquareBracketIdRightSquareBracket, filterLeftSquareBracketMedicineNameRightSquareBracket: filterLeftSquareBracketMedicineNameRightSquareBracket, filterLeftSquareBracketKeptInStockRightSquareBracket: filterLeftSquareBracketKeptInStockRightSquareBracket, filterLeftSquareBracketIsCommonRightSquareBracket: filterLeftSquareBracketIsCommonRightSquareBracket, filterLeftSquareBracketMsrpRangeRightSquareBracketLeftSquareBracketRightSquareBracket: filterLeftSquareBracketMsrpRangeRightSquareBracketLeftSquareBracketRightSquareBracket, filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket: filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, offset: offset, limit: limit, orderBy: orderBy, );
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'InlineResponse2004',) as InlineResponse2004;
    
    }
    return Future<InlineResponse2004>.value();
  }

  /// Performs an HTTP 'GET /tenant/{tenantId}/medicine-enum/{id}' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [String] id (required):
  Future<Response> tenantTenantIdMedicineEnumIdGetWithHttpInfo(String tenantId, String id,) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }
    if (id == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: id');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/medicine-enum/{id}'
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
  Future<MedicineEnum> tenantTenantIdMedicineEnumIdGet(String tenantId, String id,) async {
    final response = await tenantTenantIdMedicineEnumIdGetWithHttpInfo(tenantId, id,);
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'MedicineEnum',) as MedicineEnum;
    
    }
    return Future<MedicineEnum>.value();
  }

  /// Performs an HTTP 'PUT /tenant/{tenantId}/medicine-enum/{id}' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [String] id (required):
  ///
  /// * [InlineObject17] inlineObject17 (required):
  Future<Response> tenantTenantIdMedicineEnumIdPutWithHttpInfo(String tenantId, String id, InlineObject17 inlineObject17,) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }
    if (id == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: id');
    }
    if (inlineObject17 == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: inlineObject17');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/medicine-enum/{id}'
      .replaceAll('{tenantId}', tenantId)
      .replaceAll('{id}', id);

    // ignore: prefer_final_locals
    Object postBody = inlineObject17;

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
  /// * [InlineObject17] inlineObject17 (required):
  Future<MedicineEnum> tenantTenantIdMedicineEnumIdPut(String tenantId, String id, InlineObject17 inlineObject17,) async {
    final response = await tenantTenantIdMedicineEnumIdPutWithHttpInfo(tenantId, id, inlineObject17,);
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'MedicineEnum',) as MedicineEnum;
    
    }
    return Future<MedicineEnum>.value();
  }

  /// Performs an HTTP 'POST /tenant/{tenantId}/medicine-enum/import' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [InlineObject19] inlineObject19 (required):
  Future<Response> tenantTenantIdMedicineEnumImportPostWithHttpInfo(String tenantId, InlineObject19 inlineObject19,) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }
    if (inlineObject19 == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: inlineObject19');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/medicine-enum/import'
      .replaceAll('{tenantId}', tenantId);

    // ignore: prefer_final_locals
    Object postBody = inlineObject19;

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
  /// * [InlineObject19] inlineObject19 (required):
  Future<MedicineEnum> tenantTenantIdMedicineEnumImportPost(String tenantId, InlineObject19 inlineObject19,) async {
    final response = await tenantTenantIdMedicineEnumImportPostWithHttpInfo(tenantId, inlineObject19,);
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'MedicineEnum',) as MedicineEnum;
    
    }
    return Future<MedicineEnum>.value();
  }

  /// Performs an HTTP 'POST /tenant/{tenantId}/medicine-enum' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [InlineObject18] inlineObject18 (required):
  Future<Response> tenantTenantIdMedicineEnumPostWithHttpInfo(String tenantId, InlineObject18 inlineObject18,) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }
    if (inlineObject18 == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: inlineObject18');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/medicine-enum'
      .replaceAll('{tenantId}', tenantId);

    // ignore: prefer_final_locals
    Object postBody = inlineObject18;

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
  /// * [InlineObject18] inlineObject18 (required):
  Future<MedicineEnum> tenantTenantIdMedicineEnumPost(String tenantId, InlineObject18 inlineObject18,) async {
    final response = await tenantTenantIdMedicineEnumPostWithHttpInfo(tenantId, inlineObject18,);
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'MedicineEnum',) as MedicineEnum;
    
    }
    return Future<MedicineEnum>.value();
  }
}
