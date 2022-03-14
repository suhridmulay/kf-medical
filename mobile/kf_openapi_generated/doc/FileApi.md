# openapi.api.FileApi

## Load the API package
```dart
import 'package:openapi/api.dart';
```

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fileDownloadGet**](FileApi.md#filedownloadget) | **GET** /file/download | 
[**fileUploadPost**](FileApi.md#fileuploadpost) | **POST** /file/upload | 
[**tenantTenantIdFileCredentialsGet**](FileApi.md#tenanttenantidfilecredentialsget) | **GET** /tenant/{tenantId}/file/credentials | 


# **fileDownloadGet**
> fileDownloadGet(privateUrl)



### Example
```dart
import 'package:openapi/api.dart';

final api_instance = FileApi();
final privateUrl = privateUrl_example; // String | 

try {
    api_instance.fileDownloadGet(privateUrl);
} catch (e) {
    print('Exception when calling FileApi->fileDownloadGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **privateUrl** | **String**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fileUploadPost**
> String fileUploadPost(token)



### Example
```dart
import 'package:openapi/api.dart';

final api_instance = FileApi();
final token = token_example; // String | 

try {
    final result = api_instance.fileUploadPost(token);
    print(result);
} catch (e) {
    print('Exception when calling FileApi->fileUploadPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**|  | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenantTenantIdFileCredentialsGet**
> InlineResponse20014 tenantTenantIdFileCredentialsGet(tenantId, filename, storageId)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = FileApi();
final tenantId = tenantId_example; // String | 
final filename = file.txt; // String | 
final storageId = userAvatarsProfiles; // String | 

try {
    final result = api_instance.tenantTenantIdFileCredentialsGet(tenantId, filename, storageId);
    print(result);
} catch (e) {
    print('Exception when calling FileApi->tenantTenantIdFileCredentialsGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **filename** | **String**|  | [optional] 
 **storageId** | **String**|  | [optional] 

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

