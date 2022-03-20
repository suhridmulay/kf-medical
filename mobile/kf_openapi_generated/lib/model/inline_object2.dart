//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class InlineObject2 {
  /// Returns a new [InlineObject2] instance.
  InlineObject2({
    @required this.oldPassword,
    @required this.newPassword,
  });

  String oldPassword;

  String newPassword;

  @override
  bool operator ==(Object other) => identical(this, other) || other is InlineObject2 &&
     other.oldPassword == oldPassword &&
     other.newPassword == newPassword;

  @override
  int get hashCode =>
  // ignore: unnecessary_parenthesis
    (oldPassword == null ? 0 : oldPassword.hashCode) +
    (newPassword == null ? 0 : newPassword.hashCode);

  @override
  String toString() => 'InlineObject2[oldPassword=$oldPassword, newPassword=$newPassword]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
      json[r'oldPassword'] = oldPassword;
      json[r'newPassword'] = newPassword;
    return json;
  }

  /// Returns a new [InlineObject2] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static InlineObject2 fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();
      return InlineObject2(
        oldPassword: mapValueOfType<String>(json, r'oldPassword'),
        newPassword: mapValueOfType<String>(json, r'newPassword'),
      );
    }
    return null;
  }

  static List<InlineObject2> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(InlineObject2.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <InlineObject2>[];

  static Map<String, InlineObject2> mapFromJson(dynamic json) {
    final map = <String, InlineObject2>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) => map[key] = InlineObject2.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject2-objects as value to a dart map
  static Map<String, List<InlineObject2>> mapListFromJson(dynamic json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<InlineObject2>>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) {
          map[key] = InlineObject2.listFromJson(
            value,
            emptyIsNull: emptyIsNull,
            growable: growable,
          );
        });
    }
    return map;
  }
}

