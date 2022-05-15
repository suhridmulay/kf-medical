// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// StackedRouterGenerator
// **************************************************************************

// ignore_for_file: public_member_api_docs

import 'package:flutter/material.dart';
import 'package:kf_openapi_generated/api.dart';
import 'package:stacked/stacked.dart';
import 'package:stacked/stacked_annotations.dart';

import '../ui/dashboard/dashboard_V.dart';
import '../ui/login/login_V.dart';
import '../ui/patient/form/patient_form_V.dart';
import '../ui/patient/patient_V.dart';
import '../ui/patient/search/patient_search_V.dart';
import '../ui/visit/form/visit_form_V.dart';

class Routes {
  static const String loginView = '/';
  static const String dashboardView = '/dashboard-view';
  static const String patientView = '/patient-view';
  static const String visitFormView = '/visit-form-view';
  static const String patientFormView = '/patient-form-view';
  static const String patientSearchView = '/patient-search-view';
  static const all = <String>{
    loginView,
    dashboardView,
    patientView,
    visitFormView,
    patientFormView,
    patientSearchView,
  };
}

class StackedRouter extends RouterBase {
  @override
  List<RouteDef> get routes => _routes;
  final _routes = <RouteDef>[
    RouteDef(Routes.loginView, page: LoginView),
    RouteDef(Routes.dashboardView, page: DashboardView),
    RouteDef(Routes.patientView, page: PatientView),
    RouteDef(Routes.visitFormView, page: VisitFormView),
    RouteDef(Routes.patientFormView, page: PatientFormView),
    RouteDef(Routes.patientSearchView, page: PatientSearchView),
  ];
  @override
  Map<Type, StackedRouteFactory> get pagesMap => _pagesMap;
  final _pagesMap = <Type, StackedRouteFactory>{
    LoginView: (data) {
      var args = data.getArgs<LoginViewArguments>(
        orElse: () => LoginViewArguments(),
      );
      return MaterialPageRoute<dynamic>(
        builder: (context) => LoginView(key: args.key),
        settings: data,
      );
    },
    DashboardView: (data) {
      var args = data.getArgs<DashboardViewArguments>(
        orElse: () => DashboardViewArguments(),
      );
      return MaterialPageRoute<dynamic>(
        builder: (context) => DashboardView(key: args.key),
        settings: data,
      );
    },
    PatientView: (data) {
      var args = data.getArgs<PatientViewArguments>(nullOk: false);
      return MaterialPageRoute<dynamic>(
        builder: (context) => PatientView(
          key: args.key,
          patient: args.patient,
        ),
        settings: data,
      );
    },
    VisitFormView: (data) {
      var args = data.getArgs<VisitFormViewArguments>(
        orElse: () => VisitFormViewArguments(),
      );
      return MaterialPageRoute<dynamic>(
        builder: (context) => VisitFormView(
          key: args.key,
          visit: args.visit,
          patient: args.patient,
        ),
        settings: data,
      );
    },
    PatientFormView: (data) {
      var args = data.getArgs<PatientFormViewArguments>(
        orElse: () => PatientFormViewArguments(),
      );
      return MaterialPageRoute<dynamic>(
        builder: (context) => PatientFormView(
          key: args.key,
          patient: args.patient,
        ),
        settings: data,
      );
    },
    PatientSearchView: (data) {
      return MaterialPageRoute<dynamic>(
        builder: (context) => const PatientSearchView(),
        settings: data,
      );
    },
  };
}

/// ************************************************************************
/// Arguments holder classes
/// *************************************************************************

/// LoginView arguments holder class
class LoginViewArguments {
  final Key? key;
  LoginViewArguments({this.key});
}

/// DashboardView arguments holder class
class DashboardViewArguments {
  final Key? key;
  DashboardViewArguments({this.key});
}

/// PatientView arguments holder class
class PatientViewArguments {
  final Key? key;
  final Patient patient;
  PatientViewArguments({this.key, required this.patient});
}

/// VisitFormView arguments holder class
class VisitFormViewArguments {
  final Key? key;
  final PatientVisit? visit;
  final Patient? patient;
  VisitFormViewArguments({this.key, this.visit, this.patient});
}

/// PatientFormView arguments holder class
class PatientFormViewArguments {
  final Key? key;
  final Patient? patient;
  PatientFormViewArguments({this.key, this.patient});
}
