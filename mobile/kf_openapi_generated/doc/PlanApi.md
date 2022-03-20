# openapi.api.PlanApi

## Load the API package
```dart
import 'package:openapi/api.dart';
```

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**planStripeWebhookPost**](PlanApi.md#planstripewebhookpost) | **POST** /plan/stripe/webhook | 
[**tenantTenantIdPlanStripeCheckoutPost**](PlanApi.md#tenanttenantidplanstripecheckoutpost) | **POST** /tenant/{tenantId}/plan/stripe/checkout | 
[**tenantTenantIdPlanStripePortalPost**](PlanApi.md#tenanttenantidplanstripeportalpost) | **POST** /tenant/{tenantId}/plan/stripe/portal | 


# **planStripeWebhookPost**
> InlineResponse20015 planStripeWebhookPost(body, stripeSignature)



The webhook is used by Stripe only to notify the application when some event occurs.

### Example
```dart
import 'package:openapi/api.dart';

final api_instance = PlanApi();
final body = Object(); // Object | 
final stripeSignature = stripeSignature_example; // String | 

try {
    final result = api_instance.planStripeWebhookPost(body, stripeSignature);
    print(result);
} catch (e) {
    print('Exception when calling PlanApi->planStripeWebhookPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**|  | 
 **stripeSignature** | **String**|  | [optional] 

### Return type

[**InlineResponse20015**](InlineResponse20015.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdPlanStripeCheckoutPost**
> InlineResponse20017 tenantTenantIdPlanStripeCheckoutPost(tenantId, inlineObject44)



Creates a session for the user to use the Stripe Checkout.

### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = PlanApi();
final tenantId = tenantId_example; // String | 
final inlineObject44 = InlineObject44(); // InlineObject44 | 

try {
    final result = api_instance.tenantTenantIdPlanStripeCheckoutPost(tenantId, inlineObject44);
    print(result);
} catch (e) {
    print('Exception when calling PlanApi->tenantTenantIdPlanStripeCheckoutPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **inlineObject44** | [**InlineObject44**](InlineObject44.md)|  | 

### Return type

[**InlineResponse20017**](InlineResponse20017.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdPlanStripePortalPost**
> InlineResponse20016 tenantTenantIdPlanStripePortalPost(tenantId)



Creates a URL for the user to use the Stripe Portal.

### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = PlanApi();
final tenantId = tenantId_example; // String | 

try {
    final result = api_instance.tenantTenantIdPlanStripePortalPost(tenantId);
    print(result);
} catch (e) {
    print('Exception when calling PlanApi->tenantTenantIdPlanStripePortalPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

