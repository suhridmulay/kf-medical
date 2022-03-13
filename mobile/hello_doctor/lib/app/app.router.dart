// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// StackedRouterGenerator
// **************************************************************************

// ignore_for_file: public_member_api_docs

import 'package:flutter/material.dart';
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
      return MaterialPageRoute<dynamic>(
        builder: (context) => const DashboardView(),
        settings: data,
      );
    },
    PatientView: (data) {
      return MaterialPageRoute<dynamic>(
        builder: (context) => const PatientView(),
        settings: data,
      );
    },
    VisitView: (data) {
      return MaterialPageRoute<dynamic>(
        builder: (context) => const VisitView(),
        settings: data,
      );
    },
  };
}
