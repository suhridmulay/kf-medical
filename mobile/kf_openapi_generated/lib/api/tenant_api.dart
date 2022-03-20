//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;


class TenantApi {
  TenantApi([ApiClient apiClient]) : apiClient = apiClient ?? defaultApiClient;

  final ApiClient apiClient;

  /// Performs an HTTP 'DELETE /tenant' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [List<String>] idsLeftSquareBracketRightSquareBracket:
  Future<Response> tenantDeleteWithHttpInfo({ List<String> idsLeftSquareBracketRightSquareBracket, }) async {
    // Verify required params are set.

    // ignore: prefer_const_declarations
    final path = r'/tenant';

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
  /// * [List<String>] idsLeftSquareBracketRightSquareBracket:
  Future<void> tenantDelete({ List<String> idsLeftSquareBracketRightSquareBracket, }) async {
    final response = await tenantDeleteWithHttpInfo( idsLeftSquareBracketRightSquareBracket: idsLeftSquareBracketRightSquareBracket, );
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
  }

  /// Performs an HTTP 'GET /tenant' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] filterLeftSquareBracketIdRightSquareBracket:
  ///
  /// * [List<DateTime>] filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket:
  ///
  /// * [num] offset:
  ///
  /// * [num] limit:
  ///
  /// * [String] orderBy:
  Future<Response> tenantGetWithHttpInfo({ String filterLeftSquareBracketIdRightSquareBracket, List<DateTime> filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, num offset, num limit, String orderBy, }) async {
    // Verify required params are set.

    // ignore: prefer_const_declarations
    final path = r'/tenant';

    // ignore: prefer_final_locals
    Object postBody;

    final queryParams = <QueryParam>[];
    final headerParams = <String, String>{};
    final formParams = <String, String>{};

    if (filterLeftSquareBracketIdRightSquareBracket != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('', 'filter[id]', filterLeftSquareBracketIdRightSquareBracket));
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
  /// * [String] filterLeftSquareBracketIdRightSquareBracket:
  ///
  /// * [List<DateTime>] filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket:
  ///
  /// * [num] offset:
  ///
  /// * [num] limit:
  ///
  /// * [String] orderBy:
  Future<InlineResponse20018> tenantGet({ String filterLeftSquareBracketIdRightSquareBracket, List<DateTime> filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, num offset, num limit, String orderBy, }) async {
    final response = await tenantGetWithHttpInfo( filterLeftSquareBracketIdRightSquareBracket: filterLeftSquareBracketIdRightSquareBracket, filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket: filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, offset: offset, limit: limit, orderBy: orderBy, );
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'InlineResponse20018',) as InlineResponse20018;
    
    }
    return Future<InlineResponse20018>.value();
  }

  /// Performs an HTTP 'GET /tenant/{id}' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] id (required):
  Future<Response> tenantIdGetWithHttpInfo(String id,) async {
    // Verify required params are set.
    if (id == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: id');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{id}'
      .replaceAll('{id}', id);

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
  /// * [String] id (required):
  Future<Tenant> tenantIdGet(String id,) async {
    final response = await tenantIdGetWithHttpInfo(id,);
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'Tenant',) as Tenant;
    
    }
    return Future<Tenant>.value();
  }

  /// Performs an HTTP 'PUT /tenant/{id}' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] id (required):
  ///
  /// * [InlineObject46] inlineObject46 (required):
  Future<Response> tenantIdPutWithHttpInfo(String id, InlineObject46 inlineObject46,) async {
    // Verify required params are set.
    if (id == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: id');
    }
    if (inlineObject46 == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: inlineObject46');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{id}'
      .replaceAll('{id}', id);

    // ignore: prefer_final_locals
    Object postBody = inlineObject46;

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
  /// * [String] id (required):
  ///
  /// * [InlineObject46] inlineObject46 (required):
  Future<Tenant> tenantIdPut(String id, InlineObject46 inlineObject46,) async {
    final response = await tenantIdPutWithHttpInfo(id, inlineObject46,);
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'Tenant',) as Tenant;
    
    }
    return Future<Tenant>.value();
  }

  /// Performs an HTTP 'POST /tenant/invitation/:token/accept' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] token (required):
  ///
  /// * [InlineObject48] inlineObject48 (required):
  Future<Response> tenantInvitationTokenAcceptPostWithHttpInfo(String token, InlineObject48 inlineObject48,) async {
    // Verify required params are set.
    if (token == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: token');
    }
    if (inlineObject48 == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: inlineObject48');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/invitation/:token/accept';

    // ignore: prefer_final_locals
    Object postBody = inlineObject48;

    final queryParams = <QueryParam>[];
    final headerParams = <String, String>{};
    final formParams = <String, String>{};

      queryParams.addAll(_convertParametersForCollectionFormat('', 'token', token));

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
  /// * [String] token (required):
  ///
  /// * [InlineObject48] inlineObject48 (required):
  Future<Tenant> tenantInvitationTokenAcceptPost(String token, InlineObject48 inlineObject48,) async {
    final response = await tenantInvitationTokenAcceptPostWithHttpInfo(token, inlineObject48,);
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'Tenant',) as Tenant;
    
    }
    return Future<Tenant>.value();
  }

  /// Performs an HTTP 'DELETE /tenant/invitation/:token/decline' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] token:
  Future<Response> tenantInvitationTokenDeclineDeleteWithHttpInfo({ String token, }) async {
    // Verify required params are set.

    // ignore: prefer_const_declarations
    final path = r'/tenant/invitation/:token/decline';

    // ignore: prefer_final_locals
    Object postBody;

    final queryParams = <QueryParam>[];
    final headerParams = <String, String>{};
    final formParams = <String, String>{};

    if (token != null) {
      queryParams.addAll(_convertParametersForCollectionFormat('', 'token', token));
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
  /// * [String] token:
  Future<void> tenantInvitationTokenDeclineDelete({ String token, }) async {
    final response = await tenantInvitationTokenDeclineDeleteWithHttpInfo( token: token, );
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
  }

  /// Performs an HTTP 'POST /tenant' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [InlineObject47] inlineObject47 (required):
  Future<Response> tenantPostWithHttpInfo(InlineObject47 inlineObject47,) async {
    // Verify required params are set.
    if (inlineObject47 == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: inlineObject47');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant';

    // ignore: prefer_final_locals
    Object postBody = inlineObject47;

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
  /// * [InlineObject47] inlineObject47 (required):
  Future<Tenant> tenantPost(InlineObject47 inlineObject47,) async {
    final response = await tenantPostWithHttpInfo(inlineObject47,);
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'Tenant',) as Tenant;
    
    }
    return Future<Tenant>.value();
  }

  /// Performs an HTTP 'GET /tenant/url' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] url (required):
  Future<Response> tenantUrlGetWithHttpInfo(String url,) async {
    // Verify required params are set.
    if (url == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: url');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/url';

    // ignore: prefer_final_locals
    Object postBody;

    final queryParams = <QueryParam>[];
    final headerParams = <String, String>{};
    final formParams = <String, String>{};

      queryParams.addAll(_convertParametersForCollectionFormat('', 'url', url));

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
  /// * [String] url (required):
  Future<Tenant> tenantUrlGet(String url,) async {
    final response = await tenantUrlGetWithHttpInfo(url,);
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'Tenant',) as Tenant;
    
    }
    return Future<Tenant>.value();
  }
}
