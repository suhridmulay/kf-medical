# openapi.api.MedicineInventoryApi

## Load the API package
```dart
import 'package:openapi/api.dart';
```

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tenantTenantIdMedicineInventoryAutocompleteGet**](MedicineInventoryApi.md#tenanttenantidmedicineinventoryautocompleteget) | **GET** /tenant/{tenantId}/medicine-inventory/autocomplete | 
[**tenantTenantIdMedicineInventoryDelete**](MedicineInventoryApi.md#tenanttenantidmedicineinventorydelete) | **DELETE** /tenant/{tenantId}/medicine-inventory | 
[**tenantTenantIdMedicineInventoryGet**](MedicineInventoryApi.md#tenanttenantidmedicineinventoryget) | **GET** /tenant/{tenantId}/medicine-inventory | 
[**tenantTenantIdMedicineInventoryIdGet**](MedicineInventoryApi.md#tenanttenantidmedicineinventoryidget) | **GET** /tenant/{tenantId}/medicine-inventory/{id} | 
[**tenantTenantIdMedicineInventoryIdPut**](MedicineInventoryApi.md#tenanttenantidmedicineinventoryidput) | **PUT** /tenant/{tenantId}/medicine-inventory/{id} | 
[**tenantTenantIdMedicineInventoryImportPost**](MedicineInventoryApi.md#tenanttenantidmedicineinventoryimportpost) | **POST** /tenant/{tenantId}/medicine-inventory/import | 
[**tenantTenantIdMedicineInventoryPost**](MedicineInventoryApi.md#tenanttenantidmedicineinventorypost) | **POST** /tenant/{tenantId}/medicine-inventory | 


# **tenantTenantIdMedicineInventoryAutocompleteGet**
> List<InlineResponse2001> tenantTenantIdMedicineInventoryAutocompleteGet(tenantId, query, limit)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MedicineInventoryApi();
final tenantId = tenantId_example; // String | 
final query = query_example; // String | 
final limit = 10; // num | 

try {
    final result = api_instance.tenantTenantIdMedicineInventoryAutocompleteGet(tenantId, query, limit);
    print(result);
} catch (e) {
    print('Exception when calling MedicineInventoryApi->tenantTenantIdMedicineInventoryAutocompleteGet: $e\n');
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

# **tenantTenantIdMedicineInventoryDelete**
> tenantTenantIdMedicineInventoryDelete(tenantId, idsLeftSquareBracketRightSquareBracket)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MedicineInventoryApi();
final tenantId = tenantId_example; // String | 
final idsLeftSquareBracketRightSquareBracket = []; // List<String> | 

try {
    api_instance.tenantTenantIdMedicineInventoryDelete(tenantId, idsLeftSquareBracketRightSquareBracket);
} catch (e) {
    print('Exception when calling MedicineInventoryApi->tenantTenantIdMedicineInventoryDelete: $e\n');
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

# **tenantTenantIdMedicineInventoryGet**
> InlineResponse2009 tenantTenantIdMedicineInventoryGet(tenantId, filterLeftSquareBracketIdRightSquareBracket, filterLeftSquareBracketMedicineRightSquareBracket, filterLeftSquareBracketInventoryDateRangeRightSquareBracketLeftSquareBracketRightSquareBracket, filterLeftSquareBracketCountRangeRightSquareBracketLeftSquareBracketRightSquareBracket, filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, offset, limit, orderBy)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MedicineInventoryApi();
final tenantId = tenantId_example; // String | 
final filterLeftSquareBracketIdRightSquareBracket = filterLeftSquareBracketIdRightSquareBracket_example; // String | 
final filterLeftSquareBracketMedicineRightSquareBracket = 38400000-8cf0-11bd-b23e-10b96e4ef00d; // String | 
final filterLeftSquareBracketInventoryDateRangeRightSquareBracketLeftSquareBracketRightSquareBracket = []; // List<DateTime> | 
final filterLeftSquareBracketCountRangeRightSquareBracketLeftSquareBracketRightSquareBracket = []; // List<int> | 
final filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket = []; // List<DateTime> | 
final offset = 0; // num | 
final limit = 10; // num | 
final orderBy = createdAt_DESC; // String | 

try {
    final result = api_instance.tenantTenantIdMedicineInventoryGet(tenantId, filterLeftSquareBracketIdRightSquareBracket, filterLeftSquareBracketMedicineRightSquareBracket, filterLeftSquareBracketInventoryDateRangeRightSquareBracketLeftSquareBracketRightSquareBracket, filterLeftSquareBracketCountRangeRightSquareBracketLeftSquareBracketRightSquareBracket, filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, offset, limit, orderBy);
    print(result);
} catch (e) {
    print('Exception when calling MedicineInventoryApi->tenantTenantIdMedicineInventoryGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **filterLeftSquareBracketIdRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketMedicineRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketInventoryDateRangeRightSquareBracketLeftSquareBracketRightSquareBracket** | [**List<DateTime>**](DateTime.md)|  | [optional] [default to const []]
 **filterLeftSquareBracketCountRangeRightSquareBracketLeftSquareBracketRightSquareBracket** | [**List<int>**](int.md)|  | [optional] [default to const []]
 **filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket** | [**List<DateTime>**](DateTime.md)|  | [optional] [default to const []]
 **offset** | **num**|  | [optional] 
 **limit** | **num**|  | [optional] 
 **orderBy** | **String**|  | [optional] 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdMedicineInventoryIdGet**
> MedicineInventory tenantTenantIdMedicineInventoryIdGet(tenantId, id)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MedicineInventoryApi();
final tenantId = tenantId_example; // String | 
final id = id_example; // String | 

try {
    final result = api_instance.tenantTenantIdMedicineInventoryIdGet(tenantId, id);
    print(result);
} catch (e) {
    print('Exception when calling MedicineInventoryApi->tenantTenantIdMedicineInventoryIdGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**MedicineInventory**](MedicineInventory.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdMedicineInventoryIdPut**
> MedicineInventory tenantTenantIdMedicineInventoryIdPut(tenantId, id, inlineObject32)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MedicineInventoryApi();
final tenantId = tenantId_example; // String | 
final id = id_example; // String | 
final inlineObject32 = InlineObject32(); // InlineObject32 | 

try {
    final result = api_instance.tenantTenantIdMedicineInventoryIdPut(tenantId, id, inlineObject32);
    print(result);
} catch (e) {
    print('Exception when calling MedicineInventoryApi->tenantTenantIdMedicineInventoryIdPut: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **id** | **String**|  | 
 **inlineObject32** | [**InlineObject32**](InlineObject32.md)|  | 

### Return type

[**MedicineInventory**](MedicineInventory.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdMedicineInventoryImportPost**
> MedicineInventory tenantTenantIdMedicineInventoryImportPost(tenantId, inlineObject34)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MedicineInventoryApi();
final tenantId = tenantId_example; // String | 
final inlineObject34 = InlineObject34(); // InlineObject34 | 

try {
    final result = api_instance.tenantTenantIdMedicineInventoryImportPost(tenantId, inlineObject34);
    print(result);
} catch (e) {
    print('Exception when calling MedicineInventoryApi->tenantTenantIdMedicineInventoryImportPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **inlineObject34** | [**InlineObject34**](InlineObject34.md)|  | 

### Return type

[**MedicineInventory**](MedicineInventory.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdMedicineInventoryPost**
> MedicineInventory tenantTenantIdMedicineInventoryPost(tenantId, inlineObject33)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MedicineInventoryApi();
final tenantId = tenantId_example; // String | 
final inlineObject33 = InlineObject33(); // InlineObject33 | 

try {
    final result = api_instance.tenantTenantIdMedicineInventoryPost(tenantId, inlineObject33);
    print(result);
} catch (e) {
    print('Exception when calling MedicineInventoryApi->tenantTenantIdMedicineInventoryPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **inlineObject33** | [**InlineObject33**](InlineObject33.md)|  | 

### Return type

[**MedicineInventory**](MedicineInventory.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

