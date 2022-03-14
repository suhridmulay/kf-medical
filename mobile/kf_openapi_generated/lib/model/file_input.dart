//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class FileInput {
  /// Returns a new [FileInput] instance.
  FileInput({
    this.name,
    this.sizeInBytes,
    this.privateUrl,
    this.publicUrl,
    this.new_,
  });

  String name;

  num sizeInBytes;

  String privateUrl;

  String publicUrl;

  bool new_;

  @override
  bool operator ==(Object other) => identical(this, other) || other is FileInput &&
     other.name == name &&
     other.sizeInBytes == sizeInBytes &&
     other.privateUrl == privateUrl &&
     other.publicUrl == publicUrl &&
     other.new_ == new_;

  @override
  int get hashCode =>
  // ignore: unnecessary_parenthesis
    (name == null ? 0 : name.hashCode) +
    (sizeInBytes == null ? 0 : sizeInBytes.hashCode) +
    (privateUrl == null ? 0 : privateUrl.hashCode) +
    (publicUrl == null ? 0 : publicUrl.hashCode) +
    (new_ == null ? 0 : new_.hashCode);

  @override
  String toString() => 'FileInput[name=$name, sizeInBytes=$sizeInBytes, privateUrl=$privateUrl, publicUrl=$publicUrl, new_=$new_]';

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
    if (new_ != null) {
      json[r'new'] = new_;
    }
    return json;
  }

  /// Returns a new [FileInput] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static FileInput fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();
      return FileInput(
        name: mapValueOfType<String>(json, r'name'),
        sizeInBytes: json[r'sizeInBytes'] == null
          ? null
          : num.parse(json[r'sizeInBytes'].toString()),
        privateUrl: mapValueOfType<String>(json, r'privateUrl'),
        publicUrl: mapValueOfType<String>(json, r'publicUrl'),
        new_: mapValueOfType<bool>(json, r'new'),
      );
    }
    return null;
  }

  static List<FileInput> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(FileInput.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <FileInput>[];

  static Map<String, FileInput> mapFromJson(dynamic json) {
    final map = <String, FileInput>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) => map[key] = FileInput.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of FileInput-objects as value to a dart map
  static Map<String, List<FileInput>> mapListFromJson(dynamic json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<FileInput>>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) {
          map[key] = FileInput.listFromJson(
            value,
            emptyIsNull: emptyIsNull,
            growable: growable,
          );
        });
    }
    return map;
  }
}

