//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class MedicineEnum {
  /// Returns a new [MedicineEnum] instance.
  MedicineEnum({
    this.medicineName,
    this.keptInStock,
    this.isCommon,
    this.msrp,
    this.id,
    this.createdAt,
    this.updatedAt,
    this.deletedAt,
    this.createdById,
    this.updatedById,
  });

  String medicineName;

  bool keptInStock;

  bool isCommon;

  num msrp;

  String id;

  String createdAt;

  String updatedAt;

  String deletedAt;

  String createdById;

  String updatedById;

  @override
  bool operator ==(Object other) => identical(this, other) || other is MedicineEnum &&
     other.medicineName == medicineName &&
     other.keptInStock == keptInStock &&
     other.isCommon == isCommon &&
     other.msrp == msrp &&
     other.id == id &&
     other.createdAt == createdAt &&
     other.updatedAt == updatedAt &&
     other.deletedAt == deletedAt &&
     other.createdById == createdById &&
     other.updatedById == updatedById;

  @override
  int get hashCode =>
  // ignore: unnecessary_parenthesis
    (medicineName == null ? 0 : medicineName.hashCode) +
    (keptInStock == null ? 0 : keptInStock.hashCode) +
    (isCommon == null ? 0 : isCommon.hashCode) +
    (msrp == null ? 0 : msrp.hashCode) +
    (id == null ? 0 : id.hashCode) +
    (createdAt == null ? 0 : createdAt.hashCode) +
    (updatedAt == null ? 0 : updatedAt.hashCode) +
    (deletedAt == null ? 0 : deletedAt.hashCode) +
    (createdById == null ? 0 : createdById.hashCode) +
    (updatedById == null ? 0 : updatedById.hashCode);

  @override
  String toString() => 'MedicineEnum[medicineName=$medicineName, keptInStock=$keptInStock, isCommon=$isCommon, msrp=$msrp, id=$id, createdAt=$createdAt, updatedAt=$updatedAt, deletedAt=$deletedAt, createdById=$createdById, updatedById=$updatedById]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (medicineName != null) {
      json[r'medicineName'] = medicineName;
    }
    if (keptInStock != null) {
      json[r'keptInStock'] = keptInStock;
    }
    if (isCommon != null) {
      json[r'isCommon'] = isCommon;
    }
    if (msrp != null) {
      json[r'msrp'] = msrp;
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

  /// Returns a new [MedicineEnum] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static MedicineEnum fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();
      return MedicineEnum(
        medicineName: mapValueOfType<String>(json, r'medicineName'),
        keptInStock: mapValueOfType<bool>(json, r'keptInStock'),
        isCommon: mapValueOfType<bool>(json, r'isCommon'),
        msrp: json[r'msrp'] == null
          ? null
          : num.parse(json[r'msrp'].toString()),
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

  static List<MedicineEnum> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(MedicineEnum.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <MedicineEnum>[];

  static Map<String, MedicineEnum> mapFromJson(dynamic json) {
    final map = <String, MedicineEnum>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) => map[key] = MedicineEnum.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of MedicineEnum-objects as value to a dart map
  static Map<String, List<MedicineEnum>> mapListFromJson(dynamic json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<MedicineEnum>>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) {
          map[key] = MedicineEnum.listFromJson(
            value,
            emptyIsNull: emptyIsNull,
            growable: growable,
          );
        });
    }
    return map;
  }
}

