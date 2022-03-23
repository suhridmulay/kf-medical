import 'package:hello_doctor/services/api/apiService.dart';
import 'package:hello_doctor/services/prefetchService.dart';
import 'package:hello_doctor/ui/dashboard/DashboardV.dart';
import 'package:hello_doctor/ui/login/loginV.dart';
import 'package:hello_doctor/ui/patient/patientV.dart';
import 'package:hello_doctor/ui/visit/visitV.dart';
import 'package:stacked/stacked_annotations.dart';
import 'package:stacked_services/stacked_services.dart';

@StackedApp(
  routes: [
    MaterialRoute(page: LoginView, initial: true),
    MaterialRoute(page: DashboardView),
    MaterialRoute(page: PatientView),
    MaterialRoute(page: VisitView),
  ],
  dependencies: [
    Singleton(classType: NavigationService),
    Singleton(classType: APIService),
    Singleton(classType: PrefetchService),
  ],
)
class App {
  /** This class has no puporse besides housing the annotation that generates the required functionality **/
}
