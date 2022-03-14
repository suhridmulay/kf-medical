//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class InlineObject3 {
  /// Returns a new [InlineObject3] instance.
  InlineObject3({
    this.tenantId,
  });

  /// If the user access the application via subdomain, the email will also be sent using the subdomain.
  String tenantId;

  @override
  bool operator ==(Object other) => identical(this, other) || other is InlineObject3 &&
     other.tenantId == tenantId;

  @override
  int get hashCode =>
  // ignore: unnecessary_parenthesis
    (tenantId == null ? 0 : tenantId.hashCode);

  @override
  String toString() => 'InlineObject3[tenantId=$tenantId]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (tenantId != null) {
      json[r'tenantId'] = tenantId;
    }
    return json;
  }

  /// Returns a new [InlineObject3] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static InlineObject3 fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();
      return InlineObject3(
        tenantId: mapValueOfType<String>(json, r'tenantId'),
      );
    }
    return null;
  }

  static List<InlineObject3> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(InlineObject3.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <InlineObject3>[];

  static Map<String, InlineObject3> mapFromJson(dynamic json) {
    final map = <String, InlineObject3>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) => map[key] = InlineObject3.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject3-objects as value to a dart map
  static Map<String, List<InlineObject3>> mapListFromJson(dynamic json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<InlineObject3>>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) {
          map[key] = InlineObject3.listFromJson(
            value,
            emptyIsNull: emptyIsNull,
            growable: growable,
          );
        });
    }
    return map;
  }
}

