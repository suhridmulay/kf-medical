# openapi.api.MedicineSuppliesApi

## Load the API package
```dart
import 'package:openapi/api.dart';
```

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tenantTenantIdMedicineSuppliesAutocompleteGet**](MedicineSuppliesApi.md#tenanttenantidmedicinesuppliesautocompleteget) | **GET** /tenant/{tenantId}/medicine-supplies/autocomplete | 
[**tenantTenantIdMedicineSuppliesDelete**](MedicineSuppliesApi.md#tenanttenantidmedicinesuppliesdelete) | **DELETE** /tenant/{tenantId}/medicine-supplies | 
[**tenantTenantIdMedicineSuppliesGet**](MedicineSuppliesApi.md#tenanttenantidmedicinesuppliesget) | **GET** /tenant/{tenantId}/medicine-supplies | 
[**tenantTenantIdMedicineSuppliesIdGet**](MedicineSuppliesApi.md#tenanttenantidmedicinesuppliesidget) | **GET** /tenant/{tenantId}/medicine-supplies/{id} | 
[**tenantTenantIdMedicineSuppliesIdPut**](MedicineSuppliesApi.md#tenanttenantidmedicinesuppliesidput) | **PUT** /tenant/{tenantId}/medicine-supplies/{id} | 
[**tenantTenantIdMedicineSuppliesImportPost**](MedicineSuppliesApi.md#tenanttenantidmedicinesuppliesimportpost) | **POST** /tenant/{tenantId}/medicine-supplies/import | 
[**tenantTenantIdMedicineSuppliesPost**](MedicineSuppliesApi.md#tenanttenantidmedicinesuppliespost) | **POST** /tenant/{tenantId}/medicine-supplies | 


# **tenantTenantIdMedicineSuppliesAutocompleteGet**
> List<InlineResponse2001> tenantTenantIdMedicineSuppliesAutocompleteGet(tenantId, query, limit)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MedicineSuppliesApi();
final tenantId = tenantId_example; // String | 
final query = query_example; // String | 
final limit = 10; // num | 

try {
    final result = api_instance.tenantTenantIdMedicineSuppliesAutocompleteGet(tenantId, query, limit);
    print(result);
} catch (e) {
    print('Exception when calling MedicineSuppliesApi->tenantTenantIdMedicineSuppliesAutocompleteGet: $e\n');
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

# **tenantTenantIdMedicineSuppliesDelete**
> tenantTenantIdMedicineSuppliesDelete(tenantId, idsLeftSquareBracketRightSquareBracket)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MedicineSuppliesApi();
final tenantId = tenantId_example; // String | 
final idsLeftSquareBracketRightSquareBracket = []; // List<String> | 

try {
    api_instance.tenantTenantIdMedicineSuppliesDelete(tenantId, idsLeftSquareBracketRightSquareBracket);
} catch (e) {
    print('Exception when calling MedicineSuppliesApi->tenantTenantIdMedicineSuppliesDelete: $e\n');
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

# **tenantTenantIdMedicineSuppliesGet**
> InlineResponse2008 tenantTenantIdMedicineSuppliesGet(tenantId, filterLeftSquareBracketIdRightSquareBracket, filterLeftSquareBracketMedicineRightSquareBracket, filterLeftSquareBracketInventoryAddDateRangeRightSquareBracketLeftSquareBracketRightSquareBracket, filterLeftSquareBracketCountRangeRightSquareBracketLeftSquareBracketRightSquareBracket, filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, offset, limit, orderBy)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MedicineSuppliesApi();
final tenantId = tenantId_example; // String | 
final filterLeftSquareBracketIdRightSquareBracket = filterLeftSquareBracketIdRightSquareBracket_example; // String | 
final filterLeftSquareBracketMedicineRightSquareBracket = 38400000-8cf0-11bd-b23e-10b96e4ef00d; // String | 
final filterLeftSquareBracketInventoryAddDateRangeRightSquareBracketLeftSquareBracketRightSquareBracket = []; // List<DateTime> | 
final filterLeftSquareBracketCountRangeRightSquareBracketLeftSquareBracketRightSquareBracket = []; // List<int> | 
final filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket = []; // List<DateTime> | 
final offset = 0; // num | 
final limit = 10; // num | 
final orderBy = createdAt_DESC; // String | 

try {
    final result = api_instance.tenantTenantIdMedicineSuppliesGet(tenantId, filterLeftSquareBracketIdRightSquareBracket, filterLeftSquareBracketMedicineRightSquareBracket, filterLeftSquareBracketInventoryAddDateRangeRightSquareBracketLeftSquareBracketRightSquareBracket, filterLeftSquareBracketCountRangeRightSquareBracketLeftSquareBracketRightSquareBracket, filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, offset, limit, orderBy);
    print(result);
} catch (e) {
    print('Exception when calling MedicineSuppliesApi->tenantTenantIdMedicineSuppliesGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **filterLeftSquareBracketIdRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketMedicineRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketInventoryAddDateRangeRightSquareBracketLeftSquareBracketRightSquareBracket** | [**List<DateTime>**](DateTime.md)|  | [optional] [default to const []]
 **filterLeftSquareBracketCountRangeRightSquareBracketLeftSquareBracketRightSquareBracket** | [**List<int>**](int.md)|  | [optional] [default to const []]
 **filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket** | [**List<DateTime>**](DateTime.md)|  | [optional] [default to const []]
 **offset** | **num**|  | [optional] 
 **limit** | **num**|  | [optional] 
 **orderBy** | **String**|  | [optional] 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdMedicineSuppliesIdGet**
> MedicineSupplies tenantTenantIdMedicineSuppliesIdGet(tenantId, id)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MedicineSuppliesApi();
final tenantId = tenantId_example; // String | 
final id = id_example; // String | 

try {
    final result = api_instance.tenantTenantIdMedicineSuppliesIdGet(tenantId, id);
    print(result);
} catch (e) {
    print('Exception when calling MedicineSuppliesApi->tenantTenantIdMedicineSuppliesIdGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**MedicineSupplies**](MedicineSupplies.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdMedicineSuppliesIdPut**
> MedicineSupplies tenantTenantIdMedicineSuppliesIdPut(tenantId, id, inlineObject29)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MedicineSuppliesApi();
final tenantId = tenantId_example; // String | 
final id = id_example; // String | 
final inlineObject29 = InlineObject29(); // InlineObject29 | 

try {
    final result = api_instance.tenantTenantIdMedicineSuppliesIdPut(tenantId, id, inlineObject29);
    print(result);
} catch (e) {
    print('Exception when calling MedicineSuppliesApi->tenantTenantIdMedicineSuppliesIdPut: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **id** | **String**|  | 
 **inlineObject29** | [**InlineObject29**](InlineObject29.md)|  | 

### Return type

[**MedicineSupplies**](MedicineSupplies.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdMedicineSuppliesImportPost**
> MedicineSupplies tenantTenantIdMedicineSuppliesImportPost(tenantId, inlineObject31)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MedicineSuppliesApi();
final tenantId = tenantId_example; // String | 
final inlineObject31 = InlineObject31(); // InlineObject31 | 

try {
    final result = api_instance.tenantTenantIdMedicineSuppliesImportPost(tenantId, inlineObject31);
    print(result);
} catch (e) {
    print('Exception when calling MedicineSuppliesApi->tenantTenantIdMedicineSuppliesImportPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **inlineObject31** | [**InlineObject31**](InlineObject31.md)|  | 

### Return type

[**MedicineSupplies**](MedicineSupplies.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdMedicineSuppliesPost**
> MedicineSupplies tenantTenantIdMedicineSuppliesPost(tenantId, inlineObject30)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MedicineSuppliesApi();
final tenantId = tenantId_example; // String | 
final inlineObject30 = InlineObject30(); // InlineObject30 | 

try {
    final result = api_instance.tenantTenantIdMedicineSuppliesPost(tenantId, inlineObject30);
    print(result);
} catch (e) {
    print('Exception when calling MedicineSuppliesApi->tenantTenantIdMedicineSuppliesPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **inlineObject30** | [**InlineObject30**](InlineObject30.md)|  | 

### Return type

[**MedicineSupplies**](MedicineSupplies.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

