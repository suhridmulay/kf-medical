//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class MedicineSuppliesInput {
  /// Returns a new [MedicineSuppliesInput] instance.
  MedicineSuppliesInput({
    this.medicine,
    this.inventoryAddDate,
    this.count,
  });

  String medicine;

  DateTime inventoryAddDate;

  int count;

  @override
  bool operator ==(Object other) => identical(this, other) || other is MedicineSuppliesInput &&
     other.medicine == medicine &&
     other.inventoryAddDate == inventoryAddDate &&
     other.count == count;

  @override
  int get hashCode =>
  // ignore: unnecessary_parenthesis
    (medicine == null ? 0 : medicine.hashCode) +
    (inventoryAddDate == null ? 0 : inventoryAddDate.hashCode) +
    (count == null ? 0 : count.hashCode);

  @override
  String toString() => 'MedicineSuppliesInput[medicine=$medicine, inventoryAddDate=$inventoryAddDate, count=$count]';

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
    return json;
  }

  /// Returns a new [MedicineSuppliesInput] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static MedicineSuppliesInput fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();
      return MedicineSuppliesInput(
        medicine: mapValueOfType<String>(json, r'medicine'),
        inventoryAddDate: mapDateTime(json, r'inventoryAddDate', ''),
        count: mapValueOfType<int>(json, r'count'),
      );
    }
    return null;
  }

  static List<MedicineSuppliesInput> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(MedicineSuppliesInput.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <MedicineSuppliesInput>[];

  static Map<String, MedicineSuppliesInput> mapFromJson(dynamic json) {
    final map = <String, MedicineSuppliesInput>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) => map[key] = MedicineSuppliesInput.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of MedicineSuppliesInput-objects as value to a dart map
  static Map<String, List<MedicineSuppliesInput>> mapListFromJson(dynamic json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<MedicineSuppliesInput>>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) {
          map[key] = MedicineSuppliesInput.listFromJson(
            value,
            emptyIsNull: emptyIsNull,
            growable: growable,
          );
        });
    }
    return map;
  }
}

