//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class HealthCenter {
  /// Returns a new [HealthCenter] instance.
  HealthCenter({
    this.name,
    this.address,
    this.phoneNumber,
    this.adminName,
    this.id,
    this.createdAt,
    this.updatedAt,
    this.deletedAt,
    this.createdById,
    this.updatedById,
  });

  String name;

  String address;

  String phoneNumber;

  UserRelated adminName;

  String id;

  String createdAt;

  String updatedAt;

  String deletedAt;

  String createdById;

  String updatedById;

  @override
  bool operator ==(Object other) => identical(this, other) || other is HealthCenter &&
     other.name == name &&
     other.address == address &&
     other.phoneNumber == phoneNumber &&
     other.adminName == adminName &&
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
    (address == null ? 0 : address.hashCode) +
    (phoneNumber == null ? 0 : phoneNumber.hashCode) +
    (adminName == null ? 0 : adminName.hashCode) +
    (id == null ? 0 : id.hashCode) +
    (createdAt == null ? 0 : createdAt.hashCode) +
    (updatedAt == null ? 0 : updatedAt.hashCode) +
    (deletedAt == null ? 0 : deletedAt.hashCode) +
    (createdById == null ? 0 : createdById.hashCode) +
    (updatedById == null ? 0 : updatedById.hashCode);

  @override
  String toString() => 'HealthCenter[name=$name, address=$address, phoneNumber=$phoneNumber, adminName=$adminName, id=$id, createdAt=$createdAt, updatedAt=$updatedAt, deletedAt=$deletedAt, createdById=$createdById, updatedById=$updatedById]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (name != null) {
      json[r'name'] = name;
    }
    if (address != null) {
      json[r'address'] = address;
    }
    if (phoneNumber != null) {
      json[r'phoneNumber'] = phoneNumber;
    }
    if (adminName != null) {
      json[r'adminName'] = adminName;
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

  /// Returns a new [HealthCenter] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static HealthCenter fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();
      return HealthCenter(
        name: mapValueOfType<String>(json, r'name'),
        address: mapValueOfType<String>(json, r'address'),
        phoneNumber: mapValueOfType<String>(json, r'phoneNumber'),
        adminName: UserRelated.fromJson(json[r'adminName']),
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

  static List<HealthCenter> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(HealthCenter.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <HealthCenter>[];

  static Map<String, HealthCenter> mapFromJson(dynamic json) {
    final map = <String, HealthCenter>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) => map[key] = HealthCenter.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of HealthCenter-objects as value to a dart map
  static Map<String, List<HealthCenter>> mapListFromJson(dynamic json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<HealthCenter>>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) {
          map[key] = HealthCenter.listFromJson(
            value,
            emptyIsNull: emptyIsNull,
            growable: growable,
          );
        });
    }
    return map;
  }
}

