//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class AuthProfileData {
  /// Returns a new [AuthProfileData] instance.
  AuthProfileData({
    this.firstName,
    this.lastName,
    this.phoneNumber,
    this.avatars = const [],
  });

  String firstName;

  String lastName;

  String phoneNumber;

  List<FileInput> avatars;

  @override
  bool operator ==(Object other) => identical(this, other) || other is AuthProfileData &&
     other.firstName == firstName &&
     other.lastName == lastName &&
     other.phoneNumber == phoneNumber &&
     other.avatars == avatars;

  @override
  int get hashCode =>
  // ignore: unnecessary_parenthesis
    (firstName == null ? 0 : firstName.hashCode) +
    (lastName == null ? 0 : lastName.hashCode) +
    (phoneNumber == null ? 0 : phoneNumber.hashCode) +
    (avatars == null ? 0 : avatars.hashCode);

  @override
  String toString() => 'AuthProfileData[firstName=$firstName, lastName=$lastName, phoneNumber=$phoneNumber, avatars=$avatars]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (firstName != null) {
      json[r'firstName'] = firstName;
    }
    if (lastName != null) {
      json[r'lastName'] = lastName;
    }
    if (phoneNumber != null) {
      json[r'phoneNumber'] = phoneNumber;
    }
    if (avatars != null) {
      json[r'avatars'] = avatars;
    }
    return json;
  }

  /// Returns a new [AuthProfileData] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static AuthProfileData fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();
      return AuthProfileData(
        firstName: mapValueOfType<String>(json, r'firstName'),
        lastName: mapValueOfType<String>(json, r'lastName'),
        phoneNumber: mapValueOfType<String>(json, r'phoneNumber'),
        avatars: FileInput.listFromJson(json[r'avatars']),
      );
    }
    return null;
  }

  static List<AuthProfileData> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(AuthProfileData.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <AuthProfileData>[];

  static Map<String, AuthProfileData> mapFromJson(dynamic json) {
    final map = <String, AuthProfileData>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) => map[key] = AuthProfileData.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of AuthProfileData-objects as value to a dart map
  static Map<String, List<AuthProfileData>> mapListFromJson(dynamic json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<AuthProfileData>>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) {
          map[key] = AuthProfileData.listFromJson(
            value,
            emptyIsNull: emptyIsNull,
            growable: growable,
          );
        });
    }
    return map;
  }
}

