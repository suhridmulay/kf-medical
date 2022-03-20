//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class User {
  /// Returns a new [User] instance.
  User({
    this.roles = const [],
    this.status,
    this.tenants = const [],
    this.id,
    this.createdAt,
    this.updatedAt,
    this.deletedAt,
    this.createdById,
    this.updatedById,
  });

  List<String> roles;

  UserStatusEnum status;

  List<TenantUser> tenants;

  String id;

  String createdAt;

  String updatedAt;

  String deletedAt;

  String createdById;

  String updatedById;

  @override
  bool operator ==(Object other) => identical(this, other) || other is User &&
     other.roles == roles &&
     other.status == status &&
     other.tenants == tenants &&
     other.id == id &&
     other.createdAt == createdAt &&
     other.updatedAt == updatedAt &&
     other.deletedAt == deletedAt &&
     other.createdById == createdById &&
     other.updatedById == updatedById;

  @override
  int get hashCode =>
  // ignore: unnecessary_parenthesis
    (roles == null ? 0 : roles.hashCode) +
    (status == null ? 0 : status.hashCode) +
    (tenants == null ? 0 : tenants.hashCode) +
    (id == null ? 0 : id.hashCode) +
    (createdAt == null ? 0 : createdAt.hashCode) +
    (updatedAt == null ? 0 : updatedAt.hashCode) +
    (deletedAt == null ? 0 : deletedAt.hashCode) +
    (createdById == null ? 0 : createdById.hashCode) +
    (updatedById == null ? 0 : updatedById.hashCode);

  @override
  String toString() => 'User[roles=$roles, status=$status, tenants=$tenants, id=$id, createdAt=$createdAt, updatedAt=$updatedAt, deletedAt=$deletedAt, createdById=$createdById, updatedById=$updatedById]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (roles != null) {
      json[r'roles'] = roles;
    }
    if (status != null) {
      json[r'status'] = status;
    }
    if (tenants != null) {
      json[r'tenants'] = tenants;
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

  /// Returns a new [User] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static User fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();
      return User(
        roles: json[r'roles'] is List
          ? (json[r'roles'] as List).cast<String>()
          : null,
        status: UserStatusEnum.fromJson(json[r'status']),
        tenants: TenantUser.listFromJson(json[r'tenants']),
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

  static List<User> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(User.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <User>[];

  static Map<String, User> mapFromJson(dynamic json) {
    final map = <String, User>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) => map[key] = User.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of User-objects as value to a dart map
  static Map<String, List<User>> mapListFromJson(dynamic json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<User>>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) {
          map[key] = User.listFromJson(
            value,
            emptyIsNull: emptyIsNull,
            growable: growable,
          );
        });
    }
    return map;
  }
}


class UserStatusEnum {
  /// Instantiate a new enum with the provided [value].
  const UserStatusEnum._(this.value);

  /// The underlying value of this enum member.
  final String value;

  @override
  String toString() => value ?? '';

  String toJson() => value;

  static const active = UserStatusEnum._(r'active');
  static const invited = UserStatusEnum._(r'invited');
  static const emptyPermissions = UserStatusEnum._(r'empty-permissions');

  /// List of all possible values in this [enum][UserStatusEnum].
  static const values = <UserStatusEnum>[
    active,
    invited,
    emptyPermissions,
  ];

  static UserStatusEnum fromJson(dynamic value) =>
    UserStatusEnumTypeTransformer().decode(value);

  static List<UserStatusEnum> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(UserStatusEnum.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <UserStatusEnum>[];
}

/// Transformation class that can [encode] an instance of [UserStatusEnum] to String,
/// and [decode] dynamic data back to [UserStatusEnum].
class UserStatusEnumTypeTransformer {
  factory UserStatusEnumTypeTransformer() => _instance ??= const UserStatusEnumTypeTransformer._();

  const UserStatusEnumTypeTransformer._();

  String encode(UserStatusEnum data) => data.value;

  /// Decodes a [dynamic value][data] to a UserStatusEnum.
  ///
  /// If [allowNull] is true and the [dynamic value][data] cannot be decoded successfully,
  /// then null is returned. However, if [allowNull] is false and the [dynamic value][data]
  /// cannot be decoded successfully, then an [UnimplementedError] is thrown.
  ///
  /// The [allowNull] is very handy when an API changes and a new enum value is added or removed,
  /// and users are still using an old app with the old code.
  UserStatusEnum decode(dynamic data, {bool allowNull}) {
    if (data != null) {
      switch (data.toString()) {
        case r'active': return UserStatusEnum.active;
        case r'invited': return UserStatusEnum.invited;
        case r'empty-permissions': return UserStatusEnum.emptyPermissions;
        default:
          if (allowNull == false) {
            throw ArgumentError('Unknown enum value to decode: $data');
          }
      }
    }
    return null;
  }

  /// Singleton [UserStatusEnumTypeTransformer] instance.
  static UserStatusEnumTypeTransformer _instance;
}


