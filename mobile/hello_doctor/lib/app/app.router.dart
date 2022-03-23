// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// StackedRouterGenerator
// **************************************************************************

// ignore_for_file: public_member_api_docs

import 'package:flutter/material.dart';
import 'package:kf_openapi_generated/api.dart';
import 'package:stacked/stacked.dart';
import 'package:stacked/stacked_annotations.dart';

import '../ui/dashboard/DashboardV.dart';
import '../ui/login/loginV.dart';
import '../ui/patient/patientV.dart';
import '../ui/visit/visitV.dart';

class Routes {
  static const String loginView = '/';
  static const String dashboardView = '/dashboard-view';
  static const String patientView = '/patient-view';
  static const String visitView = '/visit-view';
  static const all = <String>{
    loginView,
    dashboardView,
    patientView,
    visitView,
  };
}

class StackedRouter extends RouterBase {
  @override
  List<RouteDef> get routes => _routes;
  final _routes = <RouteDef>[
    RouteDef(Routes.loginView, page: LoginView),
    RouteDef(Routes.dashboardView, page: DashboardView),
    RouteDef(Routes.patientView, page: PatientView),
    RouteDef(Routes.visitView, page: VisitView),
  ];
  @override
  Map<Type, StackedRouteFactory> get pagesMap => _pagesMap;
  final _pagesMap = <Type, StackedRouteFactory>{
    LoginView: (data) {
      return MaterialPageRoute<dynamic>(
        builder: (context) => const LoginView(),
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
    VisitView: (data) {
      var args = data.getArgs<VisitViewArguments>(
        orElse: () => VisitViewArguments(),
      );
      return MaterialPageRoute<dynamic>(
        builder: (context) => VisitView(
          key: args.key,
          visit: args.visit,
          patient: args.patient,
        ),
        settings: data,
      );
    },
  };
}

/// ************************************************************************
/// Arguments holder classes
/// *************************************************************************

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

/// VisitView arguments holder class
class VisitViewArguments {
  final Key? key;
  final PatientVisit? visit;
  final Patient? patient;
  VisitViewArguments({this.key, this.visit, this.patient});
}
