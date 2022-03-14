//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class InlineObject45 {
  /// Returns a new [InlineObject45] instance.
  InlineObject45({
    this.settings,
  });

  SettingsInput settings;

  @override
  bool operator ==(Object other) => identical(this, other) || other is InlineObject45 &&
     other.settings == settings;

  @override
  int get hashCode =>
  // ignore: unnecessary_parenthesis
    (settings == null ? 0 : settings.hashCode);

  @override
  String toString() => 'InlineObject45[settings=$settings]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (settings != null) {
      json[r'settings'] = settings;
    }
    return json;
  }

  /// Returns a new [InlineObject45] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static InlineObject45 fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();
      return InlineObject45(
        settings: SettingsInput.fromJson(json[r'settings']),
      );
    }
    return null;
  }

  static List<InlineObject45> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(InlineObject45.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <InlineObject45>[];

  static Map<String, InlineObject45> mapFromJson(dynamic json) {
    final map = <String, InlineObject45>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) => map[key] = InlineObject45.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject45-objects as value to a dart map
  static Map<String, List<InlineObject45>> mapListFromJson(dynamic json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<InlineObject45>>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) {
          map[key] = InlineObject45.listFromJson(
            value,
            emptyIsNull: emptyIsNull,
            growable: growable,
          );
        });
    }
    return map;
  }
}

