# openapi.model.InlineObject

## Load the model package
```dart
import 'package:openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **String** |  | 
**password** | **String** |  | 
**invitationToken** | **String** | This invitation token is sent via email to the user. If they access it via the link, the invitation token is used to auto-accept the invitation to the specific tenant. | [optional] 
**tenantId** | **String** | If the user access the application via subdomain, it onboards the user on the tenant passed. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


