//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class AuditLog {
  /// Returns a new [AuditLog] instance.
  AuditLog({
    this.id,
    this.entityName,
    this.entityId,
    this.tenantId,
    this.action,
    this.createdById,
    this.createdByEmail,
    this.timestamp,
    this.values,
  });

  String id;

  String entityName;

  String entityId;

  String tenantId;

  AuditLogActionEnum action;

  String createdById;

  String createdByEmail;

  String timestamp;

  Object values;

  @override
  bool operator ==(Object other) => identical(this, other) || other is AuditLog &&
     other.id == id &&
     other.entityName == entityName &&
     other.entityId == entityId &&
     other.tenantId == tenantId &&
     other.action == action &&
     other.createdById == createdById &&
     other.createdByEmail == createdByEmail &&
     other.timestamp == timestamp &&
     other.values == values;

  @override
  int get hashCode =>
  // ignore: unnecessary_parenthesis
    (id == null ? 0 : id.hashCode) +
    (entityName == null ? 0 : entityName.hashCode) +
    (entityId == null ? 0 : entityId.hashCode) +
    (tenantId == null ? 0 : tenantId.hashCode) +
    (action == null ? 0 : action.hashCode) +
    (createdById == null ? 0 : createdById.hashCode) +
    (createdByEmail == null ? 0 : createdByEmail.hashCode) +
    (timestamp == null ? 0 : timestamp.hashCode) +
    (values == null ? 0 : values.hashCode);

  @override
  String toString() => 'AuditLog[id=$id, entityName=$entityName, entityId=$entityId, tenantId=$tenantId, action=$action, createdById=$createdById, createdByEmail=$createdByEmail, timestamp=$timestamp, values=$values]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (id != null) {
      json[r'id'] = id;
    }
    if (entityName != null) {
      json[r'entityName'] = entityName;
    }
    if (entityId != null) {
      json[r'entityId'] = entityId;
    }
    if (tenantId != null) {
      json[r'tenantId'] = tenantId;
    }
    if (action != null) {
      json[r'action'] = action;
    }
    if (createdById != null) {
      json[r'createdById'] = createdById;
    }
    if (createdByEmail != null) {
      json[r'createdByEmail'] = createdByEmail;
    }
    if (timestamp != null) {
      json[r'timestamp'] = timestamp;
    }
    if (values != null) {
      json[r'values'] = values;
    }
    return json;
  }

  /// Returns a new [AuditLog] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static AuditLog fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();
      return AuditLog(
        id: mapValueOfType<String>(json, r'id'),
        entityName: mapValueOfType<String>(json, r'entityName'),
        entityId: mapValueOfType<String>(json, r'entityId'),
        tenantId: mapValueOfType<String>(json, r'tenantId'),
        action: AuditLogActionEnum.fromJson(json[r'action']),
        createdById: mapValueOfType<String>(json, r'createdById'),
        createdByEmail: mapValueOfType<String>(json, r'createdByEmail'),
        timestamp: mapValueOfType<String>(json, r'timestamp'),
        values: mapValueOfType<Object>(json, r'values'),
      );
    }
    return null;
  }

  static List<AuditLog> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(AuditLog.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <AuditLog>[];

  static Map<String, AuditLog> mapFromJson(dynamic json) {
    final map = <String, AuditLog>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) => map[key] = AuditLog.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of AuditLog-objects as value to a dart map
  static Map<String, List<AuditLog>> mapListFromJson(dynamic json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<AuditLog>>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) {
          map[key] = AuditLog.listFromJson(
            value,
            emptyIsNull: emptyIsNull,
            growable: growable,
          );
        });
    }
    return map;
  }
}


class AuditLogActionEnum {
  /// Instantiate a new enum with the provided [value].
  const AuditLogActionEnum._(this.value);

  /// The underlying value of this enum member.
  final String value;

  @override
  String toString() => value ?? '';

  String toJson() => value;

  static const create = AuditLogActionEnum._(r'create');
  static const update = AuditLogActionEnum._(r'update');
  static const delete = AuditLogActionEnum._(r'delete');

  /// List of all possible values in this [enum][AuditLogActionEnum].
  static const values = <AuditLogActionEnum>[
    create,
    update,
    delete,
  ];

  static AuditLogActionEnum fromJson(dynamic value) =>
    AuditLogActionEnumTypeTransformer().decode(value);

  static List<AuditLogActionEnum> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(AuditLogActionEnum.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <AuditLogActionEnum>[];
}

/// Transformation class that can [encode] an instance of [AuditLogActionEnum] to String,
/// and [decode] dynamic data back to [AuditLogActionEnum].
class AuditLogActionEnumTypeTransformer {
  factory AuditLogActionEnumTypeTransformer() => _instance ??= const AuditLogActionEnumTypeTransformer._();

  const AuditLogActionEnumTypeTransformer._();

  String encode(AuditLogActionEnum data) => data.value;

  /// Decodes a [dynamic value][data] to a AuditLogActionEnum.
  ///
  /// If [allowNull] is true and the [dynamic value][data] cannot be decoded successfully,
  /// then null is returned. However, if [allowNull] is false and the [dynamic value][data]
  /// cannot be decoded successfully, then an [UnimplementedError] is thrown.
  ///
  /// The [allowNull] is very handy when an API changes and a new enum value is added or removed,
  /// and users are still using an old app with the old code.
  AuditLogActionEnum decode(dynamic data, {bool allowNull}) {
    if (data != null) {
      switch (data.toString()) {
        case r'create': return AuditLogActionEnum.create;
        case r'update': return AuditLogActionEnum.update;
        case r'delete': return AuditLogActionEnum.delete;
        default:
          if (allowNull == false) {
            throw ArgumentError('Unknown enum value to decode: $data');
          }
      }
    }
    return null;
  }

  /// Singleton [AuditLogActionEnumTypeTransformer] instance.
  static AuditLogActionEnumTypeTransformer _instance;
}


