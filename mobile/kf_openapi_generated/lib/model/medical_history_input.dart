//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class MedicalHistoryInput {
  /// Returns a new [MedicalHistoryInput] instance.
  MedicalHistoryInput({
    this.patient,
    this.smoking,
    this.drugUse,
    this.drink,
    this.chronicDisease1,
    this.chronicDisease2,
    this.chronicDisease3,
    this.familyHistory,
  });

  String patient;

  MedicalHistoryInputSmokingEnum smoking;

  bool drugUse;

  MedicalHistoryInputDrinkEnum drink;

  String chronicDisease1;

  String chronicDisease2;

  String chronicDisease3;

  String familyHistory;

  @override
  bool operator ==(Object other) => identical(this, other) || other is MedicalHistoryInput &&
     other.patient == patient &&
     other.smoking == smoking &&
     other.drugUse == drugUse &&
     other.drink == drink &&
     other.chronicDisease1 == chronicDisease1 &&
     other.chronicDisease2 == chronicDisease2 &&
     other.chronicDisease3 == chronicDisease3 &&
     other.familyHistory == familyHistory;

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
    (familyHistory == null ? 0 : familyHistory.hashCode);

  @override
  String toString() => 'MedicalHistoryInput[patient=$patient, smoking=$smoking, drugUse=$drugUse, drink=$drink, chronicDisease1=$chronicDisease1, chronicDisease2=$chronicDisease2, chronicDisease3=$chronicDisease3, familyHistory=$familyHistory]';

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
    return json;
  }

  /// Returns a new [MedicalHistoryInput] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static MedicalHistoryInput fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();
      return MedicalHistoryInput(
        patient: mapValueOfType<String>(json, r'patient'),
        smoking: MedicalHistoryInputSmokingEnum.fromJson(json[r'smoking']),
        drugUse: mapValueOfType<bool>(json, r'drugUse'),
        drink: MedicalHistoryInputDrinkEnum.fromJson(json[r'drink']),
        chronicDisease1: mapValueOfType<String>(json, r'chronicDisease1'),
        chronicDisease2: mapValueOfType<String>(json, r'chronicDisease2'),
        chronicDisease3: mapValueOfType<String>(json, r'chronicDisease3'),
        familyHistory: mapValueOfType<String>(json, r'familyHistory'),
      );
    }
    return null;
  }

  static List<MedicalHistoryInput> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(MedicalHistoryInput.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <MedicalHistoryInput>[];

  static Map<String, MedicalHistoryInput> mapFromJson(dynamic json) {
    final map = <String, MedicalHistoryInput>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) => map[key] = MedicalHistoryInput.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of MedicalHistoryInput-objects as value to a dart map
  static Map<String, List<MedicalHistoryInput>> mapListFromJson(dynamic json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<MedicalHistoryInput>>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) {
          map[key] = MedicalHistoryInput.listFromJson(
            value,
            emptyIsNull: emptyIsNull,
            growable: growable,
          );
        });
    }
    return map;
  }
}


class MedicalHistoryInputSmokingEnum {
  /// Instantiate a new enum with the provided [value].
  const MedicalHistoryInputSmokingEnum._(this.value);

  /// The underlying value of this enum member.
  final String value;

  @override
  String toString() => value ?? '';

  String toJson() => value;

  static const none = MedicalHistoryInputSmokingEnum._(r'None');
  static const cigarette = MedicalHistoryInputSmokingEnum._(r'Cigarette');
  static const bidi = MedicalHistoryInputSmokingEnum._(r'Bidi');
  static const ganja = MedicalHistoryInputSmokingEnum._(r'Ganja');
  static const multiple = MedicalHistoryInputSmokingEnum._(r'Multiple');
  static const other = MedicalHistoryInputSmokingEnum._(r'Other');

  /// List of all possible values in this [enum][MedicalHistoryInputSmokingEnum].
  static const values = <MedicalHistoryInputSmokingEnum>[
    none,
    cigarette,
    bidi,
    ganja,
    multiple,
    other,
  ];

  static MedicalHistoryInputSmokingEnum fromJson(dynamic value) =>
    MedicalHistoryInputSmokingEnumTypeTransformer().decode(value);

  static List<MedicalHistoryInputSmokingEnum> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(MedicalHistoryInputSmokingEnum.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <MedicalHistoryInputSmokingEnum>[];
}

/// Transformation class that can [encode] an instance of [MedicalHistoryInputSmokingEnum] to String,
/// and [decode] dynamic data back to [MedicalHistoryInputSmokingEnum].
class MedicalHistoryInputSmokingEnumTypeTransformer {
  factory MedicalHistoryInputSmokingEnumTypeTransformer() => _instance ??= const MedicalHistoryInputSmokingEnumTypeTransformer._();

