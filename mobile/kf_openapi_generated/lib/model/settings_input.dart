//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class SettingsInput {
  /// Returns a new [SettingsInput] instance.
  SettingsInput({
    this.theme,
    this.backgroundImages = const [],
    this.logos = const [],
  });

  String theme;

  List<FileInput> backgroundImages;

  List<FileInput> logos;

  @override
  bool operator ==(Object other) => identical(this, other) || other is SettingsInput &&
     other.theme == theme &&
     other.backgroundImages == backgroundImages &&
     other.logos == logos;

  @override
  int get hashCode =>
  // ignore: unnecessary_parenthesis
    (theme == null ? 0 : theme.hashCode) +
    (backgroundImages == null ? 0 : backgroundImages.hashCode) +
    (logos == null ? 0 : logos.hashCode);

  @override
  String toString() => 'SettingsInput[theme=$theme, backgroundImages=$backgroundImages, logos=$logos]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (theme != null) {
      json[r'theme'] = theme;
    }
    if (backgroundImages != null) {
      json[r'backgroundImages'] = backgroundImages;
    }
    if (logos != null) {
      json[r'logos'] = logos;
    }
    return json;
  }

  /// Returns a new [SettingsInput] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static SettingsInput fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();
      return SettingsInput(
        theme: mapValueOfType<String>(json, r'theme'),
        backgroundImages: FileInput.listFromJson(json[r'backgroundImages']),
        logos: FileInput.listFromJson(json[r'logos']),
      );
    }
    return null;
  }

  static List<SettingsInput> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(SettingsInput.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <SettingsInput>[];

  static Map<String, SettingsInput> mapFromJson(dynamic json) {
    final map = <String, SettingsInput>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) => map[key] = SettingsInput.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of SettingsInput-objects as value to a dart map
  static Map<String, List<SettingsInput>> mapListFromJson(dynamic json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<SettingsInput>>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) {
          map[key] = SettingsInput.listFromJson(
            value,
            emptyIsNull: emptyIsNull,
            growable: growable,
          );
        });
    }
    return map;
  }
}

