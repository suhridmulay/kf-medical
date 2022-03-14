//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class MedicalHistory {
  /// Returns a new [MedicalHistory] instance.
  MedicalHistory({
    this.patient,
    this.smoking,
    this.drugUse,
    this.drink,
    this.chronicDisease1,
    this.chronicDisease2,
    this.chronicDisease3,
    this.familyHistory,
    this.id,
    this.createdAt,
    this.updatedAt,
    this.deletedAt,
    this.createdById,
    this.updatedById,
  });

  Patient patient;

  MedicalHistorySmokingEnum smoking;

  bool drugUse;

  MedicalHistoryDrinkEnum drink;

  ChronicDiseaseEnum chronicDisease1;

  ChronicDiseaseEnum chronicDisease2;

  ChronicDiseaseEnum chronicDisease3;

  String familyHistory;

  String id;

  String createdAt;

  String updatedAt;

  String deletedAt;

  String createdById;

  String updatedById;

  @override
  bool operator ==(Object other) => identical(this, other) || other is MedicalHistory &&
     other.patient == patient &&
     other.smoking == smoking &&
     other.drugUse == drugUse &&
     other.drink == drink &&
     other.chronicDisease1 == chronicDisease1 &&
     other.chronicDisease2 == chronicDisease2 &&
     other.chronicDisease3 == chronicDisease3 &&
     other.familyHistory == familyHistory &&
     other.id == id &&
     other.createdAt == createdAt &&
     other.updatedAt == updatedAt &&
     other.deletedAt == deletedAt &&
     other.createdById == createdById &&
     other.updatedById == updatedById;

  @override
  int get hashCode =>
  // ignore: unnecessary_parenthesis
    (patient == null ? 0 : patient.hashCode) +
    (smoking == null ? 0 : smoking.hashCode) +
    (drugUse == null ? 0 : drugUse.hashCode) +
    (drink == null ? 0 : drink.hashCode) +
    (chronicDisease1 == null ? 0 : chronicDisease1.hashCode) +
    (chronicDisease2 == null ? 0 : chronicDisease2.hashCode) +
    (chronicDisease3 == null ? 0 : chronicDisease3.hashCode) +
    (familyHistory == null ? 0 : familyHistory.hashCode) +
    (id == null ? 0 : id.hashCode) +
    (createdAt == null ? 0 : createdAt.hashCode) +
    (updatedAt == null ? 0 : updatedAt.hashCode) +
    (deletedAt == null ? 0 : deletedAt.hashCode) +
    (createdById == null ? 0 : createdById.hashCode) +
    (updatedById == null ? 0 : updatedById.hashCode);

  @override
  String toString() => 'MedicalHistory[patient=$patient, smoking=$smoking, drugUse=$drugUse, drink=$drink, chronicDisease1=$chronicDisease1, chronicDisease2=$chronicDisease2, chronicDisease3=$chronicDisease3, familyHistory=$familyHistory, id=$id, createdAt=$createdAt, updatedAt=$updatedAt, deletedAt=$deletedAt, createdById=$createdById, updatedById=$updatedById]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (patient != null) {
      json[r'patient'] = patient;
    }
    if (smoking != null) {
      json[r'smoking'] = smoking;
    }
    if (drugUse != null) {
      json[r'drugUse'] = drugUse;
    }
    if (drink != null) {
      json[r'drink'] = drink;
    }
    if (chronicDisease1 != null) {
      json[r'chronicDisease1'] = chronicDisease1;
    }
    if (chronicDisease2 != null) {
      json[r'chronicDisease2'] = chronicDisease2;
    }
    if (chronicDisease3 != null) {
      json[r'chronicDisease3'] = chronicDisease3;
    }
    if (familyHistory != null) {
      json[r'familyHistory'] = familyHistory;
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

  /// Returns a new [MedicalHistory] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static MedicalHistory fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();
      return MedicalHistory(
        patient: Patient.fromJson(json[r'patient']),
        smoking: MedicalHistorySmokingEnum.fromJson(json[r'smoking']),
        drugUse: mapValueOfType<bool>(json, r'drugUse'),
        drink: MedicalHistoryDrinkEnum.fromJson(json[r'drink']),
        chronicDisease1: ChronicDiseaseEnum.fromJson(json[r'chronicDisease1']),
        chronicDisease2: ChronicDiseaseEnum.fromJson(json[r'chronicDisease2']),
        chronicDisease3: ChronicDiseaseEnum.fromJson(json[r'chronicDisease3']),
        familyHistory: mapValueOfType<String>(json, r'familyHistory'),
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

  static List<MedicalHistory> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(MedicalHistory.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <MedicalHistory>[];

  static Map<String, MedicalHistory> mapFromJson(dynamic json) {
    final map = <String, MedicalHistory>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) => map[key] = MedicalHistory.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of MedicalHistory-objects as value to a dart map
  static Map<String, List<MedicalHistory>> mapListFromJson(dynamic json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<MedicalHistory>>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) {
          map[key] = MedicalHistory.listFromJson(
            value,
            emptyIsNull: emptyIsNull,
            growable: growable,
          );
        });
    }
    return map;
  }
}


class MedicalHistorySmokingEnum {
  /// Instantiate a new enum with the provided [value].
  const MedicalHistorySmokingEnum._(this.value);

  /// The underlying value of this enum member.
  final String value;

  @override
  String toString() => value ?? '';

  String toJson() => value;

