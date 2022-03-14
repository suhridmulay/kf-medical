//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;


class PlanApi {
  PlanApi([ApiClient apiClient]) : apiClient = apiClient ?? defaultApiClient;

  final ApiClient apiClient;

  /// The webhook is used by Stripe only to notify the application when some event occurs.
  ///
  /// Note: This method returns the HTTP [Response].
  ///
  /// Parameters:
  ///
  /// * [Object] body (required):
  ///
  /// * [String] stripeSignature:
  Future<Response> planStripeWebhookPostWithHttpInfo(Object body, { String stripeSignature, }) async {
    // Verify required params are set.
    if (body == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: body');
    }

    // ignore: prefer_const_declarations
    final path = r'/plan/stripe/webhook';

    // ignore: prefer_final_locals
    Object postBody = body;

    final queryParams = <QueryParam>[];
    final headerParams = <String, String>{};
    final formParams = <String, String>{};

    if (stripeSignature != null) {
      headerParams[r'stripe-signature'] = parameterToString(stripeSignature);
    }

    const authNames = <String>[];
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

  /// The webhook is used by Stripe only to notify the application when some event occurs.
  ///
  /// Parameters:
  ///
  /// * [Object] body (required):
  ///
  /// * [String] stripeSignature:
  Future<InlineResponse20015> planStripeWebhookPost(Object body, { String stripeSignature, }) async {
    final response = await planStripeWebhookPostWithHttpInfo(body,  stripeSignature: stripeSignature, );
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'InlineResponse20015',) as InlineResponse20015;
    
    }
    return Future<InlineResponse20015>.value();
  }

  /// Creates a session for the user to use the Stripe Checkout.
  ///
  /// Note: This method returns the HTTP [Response].
  ///
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [InlineObject44] inlineObject44 (required):
  Future<Response> tenantTenantIdPlanStripeCheckoutPostWithHttpInfo(String tenantId, InlineObject44 inlineObject44,) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }
    if (inlineObject44 == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: inlineObject44');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/plan/stripe/checkout'
      .replaceAll('{tenantId}', tenantId);

    // ignore: prefer_final_locals
    Object postBody = inlineObject44;

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

  /// Creates a session for the user to use the Stripe Checkout.
  ///
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  ///
  /// * [InlineObject44] inlineObject44 (required):
  Future<InlineResponse20017> tenantTenantIdPlanStripeCheckoutPost(String tenantId, InlineObject44 inlineObject44,) async {
    final response = await tenantTenantIdPlanStripeCheckoutPostWithHttpInfo(tenantId, inlineObject44,);
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'InlineResponse20017',) as InlineResponse20017;
    
    }
    return Future<InlineResponse20017>.value();
  }

  /// Creates a URL for the user to use the Stripe Portal.
  ///
  /// Note: This method returns the HTTP [Response].
  ///
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  Future<Response> tenantTenantIdPlanStripePortalPostWithHttpInfo(String tenantId,) async {
    // Verify required params are set.
    if (tenantId == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: tenantId');
    }

    // ignore: prefer_const_declarations
    final path = r'/tenant/{tenantId}/plan/stripe/portal'
      .replaceAll('{tenantId}', tenantId);

    // ignore: prefer_final_locals
    Object postBody;

    final queryParams = <QueryParam>[];
    final headerParams = <String, String>{};
    final formParams = <String, String>{};

    const authNames = <String>['bearerAuth'];
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

  /// Creates a URL for the user to use the Stripe Portal.
  ///
  /// Parameters:
  ///
  /// * [String] tenantId (required):
  Future<InlineResponse20016> tenantTenantIdPlanStripePortalPost(String tenantId,) async {
    final response = await tenantTenantIdPlanStripePortalPostWithHttpInfo(tenantId,);
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'InlineResponse20016',) as InlineResponse20016;
    
    }
    return Future<InlineResponse20016>.value();
  }
}
