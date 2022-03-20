//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class InlineResponse20014 {
  /// Returns a new [InlineResponse20014] instance.
  InlineResponse20014({
    this.downloadUrl,
    this.uploadUrl,
    this.uploadCredentials,
  });

  String downloadUrl;

  String uploadUrl;

  /// Credentials used on the FormData to post the to be uploaded file.
  Object uploadCredentials;

  @override
  bool operator ==(Object other) => identical(this, other) || other is InlineResponse20014 &&
     other.downloadUrl == downloadUrl &&
     other.uploadUrl == uploadUrl &&
     other.uploadCredentials == uploadCredentials;

  @override
  int get hashCode =>
  // ignore: unnecessary_parenthesis
    (downloadUrl == null ? 0 : downloadUrl.hashCode) +
    (uploadUrl == null ? 0 : uploadUrl.hashCode) +
    (uploadCredentials == null ? 0 : uploadCredentials.hashCode);

  @override
  String toString() => 'InlineResponse20014[downloadUrl=$downloadUrl, uploadUrl=$uploadUrl, uploadCredentials=$uploadCredentials]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (downloadUrl != null) {
      json[r'downloadUrl'] = downloadUrl;
    }
    if (uploadUrl != null) {
      json[r'uploadUrl'] = uploadUrl;
    }
    if (uploadCredentials != null) {
      json[r'uploadCredentials'] = uploadCredentials;
    }
    return json;
  }

  /// Returns a new [InlineResponse20014] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static InlineResponse20014 fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();
      return InlineResponse20014(
        downloadUrl: mapValueOfType<String>(json, r'downloadUrl'),
        uploadUrl: mapValueOfType<String>(json, r'uploadUrl'),
        uploadCredentials: mapValueOfType<Object>(json, r'uploadCredentials'),
      );
    }
    return null;
  }

  static List<InlineResponse20014> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(InlineResponse20014.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <InlineResponse20014>[];

  static Map<String, InlineResponse20014> mapFromJson(dynamic json) {
    final map = <String, InlineResponse20014>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) => map[key] = InlineResponse20014.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineResponse20014-objects as value to a dart map
  static Map<String, List<InlineResponse20014>> mapListFromJson(dynamic json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<InlineResponse20014>>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) {
          map[key] = InlineResponse20014.listFromJson(
            value,
            emptyIsNull: emptyIsNull,
            growable: growable,
          );
        });
    }
    return map;
  }
}

