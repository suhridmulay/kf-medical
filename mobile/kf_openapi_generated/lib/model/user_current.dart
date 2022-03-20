//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class UserCurrent {
  /// Returns a new [UserCurrent] instance.
  UserCurrent({
    this.fullName,
    this.firstName,
    this.emailVerified,
    this.emailVerificationTokenExpiresAt,
    this.provider,
    this.providerId,
    this.passwordResetTokenExpiresAt,
    this.lastName,
    this.phoneNumber,
    this.email,
    this.jwtTokenInvalidBefore,
    this.importHash,
    this.tenants = const [],
    this.avatars = const [],
    this.id,
    this.createdAt,
    this.updatedAt,
    this.deletedAt,
    this.createdById,
    this.updatedById,
  });

  String fullName;

  String firstName;

  bool emailVerified;

  DateTime emailVerificationTokenExpiresAt;

  String provider;

  String providerId;

  DateTime passwordResetTokenExpiresAt;

  String lastName;

  String phoneNumber;

  String email;

  String jwtTokenInvalidBefore;

  String importHash;

  List<TenantUser> tenants;

  List<File> avatars;

  String id;

  String createdAt;

  String updatedAt;

  String deletedAt;

  String createdById;

  String updatedById;

  @override
  bool operator ==(Object other) => identical(this, other) || other is UserCurrent &&
     other.fullName == fullName &&
     other.firstName == firstName &&
     other.emailVerified == emailVerified &&
     other.emailVerificationTokenExpiresAt == emailVerificationTokenExpiresAt &&
     other.provider == provider &&
     other.providerId == providerId &&
     other.passwordResetTokenExpiresAt == passwordResetTokenExpiresAt &&
     other.lastName == lastName &&
     other.phoneNumber == phoneNumber &&
     other.email == email &&
     other.jwtTokenInvalidBefore == jwtTokenInvalidBefore &&
     other.importHash == importHash &&
     other.tenants == tenants &&
     other.avatars == avatars &&
     other.id == id &&
     other.createdAt == createdAt &&
     other.updatedAt == updatedAt &&
     other.deletedAt == deletedAt &&
     other.createdById == createdById &&
     other.updatedById == updatedById;

  @override
  int get hashCode =>
  // ignore: unnecessary_parenthesis
    (fullName == null ? 0 : fullName.hashCode) +
    (firstName == null ? 0 : firstName.hashCode) +
    (emailVerified == null ? 0 : emailVerified.hashCode) +
    (emailVerificationTokenExpiresAt == null ? 0 : emailVerificationTokenExpiresAt.hashCode) +
    (provider == null ? 0 : provider.hashCode) +
    (providerId == null ? 0 : providerId.hashCode) +
    (passwordResetTokenExpiresAt == null ? 0 : passwordResetTokenExpiresAt.hashCode) +
    (lastName == null ? 0 : lastName.hashCode) +
    (phoneNumber == null ? 0 : phoneNumber.hashCode) +
    (email == null ? 0 : email.hashCode) +
    (jwtTokenInvalidBefore == null ? 0 : jwtTokenInvalidBefore.hashCode) +
    (importHash == null ? 0 : importHash.hashCode) +
    (tenants == null ? 0 : tenants.hashCode) +
    (avatars == null ? 0 : avatars.hashCode) +
    (id == null ? 0 : id.hashCode) +
    (createdAt == null ? 0 : createdAt.hashCode) +
    (updatedAt == null ? 0 : updatedAt.hashCode) +
    (deletedAt == null ? 0 : deletedAt.hashCode) +
    (createdById == null ? 0 : createdById.hashCode) +
    (updatedById == null ? 0 : updatedById.hashCode);

  @override
  String toString() => 'UserCurrent[fullName=$fullName, firstName=$firstName, emailVerified=$emailVerified, emailVerificationTokenExpiresAt=$emailVerificationTokenExpiresAt, provider=$provider, providerId=$providerId, passwordResetTokenExpiresAt=$passwordResetTokenExpiresAt, lastName=$lastName, phoneNumber=$phoneNumber, email=$email, jwtTokenInvalidBefore=$jwtTokenInvalidBefore, importHash=$importHash, tenants=$tenants, avatars=$avatars, id=$id, createdAt=$createdAt, updatedAt=$updatedAt, deletedAt=$deletedAt, createdById=$createdById, updatedById=$updatedById]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (fullName != null) {
      json[r'fullName'] = fullName;
    }
    if (firstName != null) {
      json[r'firstName'] = firstName;
    }
    if (emailVerified != null) {
      json[r'emailVerified'] = emailVerified;
    }
    if (emailVerificationTokenExpiresAt != null) {
      json[r'emailVerificationTokenExpiresAt'] = emailVerificationTokenExpiresAt.toUtc().toIso8601String();
    }
    if (provider != null) {
      json[r'provider'] = provider;
    }
    if (providerId != null) {
      json[r'providerId'] = providerId;
    }
    if (passwordResetTokenExpiresAt != null) {
      json[r'passwordResetTokenExpiresAt'] = passwordResetTokenExpiresAt.toUtc().toIso8601String();
    }
    if (lastName != null) {
      json[r'lastName'] = lastName;
    }
    if (phoneNumber != null) {
      json[r'phoneNumber'] = phoneNumber;
    }
    if (email != null) {
      json[r'email'] = email;
    }
    if (jwtTokenInvalidBefore != null) {
      json[r'jwtTokenInvalidBefore'] = jwtTokenInvalidBefore;
    }
    if (importHash != null) {
      json[r'importHash'] = importHash;
    }
    if (tenants != null) {
      json[r'tenants'] = tenants;
    }
    if (avatars != null) {
      json[r'avatars'] = avatars;
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

  /// Returns a new [UserCurrent] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static UserCurrent fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();
      return UserCurrent(
        fullName: mapValueOfType<String>(json, r'fullName'),
        firstName: mapValueOfType<String>(json, r'firstName'),
        emailVerified: mapValueOfType<bool>(json, r'emailVerified'),
        emailVerificationTokenExpiresAt: mapDateTime(json, r'emailVerificationTokenExpiresAt', ''),
        provider: mapValueOfType<String>(json, r'provider'),
        providerId: mapValueOfType<String>(json, r'providerId'),
        passwordResetTokenExpiresAt: mapDateTime(json, r'passwordResetTokenExpiresAt', ''),
        lastName: mapValueOfType<String>(json, r'lastName'),
        phoneNumber: mapValueOfType<String>(json, r'phoneNumber'),
        email: mapValueOfType<String>(json, r'email'),
        jwtTokenInvalidBefore: mapValueOfType<String>(json, r'jwtTokenInvalidBefore'),
        importHash: mapValueOfType<String>(json, r'importHash'),
        tenants: TenantUser.listFromJson(json[r'tenants']),
        avatars: File.listFromJson(json[r'avatars']),
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

  static List<UserCurrent> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(UserCurrent.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <UserCurrent>[];

  static Map<String, UserCurrent> mapFromJson(dynamic json) {
    final map = <String, UserCurrent>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) => map[key] = UserCurrent.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of UserCurrent-objects as value to a dart map
  static Map<String, List<UserCurrent>> mapListFromJson(dynamic json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<UserCurrent>>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) {
          map[key] = UserCurrent.listFromJson(
            value,
            emptyIsNull: emptyIsNull,
            growable: growable,
          );
        });
    }
    return map;
  }
}

