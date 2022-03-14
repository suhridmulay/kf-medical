//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class PatientVisitInput {
  /// Returns a new [PatientVisitInput] instance.
  PatientVisitInput({
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
  });

  String patient;

  String medicalCenter;

  String doctor;

  DateTime visitDate;

  bool repeatVisit;

  String symptom1;

  String symptom2;

  String symptom3;

  String otherSymptoms;

  String height;

  String weight;

  String temperature;

  String bloodPressure;

  String pulseRate;

  String oxygenLevel;

  String vitalStatisticsOther;

  String diagnosis;

  PatientVisitInputCaseSeverityEnum caseSeverity;

  String medicine1;

  int med1Qty;

  bool med1Supplied;

  String medicine2;

  int med2Qty;

  bool med2Supplied;

  String medicine3;

  int med3Qty;

  bool med3Supplied;

  String medicine4;

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

  PatientVisitInputReturnInEnum returnIn;

  String telemedicineDoctor;

  DateTime telemedicineConsultDate;

  String differentialDiagnosis;

  String differentialRecommendation;

  String finalNotes;

  @override
  bool operator ==(Object other) => identical(this, other) || other is PatientVisitInput &&
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
     other.finalNotes == finalNotes;

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
    (finalNotes == null ? 0 : finalNotes.hashCode);

  @override
  String toString() => 'PatientVisitInput[patient=$patient, medicalCenter=$medicalCenter, doctor=$doctor, visitDate=$visitDate, repeatVisit=$repeatVisit, symptom1=$symptom1, symptom2=$symptom2, symptom3=$symptom3, otherSymptoms=$otherSymptoms, height=$height, weight=$weight, temperature=$temperature, bloodPressure=$bloodPressure, pulseRate=$pulseRate, oxygenLevel=$oxygenLevel, vitalStatisticsOther=$vitalStatisticsOther, diagnosis=$diagnosis, caseSeverity=$caseSeverity, medicine1=$medicine1, med1Qty=$med1Qty, med1Supplied=$med1Supplied, medicine2=$medicine2, med2Qty=$med2Qty, med2Supplied=$med2Supplied, medicine3=$medicine3, med3Qty=$med3Qty, med3Supplied=$med3Supplied, medicine4=$medicine4, med4Qty=$med4Qty, med4Supplied=$med4Supplied, medicineInstructions=$medicineInstructions, requestedLabs=$requestedLabs, dietaryInstructions=$dietaryInstructions, isTelemedReferral=$isTelemedReferral, patientCopay=$patientCopay, telemedCopay=$telemedCopay, referralHospital=$referralHospital, referredSpecialistDoctor=$referredSpecialistDoctor, returnIn=$returnIn, telemedicineDoctor=$telemedicineDoctor, telemedicineConsultDate=$telemedicineConsultDate, differentialDiagnosis=$differentialDiagnosis, differentialRecommendation=$differentialRecommendation, finalNotes=$finalNotes]';

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
    return json;
  }

  /// Returns a new [PatientVisitInput] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static PatientVisitInput fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();
      return PatientVisitInput(
        patient: mapValueOfType<String>(json, r'patient'),
        medicalCenter: mapValueOfType<String>(json, r'medicalCenter'),
        doctor: mapValueOfType<String>(json, r'doctor'),
        visitDate: mapDateTime(json, r'visitDate', ''),
        repeatVisit: mapValueOfType<bool>(json, r'repeatVisit'),
        symptom1: mapValueOfType<String>(json, r'symptom1'),
        symptom2: mapValueOfType<String>(json, r'symptom2'),
        symptom3: mapValueOfType<String>(json, r'symptom3'),
        otherSymptoms: mapValueOfType<String>(json, r'otherSymptoms'),
        height: mapValueOfType<String>(json, r'height'),
        weight: mapValueOfType<String>(json, r'weight'),
        temperature: mapValueOfType<String>(json, r'temperature'),
        bloodPressure: mapValueOfType<String>(json, r'bloodPressure'),
        pulseRate: mapValueOfType<String>(json, r'pulseRate'),
        oxygenLevel: mapValueOfType<String>(json, r'oxygenLevel'),
        vitalStatisticsOther: mapValueOfType<String>(json, r'vitalStatisticsOther'),
        diagnosis: mapValueOfType<String>(json, r'diagnosis'),
        caseSeverity: PatientVisitInputCaseSeverityEnum.fromJson(json[r'caseSeverity']),
        medicine1: mapValueOfType<String>(json, r'medicine1'),
        med1Qty: mapValueOfType<int>(json, r'med1Qty'),
        med1Supplied: mapValueOfType<bool>(json, r'med1Supplied'),
        medicine2: mapValueOfType<String>(json, r'medicine2'),
        med2Qty: mapValueOfType<int>(json, r'med2Qty'),
        med2Supplied: mapValueOfType<bool>(json, r'med2Supplied'),
        medicine3: mapValueOfType<String>(json, r'medicine3'),
        med3Qty: mapValueOfType<int>(json, r'med3Qty'),
        med3Supplied: mapValueOfType<bool>(json, r'med3Supplied'),
        medicine4: mapValueOfType<String>(json, r'medicine4'),
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
        returnIn: PatientVisitInputReturnInEnum.fromJson(json[r'returnIn']),
        telemedicineDoctor: mapValueOfType<String>(json, r'telemedicineDoctor'),
        telemedicineConsultDate: mapDateTime(json, r'telemedicineConsultDate', ''),
        differentialDiagnosis: mapValueOfType<String>(json, r'differentialDiagnosis'),
        differentialRecommendation: mapValueOfType<String>(json, r'differentialRecommendation'),
        finalNotes: mapValueOfType<String>(json, r'finalNotes'),
      );
    }
    return null;
  }

  static List<PatientVisitInput> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(PatientVisitInput.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <PatientVisitInput>[];

  static Map<String, PatientVisitInput> mapFromJson(dynamic json) {
    final map = <String, PatientVisitInput>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) => map[key] = PatientVisitInput.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of PatientVisitInput-objects as value to a dart map
  static Map<String, List<PatientVisitInput>> mapListFromJson(dynamic json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<PatientVisitInput>>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) {
          map[key] = PatientVisitInput.listFromJson(
            value,
            emptyIsNull: emptyIsNull,
            growable: growable,
          );
        });
    }
    return map;
  }
}


