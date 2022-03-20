//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class PatientVisit {
  /// Returns a new [PatientVisit] instance.
  PatientVisit({
    this.patient,
    this.medicalCenter,
    this.doctor,
    this.visitDate,
    this.repeatVisit,
    this.symptom1,
    this.symptom2,
    this.symptom3,
    this.otherSymptoms,
    this.height,
    this.weight,
    this.temperature,
    this.bloodPressure,
    this.pulseRate,
    this.oxygenLevel,
    this.vitalStatisticsOther,
    this.diagnosis,
    this.caseSeverity,
    this.medicine1,
    this.med1Qty,
    this.med1Supplied,
    this.medicine2,
    this.med2Qty,
    this.med2Supplied,
    this.medicine3,
    this.med3Qty,
    this.med3Supplied,
    this.medicine4,
    this.med4Qty,
    this.med4Supplied,
    this.medicineInstructions,
    this.requestedLabs,
    this.dietaryInstructions,
    this.isTelemedReferral,
    this.patientCopay,
    this.telemedCopay,
    this.referralHospital,
    this.referredSpecialistDoctor,
    this.returnIn,
    this.telemedicineDoctor,
    this.telemedicineConsultDate,
    this.differentialDiagnosis,
    this.differentialRecommendation,
    this.finalNotes,
    this.id,
    this.createdAt,
    this.updatedAt,
    this.deletedAt,
    this.createdById,
    this.updatedById,
  });

  Patient patient;

  HealthCenter medicalCenter;

  Doctor doctor;

  DateTime visitDate;

  bool repeatVisit;

  SymptomsEnum symptom1;

  SymptomsEnum symptom2;

  SymptomsEnum symptom3;

  String otherSymptoms;

  String height;

  String weight;

  String temperature;

  String bloodPressure;

  String pulseRate;

  String oxygenLevel;

  String vitalStatisticsOther;

  String diagnosis;

  PatientVisitCaseSeverityEnum caseSeverity;

  MedicineEnum medicine1;

  int med1Qty;

  bool med1Supplied;

  MedicineEnum medicine2;

  int med2Qty;

  bool med2Supplied;

  MedicineEnum medicine3;

  int med3Qty;

  bool med3Supplied;

  MedicineEnum medicine4;

  int med4Qty;

  bool med4Supplied;

  String medicineInstructions;

  String requestedLabs;

  String dietaryInstructions;

  bool isTelemedReferral;

  num patientCopay;

  num telemedCopay;

  String referralHospital;

  String referredSpecialistDoctor;

  PatientVisitReturnInEnum returnIn;

  Doctor telemedicineDoctor;

  DateTime telemedicineConsultDate;

  String differentialDiagnosis;

  String differentialRecommendation;

  String finalNotes;

  String id;

  String createdAt;

  String updatedAt;

  String deletedAt;

  String createdById;

  String updatedById;

  @override
  bool operator ==(Object other) => identical(this, other) || other is PatientVisit &&
     other.patient == patient &&
     other.medicalCenter == medicalCenter &&
     other.doctor == doctor &&
     other.visitDate == visitDate &&
     other.repeatVisit == repeatVisit &&
     other.symptom1 == symptom1 &&
     other.symptom2 == symptom2 &&
     other.symptom3 == symptom3 &&
     other.otherSymptoms == otherSymptoms &&
     other.height == height &&
     other.weight == weight &&
     other.temperature == temperature &&
     other.bloodPressure == bloodPressure &&
     other.pulseRate == pulseRate &&
     other.oxygenLevel == oxygenLevel &&
     other.vitalStatisticsOther == vitalStatisticsOther &&
     other.diagnosis == diagnosis &&
     other.caseSeverity == caseSeverity &&
     other.medicine1 == medicine1 &&
     other.med1Qty == med1Qty &&
     other.med1Supplied == med1Supplied &&
     other.medicine2 == medicine2 &&
     other.med2Qty == med2Qty &&
     other.med2Supplied == med2Supplied &&
     other.medicine3 == medicine3 &&
     other.med3Qty == med3Qty &&
     other.med3Supplied == med3Supplied &&
     other.medicine4 == medicine4 &&
     other.med4Qty == med4Qty &&
     other.med4Supplied == med4Supplied &&
     other.medicineInstructions == medicineInstructions &&
     other.requestedLabs == requestedLabs &&
     other.dietaryInstructions == dietaryInstructions &&
     other.isTelemedReferral == isTelemedReferral &&
     other.patientCopay == patientCopay &&
     other.telemedCopay == telemedCopay &&
     other.referralHospital == referralHospital &&
     other.referredSpecialistDoctor == referredSpecialistDoctor &&
     other.returnIn == returnIn &&
     other.telemedicineDoctor == telemedicineDoctor &&
     other.telemedicineConsultDate == telemedicineConsultDate &&
     other.differentialDiagnosis == differentialDiagnosis &&
     other.differentialRecommendation == differentialRecommendation &&
     other.finalNotes == finalNotes &&
     other.id == id &&
     other.createdAt == createdAt &&
     other.updatedAt == updatedAt &&
     other.deletedAt == deletedAt &&
     other.createdById == createdById &&
     other.updatedById == updatedById;

  @override
  int get hashCode =>
  // ignore: unnecessary_parenthesis
    (patient == null ? 0 : patient.hashCode) +
    (medicalCenter == null ? 0 : medicalCenter.hashCode) +
    (doctor == null ? 0 : doctor.hashCode) +
    (visitDate == null ? 0 : visitDate.hashCode) +
    (repeatVisit == null ? 0 : repeatVisit.hashCode) +
    (symptom1 == null ? 0 : symptom1.hashCode) +
    (symptom2 == null ? 0 : symptom2.hashCode) +
    (symptom3 == null ? 0 : symptom3.hashCode) +
    (otherSymptoms == null ? 0 : otherSymptoms.hashCode) +
    (height == null ? 0 : height.hashCode) +
    (weight == null ? 0 : weight.hashCode) +
    (temperature == null ? 0 : temperature.hashCode) +
    (bloodPressure == null ? 0 : bloodPressure.hashCode) +
    (pulseRate == null ? 0 : pulseRate.hashCode) +
    (oxygenLevel == null ? 0 : oxygenLevel.hashCode) +
    (vitalStatisticsOther == null ? 0 : vitalStatisticsOther.hashCode) +
    (diagnosis == null ? 0 : diagnosis.hashCode) +
    (caseSeverity == null ? 0 : caseSeverity.hashCode) +
    (medicine1 == null ? 0 : medicine1.hashCode) +
    (med1Qty == null ? 0 : med1Qty.hashCode) +
    (med1Supplied == null ? 0 : med1Supplied.hashCode) +
    (medicine2 == null ? 0 : medicine2.hashCode) +
    (med2Qty == null ? 0 : med2Qty.hashCode) +
    (med2Supplied == null ? 0 : med2Supplied.hashCode) +
    (medicine3 == null ? 0 : medicine3.hashCode) +
    (med3Qty == null ? 0 : med3Qty.hashCode) +
    (med3Supplied == null ? 0 : med3Supplied.hashCode) +
    (medicine4 == null ? 0 : medicine4.hashCode) +
    (med4Qty == null ? 0 : med4Qty.hashCode) +
    (med4Supplied == null ? 0 : med4Supplied.hashCode) +
    (medicineInstructions == null ? 0 : medicineInstructions.hashCode) +
    (requestedLabs == null ? 0 : requestedLabs.hashCode) +
    (dietaryInstructions == null ? 0 : dietaryInstructions.hashCode) +
    (isTelemedReferral == null ? 0 : isTelemedReferral.hashCode) +
    (patientCopay == null ? 0 : patientCopay.hashCode) +
    (telemedCopay == null ? 0 : telemedCopay.hashCode) +
    (referralHospital == null ? 0 : referralHospital.hashCode) +
    (referredSpecialistDoctor == null ? 0 : referredSpecialistDoctor.hashCode) +
    (returnIn == null ? 0 : returnIn.hashCode) +
    (telemedicineDoctor == null ? 0 : telemedicineDoctor.hashCode) +
    (telemedicineConsultDate == null ? 0 : telemedicineConsultDate.hashCode) +
    (differentialDiagnosis == null ? 0 : differentialDiagnosis.hashCode) +
    (differentialRecommendation == null ? 0 : differentialRecommendation.hashCode) +
    (finalNotes == null ? 0 : finalNotes.hashCode) +
    (id == null ? 0 : id.hashCode) +
    (createdAt == null ? 0 : createdAt.hashCode) +
    (updatedAt == null ? 0 : updatedAt.hashCode) +
    (deletedAt == null ? 0 : deletedAt.hashCode) +
    (createdById == null ? 0 : createdById.hashCode) +
    (updatedById == null ? 0 : updatedById.hashCode);

  @override
  String toString() => 'PatientVisit[patient=$patient, medicalCenter=$medicalCenter, doctor=$doctor, visitDate=$visitDate, repeatVisit=$repeatVisit, symptom1=$symptom1, symptom2=$symptom2, symptom3=$symptom3, otherSymptoms=$otherSymptoms, height=$height, weight=$weight, temperature=$temperature, bloodPressure=$bloodPressure, pulseRate=$pulseRate, oxygenLevel=$oxygenLevel, vitalStatisticsOther=$vitalStatisticsOther, diagnosis=$diagnosis, caseSeverity=$caseSeverity, medicine1=$medicine1, med1Qty=$med1Qty, med1Supplied=$med1Supplied, medicine2=$medicine2, med2Qty=$med2Qty, med2Supplied=$med2Supplied, medicine3=$medicine3, med3Qty=$med3Qty, med3Supplied=$med3Supplied, medicine4=$medicine4, med4Qty=$med4Qty, med4Supplied=$med4Supplied, medicineInstructions=$medicineInstructions, requestedLabs=$requestedLabs, dietaryInstructions=$dietaryInstructions, isTelemedReferral=$isTelemedReferral, patientCopay=$patientCopay, telemedCopay=$telemedCopay, referralHospital=$referralHospital, referredSpecialistDoctor=$referredSpecialistDoctor, returnIn=$returnIn, telemedicineDoctor=$telemedicineDoctor, telemedicineConsultDate=$telemedicineConsultDate, differentialDiagnosis=$differentialDiagnosis, differentialRecommendation=$differentialRecommendation, finalNotes=$finalNotes, id=$id, createdAt=$createdAt, updatedAt=$updatedAt, deletedAt=$deletedAt, createdById=$createdById, updatedById=$updatedById]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (patient != null) {
      json[r'patient'] = patient;
    }
    if (medicalCenter != null) {
      json[r'medicalCenter'] = medicalCenter;
    }
    if (doctor != null) {
      json[r'doctor'] = doctor;
    }
    if (visitDate != null) {
      json[r'visitDate'] = _dateFormatter.format(visitDate.toUtc());
    }
    if (repeatVisit != null) {
      json[r'repeatVisit'] = repeatVisit;
    }
    if (symptom1 != null) {
      json[r'symptom1'] = symptom1;
    }
    if (symptom2 != null) {
      json[r'symptom2'] = symptom2;
    }
    if (symptom3 != null) {
      json[r'symptom3'] = symptom3;
    }
    if (otherSymptoms != null) {
      json[r'otherSymptoms'] = otherSymptoms;
    }
    if (height != null) {
      json[r'height'] = height;
    }
    if (weight != null) {
      json[r'weight'] = weight;
    }
    if (temperature != null) {
      json[r'temperature'] = temperature;
    }
    if (bloodPressure != null) {
      json[r'bloodPressure'] = bloodPressure;
    }
    if (pulseRate != null) {
      json[r'pulseRate'] = pulseRate;
    }
    if (oxygenLevel != null) {
      json[r'oxygenLevel'] = oxygenLevel;
    }
    if (vitalStatisticsOther != null) {
      json[r'vitalStatisticsOther'] = vitalStatisticsOther;
    }
    if (diagnosis != null) {
      json[r'diagnosis'] = diagnosis;
    }
    if (caseSeverity != null) {
      json[r'caseSeverity'] = caseSeverity;
    }
    if (medicine1 != null) {
      json[r'medicine1'] = medicine1;
    }
    if (med1Qty != null) {
      json[r'med1Qty'] = med1Qty;
    }
    if (med1Supplied != null) {
      json[r'med1Supplied'] = med1Supplied;
    }
    if (medicine2 != null) {
      json[r'medicine2'] = medicine2;
    }
    if (med2Qty != null) {
      json[r'med2Qty'] = med2Qty;
    }
    if (med2Supplied != null) {
      json[r'med2Supplied'] = med2Supplied;
    }
    if (medicine3 != null) {
      json[r'medicine3'] = medicine3;
    }
    if (med3Qty != null) {
      json[r'med3Qty'] = med3Qty;
    }
    if (med3Supplied != null) {
      json[r'med3Supplied'] = med3Supplied;
    }
    if (medicine4 != null) {
      json[r'medicine4'] = medicine4;
    }
    if (med4Qty != null) {
      json[r'med4Qty'] = med4Qty;
    }
    if (med4Supplied != null) {
      json[r'med4Supplied'] = med4Supplied;
    }
    if (medicineInstructions != null) {
      json[r'medicineInstructions'] = medicineInstructions;
    }
    if (requestedLabs != null) {
      json[r'requestedLabs'] = requestedLabs;
    }
    if (dietaryInstructions != null) {
      json[r'dietaryInstructions'] = dietaryInstructions;
    }
    if (isTelemedReferral != null) {
      json[r'isTelemedReferral'] = isTelemedReferral;
    }
    if (patientCopay != null) {
      json[r'patientCopay'] = patientCopay;
    }
    if (telemedCopay != null) {
      json[r'telemedCopay'] = telemedCopay;
    }
    if (referralHospital != null) {
      json[r'referralHospital'] = referralHospital;
    }
    if (referredSpecialistDoctor != null) {
      json[r'referredSpecialistDoctor'] = referredSpecialistDoctor;
    }
    if (returnIn != null) {
      json[r'returnIn'] = returnIn;
    }
    if (telemedicineDoctor != null) {
      json[r'telemedicineDoctor'] = telemedicineDoctor;
    }
    if (telemedicineConsultDate != null) {
      json[r'telemedicineConsultDate'] = _dateFormatter.format(telemedicineConsultDate.toUtc());
    }
    if (differentialDiagnosis != null) {
      json[r'differentialDiagnosis'] = differentialDiagnosis;
    }
    if (differentialRecommendation != null) {
      json[r'differentialRecommendation'] = differentialRecommendation;
    }
    if (finalNotes != null) {
      json[r'finalNotes'] = finalNotes;
    }
    if (id != null) {
      json[r'id'] = id;
    }
    if (createdAt != null) {
      json[r'createdAt'] = createdAt;
    }
    if (updatedAt != null) {
      json[r'updatedAt'] = updatedAt;
    }
    if (deletedAt != null) {
      json[r'deletedAt'] = deletedAt;
    }
    if (createdById != null) {
      json[r'createdById'] = createdById;
    }
    if (updatedById != null) {
      json[r'updatedById'] = updatedById;
    }
    return json;
  }

  /// Returns a new [PatientVisit] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static PatientVisit fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();
      return PatientVisit(
        patient: Patient.fromJson(json[r'patient']),
        medicalCenter: HealthCenter.fromJson(json[r'medicalCenter']),
        doctor: Doctor.fromJson(json[r'doctor']),
        visitDate: mapDateTime(json, r'visitDate', ''),
        repeatVisit: mapValueOfType<bool>(json, r'repeatVisit'),
        symptom1: SymptomsEnum.fromJson(json[r'symptom1']),
        symptom2: SymptomsEnum.fromJson(json[r'symptom2']),
        symptom3: SymptomsEnum.fromJson(json[r'symptom3']),
        otherSymptoms: mapValueOfType<String>(json, r'otherSymptoms'),
        height: mapValueOfType<String>(json, r'height'),
        weight: mapValueOfType<String>(json, r'weight'),
        temperature: mapValueOfType<String>(json, r'temperature'),
        bloodPressure: mapValueOfType<String>(json, r'bloodPressure'),
        pulseRate: mapValueOfType<String>(json, r'pulseRate'),
        oxygenLevel: mapValueOfType<String>(json, r'oxygenLevel'),
        vitalStatisticsOther: mapValueOfType<String>(json, r'vitalStatisticsOther'),
        diagnosis: mapValueOfType<String>(json, r'diagnosis'),
        caseSeverity: PatientVisitCaseSeverityEnum.fromJson(json[r'caseSeverity']),
        medicine1: MedicineEnum.fromJson(json[r'medicine1']),
        med1Qty: mapValueOfType<int>(json, r'med1Qty'),
        med1Supplied: mapValueOfType<bool>(json, r'med1Supplied'),
        medicine2: MedicineEnum.fromJson(json[r'medicine2']),
        med2Qty: mapValueOfType<int>(json, r'med2Qty'),
        med2Supplied: mapValueOfType<bool>(json, r'med2Supplied'),
        medicine3: MedicineEnum.fromJson(json[r'medicine3']),
        med3Qty: mapValueOfType<int>(json, r'med3Qty'),
        med3Supplied: mapValueOfType<bool>(json, r'med3Supplied'),
        medicine4: MedicineEnum.fromJson(json[r'medicine4']),
        med4Qty: mapValueOfType<int>(json, r'med4Qty'),
        med4Supplied: mapValueOfType<bool>(json, r'med4Supplied'),
        medicineInstructions: mapValueOfType<String>(json, r'medicineInstructions'),
        requestedLabs: mapValueOfType<String>(json, r'requestedLabs'),
        dietaryInstructions: mapValueOfType<String>(json, r'dietaryInstructions'),
        isTelemedReferral: mapValueOfType<bool>(json, r'isTelemedReferral'),
        patientCopay: json[r'patientCopay'] == null
          ? null
          : num.parse(json[r'patientCopay'].toString()),
        telemedCopay: json[r'telemedCopay'] == null
          ? null
          : num.parse(json[r'telemedCopay'].toString()),
        referralHospital: mapValueOfType<String>(json, r'referralHospital'),
        referredSpecialistDoctor: mapValueOfType<String>(json, r'referredSpecialistDoctor'),
        returnIn: PatientVisitReturnInEnum.fromJson(json[r'returnIn']),
        telemedicineDoctor: Doctor.fromJson(json[r'telemedicineDoctor']),
        telemedicineConsultDate: mapDateTime(json, r'telemedicineConsultDate', ''),
        differentialDiagnosis: mapValueOfType<String>(json, r'differentialDiagnosis'),
        differentialRecommendation: mapValueOfType<String>(json, r'differentialRecommendation'),
        finalNotes: mapValueOfType<String>(json, r'finalNotes'),
        id: mapValueOfType<String>(json, r'id'),
        createdAt: mapValueOfType<String>(json, r'createdAt'),
        updatedAt: mapValueOfType<String>(json, r'updatedAt'),
        deletedAt: mapValueOfType<String>(json, r'deletedAt'),
        createdById: mapValueOfType<String>(json, r'createdById'),
        updatedById: mapValueOfType<String>(json, r'updatedById'),
      );
    }
    return null;
  }

  static List<PatientVisit> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(PatientVisit.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <PatientVisit>[];

  static Map<String, PatientVisit> mapFromJson(dynamic json) {
    final map = <String, PatientVisit>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) => map[key] = PatientVisit.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of PatientVisit-objects as value to a dart map
  static Map<String, List<PatientVisit>> mapListFromJson(dynamic json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<PatientVisit>>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) {
          map[key] = PatientVisit.listFromJson(
            value,
            emptyIsNull: emptyIsNull,
            growable: growable,
          );
        });
    }
    return map;
  }
}


