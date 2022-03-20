//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class PatientInput {
  /// Returns a new [PatientInput] instance.
  PatientInput({
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
  });

  String firstName;

  String middleName;

  String lastName;

  String fullName;

  PatientInputGenderEnum gender;

  int age;

  String localityName;

  String mobileNumber;

  String aadharNumber;

  DateTime dateOfBirth;

  List<FileInput> picture;

  String medicalHistory;

  List<String> medicalVisits;

  List<String> medicalDocuments;

  @override
  bool operator ==(Object other) => identical(this, other) || other is PatientInput &&
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
     other.medicalDocuments == medicalDocuments;

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
    (medicalDocuments == null ? 0 : medicalDocuments.hashCode);

  @override
  String toString() => 'PatientInput[firstName=$firstName, middleName=$middleName, lastName=$lastName, fullName=$fullName, gender=$gender, age=$age, localityName=$localityName, mobileNumber=$mobileNumber, aadharNumber=$aadharNumber, dateOfBirth=$dateOfBirth, picture=$picture, medicalHistory=$medicalHistory, medicalVisits=$medicalVisits, medicalDocuments=$medicalDocuments]';

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
    return json;
  }

  /// Returns a new [PatientInput] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static PatientInput fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();
      return PatientInput(
        firstName: mapValueOfType<String>(json, r'firstName'),
        middleName: mapValueOfType<String>(json, r'middleName'),
        lastName: mapValueOfType<String>(json, r'lastName'),
        fullName: mapValueOfType<String>(json, r'fullName'),
        gender: PatientInputGenderEnum.fromJson(json[r'gender']),
        age: mapValueOfType<int>(json, r'age'),
        localityName: mapValueOfType<String>(json, r'localityName'),
        mobileNumber: mapValueOfType<String>(json, r'mobileNumber'),
        aadharNumber: mapValueOfType<String>(json, r'aadharNumber'),
        dateOfBirth: mapDateTime(json, r'dateOfBirth', ''),
        picture: FileInput.listFromJson(json[r'picture']),
        medicalHistory: mapValueOfType<String>(json, r'medicalHistory'),
        medicalVisits: json[r'medicalVisits'] is List
          ? (json[r'medicalVisits'] as List).cast<String>()
          : null,
        medicalDocuments: json[r'medicalDocuments'] is List
          ? (json[r'medicalDocuments'] as List).cast<String>()
          : null,
      );
    }
    return null;
  }

  static List<PatientInput> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(PatientInput.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <PatientInput>[];

  static Map<String, PatientInput> mapFromJson(dynamic json) {
    final map = <String, PatientInput>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) => map[key] = PatientInput.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of PatientInput-objects as value to a dart map
  static Map<String, List<PatientInput>> mapListFromJson(dynamic json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<PatientInput>>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) {
          map[key] = PatientInput.listFromJson(
            value,
            emptyIsNull: emptyIsNull,
            growable: growable,
          );
        });
    }
    return map;
  }
}


class PatientInputGenderEnum {
  /// Instantiate a new enum with the provided [value].
  const PatientInputGenderEnum._(this.value);

  /// The underlying value of this enum member.
  final String value;

  @override
  String toString() => value ?? '';

  String toJson() => value;

  static const male = PatientInputGenderEnum._(r'Male');
  static const female = PatientInputGenderEnum._(r'Female');

  /// List of all possible values in this [enum][PatientInputGenderEnum].
  static const values = <PatientInputGenderEnum>[
    male,
    female,
  ];

  static PatientInputGenderEnum fromJson(dynamic value) =>
    PatientInputGenderEnumTypeTransformer().decode(value);

  static List<PatientInputGenderEnum> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(PatientInputGenderEnum.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <PatientInputGenderEnum>[];
}

/// Transformation class that can [encode] an instance of [PatientInputGenderEnum] to String,
/// and [decode] dynamic data back to [PatientInputGenderEnum].
class PatientInputGenderEnumTypeTransformer {
  factory PatientInputGenderEnumTypeTransformer() => _instance ??= const PatientInputGenderEnumTypeTransformer._();

  const PatientInputGenderEnumTypeTransformer._();

  String encode(PatientInputGenderEnum data) => data.value;

  /// Decodes a [dynamic value][data] to a PatientInputGenderEnum.
  ///
  /// If [allowNull] is true and the [dynamic value][data] cannot be decoded successfully,
  /// then null is returned. However, if [allowNull] is false and the [dynamic value][data]
  /// cannot be decoded successfully, then an [UnimplementedError] is thrown.
  ///
  /// The [allowNull] is very handy when an API changes and a new enum value is added or removed,
  /// and users are still using an old app with the old code.
  PatientInputGenderEnum decode(dynamic data, {bool allowNull}) {
    if (data != null) {
      switch (data.toString()) {
        case r'Male': return PatientInputGenderEnum.male;
        case r'Female': return PatientInputGenderEnum.female;
        default:
          if (allowNull == false) {
            throw ArgumentError('Unknown enum value to decode: $data');
          }
      }
    }
    return null;
  }

  /// Singleton [PatientInputGenderEnumTypeTransformer] instance.
  static PatientInputGenderEnumTypeTransformer _instance;
}


