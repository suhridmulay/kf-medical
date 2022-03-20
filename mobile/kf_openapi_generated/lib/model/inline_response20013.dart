//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class InlineResponse20013 {
  /// Returns a new [InlineResponse20013] instance.
  InlineResponse20013({
    this.rows = const [],
    this.count,
  });

  List<AuditLog> rows;

  num count;

  @override
  bool operator ==(Object other) => identical(this, other) || other is InlineResponse20013 &&
     other.rows == rows &&
     other.count == count;

  @override
  int get hashCode =>
  // ignore: unnecessary_parenthesis
    (rows == null ? 0 : rows.hashCode) +
    (count == null ? 0 : count.hashCode);

  @override
  String toString() => 'InlineResponse20013[rows=$rows, count=$count]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (rows != null) {
      json[r'rows'] = rows;
    }
    if (count != null) {
      json[r'count'] = count;
    }
    return json;
  }

  /// Returns a new [InlineResponse20013] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static InlineResponse20013 fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();
      return InlineResponse20013(
        rows: AuditLog.listFromJson(json[r'rows']),
        count: json[r'count'] == null
          ? null
          : num.parse(json[r'count'].toString()),
      );
    }
    return null;
  }

  static List<InlineResponse20013> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(InlineResponse20013.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <InlineResponse20013>[];

  static Map<String, InlineResponse20013> mapFromJson(dynamic json) {
    final map = <String, InlineResponse20013>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) => map[key] = InlineResponse20013.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineResponse20013-objects as value to a dart map
  static Map<String, List<InlineResponse20013>> mapListFromJson(dynamic json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<InlineResponse20013>>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) {
          map[key] = InlineResponse20013.listFromJson(
            value,
            emptyIsNull: emptyIsNull,
            growable: growable,
          );
        });
    }
    return map;
  }
}