class PatientVisitCaseSeverityEnum {
  /// Instantiate a new enum with the provided [value].
  const PatientVisitCaseSeverityEnum._(this.value);

  /// The underlying value of this enum member.
  final String value;

  @override
  String toString() => value ?? '';

  String toJson() => value;

  static const green = PatientVisitCaseSeverityEnum._(r'Green');
  static const orange = PatientVisitCaseSeverityEnum._(r'Orange');
  static const red = PatientVisitCaseSeverityEnum._(r'Red');

  /// List of all possible values in this [enum][PatientVisitCaseSeverityEnum].
  static const values = <PatientVisitCaseSeverityEnum>[
    green,
    orange,
    red,
  ];

  static PatientVisitCaseSeverityEnum fromJson(dynamic value) =>
    PatientVisitCaseSeverityEnumTypeTransformer().decode(value);

  static List<PatientVisitCaseSeverityEnum> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(PatientVisitCaseSeverityEnum.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <PatientVisitCaseSeverityEnum>[];
}

/// Transformation class that can [encode] an instance of [PatientVisitCaseSeverityEnum] to String,
/// and [decode] dynamic data back to [PatientVisitCaseSeverityEnum].
class PatientVisitCaseSeverityEnumTypeTransformer {
  factory PatientVisitCaseSeverityEnumTypeTransformer() => _instance ??= const PatientVisitCaseSeverityEnumTypeTransformer._();

