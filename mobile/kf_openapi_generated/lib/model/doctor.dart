//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class Doctor {
  /// Returns a new [Doctor] instance.
  Doctor({
    this.name,
    this.specialization,
    this.user,
    this.phone,
    this.isRuralHealthcareProfessional,
    this.id,
    this.createdAt,
    this.updatedAt,
    this.deletedAt,
    this.createdById,
    this.updatedById,
  });

  String name;

  String specialization;

  UserRelated user;

  String phone;

  bool isRuralHealthcareProfessional;

  String id;

  String createdAt;

  String updatedAt;

  String deletedAt;

  String createdById;

  String updatedById;

  @override
  bool operator ==(Object other) => identical(this, other) || other is Doctor &&
     other.name == name &&
     other.specialization == specialization &&
     other.user == user &&
     other.phone == phone &&
     other.isRuralHealthcareProfessional == isRuralHealthcareProfessional &&
     other.id == id &&
     other.createdAt == createdAt &&
     other.updatedAt == updatedAt &&
     other.deletedAt == deletedAt &&
     other.createdById == createdById &&
     other.updatedById == updatedById;

  @override
  int get hashCode =>
  // ignore: unnecessary_parenthesis
    (name == null ? 0 : name.hashCode) +
    (specialization == null ? 0 : specialization.hashCode) +
    (user == null ? 0 : user.hashCode) +
    (phone == null ? 0 : phone.hashCode) +
    (isRuralHealthcareProfessional == null ? 0 : isRuralHealthcareProfessional.hashCode) +
    (id == null ? 0 : id.hashCode) +
    (createdAt == null ? 0 : createdAt.hashCode) +
    (updatedAt == null ? 0 : updatedAt.hashCode) +
    (deletedAt == null ? 0 : deletedAt.hashCode) +
    (createdById == null ? 0 : createdById.hashCode) +
    (updatedById == null ? 0 : updatedById.hashCode);

  @override
  String toString() => 'Doctor[name=$name, specialization=$specialization, user=$user, phone=$phone, isRuralHealthcareProfessional=$isRuralHealthcareProfessional, id=$id, createdAt=$createdAt, updatedAt=$updatedAt, deletedAt=$deletedAt, createdById=$createdById, updatedById=$updatedById]';

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

  /// Returns a new [Doctor] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static Doctor fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();
      return Doctor(
        name: mapValueOfType<String>(json, r'name'),
        specialization: mapValueOfType<String>(json, r'specialization'),
        user: UserRelated.fromJson(json[r'user']),
        phone: mapValueOfType<String>(json, r'phone'),
        isRuralHealthcareProfessional: mapValueOfType<bool>(json, r'isRuralHealthcareProfessional'),
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

  static List<Doctor> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(Doctor.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <Doctor>[];

  static Map<String, Doctor> mapFromJson(dynamic json) {
    final map = <String, Doctor>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) => map[key] = Doctor.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of Doctor-objects as value to a dart map
  static Map<String, List<Doctor>> mapListFromJson(dynamic json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<Doctor>>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) {
          map[key] = Doctor.listFromJson(
            value,
            emptyIsNull: emptyIsNull,
            growable: growable,
          );
        });
    }
    return map;
  }
}

