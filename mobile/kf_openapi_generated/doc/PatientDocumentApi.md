# openapi.api.PatientDocumentApi

## Load the API package
```dart
import 'package:openapi/api.dart';
```

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tenantTenantIdPatientDocumentAutocompleteGet**](PatientDocumentApi.md#tenanttenantidpatientdocumentautocompleteget) | **GET** /tenant/{tenantId}/patient-document/autocomplete | 
[**tenantTenantIdPatientDocumentDelete**](PatientDocumentApi.md#tenanttenantidpatientdocumentdelete) | **DELETE** /tenant/{tenantId}/patient-document | 
[**tenantTenantIdPatientDocumentGet**](PatientDocumentApi.md#tenanttenantidpatientdocumentget) | **GET** /tenant/{tenantId}/patient-document | 
[**tenantTenantIdPatientDocumentIdGet**](PatientDocumentApi.md#tenanttenantidpatientdocumentidget) | **GET** /tenant/{tenantId}/patient-document/{id} | 
[**tenantTenantIdPatientDocumentIdPut**](PatientDocumentApi.md#tenanttenantidpatientdocumentidput) | **PUT** /tenant/{tenantId}/patient-document/{id} | 
[**tenantTenantIdPatientDocumentImportPost**](PatientDocumentApi.md#tenanttenantidpatientdocumentimportpost) | **POST** /tenant/{tenantId}/patient-document/import | 
[**tenantTenantIdPatientDocumentPost**](PatientDocumentApi.md#tenanttenantidpatientdocumentpost) | **POST** /tenant/{tenantId}/patient-document | 


# **tenantTenantIdPatientDocumentAutocompleteGet**
> List<InlineResponse2001> tenantTenantIdPatientDocumentAutocompleteGet(tenantId, query, limit)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = PatientDocumentApi();
final tenantId = tenantId_example; // String | 
final query = query_example; // String | 
final limit = 10; // num | 

try {
    final result = api_instance.tenantTenantIdPatientDocumentAutocompleteGet(tenantId, query, limit);
    print(result);
} catch (e) {
    print('Exception when calling PatientDocumentApi->tenantTenantIdPatientDocumentAutocompleteGet: $e\n');
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

# **tenantTenantIdPatientDocumentDelete**
> tenantTenantIdPatientDocumentDelete(tenantId, idsLeftSquareBracketRightSquareBracket)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = PatientDocumentApi();
final tenantId = tenantId_example; // String | 
final idsLeftSquareBracketRightSquareBracket = []; // List<String> | 

try {
    api_instance.tenantTenantIdPatientDocumentDelete(tenantId, idsLeftSquareBracketRightSquareBracket);
} catch (e) {
    print('Exception when calling PatientDocumentApi->tenantTenantIdPatientDocumentDelete: $e\n');
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

# **tenantTenantIdPatientDocumentGet**
> InlineResponse2007 tenantTenantIdPatientDocumentGet(tenantId, filterLeftSquareBracketIdRightSquareBracket, filterLeftSquareBracketPatientRightSquareBracket, filterLeftSquareBracketReportNameRightSquareBracket, filterLeftSquareBracketReportDateRangeRightSquareBracketLeftSquareBracketRightSquareBracket, filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, offset, limit, orderBy)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = PatientDocumentApi();
final tenantId = tenantId_example; // String | 
final filterLeftSquareBracketIdRightSquareBracket = filterLeftSquareBracketIdRightSquareBracket_example; // String | 
final filterLeftSquareBracketPatientRightSquareBracket = 38400000-8cf0-11bd-b23e-10b96e4ef00d; // String | 
final filterLeftSquareBracketReportNameRightSquareBracket = filterLeftSquareBracketReportNameRightSquareBracket_example; // String | 
final filterLeftSquareBracketReportDateRangeRightSquareBracketLeftSquareBracketRightSquareBracket = []; // List<DateTime> | 
final filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket = []; // List<DateTime> | 
final offset = 0; // num | 
final limit = 10; // num | 
final orderBy = createdAt_DESC; // String | 

try {
    final result = api_instance.tenantTenantIdPatientDocumentGet(tenantId, filterLeftSquareBracketIdRightSquareBracket, filterLeftSquareBracketPatientRightSquareBracket, filterLeftSquareBracketReportNameRightSquareBracket, filterLeftSquareBracketReportDateRangeRightSquareBracketLeftSquareBracketRightSquareBracket, filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, offset, limit, orderBy);
    print(result);
} catch (e) {
    print('Exception when calling PatientDocumentApi->tenantTenantIdPatientDocumentGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **filterLeftSquareBracketIdRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketPatientRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketReportNameRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketReportDateRangeRightSquareBracketLeftSquareBracketRightSquareBracket** | [**List<DateTime>**](DateTime.md)|  | [optional] [default to const []]
 **filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket** | [**List<DateTime>**](DateTime.md)|  | [optional] [default to const []]
 **offset** | **num**|  | [optional] 
 **limit** | **num**|  | [optional] 
 **orderBy** | **String**|  | [optional] 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdPatientDocumentIdGet**
> PatientDocument tenantTenantIdPatientDocumentIdGet(tenantId, id)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = PatientDocumentApi();
final tenantId = tenantId_example; // String | 
final id = id_example; // String | 

try {
    final result = api_instance.tenantTenantIdPatientDocumentIdGet(tenantId, id);
    print(result);
} catch (e) {
    print('Exception when calling PatientDocumentApi->tenantTenantIdPatientDocumentIdGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**PatientDocument**](PatientDocument.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdPatientDocumentIdPut**
> PatientDocument tenantTenantIdPatientDocumentIdPut(tenantId, id, inlineObject26)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = PatientDocumentApi();
final tenantId = tenantId_example; // String | 
final id = id_example; // String | 
final inlineObject26 = InlineObject26(); // InlineObject26 | 

try {
    final result = api_instance.tenantTenantIdPatientDocumentIdPut(tenantId, id, inlineObject26);
    print(result);
} catch (e) {
    print('Exception when calling PatientDocumentApi->tenantTenantIdPatientDocumentIdPut: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **id** | **String**|  | 
 **inlineObject26** | [**InlineObject26**](InlineObject26.md)|  | 

### Return type

[**PatientDocument**](PatientDocument.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdPatientDocumentImportPost**
> PatientDocument tenantTenantIdPatientDocumentImportPost(tenantId, inlineObject28)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = PatientDocumentApi();
final tenantId = tenantId_example; // String | 
final inlineObject28 = InlineObject28(); // InlineObject28 | 

try {
    final result = api_instance.tenantTenantIdPatientDocumentImportPost(tenantId, inlineObject28);
    print(result);
} catch (e) {
    print('Exception when calling PatientDocumentApi->tenantTenantIdPatientDocumentImportPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **inlineObject28** | [**InlineObject28**](InlineObject28.md)|  | 

### Return type

[**PatientDocument**](PatientDocument.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdPatientDocumentPost**
> PatientDocument tenantTenantIdPatientDocumentPost(tenantId, inlineObject27)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = PatientDocumentApi();
final tenantId = tenantId_example; // String | 
final inlineObject27 = InlineObject27(); // InlineObject27 | 

try {
    final result = api_instance.tenantTenantIdPatientDocumentPost(tenantId, inlineObject27);
    print(result);
} catch (e) {
    print('Exception when calling PatientDocumentApi->tenantTenantIdPatientDocumentPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **inlineObject27** | [**InlineObject27**](InlineObject27.md)|  | 

### Return type

[**PatientDocument**](PatientDocument.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

