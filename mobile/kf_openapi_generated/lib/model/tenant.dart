//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class Tenant {
  /// Returns a new [Tenant] instance.
  Tenant({
    this.name,
    this.url,
    this.plan,
    this.planStatus,
    this.planStripeCustomerId,
    this.planUserId,
    this.settings = const [],
    this.id,
    this.createdAt,
    this.updatedAt,
    this.deletedAt,
    this.createdById,
    this.updatedById,
  });

  String name;

  String url;

  TenantPlanEnum plan;

  TenantPlanStatusEnum planStatus;

  String planStripeCustomerId;

  String planUserId;

  List<Settings> settings;

  String id;

  String createdAt;

  String updatedAt;

  String deletedAt;

  String createdById;

  String updatedById;

  @override
  bool operator ==(Object other) => identical(this, other) || other is Tenant &&
     other.name == name &&
     other.url == url &&
     other.plan == plan &&
     other.planStatus == planStatus &&
     other.planStripeCustomerId == planStripeCustomerId &&
     other.planUserId == planUserId &&
     other.settings == settings &&
     other.id == id &&
     other.createdAt == createdAt &&
     other.updatedAt == updatedAt &&
     other.deletedAt == deletedAt &&
     other.createdById == createdById &&
     other.updatedById == updatedById;

  @override
  int get hashCode =>
  // ignore: unnecessary_parenthesis
    (name == null ? 0 : name.hashCode) +
    (url == null ? 0 : url.hashCode) +
    (plan == null ? 0 : plan.hashCode) +
    (planStatus == null ? 0 : planStatus.hashCode) +
    (planStripeCustomerId == null ? 0 : planStripeCustomerId.hashCode) +
    (planUserId == null ? 0 : planUserId.hashCode) +
    (settings == null ? 0 : settings.hashCode) +
    (id == null ? 0 : id.hashCode) +
    (createdAt == null ? 0 : createdAt.hashCode) +
    (updatedAt == null ? 0 : updatedAt.hashCode) +
    (deletedAt == null ? 0 : deletedAt.hashCode) +
    (createdById == null ? 0 : createdById.hashCode) +
    (updatedById == null ? 0 : updatedById.hashCode);

  @override
  String toString() => 'Tenant[name=$name, url=$url, plan=$plan, planStatus=$planStatus, planStripeCustomerId=$planStripeCustomerId, planUserId=$planUserId, settings=$settings, id=$id, createdAt=$createdAt, updatedAt=$updatedAt, deletedAt=$deletedAt, createdById=$createdById, updatedById=$updatedById]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (name != null) {
      json[r'name'] = name;
    }
    if (url != null) {
      json[r'url'] = url;
    }
    if (plan != null) {
      json[r'plan'] = plan;
    }
    if (planStatus != null) {
      json[r'planStatus'] = planStatus;
    }
    if (planStripeCustomerId != null) {
      json[r'planStripeCustomerId'] = planStripeCustomerId;
    }
    if (planUserId != null) {
      json[r'planUserId'] = planUserId;
    }
    if (settings != null) {
      json[r'settings'] = settings;
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

  /// Returns a new [Tenant] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static Tenant fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();
      return Tenant(
        name: mapValueOfType<String>(json, r'name'),
        url: mapValueOfType<String>(json, r'url'),
        plan: TenantPlanEnum.fromJson(json[r'plan']),
        planStatus: TenantPlanStatusEnum.fromJson(json[r'planStatus']),
        planStripeCustomerId: mapValueOfType<String>(json, r'planStripeCustomerId'),
        planUserId: mapValueOfType<String>(json, r'planUserId'),
        settings: Settings.listFromJson(json[r'settings']),
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

  static List<Tenant> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(Tenant.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <Tenant>[];

  static Map<String, Tenant> mapFromJson(dynamic json) {
    final map = <String, Tenant>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) => map[key] = Tenant.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of Tenant-objects as value to a dart map
  static Map<String, List<Tenant>> mapListFromJson(dynamic json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<Tenant>>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) {
          map[key] = Tenant.listFromJson(
            value,
            emptyIsNull: emptyIsNull,
            growable: growable,
          );
        });
    }
    return map;
  }
}


class TenantPlanEnum {
  /// Instantiate a new enum with the provided [value].
  const TenantPlanEnum._(this.value);

  /// The underlying value of this enum member.
  final String value;

  @override
  String toString() => value ?? '';

  String toJson() => value;

