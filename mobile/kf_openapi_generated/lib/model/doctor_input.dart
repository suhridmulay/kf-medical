//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class DoctorInput {
  /// Returns a new [DoctorInput] instance.
  DoctorInput({
    this.name,
    this.specialization,
    this.user,
    this.phone,
    this.isRuralHealthcareProfessional,
  });

  String name;

  String specialization;

  String user;

  String phone;

  bool isRuralHealthcareProfessional;

  @override
  bool operator ==(Object other) => identical(this, other) || other is DoctorInput &&
     other.name == name &&
     other.specialization == specialization &&
     other.user == user &&
     other.phone == phone &&
     other.isRuralHealthcareProfessional == isRuralHealthcareProfessional;

  @override
  int get hashCode =>
  // ignore: unnecessary_parenthesis
    (name == null ? 0 : name.hashCode) +
    (specialization == null ? 0 : specialization.hashCode) +
    (user == null ? 0 : user.hashCode) +
    (phone == null ? 0 : phone.hashCode) +
    (isRuralHealthcareProfessional == null ? 0 : isRuralHealthcareProfessional.hashCode);

  @override
  String toString() => 'DoctorInput[name=$name, specialization=$specialization, user=$user, phone=$phone, isRuralHealthcareProfessional=$isRuralHealthcareProfessional]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (name != null) {
      json[r'name'] = name;
    }
    if (specialization != null) {
      json[r'specialization'] = specialization;
    }
    if (user != null) {
      json[r'user'] = user;
    }
    if (phone != null) {
      json[r'phone'] = phone;
    }
    if (isRuralHealthcareProfessional != null) {
      json[r'isRuralHealthcareProfessional'] = isRuralHealthcareProfessional;
    }
    return json;
  }

  /// Returns a new [DoctorInput] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static DoctorInput fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();
      return DoctorInput(
        name: mapValueOfType<String>(json, r'name'),
        specialization: mapValueOfType<String>(json, r'specialization'),
        user: mapValueOfType<String>(json, r'user'),
        phone: mapValueOfType<String>(json, r'phone'),
        isRuralHealthcareProfessional: mapValueOfType<bool>(json, r'isRuralHealthcareProfessional'),
      );
    }
    return null;
  }

  static List<DoctorInput> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(DoctorInput.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <DoctorInput>[];

  static Map<String, DoctorInput> mapFromJson(dynamic json) {
    final map = <String, DoctorInput>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) => map[key] = DoctorInput.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of DoctorInput-objects as value to a dart map
  static Map<String, List<DoctorInput>> mapListFromJson(dynamic json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<DoctorInput>>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) {
          map[key] = DoctorInput.listFromJson(
            value,
            emptyIsNull: emptyIsNull,
            growable: growable,
          );
        });
    }
    return map;
  }
}

