//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class TenantUser {
  /// Returns a new [TenantUser] instance.
  TenantUser({
    this.userId,
    this.roles = const [],
    this.invitationToken,
    this.status,
    this.tenantId,
    this.tenant,
    this.id,
    this.createdAt,
    this.updatedAt,
    this.deletedAt,
    this.createdById,
    this.updatedById,
  });

  String userId;

  List<String> roles;

  String invitationToken;

  TenantUserStatusEnum status;

  String tenantId;

  Tenant tenant;

  String id;

  String createdAt;

  String updatedAt;

  String deletedAt;

  String createdById;

  String updatedById;

  @override
  bool operator ==(Object other) => identical(this, other) || other is TenantUser &&
     other.userId == userId &&
     other.roles == roles &&
     other.invitationToken == invitationToken &&
     other.status == status &&
     other.tenantId == tenantId &&
     other.tenant == tenant &&
     other.id == id &&
     other.createdAt == createdAt &&
     other.updatedAt == updatedAt &&
     other.deletedAt == deletedAt &&
     other.createdById == createdById &&
     other.updatedById == updatedById;

  @override
  int get hashCode =>
  // ignore: unnecessary_parenthesis
    (userId == null ? 0 : userId.hashCode) +
    (roles == null ? 0 : roles.hashCode) +
    (invitationToken == null ? 0 : invitationToken.hashCode) +
    (status == null ? 0 : status.hashCode) +
    (tenantId == null ? 0 : tenantId.hashCode) +
    (tenant == null ? 0 : tenant.hashCode) +
    (id == null ? 0 : id.hashCode) +
    (createdAt == null ? 0 : createdAt.hashCode) +
    (updatedAt == null ? 0 : updatedAt.hashCode) +
    (deletedAt == null ? 0 : deletedAt.hashCode) +
    (createdById == null ? 0 : createdById.hashCode) +
    (updatedById == null ? 0 : updatedById.hashCode);

  @override
  String toString() => 'TenantUser[userId=$userId, roles=$roles, invitationToken=$invitationToken, status=$status, tenantId=$tenantId, tenant=$tenant, id=$id, createdAt=$createdAt, updatedAt=$updatedAt, deletedAt=$deletedAt, createdById=$createdById, updatedById=$updatedById]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (userId != null) {
      json[r'userId'] = userId;
    }
    if (roles != null) {
      json[r'roles'] = roles;
    }
    if (invitationToken != null) {
      json[r'invitationToken'] = invitationToken;
    }
    if (status != null) {
      json[r'status'] = status;
    }
    if (tenantId != null) {
      json[r'tenantId'] = tenantId;
    }
    if (tenant != null) {
      json[r'tenant'] = tenant;
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

  /// Returns a new [TenantUser] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static TenantUser fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();
      return TenantUser(
        userId: mapValueOfType<String>(json, r'userId'),
        roles: json[r'roles'] is List
          ? (json[r'roles'] as List).cast<String>()
          : null,
        invitationToken: mapValueOfType<String>(json, r'invitationToken'),
        status: TenantUserStatusEnum.fromJson(json[r'status']),
        tenantId: mapValueOfType<String>(json, r'tenantId'),
        tenant: Tenant.fromJson(json[r'tenant']),
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

  static List<TenantUser> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(TenantUser.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <TenantUser>[];

  static Map<String, TenantUser> mapFromJson(dynamic json) {
    final map = <String, TenantUser>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) => map[key] = TenantUser.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of TenantUser-objects as value to a dart map
  static Map<String, List<TenantUser>> mapListFromJson(dynamic json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<TenantUser>>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) {
          map[key] = TenantUser.listFromJson(
            value,
            emptyIsNull: emptyIsNull,
            growable: growable,
          );
        });
    }
    return map;
  }
}


class TenantUserStatusEnum {
  /// Instantiate a new enum with the provided [value].
  const TenantUserStatusEnum._(this.value);

  /// The underlying value of this enum member.
  final String value;

  @override
  String toString() => value ?? '';

  String toJson() => value;

  static const active = TenantUserStatusEnum._(r'active');
  static const invited = TenantUserStatusEnum._(r'invited');
  static const emptyPermissions = TenantUserStatusEnum._(r'empty-permissions');

  /// List of all possible values in this [enum][TenantUserStatusEnum].
  static const values = <TenantUserStatusEnum>[
    active,
    invited,
    emptyPermissions,
  ];

  static TenantUserStatusEnum fromJson(dynamic value) =>
    TenantUserStatusEnumTypeTransformer().decode(value);

  static List<TenantUserStatusEnum> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(TenantUserStatusEnum.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <TenantUserStatusEnum>[];
}

/// Transformation class that can [encode] an instance of [TenantUserStatusEnum] to String,
/// and [decode] dynamic data back to [TenantUserStatusEnum].
class TenantUserStatusEnumTypeTransformer {
  factory TenantUserStatusEnumTypeTransformer() => _instance ??= const TenantUserStatusEnumTypeTransformer._();

  const TenantUserStatusEnumTypeTransformer._();

  String encode(TenantUserStatusEnum data) => data.value;

  /// Decodes a [dynamic value][data] to a TenantUserStatusEnum.
  ///
  /// If [allowNull] is true and the [dynamic value][data] cannot be decoded successfully,
  /// then null is returned. However, if [allowNull] is false and the [dynamic value][data]
  /// cannot be decoded successfully, then an [UnimplementedError] is thrown.
  ///
  /// The [allowNull] is very handy when an API changes and a new enum value is added or removed,
  /// and users are still using an old app with the old code.
  TenantUserStatusEnum decode(dynamic data, {bool allowNull}) {
    if (data != null) {
      switch (data.toString()) {
        case r'active': return TenantUserStatusEnum.active;
        case r'invited': return TenantUserStatusEnum.invited;
        case r'empty-permissions': return TenantUserStatusEnum.emptyPermissions;
        default:
          if (allowNull == false) {
            throw ArgumentError('Unknown enum value to decode: $data');
          }
      }
    }
    return null;
  }

  /// Singleton [TenantUserStatusEnumTypeTransformer] instance.
  static TenantUserStatusEnumTypeTransformer _instance;
}


