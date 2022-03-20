# openapi.api.AuthenticationApi

## Load the API package
```dart
import 'package:openapi/api.dart';
```

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authChangePasswordPut**](AuthenticationApi.md#authchangepasswordput) | **PUT** /auth/change-password | 
[**authMeGet**](AuthenticationApi.md#authmeget) | **GET** /auth/me | 
[**authPasswordResetPut**](AuthenticationApi.md#authpasswordresetput) | **PUT** /auth/password-reset | 
[**authProfilePut**](AuthenticationApi.md#authprofileput) | **PUT** /auth/profile | 
[**authSendEmailAddressVerificationEmailPost**](AuthenticationApi.md#authsendemailaddressverificationemailpost) | **POST** /auth/send-email-address-verification-email | 
[**authSendPasswordResetEmailPost**](AuthenticationApi.md#authsendpasswordresetemailpost) | **POST** /auth/send-password-reset-email | 
[**authSignInPost**](AuthenticationApi.md#authsigninpost) | **POST** /auth/sign-in | 
[**authSignUpPost**](AuthenticationApi.md#authsignuppost) | **POST** /auth/sign-up | 
[**authVerifyEmailPut**](AuthenticationApi.md#authverifyemailput) | **PUT** /auth/verify-email | 


# **authChangePasswordPut**
> UserCurrent authChangePasswordPut(inlineObject2)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = AuthenticationApi();
final inlineObject2 = InlineObject2(); // InlineObject2 | 

try {
    final result = api_instance.authChangePasswordPut(inlineObject2);
    print(result);
} catch (e) {
    print('Exception when calling AuthenticationApi->authChangePasswordPut: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject2** | [**InlineObject2**](InlineObject2.md)|  | 

### Return type

[**UserCurrent**](UserCurrent.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authMeGet**
> UserCurrent authMeGet()



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = AuthenticationApi();

try {
    final result = api_instance.authMeGet();
    print(result);
} catch (e) {
    print('Exception when calling AuthenticationApi->authMeGet: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**UserCurrent**](UserCurrent.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authPasswordResetPut**
> authPasswordResetPut(inlineObject5)



### Example
```dart
import 'package:openapi/api.dart';

final api_instance = AuthenticationApi();
final inlineObject5 = InlineObject5(); // InlineObject5 | 

try {
    api_instance.authPasswordResetPut(inlineObject5);
} catch (e) {
    print('Exception when calling AuthenticationApi->authPasswordResetPut: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject5** | [**InlineObject5**](InlineObject5.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authProfilePut**
> authProfilePut(inlineObject7)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = AuthenticationApi();
final inlineObject7 = InlineObject7(); // InlineObject7 | 

try {
    api_instance.authProfilePut(inlineObject7);
} catch (e) {
    print('Exception when calling AuthenticationApi->authProfilePut: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject7** | [**InlineObject7**](InlineObject7.md)|  | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authSendEmailAddressVerificationEmailPost**
> authSendEmailAddressVerificationEmailPost(inlineObject3)



### Example
```dart
import 'package:openapi/api.dart';
// TODO Configure HTTP Bearer authorization: bearerAuth
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('bearerAuth').setAccessToken(yourTokenGeneratorFunction);

final api_instance = AuthenticationApi();
final inlineObject3 = InlineObject3(); // InlineObject3 | 

try {
    api_instance.authSendEmailAddressVerificationEmailPost(inlineObject3);
} catch (e) {
    print('Exception when calling AuthenticationApi->authSendEmailAddressVerificationEmailPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject3** | [**InlineObject3**](InlineObject3.md)|  | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authSendPasswordResetEmailPost**
> authSendPasswordResetEmailPost(inlineObject4)



### Example
```dart
import 'package:openapi/api.dart';

final api_instance = AuthenticationApi();
final inlineObject4 = InlineObject4(); // InlineObject4 | 

try {
    api_instance.authSendPasswordResetEmailPost(inlineObject4);
} catch (e) {
    print('Exception when calling AuthenticationApi->authSendPasswordResetEmailPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject4** | [**InlineObject4**](InlineObject4.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authSignInPost**
> authSignInPost(inlineObject1)



### Example
```dart
import 'package:openapi/api.dart';

final api_instance = AuthenticationApi();
final inlineObject1 = InlineObject1(); // InlineObject1 | 

try {
    api_instance.authSignInPost(inlineObject1);
} catch (e) {
    print('Exception when calling AuthenticationApi->authSignInPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject1** | [**InlineObject1**](InlineObject1.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authSignUpPost**
> authSignUpPost(inlineObject)



### Example
```dart
import 'package:openapi/api.dart';

final api_instance = AuthenticationApi();
final inlineObject = InlineObject(); // InlineObject | 

try {
    api_instance.authSignUpPost(inlineObject);
} catch (e) {
    print('Exception when calling AuthenticationApi->authSignUpPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject** | [**InlineObject**](InlineObject.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authVerifyEmailPut**
> authVerifyEmailPut(inlineObject6)



### Example
```dart
import 'package:openapi/api.dart';

final api_instance = AuthenticationApi();
final inlineObject6 = InlineObject6(); // InlineObject6 | 

try {
    api_instance.authVerifyEmailPut(inlineObject6);
} catch (e) {
    print('Exception when calling AuthenticationApi->authVerifyEmailPut: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject6** | [**InlineObject6**](InlineObject6.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

