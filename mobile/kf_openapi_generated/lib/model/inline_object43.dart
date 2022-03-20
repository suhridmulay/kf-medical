//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class InlineObject43 {
  /// Returns a new [InlineObject43] instance.
  InlineObject43({
    @required this.data,
    @required this.importHash,
  });

  ChronicDiseaseEnumInput data;

  String importHash;

  @override
  bool operator ==(Object other) => identical(this, other) || other is InlineObject43 &&
     other.data == data &&
     other.importHash == importHash;

  @override
  int get hashCode =>
  // ignore: unnecessary_parenthesis
    (data == null ? 0 : data.hashCode) +
    (importHash == null ? 0 : importHash.hashCode);

  @override
  String toString() => 'InlineObject43[data=$data, importHash=$importHash]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
      json[r'data'] = data;
      json[r'importHash'] = importHash;
    return json;
  }

  /// Returns a new [InlineObject43] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static InlineObject43 fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();
      return InlineObject43(
        data: ChronicDiseaseEnumInput.fromJson(json[r'data']),
        importHash: mapValueOfType<String>(json, r'importHash'),
      );
    }
    return null;
  }

  static List<InlineObject43> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(InlineObject43.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <InlineObject43>[];

  static Map<String, InlineObject43> mapFromJson(dynamic json) {
    final map = <String, InlineObject43>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) => map[key] = InlineObject43.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject43-objects as value to a dart map
  static Map<String, List<InlineObject43>> mapListFromJson(dynamic json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<InlineObject43>>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) {
          map[key] = InlineObject43.listFromJson(
            value,
            emptyIsNull: emptyIsNull,
            growable: growable,
          );
        });
    }
    return map;
  }
}

