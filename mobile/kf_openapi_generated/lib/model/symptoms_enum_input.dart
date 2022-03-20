//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class SymptomsEnumInput {
  /// Returns a new [SymptomsEnumInput] instance.
  SymptomsEnumInput({
    this.symptomName,
  });

  String symptomName;

  @override
  bool operator ==(Object other) => identical(this, other) || other is SymptomsEnumInput &&
     other.symptomName == symptomName;

  @override
  int get hashCode =>
  // ignore: unnecessary_parenthesis
    (symptomName == null ? 0 : symptomName.hashCode);

  @override
  String toString() => 'SymptomsEnumInput[symptomName=$symptomName]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (symptomName != null) {
      json[r'symptomName'] = symptomName;
    }
    return json;
  }

  /// Returns a new [SymptomsEnumInput] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static SymptomsEnumInput fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();
      return SymptomsEnumInput(
        symptomName: mapValueOfType<String>(json, r'symptomName'),
      );
    }
    return null;
  }

  static List<SymptomsEnumInput> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(SymptomsEnumInput.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <SymptomsEnumInput>[];

  static Map<String, SymptomsEnumInput> mapFromJson(dynamic json) {
    final map = <String, SymptomsEnumInput>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) => map[key] = SymptomsEnumInput.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of SymptomsEnumInput-objects as value to a dart map
  static Map<String, List<SymptomsEnumInput>> mapListFromJson(dynamic json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<SymptomsEnumInput>>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) {
          map[key] = SymptomsEnumInput.listFromJson(
            value,
            emptyIsNull: emptyIsNull,
            growable: growable,
          );
        });
    }
    return map;
  }
}

