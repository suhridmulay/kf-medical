//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class InlineObject42 {
  /// Returns a new [InlineObject42] instance.
  InlineObject42({
    @required this.data,
  });

  ChronicDiseaseEnumInput data;

  @override
  bool operator ==(Object other) => identical(this, other) || other is InlineObject42 &&
     other.data == data;

  @override
  int get hashCode =>
  // ignore: unnecessary_parenthesis
    (data == null ? 0 : data.hashCode);

  @override
  String toString() => 'InlineObject42[data=$data]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
      json[r'data'] = data;
    return json;
  }

  /// Returns a new [InlineObject42] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static InlineObject42 fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();
      return InlineObject42(
        data: ChronicDiseaseEnumInput.fromJson(json[r'data']),
      );
    }
    return null;
  }

  static List<InlineObject42> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(InlineObject42.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <InlineObject42>[];

  static Map<String, InlineObject42> mapFromJson(dynamic json) {
    final map = <String, InlineObject42>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) => map[key] = InlineObject42.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject42-objects as value to a dart map
  static Map<String, List<InlineObject42>> mapListFromJson(dynamic json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<InlineObject42>>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) {
          map[key] = InlineObject42.listFromJson(
            value,
            emptyIsNull: emptyIsNull,
            growable: growable,
          );
        });
    }
    return map;
  }
}

