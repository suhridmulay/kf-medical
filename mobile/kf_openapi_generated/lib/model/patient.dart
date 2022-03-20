//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class Patient {
  /// Returns a new [Patient] instance.
  Patient({
    this.firstName,
    this.middleName,
    this.lastName,
    this.fullName,
    this.gender,
    this.age,
    this.localityName,
    this.mobileNumber,
    this.aadharNumber,
    this.dateOfBirth,
    this.picture = const [],
    this.medicalHistory,
    this.medicalVisits = const [],
    this.medicalDocuments = const [],
    this.id,
    this.createdAt,
    this.updatedAt,
    this.deletedAt,
    this.createdById,
    this.updatedById,
  });

  String firstName;

  String middleName;

  String lastName;

  String fullName;

  PatientGenderEnum gender;

  int age;

  String localityName;

  String mobileNumber;

  String aadharNumber;

  DateTime dateOfBirth;

  List<File> picture;

  MedicalHistory medicalHistory;

  List<PatientVisit> medicalVisits;

  List<PatientDocument> medicalDocuments;

  String id;

  String createdAt;

  String updatedAt;

  String deletedAt;

  String createdById;

  String updatedById;

  @override
  bool operator ==(Object other) => identical(this, other) || other is Patient &&
     other.firstName == firstName &&
     other.middleName == middleName &&
     other.lastName == lastName &&
     other.fullName == fullName &&
     other.gender == gender &&
     other.age == age &&
     other.localityName == localityName &&
     other.mobileNumber == mobileNumber &&
     other.aadharNumber == aadharNumber &&
     other.dateOfBirth == dateOfBirth &&
     other.picture == picture &&
     other.medicalHistory == medicalHistory &&
     other.medicalVisits == medicalVisits &&
     other.medicalDocuments == medicalDocuments &&
     other.id == id &&
     other.createdAt == createdAt &&
     other.updatedAt == updatedAt &&
     other.deletedAt == deletedAt &&
     other.createdById == createdById &&
     other.updatedById == updatedById;

  @override
  int get hashCode =>
  // ignore: unnecessary_parenthesis
    (firstName == null ? 0 : firstName.hashCode) +
    (middleName == null ? 0 : middleName.hashCode) +
    (lastName == null ? 0 : lastName.hashCode) +
    (fullName == null ? 0 : fullName.hashCode) +
    (gender == null ? 0 : gender.hashCode) +
    (age == null ? 0 : age.hashCode) +
    (localityName == null ? 0 : localityName.hashCode) +
    (mobileNumber == null ? 0 : mobileNumber.hashCode) +
    (aadharNumber == null ? 0 : aadharNumber.hashCode) +
    (dateOfBirth == null ? 0 : dateOfBirth.hashCode) +
    (picture == null ? 0 : picture.hashCode) +
    (medicalHistory == null ? 0 : medicalHistory.hashCode) +
    (medicalVisits == null ? 0 : medicalVisits.hashCode) +
    (medicalDocuments == null ? 0 : medicalDocuments.hashCode) +
    (id == null ? 0 : id.hashCode) +
    (createdAt == null ? 0 : createdAt.hashCode) +
    (updatedAt == null ? 0 : updatedAt.hashCode) +
    (deletedAt == null ? 0 : deletedAt.hashCode) +
    (createdById == null ? 0 : createdById.hashCode) +
    (updatedById == null ? 0 : updatedById.hashCode);

  @override
  String toString() => 'Patient[firstName=$firstName, middleName=$middleName, lastName=$lastName, fullName=$fullName, gender=$gender, age=$age, localityName=$localityName, mobileNumber=$mobileNumber, aadharNumber=$aadharNumber, dateOfBirth=$dateOfBirth, picture=$picture, medicalHistory=$medicalHistory, medicalVisits=$medicalVisits, medicalDocuments=$medicalDocuments, id=$id, createdAt=$createdAt, updatedAt=$updatedAt, deletedAt=$deletedAt, createdById=$createdById, updatedById=$updatedById]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (firstName != null) {
      json[r'firstName'] = firstName;
    }
    if (middleName != null) {
      json[r'middleName'] = middleName;
    }
    if (lastName != null) {
      json[r'lastName'] = lastName;
    }
    if (fullName != null) {
      json[r'fullName'] = fullName;
    }
    if (gender != null) {
      json[r'gender'] = gender;
    }
    if (age != null) {
      json[r'age'] = age;
    }
    if (localityName != null) {
      json[r'localityName'] = localityName;
    }
    if (mobileNumber != null) {
      json[r'mobileNumber'] = mobileNumber;
    }
    if (aadharNumber != null) {
      json[r'aadharNumber'] = aadharNumber;
    }
    if (dateOfBirth != null) {
      json[r'dateOfBirth'] = _dateFormatter.format(dateOfBirth.toUtc());
    }
    if (picture != null) {
      json[r'picture'] = picture;
    }
    if (medicalHistory != null) {
      json[r'medicalHistory'] = medicalHistory;
    }
    if (medicalVisits != null) {
      json[r'medicalVisits'] = medicalVisits;
    }
    if (medicalDocuments != null) {
      json[r'medicalDocuments'] = medicalDocuments;
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

  /// Returns a new [Patient] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static Patient fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();
      return Patient(
        firstName: mapValueOfType<String>(json, r'firstName'),
        middleName: mapValueOfType<String>(json, r'middleName'),
        lastName: mapValueOfType<String>(json, r'lastName'),
        fullName: mapValueOfType<String>(json, r'fullName'),
        gender: PatientGenderEnum.fromJson(json[r'gender']),
        age: mapValueOfType<int>(json, r'age'),
        localityName: mapValueOfType<String>(json, r'localityName'),
        mobileNumber: mapValueOfType<String>(json, r'mobileNumber'),
        aadharNumber: mapValueOfType<String>(json, r'aadharNumber'),
        dateOfBirth: mapDateTime(json, r'dateOfBirth', ''),
        picture: File.listFromJson(json[r'picture']),
        medicalHistory: MedicalHistory.fromJson(json[r'medicalHistory']),
        medicalVisits: PatientVisit.listFromJson(json[r'medicalVisits']),
        medicalDocuments: PatientDocument.listFromJson(json[r'medicalDocuments']),
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

  static List<Patient> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(Patient.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <Patient>[];

  static Map<String, Patient> mapFromJson(dynamic json) {
    final map = <String, Patient>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) => map[key] = Patient.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of Patient-objects as value to a dart map
  static Map<String, List<Patient>> mapListFromJson(dynamic json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<Patient>>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) {
          map[key] = Patient.listFromJson(
            value,
            emptyIsNull: emptyIsNull,
            growable: growable,
          );
        });
    }
    return map;
  }
}


