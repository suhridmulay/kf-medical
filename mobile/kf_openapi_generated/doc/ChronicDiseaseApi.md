# openapi.api.ChronicDiseaseApi

## Load the API package
```dart
import 'package:openapi/api.dart';
```

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tenantTenantIdChronicDiseaseEnumAutocompleteGet**](ChronicDiseaseApi.md#tenanttenantidchronicdiseaseenumautocompleteget) | **GET** /tenant/{tenantId}/chronic-disease-enum/autocomplete | 
[**tenantTenantIdChronicDiseaseEnumDelete**](ChronicDiseaseApi.md#tenanttenantidchronicdiseaseenumdelete) | **DELETE** /tenant/{tenantId}/chronic-disease-enum | 
[**tenantTenantIdChronicDiseaseEnumGet**](ChronicDiseaseApi.md#tenanttenantidchronicdiseaseenumget) | **GET** /tenant/{tenantId}/chronic-disease-enum | 
[**tenantTenantIdChronicDiseaseEnumIdGet**](ChronicDiseaseApi.md#tenanttenantidchronicdiseaseenumidget) | **GET** /tenant/{tenantId}/chronic-disease-enum/{id} | 
[**tenantTenantIdChronicDiseaseEnumIdPut**](ChronicDiseaseApi.md#tenanttenantidchronicdiseaseenumidput) | **PUT** /tenant/{tenantId}/chronic-disease-enum/{id} | 
[**tenantTenantIdChronicDiseaseEnumImportPost**](ChronicDiseaseApi.md#tenanttenantidchronicdiseaseenumimportpost) | **POST** /tenant/{tenantId}/chronic-disease-enum/import | 
[**tenantTenantIdChronicDiseaseEnumPost**](ChronicDiseaseApi.md#tenanttenantidchronicdiseaseenumpost) | **POST** /tenant/{tenantId}/chronic-disease-enum | 


# **tenantTenantIdChronicDiseaseEnumAutocompleteGet**
> List<InlineResponse2001> tenantTenantIdChronicDiseaseEnumAutocompleteGet(tenantId, query, limit)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = ChronicDiseaseApi();
final tenantId = tenantId_example; // String | 
final query = query_example; // String | 
final limit = 10; // num | 

try {
    final result = api_instance.tenantTenantIdChronicDiseaseEnumAutocompleteGet(tenantId, query, limit);
    print(result);
} catch (e) {
    print('Exception when calling ChronicDiseaseApi->tenantTenantIdChronicDiseaseEnumAutocompleteGet: $e\n');
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

# **tenantTenantIdChronicDiseaseEnumDelete**
> tenantTenantIdChronicDiseaseEnumDelete(tenantId, idsLeftSquareBracketRightSquareBracket)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = ChronicDiseaseApi();
final tenantId = tenantId_example; // String | 
final idsLeftSquareBracketRightSquareBracket = []; // List<String> | 

try {
    api_instance.tenantTenantIdChronicDiseaseEnumDelete(tenantId, idsLeftSquareBracketRightSquareBracket);
} catch (e) {
    print('Exception when calling ChronicDiseaseApi->tenantTenantIdChronicDiseaseEnumDelete: $e\n');
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

# **tenantTenantIdChronicDiseaseEnumGet**
> InlineResponse20012 tenantTenantIdChronicDiseaseEnumGet(tenantId, filterLeftSquareBracketIdRightSquareBracket, filterLeftSquareBracketDiseaseNameRightSquareBracket, filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, offset, limit, orderBy)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = ChronicDiseaseApi();
final tenantId = tenantId_example; // String | 
final filterLeftSquareBracketIdRightSquareBracket = filterLeftSquareBracketIdRightSquareBracket_example; // String | 
final filterLeftSquareBracketDiseaseNameRightSquareBracket = filterLeftSquareBracketDiseaseNameRightSquareBracket_example; // String | 
final filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket = []; // List<DateTime> | 
final offset = 0; // num | 
final limit = 10; // num | 
final orderBy = createdAt_DESC; // String | 

try {
    final result = api_instance.tenantTenantIdChronicDiseaseEnumGet(tenantId, filterLeftSquareBracketIdRightSquareBracket, filterLeftSquareBracketDiseaseNameRightSquareBracket, filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, offset, limit, orderBy);
    print(result);
} catch (e) {
    print('Exception when calling ChronicDiseaseApi->tenantTenantIdChronicDiseaseEnumGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **filterLeftSquareBracketIdRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketDiseaseNameRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket** | [**List<DateTime>**](DateTime.md)|  | [optional] [default to const []]
 **offset** | **num**|  | [optional] 
 **limit** | **num**|  | [optional] 
 **orderBy** | **String**|  | [optional] 

### Return type

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdChronicDiseaseEnumIdGet**
> ChronicDiseaseEnum tenantTenantIdChronicDiseaseEnumIdGet(tenantId, id)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = ChronicDiseaseApi();
final tenantId = tenantId_example; // String | 
final id = id_example; // String | 

try {
    final result = api_instance.tenantTenantIdChronicDiseaseEnumIdGet(tenantId, id);
    print(result);
} catch (e) {
    print('Exception when calling ChronicDiseaseApi->tenantTenantIdChronicDiseaseEnumIdGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**ChronicDiseaseEnum**](ChronicDiseaseEnum.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdChronicDiseaseEnumIdPut**
> ChronicDiseaseEnum tenantTenantIdChronicDiseaseEnumIdPut(tenantId, id, inlineObject41)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = ChronicDiseaseApi();
final tenantId = tenantId_example; // String | 
final id = id_example; // String | 
final inlineObject41 = InlineObject41(); // InlineObject41 | 

try {
    final result = api_instance.tenantTenantIdChronicDiseaseEnumIdPut(tenantId, id, inlineObject41);
    print(result);
} catch (e) {
    print('Exception when calling ChronicDiseaseApi->tenantTenantIdChronicDiseaseEnumIdPut: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **id** | **String**|  | 
 **inlineObject41** | [**InlineObject41**](InlineObject41.md)|  | 

### Return type

[**ChronicDiseaseEnum**](ChronicDiseaseEnum.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdChronicDiseaseEnumImportPost**
> ChronicDiseaseEnum tenantTenantIdChronicDiseaseEnumImportPost(tenantId, inlineObject43)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = ChronicDiseaseApi();
final tenantId = tenantId_example; // String | 
final inlineObject43 = InlineObject43(); // InlineObject43 | 

try {
    final result = api_instance.tenantTenantIdChronicDiseaseEnumImportPost(tenantId, inlineObject43);
    print(result);
} catch (e) {
    print('Exception when calling ChronicDiseaseApi->tenantTenantIdChronicDiseaseEnumImportPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **inlineObject43** | [**InlineObject43**](InlineObject43.md)|  | 

### Return type

[**ChronicDiseaseEnum**](ChronicDiseaseEnum.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdChronicDiseaseEnumPost**
> ChronicDiseaseEnum tenantTenantIdChronicDiseaseEnumPost(tenantId, inlineObject42)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = ChronicDiseaseApi();
final tenantId = tenantId_example; // String | 
final inlineObject42 = InlineObject42(); // InlineObject42 | 

try {
    final result = api_instance.tenantTenantIdChronicDiseaseEnumPost(tenantId, inlineObject42);
    print(result);
} catch (e) {
    print('Exception when calling ChronicDiseaseApi->tenantTenantIdChronicDiseaseEnumPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **inlineObject42** | [**InlineObject42**](InlineObject42.md)|  | 

### Return type

[**ChronicDiseaseEnum**](ChronicDiseaseEnum.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

