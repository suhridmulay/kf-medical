# openapi.api.AuditLogsApi

## Load the API package
```dart
import 'package:openapi/api.dart';
```

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tenantTenantIdAuditLogGet**](AuditLogsApi.md#tenanttenantidauditlogget) | **GET** /tenant/{tenantId}/audit-log | 


# **tenantTenantIdAuditLogGet**
> InlineResponse20013 tenantTenantIdAuditLogGet(tenantId, filterLeftSquareBracketTimestampRangeRightSquareBracketLeftSquareBracketRightSquareBracket, filterLeftSquareBracketActionRightSquareBracket, filterLeftSquareBracketEntityIdRightSquareBracket, filterLeftSquareBracketCreatedByEmailRightSquareBracket, filterLeftSquareBracketEntityNamesRightSquareBracketLeftSquareBracketRightSquareBracket, offset, limit, orderBy)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = AuditLogsApi();
final tenantId = tenantId_example; // String | 
final filterLeftSquareBracketTimestampRangeRightSquareBracketLeftSquareBracketRightSquareBracket = []; // List<DateTime> | 
final filterLeftSquareBracketActionRightSquareBracket = filterLeftSquareBracketActionRightSquareBracket_example; // String | 
final filterLeftSquareBracketEntityIdRightSquareBracket = filterLeftSquareBracketEntityIdRightSquareBracket_example; // String | 
final filterLeftSquareBracketCreatedByEmailRightSquareBracket = filterLeftSquareBracketCreatedByEmailRightSquareBracket_example; // String | 
final filterLeftSquareBracketEntityNamesRightSquareBracketLeftSquareBracketRightSquareBracket = []; // List<String> | 
final offset = 0; // num | 
final limit = 10; // num | 
final orderBy = timestamp_DESC; // String | 

try {
    final result = api_instance.tenantTenantIdAuditLogGet(tenantId, filterLeftSquareBracketTimestampRangeRightSquareBracketLeftSquareBracketRightSquareBracket, filterLeftSquareBracketActionRightSquareBracket, filterLeftSquareBracketEntityIdRightSquareBracket, filterLeftSquareBracketCreatedByEmailRightSquareBracket, filterLeftSquareBracketEntityNamesRightSquareBracketLeftSquareBracketRightSquareBracket, offset, limit, orderBy);
    print(result);
} catch (e) {
    print('Exception when calling AuditLogsApi->tenantTenantIdAuditLogGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **filterLeftSquareBracketTimestampRangeRightSquareBracketLeftSquareBracketRightSquareBracket** | [**List<DateTime>**](DateTime.md)|  | [optional] [default to const []]
 **filterLeftSquareBracketActionRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketEntityIdRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketCreatedByEmailRightSquareBracket** | **String**|  | [optional] 
 **filterLeftSquareBracketEntityNamesRightSquareBracketLeftSquareBracketRightSquareBracket** | [**List<String>**](String.md)|  | [optional] [default to const []]
 **offset** | **num**|  | [optional] 
 **limit** | **num**|  | [optional] 
 **orderBy** | **String**|  | [optional] 

### Return type

[**InlineResponse20013**](InlineResponse20013.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

