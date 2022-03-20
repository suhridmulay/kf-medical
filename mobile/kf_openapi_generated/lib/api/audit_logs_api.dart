//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;


class AuditLogsApi {
  AuditLogsApi([ApiClient apiClient]) : apiClient = apiClient ?? defaultApiClient;

  final ApiClient apiClient;

  /// Performs an HTTP 'GET /tenant/{tenantId}/audit-log' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [List<DateTime>] filterLeftSquareBracketTimestampRangeRightSquareBracketLeftSquareBracketRightSquareBracket:
  ///
  /// * [String] filterLeftSquareBracketActionRightSquareBracket:
  ///
  /// * [String] filterLeftSquareBracketEntityIdRightSquareBracket:
  ///
  /// * [String] filterLeftSquareBracketCreatedByEmailRightSquareBracket:
  ///
  /// * [List<String>] filterLeftSquareBracketEntityNamesRightSquareBracketLeftSquareBracketRightSquareBracket:
  ///
  /// * [num] offset:
  ///
  /// * [num] limit:
  ///
  /// * [String] orderBy:
  Future<Response> tenantTenantIdAuditLogGetWithHttpInfo(String tenantId, { List<DateTime> filterLeftSquareBracketTimestampRangeRightSquareBracketLeftSquareBracketRightSquareBracket, String filterLeftSquareBracketActionRightSquareBracket, String filterLeftSquareBracketEntityIdRightSquareBracket, String filterLeftSquareBracketCreatedByEmailRightSquareBracket, List<String> filterLeftSquareBracketEntityNamesRightSquareBracketLeftSquareBracketRightSquareBracket, num offset, num limit, String orderBy, }) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/audit-log'
      .replaceAll('{tenantId}', tenantId);

    // ignore: prefer_final_locals
    Object postBody;

    final queryParams = <QueryParam>[];
    final headerParams = <String, String>{};
    final formParams = <String, String>{};

    if (filterLeftSquareBracketTimestampRangeRightSquareBracketLeftSquareBracketRightSquareBracket != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('multi', 'filter[timestampRange][]', filterLeftSquareBracketTimestampRangeRightSquareBracketLeftSquareBracketRightSquareBracket));
    }
    if (filterLeftSquareBracketActionRightSquareBracket != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('', 'filter[action]', filterLeftSquareBracketActionRightSquareBracket));
    }
    if (filterLeftSquareBracketEntityIdRightSquareBracket != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('', 'filter[entityId]', filterLeftSquareBracketEntityIdRightSquareBracket));
    }
    if (filterLeftSquareBracketCreatedByEmailRightSquareBracket != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('', 'filter[createdByEmail]', filterLeftSquareBracketCreatedByEmailRightSquareBracket));
    }
    if (filterLeftSquareBracketEntityNamesRightSquareBracketLeftSquareBracketRightSquareBracket != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('multi', 'filter[entityNames][]', filterLeftSquareBracketEntityNamesRightSquareBracketLeftSquareBracketRightSquareBracket));
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
  /// * [List<DateTime>] filterLeftSquareBracketTimestampRangeRightSquareBracketLeftSquareBracketRightSquareBracket:
  ///
  /// * [String] filterLeftSquareBracketActionRightSquareBracket:
  ///
  /// * [String] filterLeftSquareBracketEntityIdRightSquareBracket:
  ///
  /// * [String] filterLeftSquareBracketCreatedByEmailRightSquareBracket:
  ///
  /// * [List<String>] filterLeftSquareBracketEntityNamesRightSquareBracketLeftSquareBracketRightSquareBracket:
  ///
  /// * [num] offset:
  ///
  /// * [num] limit:
  ///
  /// * [String] orderBy:
  Future<InlineResponse20013> tenantTenantIdAuditLogGet(String tenantId, { List<DateTime> filterLeftSquareBracketTimestampRangeRightSquareBracketLeftSquareBracketRightSquareBracket, String filterLeftSquareBracketActionRightSquareBracket, String filterLeftSquareBracketEntityIdRightSquareBracket, String filterLeftSquareBracketCreatedByEmailRightSquareBracket, List<String> filterLeftSquareBracketEntityNamesRightSquareBracketLeftSquareBracketRightSquareBracket, num offset, num limit, String orderBy, }) async {
    final response = await tenantTenantIdAuditLogGetWithHttpInfo(tenantId,  filterLeftSquareBracketTimestampRangeRightSquareBracketLeftSquareBracketRightSquareBracket: filterLeftSquareBracketTimestampRangeRightSquareBracketLeftSquareBracketRightSquareBracket, filterLeftSquareBracketActionRightSquareBracket: filterLeftSquareBracketActionRightSquareBracket, filterLeftSquareBracketEntityIdRightSquareBracket: filterLeftSquareBracketEntityIdRightSquareBracket, filterLeftSquareBracketCreatedByEmailRightSquareBracket: filterLeftSquareBracketCreatedByEmailRightSquareBracket, filterLeftSquareBracketEntityNamesRightSquareBracketLeftSquareBracketRightSquareBracket: filterLeftSquareBracketEntityNamesRightSquareBracketLeftSquareBracketRightSquareBracket, offset: offset, limit: limit, orderBy: orderBy, );
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'InlineResponse20013',) as InlineResponse20013;
    
    }
    return Future<InlineResponse20013>.value();
  }
}