class PatientVisitInputCaseSeverityEnum {
  /// Instantiate a new enum with the provided [value].
  const PatientVisitInputCaseSeverityEnum._(this.value);

  /// The underlying value of this enum member.
  final String value;

  @override
  String toString() => value ?? '';

  String toJson() => value;

  static const green = PatientVisitInputCaseSeverityEnum._(r'Green');
  static const orange = PatientVisitInputCaseSeverityEnum._(r'Orange');
  static const red = PatientVisitInputCaseSeverityEnum._(r'Red');

  /// List of all possible values in this [enum][PatientVisitInputCaseSeverityEnum].
  static const values = <PatientVisitInputCaseSeverityEnum>[
    green,
    orange,
    red,
  ];

  static PatientVisitInputCaseSeverityEnum fromJson(dynamic value) =>
    PatientVisitInputCaseSeverityEnumTypeTransformer().decode(value);

  static List<PatientVisitInputCaseSeverityEnum> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(PatientVisitInputCaseSeverityEnum.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <PatientVisitInputCaseSeverityEnum>[];
}

/// Transformation class that can [encode] an instance of [PatientVisitInputCaseSeverityEnum] to String,
/// and [decode] dynamic data back to [PatientVisitInputCaseSeverityEnum].
class PatientVisitInputCaseSeverityEnumTypeTransformer {
  factory PatientVisitInputCaseSeverityEnumTypeTransformer() => _instance ??= const PatientVisitInputCaseSeverityEnumTypeTransformer._();

  const PatientVisitInputCaseSeverityEnumTypeTransformer._();

  String encode(PatientVisitInputCaseSeverityEnum data) => data.value;

  /// Decodes a [dynamic value][data] to a PatientVisitInputCaseSeverityEnum.
  ///
  /// If [allowNull] is true and the [dynamic value][data] cannot be decoded successfully,
  /// then null is returned. However, if [allowNull] is false and the [dynamic value][data]
  /// cannot be decoded successfully, then an [UnimplementedError] is thrown.
  ///
  /// The [allowNull] is very handy when an API changes and a new enum value is added or removed,
  /// and users are still using an old app with the old code.
  PatientVisitInputCaseSeverityEnum decode(dynamic data, {bool allowNull}) {
    if (data != null) {
      switch (data.toString()) {
        case r'Green': return PatientVisitInputCaseSeverityEnum.green;
        case r'Orange': return PatientVisitInputCaseSeverityEnum.orange;
        case r'Red': return PatientVisitInputCaseSeverityEnum.red;
        default:
          if (allowNull == false) {
            throw ArgumentError('Unknown enum value to decode: $data');
          }
      }
    }
    return null;
  }

