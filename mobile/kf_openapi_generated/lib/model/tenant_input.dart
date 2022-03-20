//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class TenantInput {
  /// Returns a new [TenantInput] instance.
  TenantInput({
    this.name,
    this.url,
  });

  String name;

  String url;

  @override
  bool operator ==(Object other) => identical(this, other) || other is TenantInput &&
     other.name == name &&
     other.url == url;

  @override
  int get hashCode =>
  // ignore: unnecessary_parenthesis
    (name == null ? 0 : name.hashCode) +
    (url == null ? 0 : url.hashCode);

  @override
  String toString() => 'TenantInput[name=$name, url=$url]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (name != null) {
      json[r'name'] = name;
    }
    if (url != null) {
      json[r'url'] = url;
    }
    return json;
  }

  /// Returns a new [TenantInput] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static TenantInput fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();
      return TenantInput(
        name: mapValueOfType<String>(json, r'name'),
        url: mapValueOfType<String>(json, r'url'),
      );
    }
    return null;
  }

  static List<TenantInput> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(TenantInput.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <TenantInput>[];

  static Map<String, TenantInput> mapFromJson(dynamic json) {
    final map = <String, TenantInput>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) => map[key] = TenantInput.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of TenantInput-objects as value to a dart map
  static Map<String, List<TenantInput>> mapListFromJson(dynamic json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<TenantInput>>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) {
          map[key] = TenantInput.listFromJson(
            value,
            emptyIsNull: emptyIsNull,
            growable: growable,
          );
        });
    }
    return map;
  }
}

