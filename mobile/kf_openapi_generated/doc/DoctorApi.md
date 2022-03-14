# openapi.api.DoctorApi

## Load the API package
```dart
import 'package:openapi/api.dart';
```

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tenantTenantIdDoctorAutocompleteGet**](DoctorApi.md#tenanttenantiddoctorautocompleteget) | **GET** /tenant/{tenantId}/doctor/autocomplete | 
[**tenantTenantIdDoctorDelete**](DoctorApi.md#tenanttenantiddoctordelete) | **DELETE** /tenant/{tenantId}/doctor | 
[**tenantTenantIdDoctorGet**](DoctorApi.md#tenanttenantiddoctorget) | **GET** /tenant/{tenantId}/doctor | 
[**tenantTenantIdDoctorIdGet**](DoctorApi.md#tenanttenantiddoctoridget) | **GET** /tenant/{tenantId}/doctor/{id} | 
[**tenantTenantIdDoctorIdPut**](DoctorApi.md#tenanttenantiddoctoridput) | **PUT** /tenant/{tenantId}/doctor/{id} | 
[**tenantTenantIdDoctorImportPost**](DoctorApi.md#tenanttenantiddoctorimportpost) | **POST** /tenant/{tenantId}/doctor/import | 
[**tenantTenantIdDoctorPost**](DoctorApi.md#tenanttenantiddoctorpost) | **POST** /tenant/{tenantId}/doctor | 


# **tenantTenantIdDoctorAutocompleteGet**
> List<InlineResponse2001> tenantTenantIdDoctorAutocompleteGet(tenantId, query, limit)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = DoctorApi();
final tenantId = tenantId_example; // String | 
final query = query_example; // String | 
final limit = 10; // num | 

try {
    final result = api_instance.tenantTenantIdDoctorAutocompleteGet(tenantId, query, limit);
    print(result);
} catch (e) {
    print('Exception when calling DoctorApi->tenantTenantIdDoctorAutocompleteGet: $e\n');
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

# **tenantTenantIdDoctorDelete**
> tenantTenantIdDoctorDelete(tenantId, idsLeftSquareBracketRightSquareBracket)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = DoctorApi();
final tenantId = tenantId_example; // String | 
final idsLeftSquareBracketRightSquareBracket = []; // List<String> | 

try {
    api_instance.tenantTenantIdDoctorDelete(tenantId, idsLeftSquareBracketRightSquareBracket);
} catch (e) {
    print('Exception when calling DoctorApi->tenantTenantIdDoctorDelete: $e\n');
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

# **tenantTenantIdDoctorGet**
> InlineResponse2006 tenantTenantIdDoctorGet(tenantId, filterLeftSquareBracketIdRightSquareBracket, filterLeftSquareBracketNameRightSquareBracket, filterLeftSquareBracketSpecializationRightSquareBracket, filterLeftSquareBracketUserRightSquareBracket, filterLeftSquareBracketPhoneRightSquareBracket, filterLeftSquareBracketIsRuralHealthcareProfessionalRightSquareBracket, filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, offset, limit, orderBy)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = DoctorApi();
final tenantId = tenantId_example; // String | 
final filterLeftSquareBracketIdRightSquareBracket = filterLeftSquareBracketIdRightSquareBracket_example; // String | 
final filterLeftSquareBracketNameRightSquareBracket = filterLeftSquareBracketNameRightSquareBracket_example; // String | 
final filterLeftSquareBracketSpecializationRightSquareBracket = filterLeftSquareBracketSpecializationRightSquareBracket_example; // String | 
final filterLeftSquareBracketUserRightSquareBracket = 38400000-8cf0-11bd-b23e-10b96e4ef00d; // String | 
final filterLeftSquareBracketPhoneRightSquareBracket = filterLeftSquareBracketPhoneRightSquareBracket_example; // String | 
final filterLeftSquareBracketIsRuralHealthcareProfessionalRightSquareBracket = true; // bool | 
final filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket = []; // List<DateTime> | 
final offset = 0; // num | 
final limit = 10; // num | 
final orderBy = createdAt_DESC; // String | 

try {
    final result = api_instance.tenantTenantIdDoctorGet(tenantId, filterLeftSquareBracketIdRightSquareBracket, filterLeftSquareBracketNameRightSquareBracket, filterLeftSquareBracketSpecializationRightSquareBracket, filterLeftSquareBracketUserRightSquareBracket, filterLeftSquareBracketPhoneRightSquareBracket, filterLeftSquareBracketIsRuralHealthcareProfessionalRightSquareBracket, filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, offset, limit, orderBy);
    print(result);
} catch (e) {
    print('Exception when calling DoctorApi->tenantTenantIdDoctorGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **filterLeftSquareBracketIdRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketNameRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketSpecializationRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketUserRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketPhoneRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketIsRuralHealthcareProfessionalRightSquareBracket** | **bool**|  | [optional] 
 **filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket** | [**List<DateTime>**](DateTime.md)|  | [optional] [default to const []]
 **offset** | **num**|  | [optional] 
 **limit** | **num**|  | [optional] 
 **orderBy** | **String**|  | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdDoctorIdGet**
> Doctor tenantTenantIdDoctorIdGet(tenantId, id)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = DoctorApi();
final tenantId = tenantId_example; // String | 
final id = id_example; // String | 

try {
    final result = api_instance.tenantTenantIdDoctorIdGet(tenantId, id);
    print(result);
} catch (e) {
    print('Exception when calling DoctorApi->tenantTenantIdDoctorIdGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**Doctor**](Doctor.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdDoctorIdPut**
> Doctor tenantTenantIdDoctorIdPut(tenantId, id, inlineObject23)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = DoctorApi();
final tenantId = tenantId_example; // String | 
final id = id_example; // String | 
final inlineObject23 = InlineObject23(); // InlineObject23 | 

try {
    final result = api_instance.tenantTenantIdDoctorIdPut(tenantId, id, inlineObject23);
    print(result);
} catch (e) {
    print('Exception when calling DoctorApi->tenantTenantIdDoctorIdPut: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **id** | **String**|  | 
 **inlineObject23** | [**InlineObject23**](InlineObject23.md)|  | 

### Return type

[**Doctor**](Doctor.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdDoctorImportPost**
> Doctor tenantTenantIdDoctorImportPost(tenantId, inlineObject25)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = DoctorApi();
final tenantId = tenantId_example; // String | 
final inlineObject25 = InlineObject25(); // InlineObject25 | 

try {
    final result = api_instance.tenantTenantIdDoctorImportPost(tenantId, inlineObject25);
    print(result);
} catch (e) {
    print('Exception when calling DoctorApi->tenantTenantIdDoctorImportPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **inlineObject25** | [**InlineObject25**](InlineObject25.md)|  | 

### Return type

[**Doctor**](Doctor.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdDoctorPost**
> Doctor tenantTenantIdDoctorPost(tenantId, inlineObject24)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = DoctorApi();
final tenantId = tenantId_example; // String | 
final inlineObject24 = InlineObject24(); // InlineObject24 | 

try {
    final result = api_instance.tenantTenantIdDoctorPost(tenantId, inlineObject24);
    print(result);
} catch (e) {
    print('Exception when calling DoctorApi->tenantTenantIdDoctorPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **inlineObject24** | [**InlineObject24**](InlineObject24.md)|  | 

### Return type

[**Doctor**](Doctor.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

