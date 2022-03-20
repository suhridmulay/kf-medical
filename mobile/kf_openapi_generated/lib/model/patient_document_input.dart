//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class PatientDocumentInput {
  /// Returns a new [PatientDocumentInput] instance.
  PatientDocumentInput({
    this.patient,
    this.image = const [],
    this.reportName,
    this.reportDate,
  });

  String patient;

  List<FileInput> image;

  String reportName;

  DateTime reportDate;

  @override
  bool operator ==(Object other) => identical(this, other) || other is PatientDocumentInput &&
     other.patient == patient &&
     other.image == image &&
     other.reportName == reportName &&
     other.reportDate == reportDate;

  @override
  int get hashCode =>
  // ignore: unnecessary_parenthesis
    (patient == null ? 0 : patient.hashCode) +
    (image == null ? 0 : image.hashCode) +
    (reportName == null ? 0 : reportName.hashCode) +
    (reportDate == null ? 0 : reportDate.hashCode);

  @override
  String toString() => 'PatientDocumentInput[patient=$patient, image=$image, reportName=$reportName, reportDate=$reportDate]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (patient != null) {
      json[r'patient'] = patient;
    }
    if (image != null) {
      json[r'image'] = image;
    }
    if (reportName != null) {
      json[r'reportName'] = reportName;
    }
    if (reportDate != null) {
      json[r'reportDate'] = _dateFormatter.format(reportDate.toUtc());
    }
    return json;
  }

  /// Returns a new [PatientDocumentInput] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static PatientDocumentInput fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();
      return PatientDocumentInput(
        patient: mapValueOfType<String>(json, r'patient'),
        image: FileInput.listFromJson(json[r'image']),
        reportName: mapValueOfType<String>(json, r'reportName'),
        reportDate: mapDateTime(json, r'reportDate', ''),
      );
    }
    return null;
  }

  static List<PatientDocumentInput> listFromJson(dynamic json, {bool emptyIsNull, bool growable,}) =>
    json is List && json.isNotEmpty
      ? json.map(PatientDocumentInput.fromJson).toList(growable: true == growable)
      : true == emptyIsNull ? null : <PatientDocumentInput>[];

  static Map<String, PatientDocumentInput> mapFromJson(dynamic json) {
    final map = <String, PatientDocumentInput>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) => map[key] = PatientDocumentInput.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of PatientDocumentInput-objects as value to a dart map
  static Map<String, List<PatientDocumentInput>> mapListFromJson(dynamic json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<PatientDocumentInput>>{};
    if (json is Map && json.isNotEmpty) {
      json
        .cast<String, dynamic>()
        .forEach((key, dynamic value) {
          map[key] = PatientDocumentInput.listFromJson(
            value,
            emptyIsNull: emptyIsNull,
            growable: growable,
          );
        });
    }
    return map;
  }
}

