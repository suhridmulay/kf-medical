//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class MedicineSupplies {
  /// Returns a new [MedicineSupplies] instance.
  MedicineSupplies({
    this.medicine,
    this.inventoryAddDate,
    this.count,
    this.id,
    this.createdAt,
    this.updatedAt,
    this.deletedAt,
    this.createdById,
    this.updatedById,
  });

  MedicineEnum medicine;

  DateTime inventoryAddDate;

  int count;

  String id;

  String createdAt;

  String updatedAt;

  String deletedAt;

  String createdById;

  String updatedById;

  @override
  bool operator ==(Object other) => identical(this, other) || other is MedicineSupplies &&
     other.medicine == medicine &&
     other.inventoryAddDate == inventoryAddDate &&
     other.count == count &&
     other.id == id &&
     other.createdAt == createdAt &&
     other.updatedAt == updatedAt &&
     other.deletedAt == deletedAt &&
     other.createdById == createdById &&
     other.updatedById == updatedById;

  @override
  int get hashCode =>
  // ignore: unnecessary_parenthesis
    (medicine == null ? 0 : medicine.hashCode) +
    (inventoryAddDate == null ? 0 : inventoryAddDate.hashCode) +
    (count == null ? 0 : count.hashCode) +
    (id == null ? 0 : id.hashCode) +
    (createdAt == null ? 0 : createdAt.hashCode) +
    (updatedAt == null ? 0 : updatedAt.hashCode) +
    (deletedAt == null ? 0 : deletedAt.hashCode) +
    (createdById == null ? 0 : createdById.hashCode) +
    (updatedById == null ? 0 : updatedById.hashCode);

  @override
  String toString() => 'MedicineSupplies[medicine=$medicine, inventoryAddDate=$inventoryAddDate, count=$count, id=$id, createdAt=$createdAt, updatedAt=$updatedAt, deletedAt=$deletedAt, createdById=$createdById, updatedById=$updatedById]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (medicine != null) {
      json[r'medicine'] = medicine;
    }
    if (inventoryAddDate != null) {
      json[r'inventoryAddDate'] = _dateFormatter.format(inventoryAddDate.toUtc());
    }
    if (count != null) {
      json[r'count'] = count;
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

  /// Returns a new [MedicineSupplies] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static MedicineSupplies fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();
      return MedicineSupplies(
        medicine: MedicineEnum.fromJson(json[r'medicine']),
        inventoryAddDate: mapDateTime(json, r'inventoryAddDate', ''),
        count: mapValueOfType<int>(json, r'count'),
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

  static List<MedicineSupplies> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(MedicineSupplies.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <MedicineSupplies>[];

  static Map<String, MedicineSupplies> mapFromJson(dynamic json) {
    final map = <String, MedicineSupplies>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) => map[key] = MedicineSupplies.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of MedicineSupplies-objects as value to a dart map
  static Map<String, List<MedicineSupplies>> mapListFromJson(dynamic json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<MedicineSupplies>>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) {
          map[key] = MedicineSupplies.listFromJson(
            value,
            emptyIsNull: emptyIsNull,
            growable: growable,
          );
        });
    }
    return map;
  }
}

