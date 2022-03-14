//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class MedicineInventoryInput {
  /// Returns a new [MedicineInventoryInput] instance.
  MedicineInventoryInput({
    this.medicine,
    this.inventoryDate,
    this.count,
  });

  String medicine;

  DateTime inventoryDate;

  int count;

  @override
  bool operator ==(Object other) => identical(this, other) || other is MedicineInventoryInput &&
     other.medicine == medicine &&
     other.inventoryDate == inventoryDate &&
     other.count == count;

  @override
  int get hashCode =>
  // ignore: unnecessary_parenthesis
    (medicine == null ? 0 : medicine.hashCode) +
    (inventoryDate == null ? 0 : inventoryDate.hashCode) +
    (count == null ? 0 : count.hashCode);

  @override
  String toString() => 'MedicineInventoryInput[medicine=$medicine, inventoryDate=$inventoryDate, count=$count]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (medicine != null) {
      json[r'medicine'] = medicine;
    }
    if (inventoryDate != null) {
      json[r'inventoryDate'] = _dateFormatter.format(inventoryDate.toUtc());
    }
    if (count != null) {
      json[r'count'] = count;
    }
    return json;
  }

  /// Returns a new [MedicineInventoryInput] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static MedicineInventoryInput fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();
      return MedicineInventoryInput(
        medicine: mapValueOfType<String>(json, r'medicine'),
        inventoryDate: mapDateTime(json, r'inventoryDate', ''),
        count: mapValueOfType<int>(json, r'count'),
      );
    }
    return null;
  }

  static List<MedicineInventoryInput> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(MedicineInventoryInput.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <MedicineInventoryInput>[];

  static Map<String, MedicineInventoryInput> mapFromJson(dynamic json) {
    final map = <String, MedicineInventoryInput>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) => map[key] = MedicineInventoryInput.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of MedicineInventoryInput-objects as value to a dart map
  static Map<String, List<MedicineInventoryInput>> mapListFromJson(dynamic json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<MedicineInventoryInput>>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) {
          map[key] = MedicineInventoryInput.listFromJson(
            value,
            emptyIsNull: emptyIsNull,
            growable: growable,
          );
        });
    }
    return map;
  }
}

