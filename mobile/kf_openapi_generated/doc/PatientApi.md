# openapi.api.PatientApi

## Load the API package
```dart
import 'package:openapi/api.dart';
```

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tenantTenantIdPatientAutocompleteGet**](PatientApi.md#tenanttenantidpatientautocompleteget) | **GET** /tenant/{tenantId}/patient/autocomplete | 
[**tenantTenantIdPatientDelete**](PatientApi.md#tenanttenantidpatientdelete) | **DELETE** /tenant/{tenantId}/patient | 
[**tenantTenantIdPatientGet**](PatientApi.md#tenanttenantidpatientget) | **GET** /tenant/{tenantId}/patient | 
[**tenantTenantIdPatientIdGet**](PatientApi.md#tenanttenantidpatientidget) | **GET** /tenant/{tenantId}/patient/{id} | 
[**tenantTenantIdPatientIdPut**](PatientApi.md#tenanttenantidpatientidput) | **PUT** /tenant/{tenantId}/patient/{id} | 
[**tenantTenantIdPatientImportPost**](PatientApi.md#tenanttenantidpatientimportpost) | **POST** /tenant/{tenantId}/patient/import | 
[**tenantTenantIdPatientPost**](PatientApi.md#tenanttenantidpatientpost) | **POST** /tenant/{tenantId}/patient | 


# **tenantTenantIdPatientAutocompleteGet**
> List<InlineResponse2001> tenantTenantIdPatientAutocompleteGet(tenantId, query, limit)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = PatientApi();
final tenantId = tenantId_example; // String | 
final query = query_example; // String | 
final limit = 10; // num | 

try {
    final result = api_instance.tenantTenantIdPatientAutocompleteGet(tenantId, query, limit);
    print(result);
} catch (e) {
    print('Exception when calling PatientApi->tenantTenantIdPatientAutocompleteGet: $e\n');
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

# **tenantTenantIdPatientDelete**
> tenantTenantIdPatientDelete(tenantId, idsLeftSquareBracketRightSquareBracket)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = PatientApi();
final tenantId = tenantId_example; // String | 
final idsLeftSquareBracketRightSquareBracket = []; // List<String> | 

try {
    api_instance.tenantTenantIdPatientDelete(tenantId, idsLeftSquareBracketRightSquareBracket);
} catch (e) {
    print('Exception when calling PatientApi->tenantTenantIdPatientDelete: $e\n');
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

# **tenantTenantIdPatientGet**
> InlineResponse200 tenantTenantIdPatientGet(tenantId, filterLeftSquareBracketIdRightSquareBracket, filterLeftSquareBracketFirstNameRightSquareBracket, filterLeftSquareBracketLastNameRightSquareBracket, filterLeftSquareBracketFullNameRightSquareBracket, filterLeftSquareBracketGenderRightSquareBracket, filterLeftSquareBracketLocalityNameRightSquareBracket, filterLeftSquareBracketMobileNumberRightSquareBracket, filterLeftSquareBracketAadharNumberRightSquareBracket, filterLeftSquareBracketDateOfBirthRangeRightSquareBracketLeftSquareBracketRightSquareBracket, filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, offset, limit, orderBy)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = PatientApi();
final tenantId = tenantId_example; // String | 
final filterLeftSquareBracketIdRightSquareBracket = filterLeftSquareBracketIdRightSquareBracket_example; // String | 
final filterLeftSquareBracketFirstNameRightSquareBracket = filterLeftSquareBracketFirstNameRightSquareBracket_example; // String | 
final filterLeftSquareBracketLastNameRightSquareBracket = filterLeftSquareBracketLastNameRightSquareBracket_example; // String | 
final filterLeftSquareBracketFullNameRightSquareBracket = filterLeftSquareBracketFullNameRightSquareBracket_example; // String | 
final filterLeftSquareBracketGenderRightSquareBracket = filterLeftSquareBracketGenderRightSquareBracket_example; // String | 
final filterLeftSquareBracketLocalityNameRightSquareBracket = filterLeftSquareBracketLocalityNameRightSquareBracket_example; // String | 
final filterLeftSquareBracketMobileNumberRightSquareBracket = filterLeftSquareBracketMobileNumberRightSquareBracket_example; // String | 
final filterLeftSquareBracketAadharNumberRightSquareBracket = filterLeftSquareBracketAadharNumberRightSquareBracket_example; // String | 
final filterLeftSquareBracketDateOfBirthRangeRightSquareBracketLeftSquareBracketRightSquareBracket = []; // List<DateTime> | 
final filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket = []; // List<DateTime> | 
final offset = 0; // num | 
final limit = 10; // num | 
final orderBy = createdAt_DESC; // String | 

try {
    final result = api_instance.tenantTenantIdPatientGet(tenantId, filterLeftSquareBracketIdRightSquareBracket, filterLeftSquareBracketFirstNameRightSquareBracket, filterLeftSquareBracketLastNameRightSquareBracket, filterLeftSquareBracketFullNameRightSquareBracket, filterLeftSquareBracketGenderRightSquareBracket, filterLeftSquareBracketLocalityNameRightSquareBracket, filterLeftSquareBracketMobileNumberRightSquareBracket, filterLeftSquareBracketAadharNumberRightSquareBracket, filterLeftSquareBracketDateOfBirthRangeRightSquareBracketLeftSquareBracketRightSquareBracket, filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, offset, limit, orderBy);
    print(result);
} catch (e) {
    print('Exception when calling PatientApi->tenantTenantIdPatientGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **filterLeftSquareBracketIdRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketFirstNameRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketLastNameRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketFullNameRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketGenderRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketLocalityNameRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketMobileNumberRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketAadharNumberRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketDateOfBirthRangeRightSquareBracketLeftSquareBracketRightSquareBracket** | [**List<DateTime>**](DateTime.md)|  | [optional] [default to const []]
 **filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket** | [**List<DateTime>**](DateTime.md)|  | [optional] [default to const []]
 **offset** | **num**|  | [optional] 
 **limit** | **num**|  | [optional] 
 **orderBy** | **String**|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdPatientIdGet**
> Patient tenantTenantIdPatientIdGet(tenantId, id)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = PatientApi();
final tenantId = tenantId_example; // String | 
final id = id_example; // String | 

try {
    final result = api_instance.tenantTenantIdPatientIdGet(tenantId, id);
    print(result);
} catch (e) {
    print('Exception when calling PatientApi->tenantTenantIdPatientIdGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**Patient**](Patient.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdPatientIdPut**
> Patient tenantTenantIdPatientIdPut(tenantId, id, inlineObject8)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = PatientApi();
final tenantId = tenantId_example; // String | 
final id = id_example; // String | 
final inlineObject8 = InlineObject8(); // InlineObject8 | 

try {
    final result = api_instance.tenantTenantIdPatientIdPut(tenantId, id, inlineObject8);
    print(result);
} catch (e) {
    print('Exception when calling PatientApi->tenantTenantIdPatientIdPut: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **id** | **String**|  | 
 **inlineObject8** | [**InlineObject8**](InlineObject8.md)|  | 

### Return type

[**Patient**](Patient.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdPatientImportPost**
> Patient tenantTenantIdPatientImportPost(tenantId, inlineObject10)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = PatientApi();
final tenantId = tenantId_example; // String | 
final inlineObject10 = InlineObject10(); // InlineObject10 | 

try {
    final result = api_instance.tenantTenantIdPatientImportPost(tenantId, inlineObject10);
    print(result);
} catch (e) {
    print('Exception when calling PatientApi->tenantTenantIdPatientImportPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **inlineObject10** | [**InlineObject10**](InlineObject10.md)|  | 

### Return type

[**Patient**](Patient.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdPatientPost**
> Patient tenantTenantIdPatientPost(tenantId, inlineObject9)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = PatientApi();
final tenantId = tenantId_example; // String | 
final inlineObject9 = InlineObject9(); // InlineObject9 | 

try {
    final result = api_instance.tenantTenantIdPatientPost(tenantId, inlineObject9);
    print(result);
} catch (e) {
    print('Exception when calling PatientApi->tenantTenantIdPatientPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **inlineObject9** | [**InlineObject9**](InlineObject9.md)|  | 

### Return type

[**Patient**](Patient.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

