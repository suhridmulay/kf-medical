//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;


class PatientApi {
  PatientApi([ApiClient apiClient]) : apiClient = apiClient ?? defaultApiClient;

  final ApiClient apiClient;

  /// Performs an HTTP 'GET /tenant/{tenantId}/patient/autocomplete' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [String] query:
  ///
  /// * [num] limit:
  Future<Response> tenantTenantIdPatientAutocompleteGetWithHttpInfo(String tenantId, { String query, num limit, }) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/patient/autocomplete'
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
  Future<List<InlineResponse2001>> tenantTenantIdPatientAutocompleteGet(String tenantId, { String query, num limit, }) async {
    final response = await tenantTenantIdPatientAutocompleteGetWithHttpInfo(tenantId,  query: query, limit: limit, );
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

  /// Performs an HTTP 'DELETE /tenant/{tenantId}/patient' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [List<String>] idsLeftSquareBracketRightSquareBracket:
  Future<Response> tenantTenantIdPatientDeleteWithHttpInfo(String tenantId, { List<String> idsLeftSquareBracketRightSquareBracket, }) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/patient'
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
  Future<void> tenantTenantIdPatientDelete(String tenantId, { List<String> idsLeftSquareBracketRightSquareBracket, }) async {
    final response = await tenantTenantIdPatientDeleteWithHttpInfo(tenantId,  idsLeftSquareBracketRightSquareBracket: idsLeftSquareBracketRightSquareBracket, );
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
  }

  /// Performs an HTTP 'GET /tenant/{tenantId}/patient' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [String] filterLeftSquareBracketIdRightSquareBracket:
  ///
  /// * [String] filterLeftSquareBracketFirstNameRightSquareBracket:
  ///
  /// * [String] filterLeftSquareBracketLastNameRightSquareBracket:
  ///
  /// * [String] filterLeftSquareBracketFullNameRightSquareBracket:
  ///
  /// * [String] filterLeftSquareBracketGenderRightSquareBracket:
  ///
  /// * [String] filterLeftSquareBracketLocalityNameRightSquareBracket:
  ///
  /// * [String] filterLeftSquareBracketMobileNumberRightSquareBracket:
  ///
  /// * [String] filterLeftSquareBracketAadharNumberRightSquareBracket:
  ///
  /// * [List<DateTime>] filterLeftSquareBracketDateOfBirthRangeRightSquareBracketLeftSquareBracketRightSquareBracket:
  ///
  /// * [List<DateTime>] filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket:
  ///
  /// * [num] offset:
  ///
  /// * [num] limit:
  ///
  /// * [String] orderBy:
  Future<Response> tenantTenantIdPatientGetWithHttpInfo(String tenantId, { String filterLeftSquareBracketIdRightSquareBracket, String filterLeftSquareBracketFirstNameRightSquareBracket, String filterLeftSquareBracketLastNameRightSquareBracket, String filterLeftSquareBracketFullNameRightSquareBracket, String filterLeftSquareBracketGenderRightSquareBracket, String filterLeftSquareBracketLocalityNameRightSquareBracket, String filterLeftSquareBracketMobileNumberRightSquareBracket, String filterLeftSquareBracketAadharNumberRightSquareBracket, List<DateTime> filterLeftSquareBracketDateOfBirthRangeRightSquareBracketLeftSquareBracketRightSquareBracket, List<DateTime> filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, num offset, num limit, String orderBy, }) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/patient'
      .replaceAll('{tenantId}', tenantId);

    // ignore: prefer_final_locals
    Object postBody;

    final queryParams = <QueryParam>[];
    final headerParams = <String, String>{};
    final formParams = <String, String>{};

    if (filterLeftSquareBracketIdRightSquareBracket != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('', 'filter[id]', filterLeftSquareBracketIdRightSquareBracket));
    }
    if (filterLeftSquareBracketFirstNameRightSquareBracket != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('', 'filter[firstName]', filterLeftSquareBracketFirstNameRightSquareBracket));
    }
    if (filterLeftSquareBracketLastNameRightSquareBracket != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('', 'filter[lastName]', filterLeftSquareBracketLastNameRightSquareBracket));
    }
    if (filterLeftSquareBracketFullNameRightSquareBracket != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('', 'filter[fullName]', filterLeftSquareBracketFullNameRightSquareBracket));
    }
    if (filterLeftSquareBracketGenderRightSquareBracket != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('', 'filter[gender]', filterLeftSquareBracketGenderRightSquareBracket));
    }
    if (filterLeftSquareBracketLocalityNameRightSquareBracket != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('', 'filter[localityName]', filterLeftSquareBracketLocalityNameRightSquareBracket));
    }
    if (filterLeftSquareBracketMobileNumberRightSquareBracket != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('', 'filter[mobileNumber]', filterLeftSquareBracketMobileNumberRightSquareBracket));
    }
    if (filterLeftSquareBracketAadharNumberRightSquareBracket != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('', 'filter[aadharNumber]', filterLeftSquareBracketAadharNumberRightSquareBracket));
    }
    if (filterLeftSquareBracketDateOfBirthRangeRightSquareBracketLeftSquareBracketRightSquareBracket != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('multi', 'filter[dateOfBirthRange][]', filterLeftSquareBracketDateOfBirthRangeRightSquareBracketLeftSquareBracketRightSquareBracket));
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
  /// * [String] filterLeftSquareBracketFirstNameRightSquareBracket:
  ///
  /// * [String] filterLeftSquareBracketLastNameRightSquareBracket:
  ///
  /// * [String] filterLeftSquareBracketFullNameRightSquareBracket:
  ///
  /// * [String] filterLeftSquareBracketGenderRightSquareBracket:
  ///
  /// * [String] filterLeftSquareBracketLocalityNameRightSquareBracket:
  ///
  /// * [String] filterLeftSquareBracketMobileNumberRightSquareBracket:
  ///
  /// * [String] filterLeftSquareBracketAadharNumberRightSquareBracket:
  ///
  /// * [List<DateTime>] filterLeftSquareBracketDateOfBirthRangeRightSquareBracketLeftSquareBracketRightSquareBracket:
  ///
  /// * [List<DateTime>] filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket:
  ///
  /// * [num] offset:
  ///
  /// * [num] limit:
  ///
  /// * [String] orderBy:
  Future<InlineResponse200> tenantTenantIdPatientGet(String tenantId, { String filterLeftSquareBracketIdRightSquareBracket, String filterLeftSquareBracketFirstNameRightSquareBracket, String filterLeftSquareBracketLastNameRightSquareBracket, String filterLeftSquareBracketFullNameRightSquareBracket, String filterLeftSquareBracketGenderRightSquareBracket, String filterLeftSquareBracketLocalityNameRightSquareBracket, String filterLeftSquareBracketMobileNumberRightSquareBracket, String filterLeftSquareBracketAadharNumberRightSquareBracket, List<DateTime> filterLeftSquareBracketDateOfBirthRangeRightSquareBracketLeftSquareBracketRightSquareBracket, List<DateTime> filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, num offset, num limit, String orderBy, }) async {
    final response = await tenantTenantIdPatientGetWithHttpInfo(tenantId,  filterLeftSquareBracketIdRightSquareBracket: filterLeftSquareBracketIdRightSquareBracket, filterLeftSquareBracketFirstNameRightSquareBracket: filterLeftSquareBracketFirstNameRightSquareBracket, filterLeftSquareBracketLastNameRightSquareBracket: filterLeftSquareBracketLastNameRightSquareBracket, filterLeftSquareBracketFullNameRightSquareBracket: filterLeftSquareBracketFullNameRightSquareBracket, filterLeftSquareBracketGenderRightSquareBracket: filterLeftSquareBracketGenderRightSquareBracket, filterLeftSquareBracketLocalityNameRightSquareBracket: filterLeftSquareBracketLocalityNameRightSquareBracket, filterLeftSquareBracketMobileNumberRightSquareBracket: filterLeftSquareBracketMobileNumberRightSquareBracket, filterLeftSquareBracketAadharNumberRightSquareBracket: filterLeftSquareBracketAadharNumberRightSquareBracket, filterLeftSquareBracketDateOfBirthRangeRightSquareBracketLeftSquareBracketRightSquareBracket: filterLeftSquareBracketDateOfBirthRangeRightSquareBracketLeftSquareBracketRightSquareBracket, filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket: filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, offset: offset, limit: limit, orderBy: orderBy, );
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'InlineResponse200',) as InlineResponse200;
    
    }
    return Future<InlineResponse200>.value();
  }

  /// Performs an HTTP 'GET /tenant/{tenantId}/patient/{id}' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [String] id (required):
  Future<Response> tenantTenantIdPatientIdGetWithHttpInfo(String tenantId, String id,) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }
    if (id == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: id');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/patient/{id}'
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
  Future<Patient> tenantTenantIdPatientIdGet(String tenantId, String id,) async {
    final response = await tenantTenantIdPatientIdGetWithHttpInfo(tenantId, id,);
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'Patient',) as Patient;
    
    }
    return Future<Patient>.value();
  }

  /// Performs an HTTP 'PUT /tenant/{tenantId}/patient/{id}' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [String] id (required):
  ///
  /// * [InlineObject8] inlineObject8 (required):
  Future<Response> tenantTenantIdPatientIdPutWithHttpInfo(String tenantId, String id, InlineObject8 inlineObject8,) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }
    if (id == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: id');
    }
    if (inlineObject8 == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: inlineObject8');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/patient/{id}'
      .replaceAll('{tenantId}', tenantId)
      .replaceAll('{id}', id);

    // ignore: prefer_final_locals
    Object postBody = inlineObject8;

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
  /// * [InlineObject8] inlineObject8 (required):
  Future<Patient> tenantTenantIdPatientIdPut(String tenantId, String id, InlineObject8 inlineObject8,) async {
    final response = await tenantTenantIdPatientIdPutWithHttpInfo(tenantId, id, inlineObject8,);
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'Patient',) as Patient;
    
    }
    return Future<Patient>.value();
  }

  /// Performs an HTTP 'POST /tenant/{tenantId}/patient/import' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [InlineObject10] inlineObject10 (required):
  Future<Response> tenantTenantIdPatientImportPostWithHttpInfo(String tenantId, InlineObject10 inlineObject10,) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }
    if (inlineObject10 == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: inlineObject10');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/patient/import'
      .replaceAll('{tenantId}', tenantId);

    // ignore: prefer_final_locals
    Object postBody = inlineObject10;

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
  /// * [InlineObject10] inlineObject10 (required):
  Future<Patient> tenantTenantIdPatientImportPost(String tenantId, InlineObject10 inlineObject10,) async {
    final response = await tenantTenantIdPatientImportPostWithHttpInfo(tenantId, inlineObject10,);
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'Patient',) as Patient;
    
    }
    return Future<Patient>.value();
  }

  /// Performs an HTTP 'POST /tenant/{tenantId}/patient' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [InlineObject9] inlineObject9 (required):
  Future<Response> tenantTenantIdPatientPostWithHttpInfo(String tenantId, InlineObject9 inlineObject9,) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }
    if (inlineObject9 == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: inlineObject9');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/patient'
      .replaceAll('{tenantId}', tenantId);

    // ignore: prefer_final_locals
    Object postBody = inlineObject9;

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
  /// * [InlineObject9] inlineObject9 (required):
  Future<Patient> tenantTenantIdPatientPost(String tenantId, InlineObject9 inlineObject9,) async {
    final response = await tenantTenantIdPatientPostWithHttpInfo(tenantId, inlineObject9,);
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'Patient',) as Patient;
    
    }
    return Future<Patient>.value();
  }
}
