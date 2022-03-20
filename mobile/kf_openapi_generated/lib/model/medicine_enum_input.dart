//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class MedicineEnumInput {
  /// Returns a new [MedicineEnumInput] instance.
  MedicineEnumInput({
    this.medicineName,
    this.keptInStock,
    this.isCommon,
    this.msrp,
  });

  String medicineName;

  bool keptInStock;

  bool isCommon;

  num msrp;

  @override
  bool operator ==(Object other) => identical(this, other) || other is MedicineEnumInput &&
     other.medicineName == medicineName &&
     other.keptInStock == keptInStock &&
     other.isCommon == isCommon &&
     other.msrp == msrp;

  @override
  int get hashCode =>
  // ignore: unnecessary_parenthesis
    (medicineName == null ? 0 : medicineName.hashCode) +
    (keptInStock == null ? 0 : keptInStock.hashCode) +
    (isCommon == null ? 0 : isCommon.hashCode) +
    (msrp == null ? 0 : msrp.hashCode);

  @override
  String toString() => 'MedicineEnumInput[medicineName=$medicineName, keptInStock=$keptInStock, isCommon=$isCommon, msrp=$msrp]';

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
    return json;
  }

  /// Returns a new [MedicineEnumInput] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static MedicineEnumInput fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();
      return MedicineEnumInput(
        medicineName: mapValueOfType<String>(json, r'medicineName'),
        keptInStock: mapValueOfType<bool>(json, r'keptInStock'),
        isCommon: mapValueOfType<bool>(json, r'isCommon'),
        msrp: json[r'msrp'] == null
          ? null
          : num.parse(json[r'msrp'].toString()),
      );
    }
    return null;
  }

  static List<MedicineEnumInput> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(MedicineEnumInput.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <MedicineEnumInput>[];

  static Map<String, MedicineEnumInput> mapFromJson(dynamic json) {
    final map = <String, MedicineEnumInput>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) => map[key] = MedicineEnumInput.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of MedicineEnumInput-objects as value to a dart map
  static Map<String, List<MedicineEnumInput>> mapListFromJson(dynamic json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<MedicineEnumInput>>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) {
          map[key] = MedicineEnumInput.listFromJson(
            value,
            emptyIsNull: emptyIsNull,
            growable: growable,
          );
        });
    }
    return map;
  }
}

