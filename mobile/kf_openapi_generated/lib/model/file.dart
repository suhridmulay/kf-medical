//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class File {
  /// Returns a new [File] instance.
  File({
    this.name,
    this.sizeInBytes,
    this.privateUrl,
    this.publicUrl,
    this.downloadUrl,
    this.id,
    this.createdAt,
    this.updatedAt,
    this.deletedAt,
    this.createdById,
    this.updatedById,
  });

  String name;

  num sizeInBytes;

  String privateUrl;

  String publicUrl;

  String downloadUrl;

  String id;

  String createdAt;

  String updatedAt;

  String deletedAt;

  String createdById;

  String updatedById;

  @override
  bool operator ==(Object other) => identical(this, other) || other is File &&
     other.name == name &&
     other.sizeInBytes == sizeInBytes &&
     other.privateUrl == privateUrl &&
     other.publicUrl == publicUrl &&
     other.downloadUrl == downloadUrl &&
     other.id == id &&
     other.createdAt == createdAt &&
     other.updatedAt == updatedAt &&
     other.deletedAt == deletedAt &&
     other.createdById == createdById &&
     other.updatedById == updatedById;

  @override
  int get hashCode =>
  // ignore: unnecessary_parenthesis
    (name == null ? 0 : name.hashCode) +
    (sizeInBytes == null ? 0 : sizeInBytes.hashCode) +
    (privateUrl == null ? 0 : privateUrl.hashCode) +
    (publicUrl == null ? 0 : publicUrl.hashCode) +
    (downloadUrl == null ? 0 : downloadUrl.hashCode) +
    (id == null ? 0 : id.hashCode) +
    (createdAt == null ? 0 : createdAt.hashCode) +
    (updatedAt == null ? 0 : updatedAt.hashCode) +
    (deletedAt == null ? 0 : deletedAt.hashCode) +
    (createdById == null ? 0 : createdById.hashCode) +
    (updatedById == null ? 0 : updatedById.hashCode);

  @override
  String toString() => 'File[name=$name, sizeInBytes=$sizeInBytes, privateUrl=$privateUrl, publicUrl=$publicUrl, downloadUrl=$downloadUrl, id=$id, createdAt=$createdAt, updatedAt=$updatedAt, deletedAt=$deletedAt, createdById=$createdById, updatedById=$updatedById]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (name != null) {
      json[r'name'] = name;
    }
    if (sizeInBytes != null) {
      json[r'sizeInBytes'] = sizeInBytes;
    }
    if (privateUrl != null) {
      json[r'privateUrl'] = privateUrl;
    }
    if (publicUrl != null) {
      json[r'publicUrl'] = publicUrl;
    }
    if (downloadUrl != null) {
      json[r'downloadUrl'] = downloadUrl;
    }
    if (id != null) {
      json[r'id'] = id;
    }
    if (createdAt != null) {
      json[r'createdAt'] = createdAt;
    }
    if (updatedAt != null) {
      json[r'updatedAt'] = updatedAt;
    }
    if (deletedAt != null) {
      json[r'deletedAt'] = deletedAt;
    }
    if (createdById != null) {
      json[r'createdById'] = createdById;
    }
    if (updatedById != null) {
      json[r'updatedById'] = updatedById;
    }
    return json;
  }

  /// Returns a new [File] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static File fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();
      return File(
        name: mapValueOfType<String>(json, r'name'),
        sizeInBytes: json[r'sizeInBytes'] == null
          ? null
          : num.parse(json[r'sizeInBytes'].toString()),
        privateUrl: mapValueOfType<String>(json, r'privateUrl'),
        publicUrl: mapValueOfType<String>(json, r'publicUrl'),
        downloadUrl: mapValueOfType<String>(json, r'downloadUrl'),
        id: mapValueOfType<String>(json, r'id'),
        createdAt: mapValueOfType<String>(json, r'createdAt'),
        updatedAt: mapValueOfType<String>(json, r'updatedAt'),
        deletedAt: mapValueOfType<String>(json, r'deletedAt'),
        createdById: mapValueOfType<String>(json, r'createdById'),
        updatedById: mapValueOfType<String>(json, r'updatedById'),
      );
    }
    return null;
  }

  static List<File> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(File.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <File>[];

  static Map<String, File> mapFromJson(dynamic json) {
    final map = <String, File>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) => map[key] = File.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of File-objects as value to a dart map
  static Map<String, List<File>> mapListFromJson(dynamic json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<File>>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) {
          map[key] = File.listFromJson(
            value,
            emptyIsNull: emptyIsNull,
            growable: growable,
          );
        });
    }
    return map;
  }
}

