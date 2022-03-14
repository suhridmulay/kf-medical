//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class ApiClient {
  ApiClient({this.basePath = '/api'}) {
    // Setup authentications (key: authentication name, value: authentication).
    _authentications[r'bearerAuth'] = HttpBearerAuth();
  }

  final String basePath;

  var _client = Client();

  /// Returns the current HTTP [Client] instance to use in this class.
  ///
  /// The return value is guaranteed to never be null.
  Client get client => _client;

  /// Requests to use a new HTTP [Client] in this class.
  ///
  /// If the [newClient] is null, an [ArgumentError] is thrown.
  set client(Client newClient) {
    if (newClient == null) {
      throw ArgumentError('New client instance cannot be null.');
    }
    _client = newClient;
  }

  final _defaultHeaderMap = <String, String>{};
  final _authentications = <String, Authentication>{};

  void addDefaultHeader(String key, String value) {
     _defaultHeaderMap[key] = value;
  }

  Map<String,String> get defaultHeaderMap => _defaultHeaderMap;

  /// Returns an unmodifiable [Map] of the authentications, since none should be added
  /// or deleted.
  Map<String, Authentication> get authentications => Map.unmodifiable(_authentications);

  T getAuthentication<T extends Authentication>(String name) {
    final authentication = _authentications[name];
    return authentication is T ? authentication : null;
  }

  // We don't use a Map<String, String> for queryParams.
  // If collectionFormat is 'multi', a key might appear multiple times.
  Future<Response> invokeAPI(
    String path,
    String method,
    List<QueryParam> queryParams,
    Object body,
    Map<String, String> headerParams,
    Map<String, String> formParams,
    String nullableContentType,
    List<String> authNames,
  ) async {
    _updateParamsForAuth(authNames, queryParams, headerParams);

    headerParams.addAll(_defaultHeaderMap);

    final urlEncodedQueryParams = queryParams
      .where((param) => param.value != null)
      .map((param) => '$param');

    final queryString = urlEncodedQueryParams.isNotEmpty
      ? '?${urlEncodedQueryParams.join('&')}'
      : '';

    final uri = Uri.parse('$basePath$path$queryString');

    if (nullableContentType != null) {
      headerParams['Content-Type'] = nullableContentType;
    }

    try {
      // Special case for uploading a single file which isn't a 'multipart/form-data'.
      if (
        body is MultipartFile && (nullableContentType == null ||
        !nullableContentType.toLowerCase().startsWith('multipart/form-data'))
      ) {
        final request = StreamedRequest(method, uri);
        request.headers.addAll(headerParams);
        request.contentLength = body.length;
        body.finalize().listen(
          request.sink.add,
          onDone: request.sink.close,
          // ignore: avoid_types_on_closure_parameters
          onError: (Object error, StackTrace trace) => request.sink.close(),
          cancelOnError: true,
        );
        final response = await _client.send(request);
        return Response.fromStream(response);
      }

      if (body is MultipartRequest) {
        final request = MultipartRequest(method, uri);
        request.fields.addAll(body.fields);
        request.files.addAll(body.files);
        request.headers.addAll(body.headers);
        request.headers.addAll(headerParams);
        final response = await _client.send(request);
        return Response.fromStream(response);
      }

      final msgBody = nullableContentType == 'application/x-www-form-urlencoded'
        ? formParams
        : await serializeAsync(body);
      final nullableHeaderParams = headerParams.isEmpty ? null : headerParams;

      switch(method) {
        case 'POST': return await _client.post(uri, headers: nullableHeaderParams, body: msgBody,);
        case 'PUT': return await _client.put(uri, headers: nullableHeaderParams, body: msgBody,);
        case 'DELETE': return await _client.delete(uri, headers: nullableHeaderParams, body: msgBody,);
        case 'PATCH': return await _client.patch(uri, headers: nullableHeaderParams, body: msgBody,);
        case 'HEAD': return await _client.head(uri, headers: nullableHeaderParams,);
        case 'GET': return await _client.get(uri, headers: nullableHeaderParams,);
      }
    } on SocketException catch (e, trace) {
      throw ApiException.withInner(HttpStatus.badRequest, 'Socket operation failed: $method $path', e, trace,);
    } on TlsException catch (e, trace) {
      throw ApiException.withInner(HttpStatus.badRequest, 'TLS/SSL communication failed: $method $path', e, trace,);
    } on IOException catch (e, trace) {
      throw ApiException.withInner(HttpStatus.badRequest, 'I/O operation failed: $method $path', e, trace,);
    } on ClientException catch (e, trace) {
      throw ApiException.withInner(HttpStatus.badRequest, 'HTTP connection failed: $method $path', e, trace,);
    } on Exception catch (e, trace) {
      throw ApiException.withInner(HttpStatus.badRequest, 'Exception occurred: $method $path', e, trace,);
    }

    throw ApiException(HttpStatus.badRequest, 'Invalid HTTP operation: $method $path',);
  }

  Future<dynamic> deserializeAsync(String json, String targetType, {bool growable}) async =>
    // ignore: deprecated_member_use_from_same_package
    deserialize(json, targetType, growable: growable);

  @Deprecated('Scheduled for removal in OpenAPI Generator 6.x. Use deserializeAsync() instead.')
  dynamic deserialize(String json, String targetType, {bool growable}) {
    // Remove all spaces. Necessary for regular expressions as well.
    targetType = targetType.replaceAll(' ', ''); // ignore: parameter_assignments

    // If the expected target type is String, nothing to do...
    return targetType == 'String'
      ? json
      : _deserialize(jsonDecode(json), targetType, growable: growable == true);
  }

  // ignore: deprecated_member_use_from_same_package
  Future<String> serializeAsync(Object value) async => serialize(value);

  @Deprecated('Scheduled for removal in OpenAPI Generator 6.x. Use serializeAsync() instead.')
  String serialize(Object value) => value == null ? '' : json.encode(value);

  /// Update query and header parameters based on authentication settings.
  /// @param authNames The authentications to apply
  void _updateParamsForAuth(
    List<String> authNames,
    List<QueryParam> queryParams,
    Map<String, String> headerParams,
  ) {
    for(final authName in authNames) {
      final auth = _authentications[authName];
      if (auth == null) {
        throw ArgumentError('Authentication undefined: $authName');
      }
      auth.applyToParams(queryParams, headerParams);
    }
  }

  static dynamic _deserialize(dynamic value, String targetType, {bool growable}) {
    try {
      switch (targetType) {
        case 'String':
          return value is String ? value : value.toString();
        case 'int':
          return value is int ? value : int.parse('$value');
        case 'double':
          return value is double ? value : double.parse('$value');
        case 'bool':
          if (value is bool) {
            return value;
          }
          final valueString = '$value'.toLowerCase();
          return valueString == 'true' || valueString == '1';
        case 'AuditLog':
          return AuditLog.fromJson(value);
        case 'AuthProfileData':
          return AuthProfileData.fromJson(value);
        case 'ChronicDiseaseEnum':
          return ChronicDiseaseEnum.fromJson(value);
        case 'ChronicDiseaseEnumInput':
          return ChronicDiseaseEnumInput.fromJson(value);
        case 'DiagnosticEnum':
          return DiagnosticEnum.fromJson(value);
        case 'DiagnosticEnumInput':
          return DiagnosticEnumInput.fromJson(value);
        case 'Doctor':
          return Doctor.fromJson(value);
        case 'DoctorInput':
          return DoctorInput.fromJson(value);
        case 'File':
          return File.fromJson(value);
        case 'FileInput':
          return FileInput.fromJson(value);
        case 'GenericEntity':
          return GenericEntity.fromJson(value);
        case 'GenericModel':
          return GenericModel.fromJson(value);
        case 'HealthCenter':
          return HealthCenter.fromJson(value);
        case 'HealthCenterInput':
          return HealthCenterInput.fromJson(value);
        case 'InlineObject':
          return InlineObject.fromJson(value);
        case 'InlineObject1':
          return InlineObject1.fromJson(value);
        case 'InlineObject10':
          return InlineObject10.fromJson(value);
        case 'InlineObject11':
          return InlineObject11.fromJson(value);
        case 'InlineObject12':
          return InlineObject12.fromJson(value);
        case 'InlineObject13':
          return InlineObject13.fromJson(value);
        case 'InlineObject14':
          return InlineObject14.fromJson(value);
        case 'InlineObject15':
          return InlineObject15.fromJson(value);
        case 'InlineObject16':
          return InlineObject16.fromJson(value);
        case 'InlineObject17':
          return InlineObject17.fromJson(value);
        case 'InlineObject18':
          return InlineObject18.fromJson(value);
        case 'InlineObject19':
          return InlineObject19.fromJson(value);
        case 'InlineObject2':
          return InlineObject2.fromJson(value);
        case 'InlineObject20':
          return InlineObject20.fromJson(value);
        case 'InlineObject21':
          return InlineObject21.fromJson(value);
        case 'InlineObject22':
          return InlineObject22.fromJson(value);
        case 'InlineObject23':
          return InlineObject23.fromJson(value);
        case 'InlineObject24':
          return InlineObject24.fromJson(value);
        case 'InlineObject25':
          return InlineObject25.fromJson(value);
        case 'InlineObject26':
          return InlineObject26.fromJson(value);
        case 'InlineObject27':
          return InlineObject27.fromJson(value);
        case 'InlineObject28':
          return InlineObject28.fromJson(value);
        case 'InlineObject29':
          return InlineObject29.fromJson(value);
        case 'InlineObject3':
          return InlineObject3.fromJson(value);
        case 'InlineObject30':
          return InlineObject30.fromJson(value);
        case 'InlineObject31':
          return InlineObject31.fromJson(value);
        case 'InlineObject32':
          return InlineObject32.fromJson(value);
        case 'InlineObject33':
          return InlineObject33.fromJson(value);
        case 'InlineObject34':
          return InlineObject34.fromJson(value);
        case 'InlineObject35':
          return InlineObject35.fromJson(value);
        case 'InlineObject36':
          return InlineObject36.fromJson(value);
        case 'InlineObject37':
          return InlineObject37.fromJson(value);
        case 'InlineObject38':
          return InlineObject38.fromJson(value);
        case 'InlineObject39':
          return InlineObject39.fromJson(value);
        case 'InlineObject4':
          return InlineObject4.fromJson(value);
        case 'InlineObject40':
          return InlineObject40.fromJson(value);
        case 'InlineObject41':
          return InlineObject41.fromJson(value);
        case 'InlineObject42':
          return InlineObject42.fromJson(value);
        case 'InlineObject43':
          return InlineObject43.fromJson(value);
        case 'InlineObject44':
          return InlineObject44.fromJson(value);
        case 'InlineObject45':
          return InlineObject45.fromJson(value);
        case 'InlineObject46':
          return InlineObject46.fromJson(value);
        case 'InlineObject47':
          return InlineObject47.fromJson(value);
        case 'InlineObject48':
          return InlineObject48.fromJson(value);
        case 'InlineObject49':
          return InlineObject49.fromJson(value);
        case 'InlineObject5':
          return InlineObject5.fromJson(value);
        case 'InlineObject50':
          return InlineObject50.fromJson(value);
        case 'InlineObject51':
          return InlineObject51.fromJson(value);
        case 'InlineObject6':
          return InlineObject6.fromJson(value);
        case 'InlineObject7':
          return InlineObject7.fromJson(value);
        case 'InlineObject8':
          return InlineObject8.fromJson(value);
        case 'InlineObject9':
          return InlineObject9.fromJson(value);
        case 'InlineResponse200':
          return InlineResponse200.fromJson(value);
        case 'InlineResponse2001':
          return InlineResponse2001.fromJson(value);
        case 'InlineResponse20010':
          return InlineResponse20010.fromJson(value);
        case 'InlineResponse20011':
          return InlineResponse20011.fromJson(value);
        case 'InlineResponse20012':
          return InlineResponse20012.fromJson(value);
        case 'InlineResponse20013':
          return InlineResponse20013.fromJson(value);
        case 'InlineResponse20014':
          return InlineResponse20014.fromJson(value);
        case 'InlineResponse20015':
          return InlineResponse20015.fromJson(value);
        case 'InlineResponse20016':
          return InlineResponse20016.fromJson(value);
        case 'InlineResponse20017':
          return InlineResponse20017.fromJson(value);
        case 'InlineResponse20018':
          return InlineResponse20018.fromJson(value);
        case 'InlineResponse20019':
          return InlineResponse20019.fromJson(value);
        case 'InlineResponse2002':
          return InlineResponse2002.fromJson(value);
        case 'InlineResponse2003':
          return InlineResponse2003.fromJson(value);
        case 'InlineResponse2004':
          return InlineResponse2004.fromJson(value);
        case 'InlineResponse2005':
          return InlineResponse2005.fromJson(value);
        case 'InlineResponse2006':
          return InlineResponse2006.fromJson(value);
        case 'InlineResponse2007':
          return InlineResponse2007.fromJson(value);
        case 'InlineResponse2008':
          return InlineResponse2008.fromJson(value);
        case 'InlineResponse2009':
          return InlineResponse2009.fromJson(value);
        case 'MedicalHistory':
          return MedicalHistory.fromJson(value);
        case 'MedicalHistoryInput':
          return MedicalHistoryInput.fromJson(value);
        case 'MedicineEnum':
          return MedicineEnum.fromJson(value);
        case 'MedicineEnumInput':
          return MedicineEnumInput.fromJson(value);
        case 'MedicineInventory':
          return MedicineInventory.fromJson(value);
        case 'MedicineInventoryInput':
          return MedicineInventoryInput.fromJson(value);
        case 'MedicineSupplies':
          return MedicineSupplies.fromJson(value);
        case 'MedicineSuppliesInput':
          return MedicineSuppliesInput.fromJson(value);
        case 'Patient':
          return Patient.fromJson(value);
        case 'PatientDocument':
          return PatientDocument.fromJson(value);
        case 'PatientDocumentInput':
          return PatientDocumentInput.fromJson(value);
        case 'PatientInput':
          return PatientInput.fromJson(value);
        case 'PatientVisit':
          return PatientVisit.fromJson(value);
        case 'PatientVisitInput':
          return PatientVisitInput.fromJson(value);
        case 'Settings':
          return Settings.fromJson(value);
        case 'SettingsInput':
          return SettingsInput.fromJson(value);
        case 'SymptomsEnum':
          return SymptomsEnum.fromJson(value);
        case 'SymptomsEnumInput':
          return SymptomsEnumInput.fromJson(value);
        case 'Tenant':
          return Tenant.fromJson(value);
        case 'TenantInput':
          return TenantInput.fromJson(value);
        case 'TenantTenantIdUserData':
          return TenantTenantIdUserData.fromJson(value);
        case 'TenantTenantIdUserData1':
          return TenantTenantIdUserData1.fromJson(value);
        case 'TenantTenantIdUserImportData':
          return TenantTenantIdUserImportData.fromJson(value);
        case 'TenantUser':
          return TenantUser.fromJson(value);
        case 'User':
          return User.fromJson(value);
        case 'UserCurrent':
          return UserCurrent.fromJson(value);
        case 'UserRelated':
          return UserRelated.fromJson(value);
        default:
          Match match;
          if (value is List && (match = _regList.firstMatch(targetType)) != null) {
            targetType = match[1]; // ignore: parameter_assignments
            return value
              .map<dynamic>((dynamic v) => _deserialize(v, targetType, growable: growable))
              .toList(growable: growable);
          }
          if (value is Set && (match = _regSet.firstMatch(targetType)) != null) {
            targetType = match[1]; // ignore: parameter_assignments
            return value
              .map<dynamic>((dynamic v) => _deserialize(v, targetType, growable: growable))
              .toSet();
          }
          if (value is Map && (match = _regMap.firstMatch(targetType)) != null) {
            targetType = match[1]; // ignore: parameter_assignments
            return Map<String, dynamic>.fromIterables(
              value.keys.cast<String>(),
              value.values.map<dynamic>((dynamic v) => _deserialize(v, targetType, growable: growable)),
            );
          }
      }
    } on Exception catch (error, trace) {
      throw ApiException.withInner(HttpStatus.internalServerError, 'Exception during deserialization.', error, trace,);
    }
    throw ApiException(HttpStatus.internalServerError, 'Could not find a suitable class for deserialization',);
  }
}

/// Primarily intended for use in an isolate.
class DeserializationMessage {
  const DeserializationMessage({
    @required this.json,
    @required this.targetType,
    this.growable,
  });

  /// The JSON value to deserialize.
  final String json;

  /// Target type to deserialize to.
  final String targetType;

  /// Whether to make deserialized lists or maps growable.
  final bool growable;
}

/// Primarily intended for use in an isolate.
Future<dynamic> deserializeAsync(DeserializationMessage message) async {
  // Remove all spaces. Necessary for regular expressions as well.
  final targetType = message.targetType.replaceAll(' ', '');

  // If the expected target type is String, nothing to do...
  return targetType == 'String'
    ? message.json
    : ApiClient._deserialize(
        jsonDecode(message.json),
        targetType,
        growable: message.growable == true,
      );
}

/// Primarily intended for use in an isolate.
Future<String> serializeAsync(Object value) async => value == null ? '' : json.encode(value);
