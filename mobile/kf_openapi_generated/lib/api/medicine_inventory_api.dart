//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;


class MedicineInventoryApi {
  MedicineInventoryApi([ApiClient apiClient]) : apiClient = apiClient ?? defaultApiClient;

  final ApiClient apiClient;

  /// Performs an HTTP 'GET /tenant/{tenantId}/medicine-inventory/autocomplete' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [String] query:
  ///
  /// * [num] limit:
  Future<Response> tenantTenantIdMedicineInventoryAutocompleteGetWithHttpInfo(String tenantId, { String query, num limit, }) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/medicine-inventory/autocomplete'
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
  Future<List<InlineResponse2001>> tenantTenantIdMedicineInventoryAutocompleteGet(String tenantId, { String query, num limit, }) async {
    final response = await tenantTenantIdMedicineInventoryAutocompleteGetWithHttpInfo(tenantId,  query: query, limit: limit, );
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

  /// Performs an HTTP 'DELETE /tenant/{tenantId}/medicine-inventory' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [List<String>] idsLeftSquareBracketRightSquareBracket:
  Future<Response> tenantTenantIdMedicineInventoryDeleteWithHttpInfo(String tenantId, { List<String> idsLeftSquareBracketRightSquareBracket, }) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/medicine-inventory'
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
  Future<void> tenantTenantIdMedicineInventoryDelete(String tenantId, { List<String> idsLeftSquareBracketRightSquareBracket, }) async {
    final response = await tenantTenantIdMedicineInventoryDeleteWithHttpInfo(tenantId,  idsLeftSquareBracketRightSquareBracket: idsLeftSquareBracketRightSquareBracket, );
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
  }

  /// Performs an HTTP 'GET /tenant/{tenantId}/medicine-inventory' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [String] filterLeftSquareBracketIdRightSquareBracket:
  ///
  /// * [String] filterLeftSquareBracketMedicineRightSquareBracket:
  ///
  /// * [List<DateTime>] filterLeftSquareBracketInventoryDateRangeRightSquareBracketLeftSquareBracketRightSquareBracket:
  ///
  /// * [List<int>] filterLeftSquareBracketCountRangeRightSquareBracketLeftSquareBracketRightSquareBracket:
  ///
  /// * [List<DateTime>] filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket:
  ///
  /// * [num] offset:
  ///
  /// * [num] limit:
  ///
  /// * [String] orderBy:
  Future<Response> tenantTenantIdMedicineInventoryGetWithHttpInfo(String tenantId, { String filterLeftSquareBracketIdRightSquareBracket, String filterLeftSquareBracketMedicineRightSquareBracket, List<DateTime> filterLeftSquareBracketInventoryDateRangeRightSquareBracketLeftSquareBracketRightSquareBracket, List<int> filterLeftSquareBracketCountRangeRightSquareBracketLeftSquareBracketRightSquareBracket, List<DateTime> filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, num offset, num limit, String orderBy, }) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/medicine-inventory'
      .replaceAll('{tenantId}', tenantId);

    // ignore: prefer_final_locals
    Object postBody;

    final queryParams = <QueryParam>[];
    final headerParams = <String, String>{};
    final formParams = <String, String>{};

    if (filterLeftSquareBracketIdRightSquareBracket != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('', 'filter[id]', filterLeftSquareBracketIdRightSquareBracket));
    }
    if (filterLeftSquareBracketMedicineRightSquareBracket != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('', 'filter[medicine]', filterLeftSquareBracketMedicineRightSquareBracket));
    }
    if (filterLeftSquareBracketInventoryDateRangeRightSquareBracketLeftSquareBracketRightSquareBracket != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('multi', 'filter[inventoryDateRange][]', filterLeftSquareBracketInventoryDateRangeRightSquareBracketLeftSquareBracketRightSquareBracket));
    }
    if (filterLeftSquareBracketCountRangeRightSquareBracketLeftSquareBracketRightSquareBracket != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('multi', 'filter[countRange][]', filterLeftSquareBracketCountRangeRightSquareBracketLeftSquareBracketRightSquareBracket));
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
  /// * [String] filterLeftSquareBracketMedicineRightSquareBracket:
  ///
  /// * [List<DateTime>] filterLeftSquareBracketInventoryDateRangeRightSquareBracketLeftSquareBracketRightSquareBracket:
  ///
  /// * [List<int>] filterLeftSquareBracketCountRangeRightSquareBracketLeftSquareBracketRightSquareBracket:
  ///
  /// * [List<DateTime>] filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket:
  ///
  /// * [num] offset:
  ///
  /// * [num] limit:
  ///
  /// * [String] orderBy:
  Future<InlineResponse2009> tenantTenantIdMedicineInventoryGet(String tenantId, { String filterLeftSquareBracketIdRightSquareBracket, String filterLeftSquareBracketMedicineRightSquareBracket, List<DateTime> filterLeftSquareBracketInventoryDateRangeRightSquareBracketLeftSquareBracketRightSquareBracket, List<int> filterLeftSquareBracketCountRangeRightSquareBracketLeftSquareBracketRightSquareBracket, List<DateTime> filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, num offset, num limit, String orderBy, }) async {
    final response = await tenantTenantIdMedicineInventoryGetWithHttpInfo(tenantId,  filterLeftSquareBracketIdRightSquareBracket: filterLeftSquareBracketIdRightSquareBracket, filterLeftSquareBracketMedicineRightSquareBracket: filterLeftSquareBracketMedicineRightSquareBracket, filterLeftSquareBracketInventoryDateRangeRightSquareBracketLeftSquareBracketRightSquareBracket: filterLeftSquareBracketInventoryDateRangeRightSquareBracketLeftSquareBracketRightSquareBracket, filterLeftSquareBracketCountRangeRightSquareBracketLeftSquareBracketRightSquareBracket: filterLeftSquareBracketCountRangeRightSquareBracketLeftSquareBracketRightSquareBracket, filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket: filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, offset: offset, limit: limit, orderBy: orderBy, );
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'InlineResponse2009',) as InlineResponse2009;
    
    }
    return Future<InlineResponse2009>.value();
  }

  /// Performs an HTTP 'GET /tenant/{tenantId}/medicine-inventory/{id}' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [String] id (required):
  Future<Response> tenantTenantIdMedicineInventoryIdGetWithHttpInfo(String tenantId, String id,) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }
    if (id == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: id');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/medicine-inventory/{id}'
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
  Future<MedicineInventory> tenantTenantIdMedicineInventoryIdGet(String tenantId, String id,) async {
    final response = await tenantTenantIdMedicineInventoryIdGetWithHttpInfo(tenantId, id,);
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'MedicineInventory',) as MedicineInventory;
    
    }
    return Future<MedicineInventory>.value();
  }

  /// Performs an HTTP 'PUT /tenant/{tenantId}/medicine-inventory/{id}' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [String] id (required):
  ///
  /// * [InlineObject32] inlineObject32 (required):
  Future<Response> tenantTenantIdMedicineInventoryIdPutWithHttpInfo(String tenantId, String id, InlineObject32 inlineObject32,) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }
    if (id == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: id');
    }
    if (inlineObject32 == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: inlineObject32');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/medicine-inventory/{id}'
      .replaceAll('{tenantId}', tenantId)
      .replaceAll('{id}', id);

    // ignore: prefer_final_locals
    Object postBody = inlineObject32;

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
  /// * [InlineObject32] inlineObject32 (required):
  Future<MedicineInventory> tenantTenantIdMedicineInventoryIdPut(String tenantId, String id, InlineObject32 inlineObject32,) async {
    final response = await tenantTenantIdMedicineInventoryIdPutWithHttpInfo(tenantId, id, inlineObject32,);
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'MedicineInventory',) as MedicineInventory;
    
    }
    return Future<MedicineInventory>.value();
  }

  /// Performs an HTTP 'POST /tenant/{tenantId}/medicine-inventory/import' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [InlineObject34] inlineObject34 (required):
  Future<Response> tenantTenantIdMedicineInventoryImportPostWithHttpInfo(String tenantId, InlineObject34 inlineObject34,) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }
    if (inlineObject34 == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: inlineObject34');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/medicine-inventory/import'
      .replaceAll('{tenantId}', tenantId);

    // ignore: prefer_final_locals
    Object postBody = inlineObject34;

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
  /// * [InlineObject34] inlineObject34 (required):
  Future<MedicineInventory> tenantTenantIdMedicineInventoryImportPost(String tenantId, InlineObject34 inlineObject34,) async {
    final response = await tenantTenantIdMedicineInventoryImportPostWithHttpInfo(tenantId, inlineObject34,);
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'MedicineInventory',) as MedicineInventory;
    
    }
    return Future<MedicineInventory>.value();
  }

  /// Performs an HTTP 'POST /tenant/{tenantId}/medicine-inventory' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [InlineObject33] inlineObject33 (required):
  Future<Response> tenantTenantIdMedicineInventoryPostWithHttpInfo(String tenantId, InlineObject33 inlineObject33,) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }
    if (inlineObject33 == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: inlineObject33');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/medicine-inventory'
      .replaceAll('{tenantId}', tenantId);

    // ignore: prefer_final_locals
    Object postBody = inlineObject33;

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
  /// * [InlineObject33] inlineObject33 (required):
  Future<MedicineInventory> tenantTenantIdMedicineInventoryPost(String tenantId, InlineObject33 inlineObject33,) async {
    final response = await tenantTenantIdMedicineInventoryPostWithHttpInfo(tenantId, inlineObject33,);
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'MedicineInventory',) as MedicineInventory;
    
    }
    return Future<MedicineInventory>.value();
  }
}
