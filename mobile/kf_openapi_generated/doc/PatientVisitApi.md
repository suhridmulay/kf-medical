# openapi.api.PatientVisitApi

## Load the API package
```dart
import 'package:openapi/api.dart';
```

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tenantTenantIdPatientVisitAutocompleteGet**](PatientVisitApi.md#tenanttenantidpatientvisitautocompleteget) | **GET** /tenant/{tenantId}/patient-visit/autocomplete | 
[**tenantTenantIdPatientVisitDelete**](PatientVisitApi.md#tenanttenantidpatientvisitdelete) | **DELETE** /tenant/{tenantId}/patient-visit | 
[**tenantTenantIdPatientVisitGet**](PatientVisitApi.md#tenanttenantidpatientvisitget) | **GET** /tenant/{tenantId}/patient-visit | 
[**tenantTenantIdPatientVisitIdGet**](PatientVisitApi.md#tenanttenantidpatientvisitidget) | **GET** /tenant/{tenantId}/patient-visit/{id} | 
[**tenantTenantIdPatientVisitIdPut**](PatientVisitApi.md#tenanttenantidpatientvisitidput) | **PUT** /tenant/{tenantId}/patient-visit/{id} | 
[**tenantTenantIdPatientVisitImportPost**](PatientVisitApi.md#tenanttenantidpatientvisitimportpost) | **POST** /tenant/{tenantId}/patient-visit/import | 
[**tenantTenantIdPatientVisitPost**](PatientVisitApi.md#tenanttenantidpatientvisitpost) | **POST** /tenant/{tenantId}/patient-visit | 


# **tenantTenantIdPatientVisitAutocompleteGet**
> List<InlineResponse2001> tenantTenantIdPatientVisitAutocompleteGet(tenantId, query, limit)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = PatientVisitApi();
final tenantId = tenantId_example; // String | 
final query = query_example; // String | 
final limit = 10; // num | 

try {
    final result = api_instance.tenantTenantIdPatientVisitAutocompleteGet(tenantId, query, limit);
    print(result);
} catch (e) {
    print('Exception when calling PatientVisitApi->tenantTenantIdPatientVisitAutocompleteGet: $e\n');
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

# **tenantTenantIdPatientVisitDelete**
> tenantTenantIdPatientVisitDelete(tenantId, idsLeftSquareBracketRightSquareBracket)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = PatientVisitApi();
final tenantId = tenantId_example; // String | 
final idsLeftSquareBracketRightSquareBracket = []; // List<String> | 

try {
    api_instance.tenantTenantIdPatientVisitDelete(tenantId, idsLeftSquareBracketRightSquareBracket);
} catch (e) {
    print('Exception when calling PatientVisitApi->tenantTenantIdPatientVisitDelete: $e\n');
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

# **tenantTenantIdPatientVisitGet**
> InlineResponse2003 tenantTenantIdPatientVisitGet(tenantId, filterLeftSquareBracketIdRightSquareBracket, filterLeftSquareBracketPatientRightSquareBracket, filterLeftSquareBracketMedicalCenterRightSquareBracket, filterLeftSquareBracketDoctorRightSquareBracket, filterLeftSquareBracketVisitDateRangeRightSquareBracketLeftSquareBracketRightSquareBracket, filterLeftSquareBracketRepeatVisitRightSquareBracket, filterLeftSquareBracketCaseSeverityRightSquareBracket, filterLeftSquareBracketIsTelemedReferralRightSquareBracket, filterLeftSquareBracketPatientCopayRangeRightSquareBracketLeftSquareBracketRightSquareBracket, filterLeftSquareBracketTelemedCopayRangeRightSquareBracketLeftSquareBracketRightSquareBracket, filterLeftSquareBracketTelemedicineDoctorRightSquareBracket, filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, offset, limit, orderBy)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = PatientVisitApi();
final tenantId = tenantId_example; // String | 
final filterLeftSquareBracketIdRightSquareBracket = filterLeftSquareBracketIdRightSquareBracket_example; // String | 
final filterLeftSquareBracketPatientRightSquareBracket = 38400000-8cf0-11bd-b23e-10b96e4ef00d; // String | 
final filterLeftSquareBracketMedicalCenterRightSquareBracket = 38400000-8cf0-11bd-b23e-10b96e4ef00d; // String | 
final filterLeftSquareBracketDoctorRightSquareBracket = 38400000-8cf0-11bd-b23e-10b96e4ef00d; // String | 
final filterLeftSquareBracketVisitDateRangeRightSquareBracketLeftSquareBracketRightSquareBracket = []; // List<DateTime> | 
final filterLeftSquareBracketRepeatVisitRightSquareBracket = true; // bool | 
final filterLeftSquareBracketCaseSeverityRightSquareBracket = filterLeftSquareBracketCaseSeverityRightSquareBracket_example; // String | 
final filterLeftSquareBracketIsTelemedReferralRightSquareBracket = true; // bool | 
final filterLeftSquareBracketPatientCopayRangeRightSquareBracketLeftSquareBracketRightSquareBracket = []; // List<num> | 
final filterLeftSquareBracketTelemedCopayRangeRightSquareBracketLeftSquareBracketRightSquareBracket = []; // List<num> | 
final filterLeftSquareBracketTelemedicineDoctorRightSquareBracket = 38400000-8cf0-11bd-b23e-10b96e4ef00d; // String | 
final filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket = []; // List<DateTime> | 
final offset = 0; // num | 
final limit = 10; // num | 
final orderBy = createdAt_DESC; // String | 

try {
    final result = api_instance.tenantTenantIdPatientVisitGet(tenantId, filterLeftSquareBracketIdRightSquareBracket, filterLeftSquareBracketPatientRightSquareBracket, filterLeftSquareBracketMedicalCenterRightSquareBracket, filterLeftSquareBracketDoctorRightSquareBracket, filterLeftSquareBracketVisitDateRangeRightSquareBracketLeftSquareBracketRightSquareBracket, filterLeftSquareBracketRepeatVisitRightSquareBracket, filterLeftSquareBracketCaseSeverityRightSquareBracket, filterLeftSquareBracketIsTelemedReferralRightSquareBracket, filterLeftSquareBracketPatientCopayRangeRightSquareBracketLeftSquareBracketRightSquareBracket, filterLeftSquareBracketTelemedCopayRangeRightSquareBracketLeftSquareBracketRightSquareBracket, filterLeftSquareBracketTelemedicineDoctorRightSquareBracket, filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, offset, limit, orderBy);
    print(result);
} catch (e) {
    print('Exception when calling PatientVisitApi->tenantTenantIdPatientVisitGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **filterLeftSquareBracketIdRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketPatientRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketMedicalCenterRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketDoctorRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketVisitDateRangeRightSquareBracketLeftSquareBracketRightSquareBracket** | [**List<DateTime>**](DateTime.md)|  | [optional] [default to const []]
 **filterLeftSquareBracketRepeatVisitRightSquareBracket** | **bool**|  | [optional] 
 **filterLeftSquareBracketCaseSeverityRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketIsTelemedReferralRightSquareBracket** | **bool**|  | [optional] 
 **filterLeftSquareBracketPatientCopayRangeRightSquareBracketLeftSquareBracketRightSquareBracket** | [**List<num>**](num.md)|  | [optional] [default to const []]
 **filterLeftSquareBracketTelemedCopayRangeRightSquareBracketLeftSquareBracketRightSquareBracket** | [**List<num>**](num.md)|  | [optional] [default to const []]
 **filterLeftSquareBracketTelemedicineDoctorRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket** | [**List<DateTime>**](DateTime.md)|  | [optional] [default to const []]
 **offset** | **num**|  | [optional] 
 **limit** | **num**|  | [optional] 
 **orderBy** | **String**|  | [optional] 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdPatientVisitIdGet**
> PatientVisit tenantTenantIdPatientVisitIdGet(tenantId, id)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = PatientVisitApi();
final tenantId = tenantId_example; // String | 
final id = id_example; // String | 

try {
    final result = api_instance.tenantTenantIdPatientVisitIdGet(tenantId, id);
    print(result);
} catch (e) {
    print('Exception when calling PatientVisitApi->tenantTenantIdPatientVisitIdGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**PatientVisit**](PatientVisit.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdPatientVisitIdPut**
> PatientVisit tenantTenantIdPatientVisitIdPut(tenantId, id, inlineObject14)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = PatientVisitApi();
final tenantId = tenantId_example; // String | 
final id = id_example; // String | 
final inlineObject14 = InlineObject14(); // InlineObject14 | 

try {
    final result = api_instance.tenantTenantIdPatientVisitIdPut(tenantId, id, inlineObject14);
    print(result);
} catch (e) {
    print('Exception when calling PatientVisitApi->tenantTenantIdPatientVisitIdPut: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **id** | **String**|  | 
 **inlineObject14** | [**InlineObject14**](InlineObject14.md)|  | 

### Return type

[**PatientVisit**](PatientVisit.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdPatientVisitImportPost**
> PatientVisit tenantTenantIdPatientVisitImportPost(tenantId, inlineObject16)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = PatientVisitApi();
final tenantId = tenantId_example; // String | 
final inlineObject16 = InlineObject16(); // InlineObject16 | 

try {
    final result = api_instance.tenantTenantIdPatientVisitImportPost(tenantId, inlineObject16);
    print(result);
} catch (e) {
    print('Exception when calling PatientVisitApi->tenantTenantIdPatientVisitImportPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **inlineObject16** | [**InlineObject16**](InlineObject16.md)|  | 

### Return type

[**PatientVisit**](PatientVisit.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdPatientVisitPost**
> PatientVisit tenantTenantIdPatientVisitPost(tenantId, inlineObject15)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = PatientVisitApi();
final tenantId = tenantId_example; // String | 
final inlineObject15 = InlineObject15(); // InlineObject15 | 

try {
    final result = api_instance.tenantTenantIdPatientVisitPost(tenantId, inlineObject15);
    print(result);
} catch (e) {
    print('Exception when calling PatientVisitApi->tenantTenantIdPatientVisitPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **inlineObject15** | [**InlineObject15**](InlineObject15.md)|  | 

### Return type

[**PatientVisit**](PatientVisit.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