class PatientGenderEnum {
  /// Instantiate a new enum with the provided [value].
  const PatientGenderEnum._(this.value);

  /// The underlying value of this enum member.
  final String value;

  @override
  String toString() => value ?? '';

  String toJson() => value;

  static const male = PatientGenderEnum._(r'Male');
  static const female = PatientGenderEnum._(r'Female');

  /// List of all possible values in this [enum][PatientGenderEnum].
  static const values = <PatientGenderEnum>[
    male,
    female,
  ];

  static PatientGenderEnum fromJson(dynamic value) =>
    PatientGenderEnumTypeTransformer().decode(value);

  static List<PatientGenderEnum> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(PatientGenderEnum.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <PatientGenderEnum>[];
}

/// Transformation class that can [encode] an instance of [PatientGenderEnum] to String,
/// and [decode] dynamic data back to [PatientGenderEnum].
class PatientGenderEnumTypeTransformer {
  factory PatientGenderEnumTypeTransformer() => _instance ??= const PatientGenderEnumTypeTransformer._();

  const PatientGenderEnumTypeTransformer._();

  String encode(PatientGenderEnum data) => data.value;

  /// Decodes a [dynamic value][data] to a PatientGenderEnum.
  ///
  /// If [allowNull] is true and the [dynamic value][data] cannot be decoded successfully,
  /// then null is returned. However, if [allowNull] is false and the [dynamic value][data]
  /// cannot be decoded successfully, then an [UnimplementedError] is thrown.
  ///
  /// The [allowNull] is very handy when an API changes and a new enum value is added or removed,
  /// and users are still using an old app with the old code.
  PatientGenderEnum decode(dynamic data, {bool allowNull}) {
    if (data != null) {
      switch (data.toString()) {
        case r'Male': return PatientGenderEnum.male;
        case r'Female': return PatientGenderEnum.female;
        default:
          if (allowNull == false) {
            throw ArgumentError('Unknown enum value to decode: $data');
          }
      }
    }
    return null;
  }

  /// Singleton [PatientGenderEnumTypeTransformer] instance.
  static PatientGenderEnumTypeTransformer _instance;
}


