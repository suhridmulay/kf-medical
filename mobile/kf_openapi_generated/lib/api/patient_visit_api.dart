//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;


class PatientVisitApi {
  PatientVisitApi([ApiClient apiClient]) : apiClient = apiClient ?? defaultApiClient;

  final ApiClient apiClient;

  /// Performs an HTTP 'GET /tenant/{tenantId}/patient-visit/autocomplete' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [String] query:
  ///
  /// * [num] limit:
  Future<Response> tenantTenantIdPatientVisitAutocompleteGetWithHttpInfo(String tenantId, { String query, num limit, }) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/patient-visit/autocomplete'
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
  Future<List<InlineResponse2001>> tenantTenantIdPatientVisitAutocompleteGet(String tenantId, { String query, num limit, }) async {
    final response = await tenantTenantIdPatientVisitAutocompleteGetWithHttpInfo(tenantId,  query: query, limit: limit, );
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

  /// Performs an HTTP 'DELETE /tenant/{tenantId}/patient-visit' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [List<String>] idsLeftSquareBracketRightSquareBracket:
  Future<Response> tenantTenantIdPatientVisitDeleteWithHttpInfo(String tenantId, { List<String> idsLeftSquareBracketRightSquareBracket, }) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/patient-visit'
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
  Future<void> tenantTenantIdPatientVisitDelete(String tenantId, { List<String> idsLeftSquareBracketRightSquareBracket, }) async {
    final response = await tenantTenantIdPatientVisitDeleteWithHttpInfo(tenantId,  idsLeftSquareBracketRightSquareBracket: idsLeftSquareBracketRightSquareBracket, );
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
  }

  /// Performs an HTTP 'GET /tenant/{tenantId}/patient-visit' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [String] filterLeftSquareBracketIdRightSquareBracket:
  ///
  /// * [String] filterLeftSquareBracketPatientRightSquareBracket:
  ///
  /// * [String] filterLeftSquareBracketMedicalCenterRightSquareBracket:
  ///
  /// * [String] filterLeftSquareBracketDoctorRightSquareBracket:
  ///
  /// * [List<DateTime>] filterLeftSquareBracketVisitDateRangeRightSquareBracketLeftSquareBracketRightSquareBracket:
  ///
  /// * [bool] filterLeftSquareBracketRepeatVisitRightSquareBracket:
  ///
  /// * [String] filterLeftSquareBracketCaseSeverityRightSquareBracket:
  ///
  /// * [bool] filterLeftSquareBracketIsTelemedReferralRightSquareBracket:
  ///
  /// * [List<num>] filterLeftSquareBracketPatientCopayRangeRightSquareBracketLeftSquareBracketRightSquareBracket:
  ///
  /// * [List<num>] filterLeftSquareBracketTelemedCopayRangeRightSquareBracketLeftSquareBracketRightSquareBracket:
  ///
  /// * [String] filterLeftSquareBracketTelemedicineDoctorRightSquareBracket:
  ///
  /// * [List<DateTime>] filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket:
  ///
  /// * [num] offset:
  ///
  /// * [num] limit:
  ///
  /// * [String] orderBy:
  Future<Response> tenantTenantIdPatientVisitGetWithHttpInfo(String tenantId, { String filterLeftSquareBracketIdRightSquareBracket, String filterLeftSquareBracketPatientRightSquareBracket, String filterLeftSquareBracketMedicalCenterRightSquareBracket, String filterLeftSquareBracketDoctorRightSquareBracket, List<DateTime> filterLeftSquareBracketVisitDateRangeRightSquareBracketLeftSquareBracketRightSquareBracket, bool filterLeftSquareBracketRepeatVisitRightSquareBracket, String filterLeftSquareBracketCaseSeverityRightSquareBracket, bool filterLeftSquareBracketIsTelemedReferralRightSquareBracket, List<num> filterLeftSquareBracketPatientCopayRangeRightSquareBracketLeftSquareBracketRightSquareBracket, List<num> filterLeftSquareBracketTelemedCopayRangeRightSquareBracketLeftSquareBracketRightSquareBracket, String filterLeftSquareBracketTelemedicineDoctorRightSquareBracket, List<DateTime> filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, num offset, num limit, String orderBy, }) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/patient-visit'
      .replaceAll('{tenantId}', tenantId);

    // ignore: prefer_final_locals
    Object postBody;

    final queryParams = <QueryParam>[];
    final headerParams = <String, String>{};
    final formParams = <String, String>{};

    if (filterLeftSquareBracketIdRightSquareBracket != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('', 'filter[id]', filterLeftSquareBracketIdRightSquareBracket));
    }
    if (filterLeftSquareBracketPatientRightSquareBracket != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('', 'filter[patient]', filterLeftSquareBracketPatientRightSquareBracket));
    }
    if (filterLeftSquareBracketMedicalCenterRightSquareBracket != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('', 'filter[medicalCenter]', filterLeftSquareBracketMedicalCenterRightSquareBracket));
    }
    if (filterLeftSquareBracketDoctorRightSquareBracket != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('', 'filter[doctor]', filterLeftSquareBracketDoctorRightSquareBracket));
    }
    if (filterLeftSquareBracketVisitDateRangeRightSquareBracketLeftSquareBracketRightSquareBracket != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('multi', 'filter[visitDateRange][]', filterLeftSquareBracketVisitDateRangeRightSquareBracketLeftSquareBracketRightSquareBracket));
    }
    if (filterLeftSquareBracketRepeatVisitRightSquareBracket != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('', 'filter[repeatVisit]', filterLeftSquareBracketRepeatVisitRightSquareBracket));
    }
    if (filterLeftSquareBracketCaseSeverityRightSquareBracket != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('', 'filter[caseSeverity]', filterLeftSquareBracketCaseSeverityRightSquareBracket));
    }
    if (filterLeftSquareBracketIsTelemedReferralRightSquareBracket != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('', 'filter[isTelemedReferral]', filterLeftSquareBracketIsTelemedReferralRightSquareBracket));
    }
    if (filterLeftSquareBracketPatientCopayRangeRightSquareBracketLeftSquareBracketRightSquareBracket != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('multi', 'filter[patientCopayRange][]', filterLeftSquareBracketPatientCopayRangeRightSquareBracketLeftSquareBracketRightSquareBracket));
    }
    if (filterLeftSquareBracketTelemedCopayRangeRightSquareBracketLeftSquareBracketRightSquareBracket != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('multi', 'filter[telemedCopayRange][]', filterLeftSquareBracketTelemedCopayRangeRightSquareBracketLeftSquareBracketRightSquareBracket));
    }
    if (filterLeftSquareBracketTelemedicineDoctorRightSquareBracket != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('', 'filter[telemedicineDoctor]', filterLeftSquareBracketTelemedicineDoctorRightSquareBracket));
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
  /// * [String] filterLeftSquareBracketPatientRightSquareBracket:
  ///
  /// * [String] filterLeftSquareBracketMedicalCenterRightSquareBracket:
  ///
  /// * [String] filterLeftSquareBracketDoctorRightSquareBracket:
  ///
  /// * [List<DateTime>] filterLeftSquareBracketVisitDateRangeRightSquareBracketLeftSquareBracketRightSquareBracket:
  ///
  /// * [bool] filterLeftSquareBracketRepeatVisitRightSquareBracket:
  ///
  /// * [String] filterLeftSquareBracketCaseSeverityRightSquareBracket:
  ///
  /// * [bool] filterLeftSquareBracketIsTelemedReferralRightSquareBracket:
  ///
  /// * [List<num>] filterLeftSquareBracketPatientCopayRangeRightSquareBracketLeftSquareBracketRightSquareBracket:
  ///
  /// * [List<num>] filterLeftSquareBracketTelemedCopayRangeRightSquareBracketLeftSquareBracketRightSquareBracket:
  ///
  /// * [String] filterLeftSquareBracketTelemedicineDoctorRightSquareBracket:
  ///
  /// * [List<DateTime>] filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket:
  ///
  /// * [num] offset:
  ///
  /// * [num] limit:
  ///
  /// * [String] orderBy:
  Future<InlineResponse2003> tenantTenantIdPatientVisitGet(String tenantId, { String filterLeftSquareBracketIdRightSquareBracket, String filterLeftSquareBracketPatientRightSquareBracket, String filterLeftSquareBracketMedicalCenterRightSquareBracket, String filterLeftSquareBracketDoctorRightSquareBracket, List<DateTime> filterLeftSquareBracketVisitDateRangeRightSquareBracketLeftSquareBracketRightSquareBracket, bool filterLeftSquareBracketRepeatVisitRightSquareBracket, String filterLeftSquareBracketCaseSeverityRightSquareBracket, bool filterLeftSquareBracketIsTelemedReferralRightSquareBracket, List<num> filterLeftSquareBracketPatientCopayRangeRightSquareBracketLeftSquareBracketRightSquareBracket, List<num> filterLeftSquareBracketTelemedCopayRangeRightSquareBracketLeftSquareBracketRightSquareBracket, String filterLeftSquareBracketTelemedicineDoctorRightSquareBracket, List<DateTime> filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, num offset, num limit, String orderBy, }) async {
    final response = await tenantTenantIdPatientVisitGetWithHttpInfo(tenantId,  filterLeftSquareBracketIdRightSquareBracket: filterLeftSquareBracketIdRightSquareBracket, filterLeftSquareBracketPatientRightSquareBracket: filterLeftSquareBracketPatientRightSquareBracket, filterLeftSquareBracketMedicalCenterRightSquareBracket: filterLeftSquareBracketMedicalCenterRightSquareBracket, filterLeftSquareBracketDoctorRightSquareBracket: filterLeftSquareBracketDoctorRightSquareBracket, filterLeftSquareBracketVisitDateRangeRightSquareBracketLeftSquareBracketRightSquareBracket: filterLeftSquareBracketVisitDateRangeRightSquareBracketLeftSquareBracketRightSquareBracket, filterLeftSquareBracketRepeatVisitRightSquareBracket: filterLeftSquareBracketRepeatVisitRightSquareBracket, filterLeftSquareBracketCaseSeverityRightSquareBracket: filterLeftSquareBracketCaseSeverityRightSquareBracket, filterLeftSquareBracketIsTelemedReferralRightSquareBracket: filterLeftSquareBracketIsTelemedReferralRightSquareBracket, filterLeftSquareBracketPatientCopayRangeRightSquareBracketLeftSquareBracketRightSquareBracket: filterLeftSquareBracketPatientCopayRangeRightSquareBracketLeftSquareBracketRightSquareBracket, filterLeftSquareBracketTelemedCopayRangeRightSquareBracketLeftSquareBracketRightSquareBracket: filterLeftSquareBracketTelemedCopayRangeRightSquareBracketLeftSquareBracketRightSquareBracket, filterLeftSquareBracketTelemedicineDoctorRightSquareBracket: filterLeftSquareBracketTelemedicineDoctorRightSquareBracket, filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket: filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, offset: offset, limit: limit, orderBy: orderBy, );
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'InlineResponse2003',) as InlineResponse2003;
    
    }
    return Future<InlineResponse2003>.value();
  }

  /// Performs an HTTP 'GET /tenant/{tenantId}/patient-visit/{id}' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [String] id (required):
  Future<Response> tenantTenantIdPatientVisitIdGetWithHttpInfo(String tenantId, String id,) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }
    if (id == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: id');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/patient-visit/{id}'
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
  Future<PatientVisit> tenantTenantIdPatientVisitIdGet(String tenantId, String id,) async {
    final response = await tenantTenantIdPatientVisitIdGetWithHttpInfo(tenantId, id,);
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'PatientVisit',) as PatientVisit;
    
    }
    return Future<PatientVisit>.value();
  }

  /// Performs an HTTP 'PUT /tenant/{tenantId}/patient-visit/{id}' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [String] id (required):
  ///
  /// * [InlineObject14] inlineObject14 (required):
  Future<Response> tenantTenantIdPatientVisitIdPutWithHttpInfo(String tenantId, String id, InlineObject14 inlineObject14,) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }
    if (id == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: id');
    }
    if (inlineObject14 == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: inlineObject14');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/patient-visit/{id}'
      .replaceAll('{tenantId}', tenantId)
      .replaceAll('{id}', id);

    // ignore: prefer_final_locals
    Object postBody = inlineObject14;

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
  /// * [InlineObject14] inlineObject14 (required):
  Future<PatientVisit> tenantTenantIdPatientVisitIdPut(String tenantId, String id, InlineObject14 inlineObject14,) async {
    final response = await tenantTenantIdPatientVisitIdPutWithHttpInfo(tenantId, id, inlineObject14,);
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'PatientVisit',) as PatientVisit;
    
    }
    return Future<PatientVisit>.value();
  }

  /// Performs an HTTP 'POST /tenant/{tenantId}/patient-visit/import' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [InlineObject16] inlineObject16 (required):
  Future<Response> tenantTenantIdPatientVisitImportPostWithHttpInfo(String tenantId, InlineObject16 inlineObject16,) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }
    if (inlineObject16 == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: inlineObject16');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/patient-visit/import'
      .replaceAll('{tenantId}', tenantId);

    // ignore: prefer_final_locals
    Object postBody = inlineObject16;

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
  /// * [InlineObject16] inlineObject16 (required):
  Future<PatientVisit> tenantTenantIdPatientVisitImportPost(String tenantId, InlineObject16 inlineObject16,) async {
    final response = await tenantTenantIdPatientVisitImportPostWithHttpInfo(tenantId, inlineObject16,);
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'PatientVisit',) as PatientVisit;
    
    }
    return Future<PatientVisit>.value();
  }

  /// Performs an HTTP 'POST /tenant/{tenantId}/patient-visit' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [InlineObject15] inlineObject15 (required):
  Future<Response> tenantTenantIdPatientVisitPostWithHttpInfo(String tenantId, InlineObject15 inlineObject15,) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }
    if (inlineObject15 == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: inlineObject15');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/patient-visit'
      .replaceAll('{tenantId}', tenantId);

    // ignore: prefer_final_locals
    Object postBody = inlineObject15;

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
  /// * [InlineObject15] inlineObject15 (required):
  Future<PatientVisit> tenantTenantIdPatientVisitPost(String tenantId, InlineObject15 inlineObject15,) async {
    final response = await tenantTenantIdPatientVisitPostWithHttpInfo(tenantId, inlineObject15,);
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'PatientVisit',) as PatientVisit;
    
    }
    return Future<PatientVisit>.value();
  }
}
