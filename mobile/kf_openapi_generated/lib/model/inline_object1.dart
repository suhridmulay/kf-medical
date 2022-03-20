//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class InlineObject1 {
  /// Returns a new [InlineObject1] instance.
  InlineObject1({
    @required this.email,
    @required this.password,
    this.invitationToken,
    this.tenantId,
  });

  String email;

  String password;

  /// This invitation token is sent via email to the user. If they access it via the link, the invitation token is used to auto-accept the invitation to the specific tenant.
  String invitationToken;

  /// If the user access the application via subdomain, it onboards the user on the tenant passed.
  String tenantId;

  @override
  bool operator ==(Object other) => identical(this, other) || other is InlineObject1 &&
     other.email == email &&
     other.password == password &&
     other.invitationToken == invitationToken &&
     other.tenantId == tenantId;

  @override
  int get hashCode =>
  // ignore: unnecessary_parenthesis
    (email == null ? 0 : email.hashCode) +
    (password == null ? 0 : password.hashCode) +
    (invitationToken == null ? 0 : invitationToken.hashCode) +
    (tenantId == null ? 0 : tenantId.hashCode);

  @override
  String toString() => 'InlineObject1[email=$email, password=$password, invitationToken=$invitationToken, tenantId=$tenantId]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
      json[r'email'] = email;
      json[r'password'] = password;
    if (invitationToken != null) {
      json[r'invitationToken'] = invitationToken;
    }
    if (tenantId != null) {
      json[r'tenantId'] = tenantId;
    }
    return json;
  }

  /// Returns a new [InlineObject1] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static InlineObject1 fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();
      return InlineObject1(
        email: mapValueOfType<String>(json, r'email'),
        password: mapValueOfType<String>(json, r'password'),
        invitationToken: mapValueOfType<String>(json, r'invitationToken'),
        tenantId: mapValueOfType<String>(json, r'tenantId'),
      );
    }
    return null;
  }

  static List<InlineObject1> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(InlineObject1.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <InlineObject1>[];

  static Map<String, InlineObject1> mapFromJson(dynamic json) {
    final map = <String, InlineObject1>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) => map[key] = InlineObject1.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject1-objects as value to a dart map
  static Map<String, List<InlineObject1>> mapListFromJson(dynamic json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<InlineObject1>>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) {
          map[key] = InlineObject1.listFromJson(
            value,
            emptyIsNull: emptyIsNull,
            growable: growable,
          );
        });
    }
    return map;
  }
}