  const MedicalHistoryInputSmokingEnumTypeTransformer._();

  String encode(MedicalHistoryInputSmokingEnum data) => data.value;

  /// Decodes a [dynamic value][data] to a MedicalHistoryInputSmokingEnum.
  ///
  /// If [allowNull] is true and the [dynamic value][data] cannot be decoded successfully,
  /// then null is returned. However, if [allowNull] is false and the [dynamic value][data]
  /// cannot be decoded successfully, then an [UnimplementedError] is thrown.
  ///
  /// The [allowNull] is very handy when an API changes and a new enum value is added or removed,
  /// and users are still using an old app with the old code.
  MedicalHistoryInputSmokingEnum decode(dynamic data, {bool allowNull}) {
    if (data != null) {
      switch (data.toString()) {
        case r'None': return MedicalHistoryInputSmokingEnum.none;
        case r'Cigarette': return MedicalHistoryInputSmokingEnum.cigarette;
        case r'Bidi': return MedicalHistoryInputSmokingEnum.bidi;
        case r'Ganja': return MedicalHistoryInputSmokingEnum.ganja;
        case r'Multiple': return MedicalHistoryInputSmokingEnum.multiple;
        case r'Other': return MedicalHistoryInputSmokingEnum.other;
        default:
          if (allowNull == false) {
            throw ArgumentError('Unknown enum value to decode: $data');
          }
      }
    }
    return null;
  }

  /// Singleton [MedicalHistoryInputSmokingEnumTypeTransformer] instance.
  static MedicalHistoryInputSmokingEnumTypeTransformer _instance;
}



class MedicalHistoryInputDrinkEnum {
  /// Instantiate a new enum with the provided [value].
  const MedicalHistoryInputDrinkEnum._(this.value);

  /// The underlying value of this enum member.
  final String value;

  @override
  String toString() => value ?? '';

  String toJson() => value;

  static const occasionally = MedicalHistoryInputDrinkEnum._(r'Occasionally');
  static const frequently = MedicalHistoryInputDrinkEnum._(r'Frequently');
  static const daily = MedicalHistoryInputDrinkEnum._(r'Daily');

  /// List of all possible values in this [enum][MedicalHistoryInputDrinkEnum].
  static const values = <MedicalHistoryInputDrinkEnum>[
    occasionally,
    frequently,
    daily,
  ];

  static MedicalHistoryInputDrinkEnum fromJson(dynamic value) =>
    MedicalHistoryInputDrinkEnumTypeTransformer().decode(value);

  static List<MedicalHistoryInputDrinkEnum> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(MedicalHistoryInputDrinkEnum.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <MedicalHistoryInputDrinkEnum>[];
}

/// Transformation class that can [encode] an instance of [MedicalHistoryInputDrinkEnum] to String,
/// and [decode] dynamic data back to [MedicalHistoryInputDrinkEnum].
class MedicalHistoryInputDrinkEnumTypeTransformer {
  factory MedicalHistoryInputDrinkEnumTypeTransformer() => _instance ??= const MedicalHistoryInputDrinkEnumTypeTransformer._();

  const MedicalHistoryInputDrinkEnumTypeTransformer._();

  String encode(MedicalHistoryInputDrinkEnum data) => data.value;

  /// Decodes a [dynamic value][data] to a MedicalHistoryInputDrinkEnum.
  ///
  /// If [allowNull] is true and the [dynamic value][data] cannot be decoded successfully,
  /// then null is returned. However, if [allowNull] is false and the [dynamic value][data]
  /// cannot be decoded successfully, then an [UnimplementedError] is thrown.
  ///
  /// The [allowNull] is very handy when an API changes and a new enum value is added or removed,
  /// and users are still using an old app with the old code.
  MedicalHistoryInputDrinkEnum decode(dynamic data, {bool allowNull}) {
    if (data != null) {
      switch (data.toString()) {
        case r'Occasionally': return MedicalHistoryInputDrinkEnum.occasionally;
        case r'Frequently': return MedicalHistoryInputDrinkEnum.frequently;
        case r'Daily': return MedicalHistoryInputDrinkEnum.daily;
        default:
          if (allowNull == false) {
            throw ArgumentError('Unknown enum value to decode: $data');
          }
      }
    }
    return null;
  }

  /// Singleton [MedicalHistoryInputDrinkEnumTypeTransformer] instance.
  static MedicalHistoryInputDrinkEnumTypeTransformer _instance;
}


