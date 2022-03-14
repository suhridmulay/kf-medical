//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class InlineObject48 {
  /// Returns a new [InlineObject48] instance.
  InlineObject48({
    this.forceAcceptOtherEmail,
  });

  bool forceAcceptOtherEmail;

  @override
  bool operator ==(Object other) => identical(this, other) || other is InlineObject48 &&
     other.forceAcceptOtherEmail == forceAcceptOtherEmail;

  @override
  int get hashCode =>
  // ignore: unnecessary_parenthesis
    (forceAcceptOtherEmail == null ? 0 : forceAcceptOtherEmail.hashCode);

  @override
  String toString() => 'InlineObject48[forceAcceptOtherEmail=$forceAcceptOtherEmail]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (forceAcceptOtherEmail != null) {
      json[r'forceAcceptOtherEmail'] = forceAcceptOtherEmail;
    }
    return json;
  }

  /// Returns a new [InlineObject48] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static InlineObject48 fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();
      return InlineObject48(
        forceAcceptOtherEmail: mapValueOfType<bool>(json, r'forceAcceptOtherEmail'),
      );
    }
    return null;
  }

  static List<InlineObject48> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(InlineObject48.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <InlineObject48>[];

  static Map<String, InlineObject48> mapFromJson(dynamic json) {
    final map = <String, InlineObject48>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) => map[key] = InlineObject48.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject48-objects as value to a dart map
  static Map<String, List<InlineObject48>> mapListFromJson(dynamic json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<InlineObject48>>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) {
          map[key] = InlineObject48.listFromJson(
            value,
            emptyIsNull: emptyIsNull,
            growable: growable,
          );
        });
    }
    return map;
  }
}

