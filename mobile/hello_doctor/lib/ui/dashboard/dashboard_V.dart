import 'package:flutter/material.dart';
import 'package:hello_doctor/app/app.locator.dart';
import 'package:hello_doctor/app/app.router.dart';
import 'package:hello_doctor/utils/colors.dart';
import 'package:kf_openapi_generated/api.dart';
import 'package:stacked/stacked.dart';
import 'package:stacked_services/stacked_services.dart';

import 'dashboard_VM.dart';

class DashboardView extends StatelessWidget {
  DashboardView({Key? key}) : super(key: key);
  NavigationService _navigationService = locator<NavigationService>();

  @override
  Widget build(BuildContext context) {
    return ViewModelBuilder<DashboardViewModel>.reactive(
      builder: (context, model, child) => Scaffold(
        appBar: AppBar(
          title: const Text("Hello Doctor!"),
        ),
        drawer: Drawer(
          child: Column(
            children: [
              DrawerHeader(
                decoration: const BoxDecoration(color: Colors.blue),
                child: Row(
                  children: const [
                    CircleAvatar(
                      foregroundImage: AssetImage('assets/images/user.png'),
                      radius: 50,
                    )
                  ],
                ),
              ),
              ElevatedButton(
                  onPressed: model.signOut, child: const Text("Sign out"))
            ],
          ),
        ),
        body: Padding(
          padding: const EdgeInsets.all(8.0),
          child: ListView(
            children: [
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: ListTile(
                  tileColor: blueBG,
                  iconColor: blueTC,
                  textColor: blueTC,
                  title: const Text(
                    "Find Patients",
                    style: TextStyle(fontSize: 20),
                  ),
                  leading: const Icon(Icons.search),
                  shape: const RoundedRectangleBorder(
                    borderRadius: BorderRadius.all(
                      Radius.circular(20),
                    ),
                  ),
                  onTap: () => {},
                ),
              ),
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: ListTile(
                  tileColor: redBG,
                  iconColor: redTC,
                  textColor: redTC,
                  title: const Text(
                    "Add Patient",
                    style: TextStyle(fontSize: 20),
                  ),
                  leading: const Icon(Icons.person_add),
                  shape: const RoundedRectangleBorder(
                    borderRadius: BorderRadius.all(
                      Radius.circular(20),
                    ),
                  ),
                  onTap: () =>
                      {_navigationService.navigateTo(Routes.patientFormView)},
                ),
              ),
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: ListTile(
                  tileColor: greenBG,
                  iconColor: greenTC,
                  textColor: greenTC,
                  title: const Text(
                    "Add Visit",
                    style: TextStyle(fontSize: 20),
                  ),
                  leading: const Icon(Icons.post_add),
                  shape: const RoundedRectangleBorder(
                    borderRadius: BorderRadius.all(
                      Radius.circular(20),
                    ),
                  ),
                  onTap: () =>
                      {_navigationService.navigateTo(Routes.visitFormView)},
                ),
              ),
            ],
          ),
        ),
      ),
      viewModelBuilder: () => DashboardViewModel(),
      onModelReady: (model) => model.initialise(),
    );
  }
}
