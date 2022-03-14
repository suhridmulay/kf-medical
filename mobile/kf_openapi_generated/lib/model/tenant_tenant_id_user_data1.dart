//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class TenantTenantIdUserData1 {
  /// Returns a new [TenantTenantIdUserData1] instance.
  TenantTenantIdUserData1({
    this.emails = const [],
    this.roles = const [],
  });

  List<String> emails;

  List<String> roles;

  @override
  bool operator ==(Object other) => identical(this, other) || other is TenantTenantIdUserData1 &&
     other.emails == emails &&
     other.roles == roles;

  @override
  int get hashCode =>
  // ignore: unnecessary_parenthesis
    (emails == null ? 0 : emails.hashCode) +
    (roles == null ? 0 : roles.hashCode);

  @override
  String toString() => 'TenantTenantIdUserData1[emails=$emails, roles=$roles]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (emails != null) {
      json[r'emails'] = emails;
    }
    if (roles != null) {
      json[r'roles'] = roles;
    }
    return json;
  }

  /// Returns a new [TenantTenantIdUserData1] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static TenantTenantIdUserData1 fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();
      return TenantTenantIdUserData1(
        emails: json[r'emails'] is List
          ? (json[r'emails'] as List).cast<String>()
          : null,
        roles: json[r'roles'] is List
          ? (json[r'roles'] as List).cast<String>()
          : null,
      );
    }
    return null;
  }

  static List<TenantTenantIdUserData1> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(TenantTenantIdUserData1.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <TenantTenantIdUserData1>[];

  static Map<String, TenantTenantIdUserData1> mapFromJson(dynamic json) {
    final map = <String, TenantTenantIdUserData1>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) => map[key] = TenantTenantIdUserData1.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of TenantTenantIdUserData1-objects as value to a dart map
  static Map<String, List<TenantTenantIdUserData1>> mapListFromJson(dynamic json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<TenantTenantIdUserData1>>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) {
          map[key] = TenantTenantIdUserData1.listFromJson(
            value,
            emptyIsNull: emptyIsNull,
            growable: growable,
          );
        });
    }
    return map;
  }
}

