# openapi.api.UserApi

## Load the API package
```dart
import 'package:openapi/api.dart';
```

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tenantTenantIdUserAutocompleteGet**](UserApi.md#tenanttenantiduserautocompleteget) | **GET** /tenant/{tenantId}/user/autocomplete | 
[**tenantTenantIdUserDelete**](UserApi.md#tenanttenantiduserdelete) | **DELETE** /tenant/{tenantId}/user | 
[**tenantTenantIdUserGet**](UserApi.md#tenanttenantiduserget) | **GET** /tenant/{tenantId}/user | 
[**tenantTenantIdUserIdGet**](UserApi.md#tenanttenantiduseridget) | **GET** /tenant/{tenantId}/user/{id} | 
[**tenantTenantIdUserImportPost**](UserApi.md#tenanttenantiduserimportpost) | **POST** /tenant/{tenantId}/user/import | 
[**tenantTenantIdUserPost**](UserApi.md#tenanttenantiduserpost) | **POST** /tenant/{tenantId}/user | 
[**tenantTenantIdUserPut**](UserApi.md#tenanttenantiduserput) | **PUT** /tenant/{tenantId}/user | 


# **tenantTenantIdUserAutocompleteGet**
> List<InlineResponse2001> tenantTenantIdUserAutocompleteGet(tenantId, query, limit)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = UserApi();
final tenantId = tenantId_example; // String | 
final query = query_example; // String | 
final limit = 10; // num | 

try {
    final result = api_instance.tenantTenantIdUserAutocompleteGet(tenantId, query, limit);
    print(result);
} catch (e) {
    print('Exception when calling UserApi->tenantTenantIdUserAutocompleteGet: $e\n');
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

# **tenantTenantIdUserDelete**
> tenantTenantIdUserDelete(tenantId, idsLeftSquareBracketRightSquareBracket)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = UserApi();
final tenantId = tenantId_example; // String | 
final idsLeftSquareBracketRightSquareBracket = []; // List<String> | 

try {
    api_instance.tenantTenantIdUserDelete(tenantId, idsLeftSquareBracketRightSquareBracket);
} catch (e) {
    print('Exception when calling UserApi->tenantTenantIdUserDelete: $e\n');
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

# **tenantTenantIdUserGet**
> InlineResponse20019 tenantTenantIdUserGet(tenantId, filterLeftSquareBracketIdRightSquareBracket, filterLeftSquareBracketFullNameRightSquareBracket, filterLeftSquareBracketEmailRightSquareBracket, filterLeftSquareBracketRoleRightSquareBracket, filterLeftSquareBracketStatusRightSquareBracket, filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, offset, limit, orderBy)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = UserApi();
final tenantId = tenantId_example; // String | 
final filterLeftSquareBracketIdRightSquareBracket = filterLeftSquareBracketIdRightSquareBracket_example; // String | 
final filterLeftSquareBracketFullNameRightSquareBracket = filterLeftSquareBracketFullNameRightSquareBracket_example; // String | 
final filterLeftSquareBracketEmailRightSquareBracket = filterLeftSquareBracketEmailRightSquareBracket_example; // String | 
final filterLeftSquareBracketRoleRightSquareBracket = filterLeftSquareBracketRoleRightSquareBracket_example; // String | 
final filterLeftSquareBracketStatusRightSquareBracket = filterLeftSquareBracketStatusRightSquareBracket_example; // String | 
final filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket = []; // List<DateTime> | 
final offset = 0; // num | 
final limit = 10; // num | 
final orderBy = createdAt_DESC; // String | 

try {
    final result = api_instance.tenantTenantIdUserGet(tenantId, filterLeftSquareBracketIdRightSquareBracket, filterLeftSquareBracketFullNameRightSquareBracket, filterLeftSquareBracketEmailRightSquareBracket, filterLeftSquareBracketRoleRightSquareBracket, filterLeftSquareBracketStatusRightSquareBracket, filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket, offset, limit, orderBy);
    print(result);
} catch (e) {
    print('Exception when calling UserApi->tenantTenantIdUserGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **filterLeftSquareBracketIdRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketFullNameRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketEmailRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketRoleRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketStatusRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketCreatedAtRangeRightSquareBracketLeftSquareBracketRightSquareBracket** | [**List<DateTime>**](DateTime.md)|  | [optional] [default to const []]
 **offset** | **num**|  | [optional] 
 **limit** | **num**|  | [optional] 
 **orderBy** | **String**|  | [optional] 

### Return type

[**InlineResponse20019**](InlineResponse20019.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdUserIdGet**
> User tenantTenantIdUserIdGet(tenantId, id)



### Example
```dart
import 'package:openapi/api.dart';

final api_instance = UserApi();
final tenantId = tenantId_example; // String | 
final id = id_example; // String | 

try {
    final result = api_instance.tenantTenantIdUserIdGet(tenantId, id);
    print(result);
} catch (e) {
    print('Exception when calling UserApi->tenantTenantIdUserIdGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdUserImportPost**
> User tenantTenantIdUserImportPost(tenantId, inlineObject51)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = UserApi();
final tenantId = tenantId_example; // String | 
final inlineObject51 = InlineObject51(); // InlineObject51 | 

try {
    final result = api_instance.tenantTenantIdUserImportPost(tenantId, inlineObject51);
    print(result);
} catch (e) {
    print('Exception when calling UserApi->tenantTenantIdUserImportPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **inlineObject51** | [**InlineObject51**](InlineObject51.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdUserPost**
> User tenantTenantIdUserPost(tenantId, inlineObject50)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = UserApi();
final tenantId = tenantId_example; // String | 
final inlineObject50 = InlineObject50(); // InlineObject50 | 

try {
    final result = api_instance.tenantTenantIdUserPost(tenantId, inlineObject50);
    print(result);
} catch (e) {
    print('Exception when calling UserApi->tenantTenantIdUserPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **inlineObject50** | [**InlineObject50**](InlineObject50.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdUserPut**
> User tenantTenantIdUserPut(tenantId, inlineObject49)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = UserApi();
final tenantId = tenantId_example; // String | 
final inlineObject49 = InlineObject49(); // InlineObject49 | 

try {
    final result = api_instance.tenantTenantIdUserPut(tenantId, inlineObject49);
    print(result);
} catch (e) {
    print('Exception when calling UserApi->tenantTenantIdUserPut: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **inlineObject49** | [**InlineObject49**](InlineObject49.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