  static const none = MedicalHistorySmokingEnum._(r'None');
  static const cigarette = MedicalHistorySmokingEnum._(r'Cigarette');
  static const bidi = MedicalHistorySmokingEnum._(r'Bidi');
  static const ganja = MedicalHistorySmokingEnum._(r'Ganja');
  static const multiple = MedicalHistorySmokingEnum._(r'Multiple');
  static const other = MedicalHistorySmokingEnum._(r'Other');

  /// List of all possible values in this [enum][MedicalHistorySmokingEnum].
  static const values = <MedicalHistorySmokingEnum>[
    none,
    cigarette,
    bidi,
    ganja,
    multiple,
    other,
  ];

  static MedicalHistorySmokingEnum fromJson(dynamic value) =>
    MedicalHistorySmokingEnumTypeTransformer().decode(value);

  static List<MedicalHistorySmokingEnum> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(MedicalHistorySmokingEnum.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <MedicalHistorySmokingEnum>[];
}

/// Transformation class that can [encode] an instance of [MedicalHistorySmokingEnum] to String,
/// and [decode] dynamic data back to [MedicalHistorySmokingEnum].
class MedicalHistorySmokingEnumTypeTransformer {
  factory MedicalHistorySmokingEnumTypeTransformer() => _instance ??= const MedicalHistorySmokingEnumTypeTransformer._();

  const MedicalHistorySmokingEnumTypeTransformer._();

  String encode(MedicalHistorySmokingEnum data) => data.value;

  /// Decodes a [dynamic value][data] to a MedicalHistorySmokingEnum.
  ///
  /// If [allowNull] is true and the [dynamic value][data] cannot be decoded successfully,
  /// then null is returned. However, if [allowNull] is false and the [dynamic value][data]
  /// cannot be decoded successfully, then an [UnimplementedError] is thrown.
  ///
  /// The [allowNull] is very handy when an API changes and a new enum value is added or removed,
  /// and users are still using an old app with the old code.
  MedicalHistorySmokingEnum decode(dynamic data, {bool allowNull}) {
    if (data != null) {
      switch (data.toString()) {
        case r'None': return MedicalHistorySmokingEnum.none;
        case r'Cigarette': return MedicalHistorySmokingEnum.cigarette;
        case r'Bidi': return MedicalHistorySmokingEnum.bidi;
        case r'Ganja': return MedicalHistorySmokingEnum.ganja;
        case r'Multiple': return MedicalHistorySmokingEnum.multiple;
        case r'Other': return MedicalHistorySmokingEnum.other;
        default:
          if (allowNull == false) {
            throw ArgumentError('Unknown enum value to decode: $data');
          }
      }
    }
    return null;
  }

  /// Singleton [MedicalHistorySmokingEnumTypeTransformer] instance.
  static MedicalHistorySmokingEnumTypeTransformer _instance;
}



class MedicalHistoryDrinkEnum {
  /// Instantiate a new enum with the provided [value].
  const MedicalHistoryDrinkEnum._(this.value);

  /// The underlying value of this enum member.
  final String value;

  @override
  String toString() => value ?? '';

  String toJson() => value;

  static const occasionally = MedicalHistoryDrinkEnum._(r'Occasionally');
  static const frequently = MedicalHistoryDrinkEnum._(r'Frequently');
  static const daily = MedicalHistoryDrinkEnum._(r'Daily');

  /// List of all possible values in this [enum][MedicalHistoryDrinkEnum].
  static const values = <MedicalHistoryDrinkEnum>[
    occasionally,
    frequently,
    daily,
  ];

  static MedicalHistoryDrinkEnum fromJson(dynamic value) =>
    MedicalHistoryDrinkEnumTypeTransformer().decode(value);

  static List<MedicalHistoryDrinkEnum> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(MedicalHistoryDrinkEnum.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <MedicalHistoryDrinkEnum>[];
}

/// Transformation class that can [encode] an instance of [MedicalHistoryDrinkEnum] to String,
/// and [decode] dynamic data back to [MedicalHistoryDrinkEnum].
class MedicalHistoryDrinkEnumTypeTransformer {
  factory MedicalHistoryDrinkEnumTypeTransformer() => _instance ??= const MedicalHistoryDrinkEnumTypeTransformer._();

  const MedicalHistoryDrinkEnumTypeTransformer._();

  String encode(MedicalHistoryDrinkEnum data) => data.value;

  /// Decodes a [dynamic value][data] to a MedicalHistoryDrinkEnum.
  ///
  /// If [allowNull] is true and the [dynamic value][data] cannot be decoded successfully,
  /// then null is returned. However, if [allowNull] is false and the [dynamic value][data]
  /// cannot be decoded successfully, then an [UnimplementedError] is thrown.
  ///
  /// The [allowNull] is very handy when an API changes and a new enum value is added or removed,
  /// and users are still using an old app with the old code.
  MedicalHistoryDrinkEnum decode(dynamic data, {bool allowNull}) {
    if (data != null) {
      switch (data.toString()) {
        case r'Occasionally': return MedicalHistoryDrinkEnum.occasionally;
        case r'Frequently': return MedicalHistoryDrinkEnum.frequently;
        case r'Daily': return MedicalHistoryDrinkEnum.daily;
        default:
          if (allowNull == false) {
            throw ArgumentError('Unknown enum value to decode: $data');
          }
      }
    }
    return null;
  }

  /// Singleton [MedicalHistoryDrinkEnumTypeTransformer] instance.
  static MedicalHistoryDrinkEnumTypeTransformer _instance;
}


