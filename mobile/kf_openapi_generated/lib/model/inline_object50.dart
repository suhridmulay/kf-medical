//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class InlineObject50 {
  /// Returns a new [InlineObject50] instance.
  InlineObject50({
    @required this.data,
  });

  TenantTenantIdUserData1 data;

  @override
  bool operator ==(Object other) => identical(this, other) || other is InlineObject50 &&
     other.data == data;

  @override
  int get hashCode =>
  // ignore: unnecessary_parenthesis
    (data == null ? 0 : data.hashCode);

  @override
  String toString() => 'InlineObject50[data=$data]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
      json[r'data'] = data;
    return json;
  }

  /// Returns a new [InlineObject50] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static InlineObject50 fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();
      return InlineObject50(
        data: TenantTenantIdUserData1.fromJson(json[r'data']),
      );
    }
    return null;
  }

  static List<InlineObject50> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(InlineObject50.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <InlineObject50>[];

  static Map<String, InlineObject50> mapFromJson(dynamic json) {
    final map = <String, InlineObject50>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) => map[key] = InlineObject50.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject50-objects as value to a dart map
  static Map<String, List<InlineObject50>> mapListFromJson(dynamic json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<InlineObject50>>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) {
          map[key] = InlineObject50.listFromJson(
            value,
            emptyIsNull: emptyIsNull,
            growable: growable,
          );
        });
    }
    return map;
  }
}