  const PatientVisitCaseSeverityEnumTypeTransformer._();

  String encode(PatientVisitCaseSeverityEnum data) => data.value;

  /// Decodes a [dynamic value][data] to a PatientVisitCaseSeverityEnum.
  ///
  /// If [allowNull] is true and the [dynamic value][data] cannot be decoded successfully,
  /// then null is returned. However, if [allowNull] is false and the [dynamic value][data]
  /// cannot be decoded successfully, then an [UnimplementedError] is thrown.
  ///
  /// The [allowNull] is very handy when an API changes and a new enum value is added or removed,
  /// and users are still using an old app with the old code.
  PatientVisitCaseSeverityEnum decode(dynamic data, {bool allowNull}) {
    if (data != null) {
      switch (data.toString()) {
        case r'Green': return PatientVisitCaseSeverityEnum.green;
        case r'Orange': return PatientVisitCaseSeverityEnum.orange;
        case r'Red': return PatientVisitCaseSeverityEnum.red;
        default:
          if (allowNull == false) {
            throw ArgumentError('Unknown enum value to decode: $data');
          }
      }
    }
    return null;
  }

  /// Singleton [PatientVisitCaseSeverityEnumTypeTransformer] instance.
  static PatientVisitCaseSeverityEnumTypeTransformer _instance;
}



class PatientVisitReturnInEnum {
  /// Instantiate a new enum with the provided [value].
  const PatientVisitReturnInEnum._(this.value);

