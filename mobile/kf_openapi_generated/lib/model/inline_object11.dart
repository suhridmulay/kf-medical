//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class InlineObject11 {
  /// Returns a new [InlineObject11] instance.
  InlineObject11({
    @required this.data,
  });

  HealthCenterInput data;

  @override
  bool operator ==(Object other) => identical(this, other) || other is InlineObject11 &&
     other.data == data;

  @override
  int get hashCode =>
  // ignore: unnecessary_parenthesis
    (data == null ? 0 : data.hashCode);

  @override
  String toString() => 'InlineObject11[data=$data]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
      json[r'data'] = data;
    return json;
  }

  /// Returns a new [InlineObject11] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static InlineObject11 fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();
      return InlineObject11(
        data: HealthCenterInput.fromJson(json[r'data']),
      );
    }
    return null;
  }

  static List<InlineObject11> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(InlineObject11.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <InlineObject11>[];

  static Map<String, InlineObject11> mapFromJson(dynamic json) {
    final map = <String, InlineObject11>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) => map[key] = InlineObject11.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject11-objects as value to a dart map
  static Map<String, List<InlineObject11>> mapListFromJson(dynamic json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<InlineObject11>>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) {
          map[key] = InlineObject11.listFromJson(
            value,
            emptyIsNull: emptyIsNull,
            growable: growable,
          );
        });
    }
    return map;
  }
}

