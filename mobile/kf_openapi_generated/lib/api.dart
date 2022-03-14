//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

library openapi.api;

import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:http/http.dart';
import 'package:intl/intl.dart';
import 'package:meta/meta.dart';

part 'api_client.dart';
part 'api_helper.dart';
part 'api_exception.dart';
part 'auth/authentication.dart';
part 'auth/api_key_auth.dart';
part 'auth/oauth.dart';
part 'auth/http_basic_auth.dart';
part 'auth/http_bearer_auth.dart';

part 'api/audit_logs_api.dart';
part 'api/authentication_api.dart';
part 'api/chronic_disease_api.dart';
part 'api/diagnostic_lab_api.dart';
part 'api/doctor_api.dart';
part 'api/file_api.dart';
part 'api/health_center_api.dart';
part 'api/medical_history_api.dart';
part 'api/medicine_api.dart';
part 'api/medicine_inventory_api.dart';
part 'api/medicine_supplies_api.dart';
part 'api/patient_api.dart';
part 'api/patient_document_api.dart';
part 'api/patient_visit_api.dart';
part 'api/plan_api.dart';
part 'api/settings_api.dart';
part 'api/symptoms_enum_api.dart';
part 'api/tenant_api.dart';
part 'api/user_api.dart';

part 'model/audit_log.dart';
part 'model/auth_profile_data.dart';
part 'model/chronic_disease_enum.dart';
part 'model/chronic_disease_enum_input.dart';
part 'model/diagnostic_enum.dart';
part 'model/diagnostic_enum_input.dart';
part 'model/doctor.dart';
part 'model/doctor_input.dart';
part 'model/file.dart';
part 'model/file_input.dart';
part 'model/generic_entity.dart';
part 'model/generic_model.dart';
part 'model/health_center.dart';
part 'model/health_center_input.dart';
part 'model/inline_object.dart';
part 'model/inline_object1.dart';
part 'model/inline_object10.dart';
part 'model/inline_object11.dart';
part 'model/inline_object12.dart';
part 'model/inline_object13.dart';
part 'model/inline_object14.dart';
part 'model/inline_object15.dart';
part 'model/inline_object16.dart';
part 'model/inline_object17.dart';
part 'model/inline_object18.dart';
part 'model/inline_object19.dart';
part 'model/inline_object2.dart';
part 'model/inline_object20.dart';
part 'model/inline_object21.dart';
part 'model/inline_object22.dart';
part 'model/inline_object23.dart';
part 'model/inline_object24.dart';
part 'model/inline_object25.dart';
part 'model/inline_object26.dart';
part 'model/inline_object27.dart';
part 'model/inline_object28.dart';
part 'model/inline_object29.dart';
part 'model/inline_object3.dart';
part 'model/inline_object30.dart';
part 'model/inline_object31.dart';
part 'model/inline_object32.dart';
part 'model/inline_object33.dart';
part 'model/inline_object34.dart';
part 'model/inline_object35.dart';
part 'model/inline_object36.dart';
part 'model/inline_object37.dart';
part 'model/inline_object38.dart';
part 'model/inline_object39.dart';
part 'model/inline_object4.dart';
part 'model/inline_object40.dart';
part 'model/inline_object41.dart';
part 'model/inline_object42.dart';
part 'model/inline_object43.dart';
part 'model/inline_object44.dart';
part 'model/inline_object45.dart';
part 'model/inline_object46.dart';
part 'model/inline_object47.dart';
part 'model/inline_object48.dart';
part 'model/inline_object49.dart';
part 'model/inline_object5.dart';
part 'model/inline_object50.dart';
part 'model/inline_object51.dart';
part 'model/inline_object6.dart';
part 'model/inline_object7.dart';
part 'model/inline_object8.dart';
part 'model/inline_object9.dart';
part 'model/inline_response200.dart';
part 'model/inline_response2001.dart';
part 'model/inline_response20010.dart';
part 'model/inline_response20011.dart';
part 'model/inline_response20012.dart';
part 'model/inline_response20013.dart';
part 'model/inline_response20014.dart';
part 'model/inline_response20015.dart';
part 'model/inline_response20016.dart';
part 'model/inline_response20017.dart';
part 'model/inline_response20018.dart';
part 'model/inline_response20019.dart';
part 'model/inline_response2002.dart';
part 'model/inline_response2003.dart';
part 'model/inline_response2004.dart';
part 'model/inline_response2005.dart';
part 'model/inline_response2006.dart';
part 'model/inline_response2007.dart';
part 'model/inline_response2008.dart';
part 'model/inline_response2009.dart';
part 'model/medical_history.dart';
part 'model/medical_history_input.dart';
part 'model/medicine_enum.dart';
part 'model/medicine_enum_input.dart';
part 'model/medicine_inventory.dart';
part 'model/medicine_inventory_input.dart';
part 'model/medicine_supplies.dart';
part 'model/medicine_supplies_input.dart';
part 'model/patient.dart';
part 'model/patient_document.dart';
part 'model/patient_document_input.dart';
part 'model/patient_input.dart';
part 'model/patient_visit.dart';
part 'model/patient_visit_input.dart';
part 'model/settings.dart';
part 'model/settings_input.dart';
part 'model/symptoms_enum.dart';
part 'model/symptoms_enum_input.dart';
part 'model/tenant.dart';
part 'model/tenant_input.dart';
part 'model/tenant_tenant_id_user_data.dart';
part 'model/tenant_tenant_id_user_data1.dart';
part 'model/tenant_tenant_id_user_import_data.dart';
part 'model/tenant_user.dart';
part 'model/user.dart';
part 'model/user_current.dart';
part 'model/user_related.dart';


const _delimiters = {'csv': ',', 'ssv': ' ', 'tsv': '\t', 'pipes': '|'};
const _dateEpochMarker = 'epoch';
final _dateFormatter = DateFormat('yyyy-MM-dd');
final _regList = RegExp(r'^List<(.*)>$');
final _regSet = RegExp(r'^Set<(.*)>$');
final _regMap = RegExp(r'^Map<String,(.*)>$');

ApiClient defaultApiClient = ApiClient();
