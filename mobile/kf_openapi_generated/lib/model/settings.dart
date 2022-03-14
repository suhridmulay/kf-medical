//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class Settings {
  /// Returns a new [Settings] instance.
  Settings({
    this.theme,
    this.backgroundImageUrl,
    this.logoUrl,
    this.backgroundImages = const [],
    this.logos = const [],
    this.tenantId,
    this.id,
    this.createdAt,
    this.updatedAt,
    this.deletedAt,
    this.createdById,
    this.updatedById,
  });

  String theme;

  String backgroundImageUrl;

  String logoUrl;

  List<File> backgroundImages;

  List<File> logos;

  String tenantId;

  String id;

  String createdAt;

  String updatedAt;

  String deletedAt;

  String createdById;

  String updatedById;

  @override
  bool operator ==(Object other) => identical(this, other) || other is Settings &&
     other.theme == theme &&
     other.backgroundImageUrl == backgroundImageUrl &&
     other.logoUrl == logoUrl &&
     other.backgroundImages == backgroundImages &&
     other.logos == logos &&
     other.tenantId == tenantId &&
     other.id == id &&
     other.createdAt == createdAt &&
     other.updatedAt == updatedAt &&
     other.deletedAt == deletedAt &&
     other.createdById == createdById &&
     other.updatedById == updatedById;

  @override
  int get hashCode =>
  // ignore: unnecessary_parenthesis
    (theme == null ? 0 : theme.hashCode) +
    (backgroundImageUrl == null ? 0 : backgroundImageUrl.hashCode) +
    (logoUrl == null ? 0 : logoUrl.hashCode) +
    (backgroundImages == null ? 0 : backgroundImages.hashCode) +
    (logos == null ? 0 : logos.hashCode) +
    (tenantId == null ? 0 : tenantId.hashCode) +
    (id == null ? 0 : id.hashCode) +
    (createdAt == null ? 0 : createdAt.hashCode) +
    (updatedAt == null ? 0 : updatedAt.hashCode) +
    (deletedAt == null ? 0 : deletedAt.hashCode) +
    (createdById == null ? 0 : createdById.hashCode) +
    (updatedById == null ? 0 : updatedById.hashCode);

  @override
  String toString() => 'Settings[theme=$theme, backgroundImageUrl=$backgroundImageUrl, logoUrl=$logoUrl, backgroundImages=$backgroundImages, logos=$logos, tenantId=$tenantId, id=$id, createdAt=$createdAt, updatedAt=$updatedAt, deletedAt=$deletedAt, createdById=$createdById, updatedById=$updatedById]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (theme != null) {
      json[r'theme'] = theme;
    }
    if (backgroundImageUrl != null) {
      json[r'backgroundImageUrl'] = backgroundImageUrl;
    }
    if (logoUrl != null) {
      json[r'logoUrl'] = logoUrl;
    }
    if (backgroundImages != null) {
      json[r'backgroundImages'] = backgroundImages;
    }
    if (logos != null) {
      json[r'logos'] = logos;
    }
    if (tenantId != null) {
      json[r'tenantId'] = tenantId;
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

  /// Returns a new [Settings] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static Settings fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();
      return Settings(
        theme: mapValueOfType<String>(json, r'theme'),
        backgroundImageUrl: mapValueOfType<String>(json, r'backgroundImageUrl'),
        logoUrl: mapValueOfType<String>(json, r'logoUrl'),
        backgroundImages: File.listFromJson(json[r'backgroundImages']),
        logos: File.listFromJson(json[r'logos']),
        tenantId: mapValueOfType<String>(json, r'tenantId'),
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

  static List<Settings> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(Settings.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <Settings>[];

  static Map<String, Settings> mapFromJson(dynamic json) {
    final map = <String, Settings>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) => map[key] = Settings.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of Settings-objects as value to a dart map
  static Map<String, List<Settings>> mapListFromJson(dynamic json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<Settings>>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) {
          map[key] = Settings.listFromJson(
            value,
            emptyIsNull: emptyIsNull,
            growable: growable,
          );
        });
    }
    return map;
  }
}

