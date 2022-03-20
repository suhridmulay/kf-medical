# openapi.api.MedicalHistoryApi

## Load the API package
```dart
import 'package:openapi/api.dart';
```

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tenantTenantIdMedicalHistoryAutocompleteGet**](MedicalHistoryApi.md#tenanttenantidmedicalhistoryautocompleteget) | **GET** /tenant/{tenantId}/medical-history/autocomplete | 
[**tenantTenantIdMedicalHistoryDelete**](MedicalHistoryApi.md#tenanttenantidmedicalhistorydelete) | **DELETE** /tenant/{tenantId}/medical-history | 
[**tenantTenantIdMedicalHistoryGet**](MedicalHistoryApi.md#tenanttenantidmedicalhistoryget) | **GET** /tenant/{tenantId}/medical-history | 
[**tenantTenantIdMedicalHistoryIdGet**](MedicalHistoryApi.md#tenanttenantidmedicalhistoryidget) | **GET** /tenant/{tenantId}/medical-history/{id} | 
[**tenantTenantIdMedicalHistoryIdPut**](MedicalHistoryApi.md#tenanttenantidmedicalhistoryidput) | **PUT** /tenant/{tenantId}/medical-history/{id} | 
[**tenantTenantIdMedicalHistoryImportPost**](MedicalHistoryApi.md#tenanttenantidmedicalhistoryimportpost) | **POST** /tenant/{tenantId}/medical-history/import | 
[**tenantTenantIdMedicalHistoryPost**](MedicalHistoryApi.md#tenanttenantidmedicalhistorypost) | **POST** /tenant/{tenantId}/medical-history | 


# **tenantTenantIdMedicalHistoryAutocompleteGet**
> List<InlineResponse2001> tenantTenantIdMedicalHistoryAutocompleteGet(tenantId, query, limit)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MedicalHistoryApi();
final tenantId = tenantId_example; // String | 
final query = query_example; // String | 
final limit = 10; // num | 

try {
    final result = api_instance.tenantTenantIdMedicalHistoryAutocompleteGet(tenantId, query, limit);
    print(result);
} catch (e) {
    print('Exception when calling MedicalHistoryApi->tenantTenantIdMedicalHistoryAutocompleteGet: $e\n');
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

# **tenantTenantIdMedicalHistoryDelete**
> tenantTenantIdMedicalHistoryDelete(tenantId, idsLeftSquareBracketRightSquareBracket)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MedicalHistoryApi();
final tenantId = tenantId_example; // String | 
final idsLeftSquareBracketRightSquareBracket = []; // List<String> | 

try {
    api_instance.tenantTenantIdMedicalHistoryDelete(tenantId, idsLeftSquareBracketRightSquareBracket);
} catch (e) {
    print('Exception when calling MedicalHistoryApi->tenantTenantIdMedicalHistoryDelete: $e\n');
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

# **tenantTenantIdMedicalHistoryGet**
> InlineResponse20011 tenantTenantIdMedicalHistoryGet(tenantId, filterLeftSquareBracketIdRightSquareBracket, filterLeftSquareBracketPatientRightSquareBracket, filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, offset, limit, orderBy)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MedicalHistoryApi();
final tenantId = tenantId_example; // String | 
final filterLeftSquareBracketIdRightSquareBracket = filterLeftSquareBracketIdRightSquareBracket_example; // String | 
final filterLeftSquareBracketPatientRightSquareBracket = 38400000-8cf0-11bd-b23e-10b96e4ef00d; // String | 
final filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket = []; // List<DateTime> | 
final offset = 0; // num | 
final limit = 10; // num | 
final orderBy = createdAt_DESC; // String | 

try {
    final result = api_instance.tenantTenantIdMedicalHistoryGet(tenantId, filterLeftSquareBracketIdRightSquareBracket, filterLeftSquareBracketPatientRightSquareBracket, filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, offset, limit, orderBy);
    print(result);
} catch (e) {
    print('Exception when calling MedicalHistoryApi->tenantTenantIdMedicalHistoryGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **filterLeftSquareBracketIdRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketPatientRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket** | [**List<DateTime>**](DateTime.md)|  | [optional] [default to const []]
 **offset** | **num**|  | [optional] 
 **limit** | **num**|  | [optional] 
 **orderBy** | **String**|  | [optional] 

### Return type

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdMedicalHistoryIdGet**
> MedicalHistory tenantTenantIdMedicalHistoryIdGet(tenantId, id)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MedicalHistoryApi();
final tenantId = tenantId_example; // String | 
final id = id_example; // String | 

try {
    final result = api_instance.tenantTenantIdMedicalHistoryIdGet(tenantId, id);
    print(result);
} catch (e) {
    print('Exception when calling MedicalHistoryApi->tenantTenantIdMedicalHistoryIdGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**MedicalHistory**](MedicalHistory.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdMedicalHistoryIdPut**
> MedicalHistory tenantTenantIdMedicalHistoryIdPut(tenantId, id, inlineObject38)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MedicalHistoryApi();
final tenantId = tenantId_example; // String | 
final id = id_example; // String | 
final inlineObject38 = InlineObject38(); // InlineObject38 | 

try {
    final result = api_instance.tenantTenantIdMedicalHistoryIdPut(tenantId, id, inlineObject38);
    print(result);
} catch (e) {
    print('Exception when calling MedicalHistoryApi->tenantTenantIdMedicalHistoryIdPut: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **id** | **String**|  | 
 **inlineObject38** | [**InlineObject38**](InlineObject38.md)|  | 

### Return type

[**MedicalHistory**](MedicalHistory.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdMedicalHistoryImportPost**
> MedicalHistory tenantTenantIdMedicalHistoryImportPost(tenantId, inlineObject40)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MedicalHistoryApi();
final tenantId = tenantId_example; // String | 
final inlineObject40 = InlineObject40(); // InlineObject40 | 

try {
    final result = api_instance.tenantTenantIdMedicalHistoryImportPost(tenantId, inlineObject40);
    print(result);
} catch (e) {
    print('Exception when calling MedicalHistoryApi->tenantTenantIdMedicalHistoryImportPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **inlineObject40** | [**InlineObject40**](InlineObject40.md)|  | 

### Return type

[**MedicalHistory**](MedicalHistory.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdMedicalHistoryPost**
> MedicalHistory tenantTenantIdMedicalHistoryPost(tenantId, inlineObject39)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MedicalHistoryApi();
final tenantId = tenantId_example; // String | 
final inlineObject39 = InlineObject39(); // InlineObject39 | 

try {
    final result = api_instance.tenantTenantIdMedicalHistoryPost(tenantId, inlineObject39);
    print(result);
} catch (e) {
    print('Exception when calling MedicalHistoryApi->tenantTenantIdMedicalHistoryPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **inlineObject39** | [**InlineObject39**](InlineObject39.md)|  | 

### Return type

[**MedicalHistory**](MedicalHistory.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

