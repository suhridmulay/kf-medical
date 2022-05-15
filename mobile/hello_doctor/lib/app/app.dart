import 'package:hello_doctor/services/api_service.dart';
import 'package:hello_doctor/services/prefetch_service.dart';
import 'package:hello_doctor/ui/dashboard/dashboard_V.dart';
import 'package:hello_doctor/ui/login/login_V.dart';
import 'package:hello_doctor/ui/patient/form/patient_form_V.dart';
import 'package:hello_doctor/ui/patient/patient_V.dart';
import 'package:hello_doctor/ui/patient/search/patient_search_V.dart';
import 'package:hello_doctor/ui/visit/form/visit_form_V.dart';
import 'package:stacked/stacked_annotations.dart';
import 'package:stacked_services/stacked_services.dart';

@StackedApp(
  routes: [
    MaterialRoute(page: LoginView, initial: true),
    MaterialRoute(page: DashboardView),
    MaterialRoute(page: PatientView),
    MaterialRoute(page: VisitFormView),
    MaterialRoute(page: PatientFormView),
    MaterialRoute(page: PatientSearchView)
  ],
  dependencies: [
    Singleton(classType: NavigationService),
    Singleton(classType: APIService),
    Singleton(classType: PrefetchService),
    Singleton(classType: SnackbarService),
  ],
)
class App {
  /** This class has no puporse besides housing the annotation that generates the required functionality **/
}
