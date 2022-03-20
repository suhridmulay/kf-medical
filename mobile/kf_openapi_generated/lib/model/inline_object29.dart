//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class InlineObject29 {
  /// Returns a new [InlineObject29] instance.
  InlineObject29({
    @required this.data,
  });

  MedicineSuppliesInput data;

  @override
  bool operator ==(Object other) => identical(this, other) || other is InlineObject29 &&
     other.data == data;

  @override
  int get hashCode =>
  // ignore: unnecessary_parenthesis
    (data == null ? 0 : data.hashCode);

  @override
  String toString() => 'InlineObject29[data=$data]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
      json[r'data'] = data;
    return json;
  }

  /// Returns a new [InlineObject29] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static InlineObject29 fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();
      return InlineObject29(
        data: MedicineSuppliesInput.fromJson(json[r'data']),
      );
    }
    return null;
  }

  static List<InlineObject29> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(InlineObject29.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <InlineObject29>[];

  static Map<String, InlineObject29> mapFromJson(dynamic json) {
    final map = <String, InlineObject29>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) => map[key] = InlineObject29.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject29-objects as value to a dart map
  static Map<String, List<InlineObject29>> mapListFromJson(dynamic json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<InlineObject29>>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) {
          map[key] = InlineObject29.listFromJson(
            value,
            emptyIsNull: emptyIsNull,
            growable: growable,
          );
        });
    }
    return map;
  }
}

