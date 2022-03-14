//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class TenantTenantIdUserData {
  /// Returns a new [TenantTenantIdUserData] instance.
  TenantTenantIdUserData({
    this.id,
    this.roles = const [],
  });

  String id;

  List<String> roles;

  @override
  bool operator ==(Object other) => identical(this, other) || other is TenantTenantIdUserData &&
     other.id == id &&
     other.roles == roles;

  @override
  int get hashCode =>
  // ignore: unnecessary_parenthesis
    (id == null ? 0 : id.hashCode) +
    (roles == null ? 0 : roles.hashCode);

  @override
  String toString() => 'TenantTenantIdUserData[id=$id, roles=$roles]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (id != null) {
      json[r'id'] = id;
    }
    if (roles != null) {
      json[r'roles'] = roles;
    }
    return json;
  }

  /// Returns a new [TenantTenantIdUserData] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static TenantTenantIdUserData fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();
      return TenantTenantIdUserData(
        id: mapValueOfType<String>(json, r'id'),
        roles: json[r'roles'] is List
          ? (json[r'roles'] as List).cast<String>()
          : null,
      );
    }
    return null;
  }

  static List<TenantTenantIdUserData> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(TenantTenantIdUserData.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <TenantTenantIdUserData>[];

  static Map<String, TenantTenantIdUserData> mapFromJson(dynamic json) {
    final map = <String, TenantTenantIdUserData>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) => map[key] = TenantTenantIdUserData.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of TenantTenantIdUserData-objects as value to a dart map
  static Map<String, List<TenantTenantIdUserData>> mapListFromJson(dynamic json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<TenantTenantIdUserData>>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) {
          map[key] = TenantTenantIdUserData.listFromJson(
            value,
            emptyIsNull: emptyIsNull,
            growable: growable,
          );
        });
    }
    return map;
  }
}

