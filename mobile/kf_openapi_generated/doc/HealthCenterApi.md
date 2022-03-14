# openapi.api.HealthCenterApi

## Load the API package
```dart
import 'package:openapi/api.dart';
```

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tenantTenantIdHealthCenterAutocompleteGet**](HealthCenterApi.md#tenanttenantidhealthcenterautocompleteget) | **GET** /tenant/{tenantId}/health-center/autocomplete | 
[**tenantTenantIdHealthCenterDelete**](HealthCenterApi.md#tenanttenantidhealthcenterdelete) | **DELETE** /tenant/{tenantId}/health-center | 
[**tenantTenantIdHealthCenterGet**](HealthCenterApi.md#tenanttenantidhealthcenterget) | **GET** /tenant/{tenantId}/health-center | 
[**tenantTenantIdHealthCenterIdGet**](HealthCenterApi.md#tenanttenantidhealthcenteridget) | **GET** /tenant/{tenantId}/health-center/{id} | 
[**tenantTenantIdHealthCenterIdPut**](HealthCenterApi.md#tenanttenantidhealthcenteridput) | **PUT** /tenant/{tenantId}/health-center/{id} | 
[**tenantTenantIdHealthCenterImportPost**](HealthCenterApi.md#tenanttenantidhealthcenterimportpost) | **POST** /tenant/{tenantId}/health-center/import | 
[**tenantTenantIdHealthCenterPost**](HealthCenterApi.md#tenanttenantidhealthcenterpost) | **POST** /tenant/{tenantId}/health-center | 


# **tenantTenantIdHealthCenterAutocompleteGet**
> List<InlineResponse2001> tenantTenantIdHealthCenterAutocompleteGet(tenantId, query, limit)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = HealthCenterApi();
final tenantId = tenantId_example; // String | 
final query = query_example; // String | 
final limit = 10; // num | 

try {
    final result = api_instance.tenantTenantIdHealthCenterAutocompleteGet(tenantId, query, limit);
    print(result);
} catch (e) {
    print('Exception when calling HealthCenterApi->tenantTenantIdHealthCenterAutocompleteGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **query** | **String**|  | [optional] 
 **limit** | **num**|  | [optional] 

### Return type

[**List<InlineResponse2001>**](InlineResponse2001.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdHealthCenterDelete**
> tenantTenantIdHealthCenterDelete(tenantId, idsLeftSquareBracketRightSquareBracket)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = HealthCenterApi();
final tenantId = tenantId_example; // String | 
final idsLeftSquareBracketRightSquareBracket = []; // List<String> | 

try {
    api_instance.tenantTenantIdHealthCenterDelete(tenantId, idsLeftSquareBracketRightSquareBracket);
} catch (e) {
    print('Exception when calling HealthCenterApi->tenantTenantIdHealthCenterDelete: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **idsLeftSquareBracketRightSquareBracket** | [**List<String>**](String.md)|  | [optional] [default to const []]

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdHealthCenterGet**
> InlineResponse2002 tenantTenantIdHealthCenterGet(tenantId, filterLeftSquareBracketIdRightSquareBracket, filterLeftSquareBracketNameRightSquareBracket, filterLeftSquareBracketAddressRightSquareBracket, filterLeftSquareBracketPhoneNumberRightSquareBracket, filterLeftSquareBracketAdminNameRightSquareBracket, filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, offset, limit, orderBy)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = HealthCenterApi();
final tenantId = tenantId_example; // String | 
final filterLeftSquareBracketIdRightSquareBracket = filterLeftSquareBracketIdRightSquareBracket_example; // String | 
final filterLeftSquareBracketNameRightSquareBracket = filterLeftSquareBracketNameRightSquareBracket_example; // String | 
final filterLeftSquareBracketAddressRightSquareBracket = filterLeftSquareBracketAddressRightSquareBracket_example; // String | 
final filterLeftSquareBracketPhoneNumberRightSquareBracket = filterLeftSquareBracketPhoneNumberRightSquareBracket_example; // String | 
final filterLeftSquareBracketAdminNameRightSquareBracket = 38400000-8cf0-11bd-b23e-10b96e4ef00d; // String | 
final filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket = []; // List<DateTime> | 
final offset = 0; // num | 
final limit = 10; // num | 
final orderBy = createdAt_DESC; // String | 

try {
    final result = api_instance.tenantTenantIdHealthCenterGet(tenantId, filterLeftSquareBracketIdRightSquareBracket, filterLeftSquareBracketNameRightSquareBracket, filterLeftSquareBracketAddressRightSquareBracket, filterLeftSquareBracketPhoneNumberRightSquareBracket, filterLeftSquareBracketAdminNameRightSquareBracket, filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, offset, limit, orderBy);
    print(result);
} catch (e) {
    print('Exception when calling HealthCenterApi->tenantTenantIdHealthCenterGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **filterLeftSquareBracketIdRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketNameRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketAddressRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketPhoneNumberRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketAdminNameRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket** | [**List<DateTime>**](DateTime.md)|  | [optional] [default to const []]
 **offset** | **num**|  | [optional] 
 **limit** | **num**|  | [optional] 
 **orderBy** | **String**|  | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdHealthCenterIdGet**
> HealthCenter tenantTenantIdHealthCenterIdGet(tenantId, id)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = HealthCenterApi();
final tenantId = tenantId_example; // String | 
final id = id_example; // String | 

try {
    final result = api_instance.tenantTenantIdHealthCenterIdGet(tenantId, id);
    print(result);
} catch (e) {
    print('Exception when calling HealthCenterApi->tenantTenantIdHealthCenterIdGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**HealthCenter**](HealthCenter.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdHealthCenterIdPut**
> HealthCenter tenantTenantIdHealthCenterIdPut(tenantId, id, inlineObject11)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = HealthCenterApi();
final tenantId = tenantId_example; // String | 
final id = id_example; // String | 
final inlineObject11 = InlineObject11(); // InlineObject11 | 

try {
    final result = api_instance.tenantTenantIdHealthCenterIdPut(tenantId, id, inlineObject11);
    print(result);
} catch (e) {
    print('Exception when calling HealthCenterApi->tenantTenantIdHealthCenterIdPut: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **id** | **String**|  | 
 **inlineObject11** | [**InlineObject11**](InlineObject11.md)|  | 

### Return type

[**HealthCenter**](HealthCenter.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdHealthCenterImportPost**
> HealthCenter tenantTenantIdHealthCenterImportPost(tenantId, inlineObject13)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = HealthCenterApi();
final tenantId = tenantId_example; // String | 
final inlineObject13 = InlineObject13(); // InlineObject13 | 

try {
    final result = api_instance.tenantTenantIdHealthCenterImportPost(tenantId, inlineObject13);
    print(result);
} catch (e) {
    print('Exception when calling HealthCenterApi->tenantTenantIdHealthCenterImportPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **inlineObject13** | [**InlineObject13**](InlineObject13.md)|  | 

### Return type

[**HealthCenter**](HealthCenter.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdHealthCenterPost**
> HealthCenter tenantTenantIdHealthCenterPost(tenantId, inlineObject12)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = HealthCenterApi();
final tenantId = tenantId_example; // String | 
final inlineObject12 = InlineObject12(); // InlineObject12 | 

try {
    final result = api_instance.tenantTenantIdHealthCenterPost(tenantId, inlineObject12);
    print(result);
} catch (e) {
    print('Exception when calling HealthCenterApi->tenantTenantIdHealthCenterPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **inlineObject12** | [**InlineObject12**](InlineObject12.md)|  | 

### Return type

[**HealthCenter**](HealthCenter.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

