//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class TenantTenantIdUserImportData {
  /// Returns a new [TenantTenantIdUserImportData] instance.
  TenantTenantIdUserImportData({
    this.email,
    this.roles = const [],
  });

  String email;

  List<String> roles;

  @override
  bool operator ==(Object other) => identical(this, other) || other is TenantTenantIdUserImportData &&
     other.email == email &&
     other.roles == roles;

  @override
  int get hashCode =>
  // ignore: unnecessary_parenthesis
    (email == null ? 0 : email.hashCode) +
    (roles == null ? 0 : roles.hashCode);

  @override
  String toString() => 'TenantTenantIdUserImportData[email=$email, roles=$roles]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (email != null) {
      json[r'email'] = email;
    }
    if (roles != null) {
      json[r'roles'] = roles;
    }
    return json;
  }

  /// Returns a new [TenantTenantIdUserImportData] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static TenantTenantIdUserImportData fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();
      return TenantTenantIdUserImportData(
        email: mapValueOfType<String>(json, r'email'),
        roles: json[r'roles'] is List
          ? (json[r'roles'] as List).cast<String>()
          : null,
      );
    }
    return null;
  }

  static List<TenantTenantIdUserImportData> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(TenantTenantIdUserImportData.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <TenantTenantIdUserImportData>[];

  static Map<String, TenantTenantIdUserImportData> mapFromJson(dynamic json) {
    final map = <String, TenantTenantIdUserImportData>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) => map[key] = TenantTenantIdUserImportData.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of TenantTenantIdUserImportData-objects as value to a dart map
  static Map<String, List<TenantTenantIdUserImportData>> mapListFromJson(dynamic json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<TenantTenantIdUserImportData>>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) {
          map[key] = TenantTenantIdUserImportData.listFromJson(
            value,
            emptyIsNull: emptyIsNull,
            growable: growable,
          );
        });
    }
    return map;
  }
}