  /// The underlying value of this enum member.
  final String value;

  @override
  String toString() => value ?? '';

  String toJson() => value;

  static const n1week = PatientVisitReturnInEnum._(r'1week');
  static const n2weeks = PatientVisitReturnInEnum._(r'2weeks');
  static const n3weeks = PatientVisitReturnInEnum._(r'3weeks');
  static const n4weeks = PatientVisitReturnInEnum._(r'4weeks');
  static const n6weeks = PatientVisitReturnInEnum._(r'6weeks');
  static const n2months = PatientVisitReturnInEnum._(r'2months');
  static const n3months = PatientVisitReturnInEnum._(r'3months');
  static const n4months = PatientVisitReturnInEnum._(r'4months');
  static const n6months = PatientVisitReturnInEnum._(r'6months');
  static const n1year = PatientVisitReturnInEnum._(r'1year');

  /// List of all possible values in this [enum][PatientVisitReturnInEnum].
  static const values = <PatientVisitReturnInEnum>[
    n1week,
    n2weeks,
    n3weeks,
    n4weeks,
    n6weeks,
    n2months,
    n3months,
    n4months,
    n6months,
    n1year,
  ];

  static PatientVisitReturnInEnum fromJson(dynamic value) =>
    PatientVisitReturnInEnumTypeTransformer().decode(value);