  static const free = TenantPlanEnum._(r'free');
  static const growth = TenantPlanEnum._(r'growth');
  static const enterprise = TenantPlanEnum._(r'enterprise');

  /// List of all possible values in this [enum][TenantPlanEnum].
  static const values = <TenantPlanEnum>[
    free,
    growth,
    enterprise,
  ];

  static TenantPlanEnum fromJson(dynamic value) =>
    TenantPlanEnumTypeTransformer().decode(value);

  static List<TenantPlanEnum> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(TenantPlanEnum.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <TenantPlanEnum>[];
}

/// Transformation class that can [encode] an instance of [TenantPlanEnum] to String,
/// and [decode] dynamic data back to [TenantPlanEnum].
class TenantPlanEnumTypeTransformer {
  factory TenantPlanEnumTypeTransformer() => _instance ??= const TenantPlanEnumTypeTransformer._();

  const TenantPlanEnumTypeTransformer._();

  String encode(TenantPlanEnum data) => data.value;

  /// Decodes a [dynamic value][data] to a TenantPlanEnum.
  ///
  /// If [allowNull] is true and the [dynamic value][data] cannot be decoded successfully,
  /// then null is returned. However, if [allowNull] is false and the [dynamic value][data]
  /// cannot be decoded successfully, then an [UnimplementedError] is thrown.
  ///
  /// The [allowNull] is very handy when an API changes and a new enum value is added or removed,
  /// and users are still using an old app with the old code.
  TenantPlanEnum decode(dynamic data, {bool allowNull}) {
    if (data != null) {
      switch (data.toString()) {
        case r'free': return TenantPlanEnum.free;
        case r'growth': return TenantPlanEnum.growth;
        case r'enterprise': return TenantPlanEnum.enterprise;
        default:
          if (allowNull == false) {
            throw ArgumentError('Unknown enum value to decode: $data');
          }
      }
    }
    return null;
  }

  /// Singleton [TenantPlanEnumTypeTransformer] instance.
  static TenantPlanEnumTypeTransformer _instance;
}



class TenantPlanStatusEnum {
  /// Instantiate a new enum with the provided [value].
  const TenantPlanStatusEnum._(this.value);

  /// The underlying value of this enum member.
  final String value;

  @override
  String toString() => value ?? '';

  String toJson() => value;

  static const active = TenantPlanStatusEnum._(r'active');
  static const cancelAtPeriodEnd = TenantPlanStatusEnum._(r'cancel_at_period_end');
  static const error = TenantPlanStatusEnum._(r'error');

  /// List of all possible values in this [enum][TenantPlanStatusEnum].
  static const values = <TenantPlanStatusEnum>[
    active,
    cancelAtPeriodEnd,
    error,
  ];

  static TenantPlanStatusEnum fromJson(dynamic value) =>
    TenantPlanStatusEnumTypeTransformer().decode(value);

  static List<TenantPlanStatusEnum> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(TenantPlanStatusEnum.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <TenantPlanStatusEnum>[];
}

/// Transformation class that can [encode] an instance of [TenantPlanStatusEnum] to String,
/// and [decode] dynamic data back to [TenantPlanStatusEnum].
class TenantPlanStatusEnumTypeTransformer {
  factory TenantPlanStatusEnumTypeTransformer() => _instance ??= const TenantPlanStatusEnumTypeTransformer._();

  const TenantPlanStatusEnumTypeTransformer._();

  String encode(TenantPlanStatusEnum data) => data.value;

  /// Decodes a [dynamic value][data] to a TenantPlanStatusEnum.
  ///
  /// If [allowNull] is true and the [dynamic value][data] cannot be decoded successfully,
  /// then null is returned. However, if [allowNull] is false and the [dynamic value][data]
  /// cannot be decoded successfully, then an [UnimplementedError] is thrown.
  ///
  /// The [allowNull] is very handy when an API changes and a new enum value is added or removed,
  /// and users are still using an old app with the old code.
  TenantPlanStatusEnum decode(dynamic data, {bool allowNull}) {
    if (data != null) {
      switch (data.toString()) {
        case r'active': return TenantPlanStatusEnum.active;
        case r'cancel_at_period_end': return TenantPlanStatusEnum.cancelAtPeriodEnd;
        case r'error': return TenantPlanStatusEnum.error;
        default:
          if (allowNull == false) {
            throw ArgumentError('Unknown enum value to decode: $data');
          }
      }
    }
    return null;
  }

  /// Singleton [TenantPlanStatusEnumTypeTransformer] instance.
  static TenantPlanStatusEnumTypeTransformer _instance;
}


