# openapi.model.PatientVisit

## Load the model package
```dart
import 'package:openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**patient** | [**Patient**](Patient.md) |  | [optional] 
**medicalCenter** | [**HealthCenter**](HealthCenter.md) |  | [optional] 
**doctor** | [**Doctor**](Doctor.md) |  | [optional] 
**visitDate** | [**DateTime**](DateTime.md) |  | [optional] 
**repeatVisit** | **bool** |  | [optional] 
**symptom1** | [**SymptomsEnum**](SymptomsEnum.md) |  | [optional] 
**symptom2** | [**SymptomsEnum**](SymptomsEnum.md) |  | [optional] 
**symptom3** | [**SymptomsEnum**](SymptomsEnum.md) |  | [optional] 
**otherSymptoms** | **String** |  | [optional] 
**height** | **String** |  | [optional] 
**weight** | **String** |  | [optional] 
**temperature** | **String** |  | [optional] 
**bloodPressure** | **String** |  | [optional] 
**pulseRate** | **String** |  | [optional] 
**oxygenLevel** | **String** |  | [optional] 
**vitalStatisticsOther** | **String** |  | [optional] 
**diagnosis** | **String** |  | [optional] 
**caseSeverity** | **String** |  | [optional] 
**medicine1** | [**MedicineEnum**](MedicineEnum.md) |  | [optional] 
**med1Qty** | **int** |  | [optional] 
**med1Supplied** | **bool** |  | [optional] 
**medicine2** | [**MedicineEnum**](MedicineEnum.md) |  | [optional] 
**med2Qty** | **int** |  | [optional] 
**med2Supplied** | **bool** |  | [optional] 
**medicine3** | [**MedicineEnum**](MedicineEnum.md) |  | [optional] 
**med3Qty** | **int** |  | [optional] 
**med3Supplied** | **bool** |  | [optional] 
**medicine4** | [**MedicineEnum**](MedicineEnum.md) |  | [optional] 
**med4Qty** | **int** |  | [optional] 
**med4Supplied** | **bool** |  | [optional] 
**medicineInstructions** | **String** |  | [optional] 
**requestedLabs** | **String** |  | [optional] 
**dietaryInstructions** | **String** |  | [optional] 
**isTelemedReferral** | **bool** |  | [optional] 
**patientCopay** | **num** |  | [optional] 
**telemedCopay** | **num** |  | [optional] 
**referralHospital** | **String** |  | [optional] 
**referredSpecialistDoctor** | **String** |  | [optional] 
**returnIn** | **String** |  | [optional] 
**telemedicineDoctor** | [**Doctor**](Doctor.md) |  | [optional] 
**telemedicineConsultDate** | [**DateTime**](DateTime.md) |  | [optional] 
**differentialDiagnosis** | **String** |  | [optional] 
**differentialRecommendation** | **String** |  | [optional] 
**finalNotes** | **String** |  | [optional] 
**id** | **String** |  | [optional] 
**createdAt** | **String** |  | [optional] 
**updatedAt** | **String** |  | [optional] 
**deletedAt** | **String** |  | [optional] 
**createdById** | **String** |  | [optional] 
**updatedById** | **String** |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


