//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class HealthCenterInput {
  /// Returns a new [HealthCenterInput] instance.
  HealthCenterInput({
    this.name,
    this.address,
    this.phoneNumber,
    this.adminName,
  });

  String name;

  String address;

  String phoneNumber;

  String adminName;

  @override
  bool operator ==(Object other) => identical(this, other) || other is HealthCenterInput &&
     other.name == name &&
     other.address == address &&
     other.phoneNumber == phoneNumber &&
     other.adminName == adminName;

  @override
  int get hashCode =>
  // ignore: unnecessary_parenthesis
    (name == null ? 0 : name.hashCode) +
    (address == null ? 0 : address.hashCode) +
    (phoneNumber == null ? 0 : phoneNumber.hashCode) +
    (adminName == null ? 0 : adminName.hashCode);

  @override
  String toString() => 'HealthCenterInput[name=$name, address=$address, phoneNumber=$phoneNumber, adminName=$adminName]';

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
    return json;
  }

  /// Returns a new [HealthCenterInput] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static HealthCenterInput fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();
      return HealthCenterInput(
        name: mapValueOfType<String>(json, r'name'),
        address: mapValueOfType<String>(json, r'address'),
        phoneNumber: mapValueOfType<String>(json, r'phoneNumber'),
        adminName: mapValueOfType<String>(json, r'adminName'),
      );
    }
    return null;
  }

  static List<HealthCenterInput> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(HealthCenterInput.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <HealthCenterInput>[];

  static Map<String, HealthCenterInput> mapFromJson(dynamic json) {
    final map = <String, HealthCenterInput>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) => map[key] = HealthCenterInput.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of HealthCenterInput-objects as value to a dart map
  static Map<String, List<HealthCenterInput>> mapListFromJson(dynamic json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<HealthCenterInput>>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) {
          map[key] = HealthCenterInput.listFromJson(
            value,
            emptyIsNull: emptyIsNull,
            growable: growable,
          );
        });
    }
    return map;
  }
}

