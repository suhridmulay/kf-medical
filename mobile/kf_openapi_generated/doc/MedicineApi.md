# openapi.api.MedicineApi

## Load the API package
```dart
import 'package:openapi/api.dart';
```

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tenantTenantIdMedicineEnumAutocompleteGet**](MedicineApi.md#tenanttenantidmedicineenumautocompleteget) | **GET** /tenant/{tenantId}/medicine-enum/autocomplete | 
[**tenantTenantIdMedicineEnumDelete**](MedicineApi.md#tenanttenantidmedicineenumdelete) | **DELETE** /tenant/{tenantId}/medicine-enum | 
[**tenantTenantIdMedicineEnumGet**](MedicineApi.md#tenanttenantidmedicineenumget) | **GET** /tenant/{tenantId}/medicine-enum | 
[**tenantTenantIdMedicineEnumIdGet**](MedicineApi.md#tenanttenantidmedicineenumidget) | **GET** /tenant/{tenantId}/medicine-enum/{id} | 
[**tenantTenantIdMedicineEnumIdPut**](MedicineApi.md#tenanttenantidmedicineenumidput) | **PUT** /tenant/{tenantId}/medicine-enum/{id} | 
[**tenantTenantIdMedicineEnumImportPost**](MedicineApi.md#tenanttenantidmedicineenumimportpost) | **POST** /tenant/{tenantId}/medicine-enum/import | 
[**tenantTenantIdMedicineEnumPost**](MedicineApi.md#tenanttenantidmedicineenumpost) | **POST** /tenant/{tenantId}/medicine-enum | 


# **tenantTenantIdMedicineEnumAutocompleteGet**
> List<InlineResponse2001> tenantTenantIdMedicineEnumAutocompleteGet(tenantId, query, limit)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MedicineApi();
final tenantId = tenantId_example; // String | 
final query = query_example; // String | 
final limit = 10; // num | 

try {
    final result = api_instance.tenantTenantIdMedicineEnumAutocompleteGet(tenantId, query, limit);
    print(result);
} catch (e) {
    print('Exception when calling MedicineApi->tenantTenantIdMedicineEnumAutocompleteGet: $e\n');
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

# **tenantTenantIdMedicineEnumDelete**
> tenantTenantIdMedicineEnumDelete(tenantId, idsLeftSquareBracketRightSquareBracket)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MedicineApi();
final tenantId = tenantId_example; // String | 
final idsLeftSquareBracketRightSquareBracket = []; // List<String> | 

try {
    api_instance.tenantTenantIdMedicineEnumDelete(tenantId, idsLeftSquareBracketRightSquareBracket);
} catch (e) {
    print('Exception when calling MedicineApi->tenantTenantIdMedicineEnumDelete: $e\n');
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

# **tenantTenantIdMedicineEnumGet**
> InlineResponse2004 tenantTenantIdMedicineEnumGet(tenantId, filterLeftSquareBracketIdRightSquareBracket, filterLeftSquareBracketMedicineNameRightSquareBracket, filterLeftSquareBracketKeptInStockRightSquareBracket, filterLeftSquareBracketIsCommonRightSquareBracket, filterLeftSquareBracketMsrpRangeRightSquareBracketLeftSquareBracketRightSquareBracket, filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, offset, limit, orderBy)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MedicineApi();
final tenantId = tenantId_example; // String | 
final filterLeftSquareBracketIdRightSquareBracket = filterLeftSquareBracketIdRightSquareBracket_example; // String | 
final filterLeftSquareBracketMedicineNameRightSquareBracket = filterLeftSquareBracketMedicineNameRightSquareBracket_example; // String | 
final filterLeftSquareBracketKeptInStockRightSquareBracket = true; // bool | 
final filterLeftSquareBracketIsCommonRightSquareBracket = true; // bool | 
final filterLeftSquareBracketMsrpRangeRightSquareBracketLeftSquareBracketRightSquareBracket = []; // List<num> | 
final filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket = []; // List<DateTime> | 
final offset = 0; // num | 
final limit = 10; // num | 
final orderBy = createdAt_DESC; // String | 

try {
    final result = api_instance.tenantTenantIdMedicineEnumGet(tenantId, filterLeftSquareBracketIdRightSquareBracket, filterLeftSquareBracketMedicineNameRightSquareBracket, filterLeftSquareBracketKeptInStockRightSquareBracket, filterLeftSquareBracketIsCommonRightSquareBracket, filterLeftSquareBracketMsrpRangeRightSquareBracketLeftSquareBracketRightSquareBracket, filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, offset, limit, orderBy);
    print(result);
} catch (e) {
    print('Exception when calling MedicineApi->tenantTenantIdMedicineEnumGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **filterLeftSquareBracketIdRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketMedicineNameRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketKeptInStockRightSquareBracket** | **bool**|  | [optional] 
 **filterLeftSquareBracketIsCommonRightSquareBracket** | **bool**|  | [optional] 
 **filterLeftSquareBracketMsrpRangeRightSquareBracketLeftSquareBracketRightSquareBracket** | [**List<num>**](num.md)|  | [optional] [default to const []]
 **filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket** | [**List<DateTime>**](DateTime.md)|  | [optional] [default to const []]
 **offset** | **num**|  | [optional] 
 **limit** | **num**|  | [optional] 
 **orderBy** | **String**|  | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdMedicineEnumIdGet**
> MedicineEnum tenantTenantIdMedicineEnumIdGet(tenantId, id)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MedicineApi();
final tenantId = tenantId_example; // String | 
final id = id_example; // String | 

try {
    final result = api_instance.tenantTenantIdMedicineEnumIdGet(tenantId, id);
    print(result);
} catch (e) {
    print('Exception when calling MedicineApi->tenantTenantIdMedicineEnumIdGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**MedicineEnum**](MedicineEnum.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdMedicineEnumIdPut**
> MedicineEnum tenantTenantIdMedicineEnumIdPut(tenantId, id, inlineObject17)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MedicineApi();
final tenantId = tenantId_example; // String | 
final id = id_example; // String | 
final inlineObject17 = InlineObject17(); // InlineObject17 | 

try {
    final result = api_instance.tenantTenantIdMedicineEnumIdPut(tenantId, id, inlineObject17);
    print(result);
} catch (e) {
    print('Exception when calling MedicineApi->tenantTenantIdMedicineEnumIdPut: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **id** | **String**|  | 
 **inlineObject17** | [**InlineObject17**](InlineObject17.md)|  | 

### Return type

[**MedicineEnum**](MedicineEnum.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdMedicineEnumImportPost**
> MedicineEnum tenantTenantIdMedicineEnumImportPost(tenantId, inlineObject19)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MedicineApi();
final tenantId = tenantId_example; // String | 
final inlineObject19 = InlineObject19(); // InlineObject19 | 

try {
    final result = api_instance.tenantTenantIdMedicineEnumImportPost(tenantId, inlineObject19);
    print(result);
} catch (e) {
    print('Exception when calling MedicineApi->tenantTenantIdMedicineEnumImportPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **inlineObject19** | [**InlineObject19**](InlineObject19.md)|  | 

### Return type

[**MedicineEnum**](MedicineEnum.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdMedicineEnumPost**
> MedicineEnum tenantTenantIdMedicineEnumPost(tenantId, inlineObject18)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MedicineApi();
final tenantId = tenantId_example; // String | 
final inlineObject18 = InlineObject18(); // InlineObject18 | 

try {
    final result = api_instance.tenantTenantIdMedicineEnumPost(tenantId, inlineObject18);
    print(result);
} catch (e) {
    print('Exception when calling MedicineApi->tenantTenantIdMedicineEnumPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **inlineObject18** | [**InlineObject18**](InlineObject18.md)|  | 

### Return type

[**MedicineEnum**](MedicineEnum.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

