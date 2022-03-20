# openapi.api.SettingsApi

## Load the API package
```dart
import 'package:openapi/api.dart';
```

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tenantTenantIdSettingsGet**](SettingsApi.md#tenanttenantidsettingsget) | **GET** /tenant/{tenantId}/settings | 
[**tenantTenantIdSettingsPut**](SettingsApi.md#tenanttenantidsettingsput) | **PUT** /tenant/{tenantId}/settings | 


# **tenantTenantIdSettingsGet**
> Settings tenantTenantIdSettingsGet(tenantId)



### Example
```dart
import 'package:openapi/api.dart';

final api_instance = SettingsApi();
final tenantId = tenantId_example; // String | 

try {
    final result = api_instance.tenantTenantIdSettingsGet(tenantId);
    print(result);
} catch (e) {
    print('Exception when calling SettingsApi->tenantTenantIdSettingsGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 

### Return type

[**Settings**](Settings.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdSettingsPut**
> Settings tenantTenantIdSettingsPut(tenantId, inlineObject45)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = SettingsApi();
final tenantId = tenantId_example; // String | 
final inlineObject45 = InlineObject45(); // InlineObject45 | 

try {
    final result = api_instance.tenantTenantIdSettingsPut(tenantId, inlineObject45);
    print(result);
} catch (e) {
    print('Exception when calling SettingsApi->tenantTenantIdSettingsPut: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **inlineObject45** | [**InlineObject45**](InlineObject45.md)|  | 

### Return type

[**Settings**](Settings.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

