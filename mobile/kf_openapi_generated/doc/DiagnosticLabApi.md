# openapi.api.DiagnosticLabApi

## Load the API package
```dart
import 'package:openapi/api.dart';
```

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tenantTenantIdDiagnosticEnumAutocompleteGet**](DiagnosticLabApi.md#tenanttenantiddiagnosticenumautocompleteget) | **GET** /tenant/{tenantId}/diagnostic-enum/autocomplete | 
[**tenantTenantIdDiagnosticEnumDelete**](DiagnosticLabApi.md#tenanttenantiddiagnosticenumdelete) | **DELETE** /tenant/{tenantId}/diagnostic-enum | 
[**tenantTenantIdDiagnosticEnumGet**](DiagnosticLabApi.md#tenanttenantiddiagnosticenumget) | **GET** /tenant/{tenantId}/diagnostic-enum | 
[**tenantTenantIdDiagnosticEnumIdGet**](DiagnosticLabApi.md#tenanttenantiddiagnosticenumidget) | **GET** /tenant/{tenantId}/diagnostic-enum/{id} | 
[**tenantTenantIdDiagnosticEnumIdPut**](DiagnosticLabApi.md#tenanttenantiddiagnosticenumidput) | **PUT** /tenant/{tenantId}/diagnostic-enum/{id} | 
[**tenantTenantIdDiagnosticEnumImportPost**](DiagnosticLabApi.md#tenanttenantiddiagnosticenumimportpost) | **POST** /tenant/{tenantId}/diagnostic-enum/import | 
[**tenantTenantIdDiagnosticEnumPost**](DiagnosticLabApi.md#tenanttenantiddiagnosticenumpost) | **POST** /tenant/{tenantId}/diagnostic-enum | 


# **tenantTenantIdDiagnosticEnumAutocompleteGet**
> List<InlineResponse2001> tenantTenantIdDiagnosticEnumAutocompleteGet(tenantId, query, limit)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = DiagnosticLabApi();
final tenantId = tenantId_example; // String | 
final query = query_example; // String | 
final limit = 10; // num | 

try {
    final result = api_instance.tenantTenantIdDiagnosticEnumAutocompleteGet(tenantId, query, limit);
    print(result);
} catch (e) {
    print('Exception when calling DiagnosticLabApi->tenantTenantIdDiagnosticEnumAutocompleteGet: $e\n');
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

# **tenantTenantIdDiagnosticEnumDelete**
> tenantTenantIdDiagnosticEnumDelete(tenantId, idsLeftSquareBracketRightSquareBracket)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = DiagnosticLabApi();
final tenantId = tenantId_example; // String | 
final idsLeftSquareBracketRightSquareBracket = []; // List<String> | 

try {
    api_instance.tenantTenantIdDiagnosticEnumDelete(tenantId, idsLeftSquareBracketRightSquareBracket);
} catch (e) {
    print('Exception when calling DiagnosticLabApi->tenantTenantIdDiagnosticEnumDelete: $e\n');
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

# **tenantTenantIdDiagnosticEnumGet**
> InlineResponse2005 tenantTenantIdDiagnosticEnumGet(tenantId, filterLeftSquareBracketIdRightSquareBracket, filterLeftSquareBracketDiagnosticNameRightSquareBracket, filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, offset, limit, orderBy)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = DiagnosticLabApi();
final tenantId = tenantId_example; // String | 
final filterLeftSquareBracketIdRightSquareBracket = filterLeftSquareBracketIdRightSquareBracket_example; // String | 
final filterLeftSquareBracketDiagnosticNameRightSquareBracket = filterLeftSquareBracketDiagnosticNameRightSquareBracket_example; // String | 
final filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket = []; // List<DateTime> | 
final offset = 0; // num | 
final limit = 10; // num | 
final orderBy = createdAt_DESC; // String | 

try {
    final result = api_instance.tenantTenantIdDiagnosticEnumGet(tenantId, filterLeftSquareBracketIdRightSquareBracket, filterLeftSquareBracketDiagnosticNameRightSquareBracket, filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, offset, limit, orderBy);
    print(result);
} catch (e) {
    print('Exception when calling DiagnosticLabApi->tenantTenantIdDiagnosticEnumGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **filterLeftSquareBracketIdRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketDiagnosticNameRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket** | [**List<DateTime>**](DateTime.md)|  | [optional] [default to const []]
 **offset** | **num**|  | [optional] 
 **limit** | **num**|  | [optional] 
 **orderBy** | **String**|  | [optional] 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdDiagnosticEnumIdGet**
> DiagnosticEnum tenantTenantIdDiagnosticEnumIdGet(tenantId, id)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = DiagnosticLabApi();
final tenantId = tenantId_example; // String | 
final id = id_example; // String | 

try {
    final result = api_instance.tenantTenantIdDiagnosticEnumIdGet(tenantId, id);
    print(result);
} catch (e) {
    print('Exception when calling DiagnosticLabApi->tenantTenantIdDiagnosticEnumIdGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**DiagnosticEnum**](DiagnosticEnum.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdDiagnosticEnumIdPut**
> DiagnosticEnum tenantTenantIdDiagnosticEnumIdPut(tenantId, id, inlineObject20)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = DiagnosticLabApi();
final tenantId = tenantId_example; // String | 
final id = id_example; // String | 
final inlineObject20 = InlineObject20(); // InlineObject20 | 

try {
    final result = api_instance.tenantTenantIdDiagnosticEnumIdPut(tenantId, id, inlineObject20);
    print(result);
} catch (e) {
    print('Exception when calling DiagnosticLabApi->tenantTenantIdDiagnosticEnumIdPut: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **id** | **String**|  | 
 **inlineObject20** | [**InlineObject20**](InlineObject20.md)|  | 

### Return type

[**DiagnosticEnum**](DiagnosticEnum.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdDiagnosticEnumImportPost**
> DiagnosticEnum tenantTenantIdDiagnosticEnumImportPost(tenantId, inlineObject22)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = DiagnosticLabApi();
final tenantId = tenantId_example; // String | 
final inlineObject22 = InlineObject22(); // InlineObject22 | 

try {
    final result = api_instance.tenantTenantIdDiagnosticEnumImportPost(tenantId, inlineObject22);
    print(result);
} catch (e) {
    print('Exception when calling DiagnosticLabApi->tenantTenantIdDiagnosticEnumImportPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **inlineObject22** | [**InlineObject22**](InlineObject22.md)|  | 

### Return type

[**DiagnosticEnum**](DiagnosticEnum.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdDiagnosticEnumPost**
> DiagnosticEnum tenantTenantIdDiagnosticEnumPost(tenantId, inlineObject21)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = DiagnosticLabApi();
final tenantId = tenantId_example; // String | 
final inlineObject21 = InlineObject21(); // InlineObject21 | 

try {
    final result = api_instance.tenantTenantIdDiagnosticEnumPost(tenantId, inlineObject21);
    print(result);
} catch (e) {
    print('Exception when calling DiagnosticLabApi->tenantTenantIdDiagnosticEnumPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **inlineObject21** | [**InlineObject21**](InlineObject21.md)|  | 

### Return type

[**DiagnosticEnum**](DiagnosticEnum.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

