# openapi.api.SymptomsEnumApi

## Load the API package
```dart
import 'package:openapi/api.dart';
```

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tenantTenantIdSymptomsEnumAutocompleteGet**](SymptomsEnumApi.md#tenanttenantidsymptomsenumautocompleteget) | **GET** /tenant/{tenantId}/symptoms-enum/autocomplete | 
[**tenantTenantIdSymptomsEnumDelete**](SymptomsEnumApi.md#tenanttenantidsymptomsenumdelete) | **DELETE** /tenant/{tenantId}/symptoms-enum | 
[**tenantTenantIdSymptomsEnumGet**](SymptomsEnumApi.md#tenanttenantidsymptomsenumget) | **GET** /tenant/{tenantId}/symptoms-enum | 
[**tenantTenantIdSymptomsEnumIdGet**](SymptomsEnumApi.md#tenanttenantidsymptomsenumidget) | **GET** /tenant/{tenantId}/symptoms-enum/{id} | 
[**tenantTenantIdSymptomsEnumIdPut**](SymptomsEnumApi.md#tenanttenantidsymptomsenumidput) | **PUT** /tenant/{tenantId}/symptoms-enum/{id} | 
[**tenantTenantIdSymptomsEnumImportPost**](SymptomsEnumApi.md#tenanttenantidsymptomsenumimportpost) | **POST** /tenant/{tenantId}/symptoms-enum/import | 
[**tenantTenantIdSymptomsEnumPost**](SymptomsEnumApi.md#tenanttenantidsymptomsenumpost) | **POST** /tenant/{tenantId}/symptoms-enum | 


# **tenantTenantIdSymptomsEnumAutocompleteGet**
> List<InlineResponse2001> tenantTenantIdSymptomsEnumAutocompleteGet(tenantId, query, limit)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = SymptomsEnumApi();
final tenantId = tenantId_example; // String | 
final query = query_example; // String | 
final limit = 10; // num | 

try {
    final result = api_instance.tenantTenantIdSymptomsEnumAutocompleteGet(tenantId, query, limit);
    print(result);
} catch (e) {
    print('Exception when calling SymptomsEnumApi->tenantTenantIdSymptomsEnumAutocompleteGet: $e\n');
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

# **tenantTenantIdSymptomsEnumDelete**
> tenantTenantIdSymptomsEnumDelete(tenantId, idsLeftSquareBracketRightSquareBracket)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = SymptomsEnumApi();
final tenantId = tenantId_example; // String | 
final idsLeftSquareBracketRightSquareBracket = []; // List<String> | 

try {
    api_instance.tenantTenantIdSymptomsEnumDelete(tenantId, idsLeftSquareBracketRightSquareBracket);
} catch (e) {
    print('Exception when calling SymptomsEnumApi->tenantTenantIdSymptomsEnumDelete: $e\n');
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

# **tenantTenantIdSymptomsEnumGet**
> InlineResponse20010 tenantTenantIdSymptomsEnumGet(tenantId, filterLeftSquareBracketIdRightSquareBracket, filterLeftSquareBracketSymptomNameRightSquareBracket, filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, offset, limit, orderBy)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = SymptomsEnumApi();
final tenantId = tenantId_example; // String | 
final filterLeftSquareBracketIdRightSquareBracket = filterLeftSquareBracketIdRightSquareBracket_example; // String | 
final filterLeftSquareBracketSymptomNameRightSquareBracket = filterLeftSquareBracketSymptomNameRightSquareBracket_example; // String | 
final filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket = []; // List<DateTime> | 
final offset = 0; // num | 
final limit = 10; // num | 
final orderBy = createdAt_DESC; // String | 

try {
    final result = api_instance.tenantTenantIdSymptomsEnumGet(tenantId, filterLeftSquareBracketIdRightSquareBracket, filterLeftSquareBracketSymptomNameRightSquareBracket, filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, offset, limit, orderBy);
    print(result);
} catch (e) {
    print('Exception when calling SymptomsEnumApi->tenantTenantIdSymptomsEnumGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **filterLeftSquareBracketIdRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketSymptomNameRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket** | [**List<DateTime>**](DateTime.md)|  | [optional] [default to const []]
 **offset** | **num**|  | [optional] 
 **limit** | **num**|  | [optional] 
 **orderBy** | **String**|  | [optional] 

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdSymptomsEnumIdGet**
> SymptomsEnum tenantTenantIdSymptomsEnumIdGet(tenantId, id)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = SymptomsEnumApi();
final tenantId = tenantId_example; // String | 
final id = id_example; // String | 

try {
    final result = api_instance.tenantTenantIdSymptomsEnumIdGet(tenantId, id);
    print(result);
} catch (e) {
    print('Exception when calling SymptomsEnumApi->tenantTenantIdSymptomsEnumIdGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**SymptomsEnum**](SymptomsEnum.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdSymptomsEnumIdPut**
> SymptomsEnum tenantTenantIdSymptomsEnumIdPut(tenantId, id, inlineObject35)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = SymptomsEnumApi();
final tenantId = tenantId_example; // String | 
final id = id_example; // String | 
final inlineObject35 = InlineObject35(); // InlineObject35 | 

try {
    final result = api_instance.tenantTenantIdSymptomsEnumIdPut(tenantId, id, inlineObject35);
    print(result);
} catch (e) {
    print('Exception when calling SymptomsEnumApi->tenantTenantIdSymptomsEnumIdPut: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **id** | **String**|  | 
 **inlineObject35** | [**InlineObject35**](InlineObject35.md)|  | 

### Return type

[**SymptomsEnum**](SymptomsEnum.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdSymptomsEnumImportPost**
> SymptomsEnum tenantTenantIdSymptomsEnumImportPost(tenantId, inlineObject37)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = SymptomsEnumApi();
final tenantId = tenantId_example; // String | 
final inlineObject37 = InlineObject37(); // InlineObject37 | 

try {
    final result = api_instance.tenantTenantIdSymptomsEnumImportPost(tenantId, inlineObject37);
    print(result);
} catch (e) {
    print('Exception when calling SymptomsEnumApi->tenantTenantIdSymptomsEnumImportPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **inlineObject37** | [**InlineObject37**](InlineObject37.md)|  | 

### Return type

[**SymptomsEnum**](SymptomsEnum.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdSymptomsEnumPost**
> SymptomsEnum tenantTenantIdSymptomsEnumPost(tenantId, inlineObject36)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = SymptomsEnumApi();
final tenantId = tenantId_example; // String | 
final inlineObject36 = InlineObject36(); // InlineObject36 | 

try {
    final result = api_instance.tenantTenantIdSymptomsEnumPost(tenantId, inlineObject36);
    print(result);
} catch (e) {
    print('Exception when calling SymptomsEnumApi->tenantTenantIdSymptomsEnumPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **inlineObject36** | [**InlineObject36**](InlineObject36.md)|  | 

### Return type

[**SymptomsEnum**](SymptomsEnum.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

