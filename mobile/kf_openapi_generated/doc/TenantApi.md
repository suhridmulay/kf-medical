# openapi.api.TenantApi

## Load the API package
```dart
import 'package:openapi/api.dart';
```

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tenantDelete**](TenantApi.md#tenantdelete) | **DELETE** /tenant | 
[**tenantGet**](TenantApi.md#tenantget) | **GET** /tenant | 
[**tenantIdGet**](TenantApi.md#tenantidget) | **GET** /tenant/{id} | 
[**tenantIdPut**](TenantApi.md#tenantidput) | **PUT** /tenant/{id} | 
[**tenantInvitationTokenAcceptPost**](TenantApi.md#tenantinvitationtokenacceptpost) | **POST** /tenant/invitation/:token/accept | 
[**tenantInvitationTokenDeclineDelete**](TenantApi.md#tenantinvitationtokendeclinedelete) | **DELETE** /tenant/invitation/:token/decline | 
[**tenantPost**](TenantApi.md#tenantpost) | **POST** /tenant | 
[**tenantUrlGet**](TenantApi.md#tenanturlget) | **GET** /tenant/url | 


# **tenantDelete**
> tenantDelete(idsLeftSquareBracketRightSquareBracket)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = TenantApi();
final idsLeftSquareBracketRightSquareBracket = []; // List<String> | 

try {
    api_instance.tenantDelete(idsLeftSquareBracketRightSquareBracket);
} catch (e) {
    print('Exception when calling TenantApi->tenantDelete: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idsLeftSquareBracketRightSquareBracket** | [**List<String>**](String.md)|  | [optional] [default to const []]

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantGet**
> InlineResponse20018 tenantGet(filterLeftSquareBracketIdRightSquareBracket, filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, offset, limit, orderBy)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = TenantApi();
final filterLeftSquareBracketIdRightSquareBracket = filterLeftSquareBracketIdRightSquareBracket_example; // String | 
final filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket = []; // List<DateTime> | 
final offset = 0; // num | 
final limit = 10; // num | 
final orderBy = createdAt_DESC; // String | 

try {
    final result = api_instance.tenantGet(filterLeftSquareBracketIdRightSquareBracket, filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, offset, limit, orderBy);
    print(result);
} catch (e) {
    print('Exception when calling TenantApi->tenantGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterLeftSquareBracketIdRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket** | [**List<DateTime>**](DateTime.md)|  | [optional] [default to const []]
 **offset** | **num**|  | [optional] 
 **limit** | **num**|  | [optional] 
 **orderBy** | **String**|  | [optional] 

### Return type

[**InlineResponse20018**](InlineResponse20018.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantIdGet**
> Tenant tenantIdGet(id)



### Example
```dart
import 'package:openapi/api.dart';

final api_instance = TenantApi();
final id = id_example; // String | 

try {
    final result = api_instance.tenantIdGet(id);
    print(result);
} catch (e) {
    print('Exception when calling TenantApi->tenantIdGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**Tenant**](Tenant.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantIdPut**
> Tenant tenantIdPut(id, inlineObject46)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = TenantApi();
final id = id_example; // String | 
final inlineObject46 = InlineObject46(); // InlineObject46 | 

try {
    final result = api_instance.tenantIdPut(id, inlineObject46);
    print(result);
} catch (e) {
    print('Exception when calling TenantApi->tenantIdPut: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **inlineObject46** | [**InlineObject46**](InlineObject46.md)|  | 

### Return type

[**Tenant**](Tenant.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantInvitationTokenAcceptPost**
> Tenant tenantInvitationTokenAcceptPost(token, inlineObject48)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = TenantApi();
final token = token_example; // String | 
final inlineObject48 = InlineObject48(); // InlineObject48 | 

try {
    final result = api_instance.tenantInvitationTokenAcceptPost(token, inlineObject48);
    print(result);
} catch (e) {
    print('Exception when calling TenantApi->tenantInvitationTokenAcceptPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**|  | 
 **inlineObject48** | [**InlineObject48**](InlineObject48.md)|  | 

### Return type

[**Tenant**](Tenant.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantInvitationTokenDeclineDelete**
> tenantInvitationTokenDeclineDelete(token)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = TenantApi();
final token = token_example; // String | 

try {
    api_instance.tenantInvitationTokenDeclineDelete(token);
} catch (e) {
    print('Exception when calling TenantApi->tenantInvitationTokenDeclineDelete: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantPost**
> Tenant tenantPost(inlineObject47)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = TenantApi();
final inlineObject47 = InlineObject47(); // InlineObject47 | 

try {
    final result = api_instance.tenantPost(inlineObject47);
    print(result);
} catch (e) {
    print('Exception when calling TenantApi->tenantPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject47** | [**InlineObject47**](InlineObject47.md)|  | 

### Return type

[**Tenant**](Tenant.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantUrlGet**
> Tenant tenantUrlGet(url)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = TenantApi();
final url = url_example; // String | 

try {
    final result = api_instance.tenantUrlGet(url);
    print(result);
} catch (e) {
    print('Exception when calling TenantApi->tenantUrlGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **url** | **String**|  | 

### Return type

[**Tenant**](Tenant.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

