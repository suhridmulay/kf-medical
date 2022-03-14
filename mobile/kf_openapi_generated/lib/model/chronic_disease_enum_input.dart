//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class ChronicDiseaseEnumInput {
  /// Returns a new [ChronicDiseaseEnumInput] instance.
  ChronicDiseaseEnumInput({
    this.diseaseName,
  });

  String diseaseName;

  @override
  bool operator ==(Object other) => identical(this, other) || other is ChronicDiseaseEnumInput &&
     other.diseaseName == diseaseName;

  @override
  int get hashCode =>
  // ignore: unnecessary_parenthesis
    (diseaseName == null ? 0 : diseaseName.hashCode);

  @override
  String toString() => 'ChronicDiseaseEnumInput[diseaseName=$diseaseName]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (diseaseName != null) {
      json[r'diseaseName'] = diseaseName;
    }
    return json;
  }

  /// Returns a new [ChronicDiseaseEnumInput] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static ChronicDiseaseEnumInput fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();
      return ChronicDiseaseEnumInput(
        diseaseName: mapValueOfType<String>(json, r'diseaseName'),
      );
    }
    return null;
  }

  static List<ChronicDiseaseEnumInput> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(ChronicDiseaseEnumInput.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <ChronicDiseaseEnumInput>[];

  static Map<String, ChronicDiseaseEnumInput> mapFromJson(dynamic json) {
    final map = <String, ChronicDiseaseEnumInput>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) => map[key] = ChronicDiseaseEnumInput.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ChronicDiseaseEnumInput-objects as value to a dart map
  static Map<String, List<ChronicDiseaseEnumInput>> mapListFromJson(dynamic json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<ChronicDiseaseEnumInput>>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) {
          map[key] = ChronicDiseaseEnumInput.listFromJson(
            value,
            emptyIsNull: emptyIsNull,
            growable: growable,
          );
        });
    }
    return map;
  }
}

