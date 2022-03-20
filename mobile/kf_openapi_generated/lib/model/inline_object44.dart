//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class InlineObject44 {
  /// Returns a new [InlineObject44] instance.
  InlineObject44({
    this.plan,
  });

  String plan;

  @override
  bool operator ==(Object other) => identical(this, other) || other is InlineObject44 &&
     other.plan == plan;

  @override
  int get hashCode =>
  // ignore: unnecessary_parenthesis
    (plan == null ? 0 : plan.hashCode);

  @override
  String toString() => 'InlineObject44[plan=$plan]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (plan != null) {
      json[r'plan'] = plan;
    }
    return json;
  }

  /// Returns a new [InlineObject44] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static InlineObject44 fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();
      return InlineObject44(
        plan: mapValueOfType<String>(json, r'plan'),
      );
    }
    return null;
  }

  static List<InlineObject44> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(InlineObject44.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <InlineObject44>[];

  static Map<String, InlineObject44> mapFromJson(dynamic json) {
    final map = <String, InlineObject44>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) => map[key] = InlineObject44.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject44-objects as value to a dart map
  static Map<String, List<InlineObject44>> mapListFromJson(dynamic json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<InlineObject44>>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) {
          map[key] = InlineObject44.listFromJson(
            value,
            emptyIsNull: emptyIsNull,
            growable: growable,
          );
        });
    }
    return map;
  }
}