  static List<PatientVisitReturnInEnum> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(PatientVisitReturnInEnum.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <PatientVisitReturnInEnum>[];
}

/// Transformation class that can [encode] an instance of [PatientVisitReturnInEnum] to String,
/// and [decode] dynamic data back to [PatientVisitReturnInEnum].
class PatientVisitReturnInEnumTypeTransformer {
  factory PatientVisitReturnInEnumTypeTransformer() => _instance ??= const PatientVisitReturnInEnumTypeTransformer._();

  const PatientVisitReturnInEnumTypeTransformer._();

  String encode(PatientVisitReturnInEnum data) => data.value;

  /// Decodes a [dynamic value][data] to a PatientVisitReturnInEnum.
  ///
  /// If [allowNull] is true and the [dynamic value][data] cannot be decoded successfully,
  /// then null is returned. However, if [allowNull] is false and the [dynamic value][data]
  /// cannot be decoded successfully, then an [UnimplementedError] is thrown.
  ///
  /// The [allowNull] is very handy when an API changes and a new enum value is added or removed,
  /// and users are still using an old app with the old code.
  PatientVisitReturnInEnum decode(dynamic data, {bool allowNull}) {
    if (data != null) {
      switch (data.toString()) {
        case r'1week': return PatientVisitReturnInEnum.n1week;
        case r'2weeks': return PatientVisitReturnInEnum.n2weeks;
        case r'3weeks': return PatientVisitReturnInEnum.n3weeks;
        case r'4weeks': return PatientVisitReturnInEnum.n4weeks;
        case r'6weeks': return PatientVisitReturnInEnum.n6weeks;
        case r'2months': return PatientVisitReturnInEnum.n2months;
        case r'3months': return PatientVisitReturnInEnum.n3months;
        case r'4months': return PatientVisitReturnInEnum.n4months;
        case r'6months': return PatientVisitReturnInEnum.n6months;
        case r'1year': return PatientVisitReturnInEnum.n1year;
        default:
          if (allowNull == false) {
            throw ArgumentError('Unknown enum value to decode: $data');
          }
      }
    }
    return null;
  }

  /// Singleton [PatientVisitReturnInEnumTypeTransformer] instance.
  static PatientVisitReturnInEnumTypeTransformer _instance;
}