  /// Singleton [PatientVisitInputCaseSeverityEnumTypeTransformer] instance.
  static PatientVisitInputCaseSeverityEnumTypeTransformer _instance;
}



class PatientVisitInputReturnInEnum {
  /// Instantiate a new enum with the provided [value].
  const PatientVisitInputReturnInEnum._(this.value);

  /// The underlying value of this enum member.
  final String value;

  @override
  String toString() => value ?? '';

  String toJson() => value;

  static const n1week = PatientVisitInputReturnInEnum._(r'1week');
  static const n2weeks = PatientVisitInputReturnInEnum._(r'2weeks');
  static const n3weeks = PatientVisitInputReturnInEnum._(r'3weeks');
  static const n4weeks = PatientVisitInputReturnInEnum._(r'4weeks');
  static const n6weeks = PatientVisitInputReturnInEnum._(r'6weeks');
  static const n2months = PatientVisitInputReturnInEnum._(r'2months');
  static const n3months = PatientVisitInputReturnInEnum._(r'3months');
  static const n4months = PatientVisitInputReturnInEnum._(r'4months');
  static const n6months = PatientVisitInputReturnInEnum._(r'6months');
  static const n1year = PatientVisitInputReturnInEnum._(r'1year');

  /// List of all possible values in this [enum][PatientVisitInputReturnInEnum].
  static const values = <PatientVisitInputReturnInEnum>[
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

  static PatientVisitInputReturnInEnum fromJson(dynamic value) =>
    PatientVisitInputReturnInEnumTypeTransformer().decode(value);

  static List<PatientVisitInputReturnInEnum> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(PatientVisitInputReturnInEnum.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <PatientVisitInputReturnInEnum>[];
}

/// Transformation class that can [encode] an instance of [PatientVisitInputReturnInEnum] to String,
/// and [decode] dynamic data back to [PatientVisitInputReturnInEnum].
class PatientVisitInputReturnInEnumTypeTransformer {
  factory PatientVisitInputReturnInEnumTypeTransformer() => _instance ??= const PatientVisitInputReturnInEnumTypeTransformer._();

  const PatientVisitInputReturnInEnumTypeTransformer._();

  String encode(PatientVisitInputReturnInEnum data) => data.value;

  /// Decodes a [dynamic value][data] to a PatientVisitInputReturnInEnum.
  ///
  /// If [allowNull] is true and the [dynamic value][data] cannot be decoded successfully,
  /// then null is returned. However, if [allowNull] is false and the [dynamic value][data]
  /// cannot be decoded successfully, then an [UnimplementedError] is thrown.
  ///
  /// The [allowNull] is very handy when an API changes and a new enum value is added or removed,
  /// and users are still using an old app with the old code.
  PatientVisitInputReturnInEnum decode(dynamic data, {bool allowNull}) {
    if (data != null) {
      switch (data.toString()) {
        case r'1week': return PatientVisitInputReturnInEnum.n1week;
        case r'2weeks': return PatientVisitInputReturnInEnum.n2weeks;
        case r'3weeks': return PatientVisitInputReturnInEnum.n3weeks;
        case r'4weeks': return PatientVisitInputReturnInEnum.n4weeks;
        case r'6weeks': return PatientVisitInputReturnInEnum.n6weeks;
        case r'2months': return PatientVisitInputReturnInEnum.n2months;
        case r'3months': return PatientVisitInputReturnInEnum.n3months;
        case r'4months': return PatientVisitInputReturnInEnum.n4months;
        case r'6months': return PatientVisitInputReturnInEnum.n6months;
        case r'1year': return PatientVisitInputReturnInEnum.n1year;
        default:
          if (allowNull == false) {
            throw ArgumentError('Unknown enum value to decode: $data');
          }
      }
    }
    return null;
  }

  /// Singleton [PatientVisitInputReturnInEnumTypeTransformer] instance.
  static PatientVisitInputReturnInEnumTypeTransformer _instance;
}


