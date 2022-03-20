import 'package:flutter/material.dart';
import 'package:hello_doctor/app/app.locator.dart';
import 'package:hello_doctor/app/app.router.dart';
import 'package:kf_openapi_generated/api.dart';
import 'package:stacked/stacked.dart';
import 'package:stacked_services/stacked_services.dart';

import 'DashboardVM.dart';

class DashboardView extends StatelessWidget {
  DashboardView({Key? key}) : super(key: key);
  NavigationService _navigationService = locator<NavigationService>();

  @override
  Widget build(BuildContext context) {
    return ViewModelBuilder<DashboardViewModel>.reactive(
      builder: (context, model, child) => Scaffold(
        appBar: AppBar(
          title: Text("Hello Doctor!"),
        ),
        drawer: Drawer(
            child: Column(
          children: [
            DrawerHeader(child: Row()),
            const ListTile(
              title: Text("Patients by location"),
            ),
          ],
        )),
        body: Padding(
          padding: const EdgeInsets.all(8.0),
          child: ListView(
            children: [
              const Padding(
                padding: EdgeInsets.all(8.0),
                child: TextField(
                  decoration: InputDecoration(
                    border: OutlineInputBorder(),
                    hintText: "Search for patients",
                    suffixIcon: Icon(Icons.search),
                  ),
                ),
              ),
              Card(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Padding(
                      padding: EdgeInsets.all(8.0),
                      child: Text(
                        "Patients Today",
                        style: TextStyle(
                          fontSize: 16,
                          color: Colors.grey,
                        ),
                      ),
                    ),
                    ...model.patientsToday.map(
                      (Patient patient) => ListTile(
                        title: Text(patient.fullName),
                        subtitle: Text(
                            "${patient.age} | ${patient.gender == PatientGenderEnum.male ? "M" : "F"} | ${patient.mobileNumber}"),
                        leading: CircleAvatar(),
                        onTap: () => {
                          _navigationService.navigateTo(
                            Routes.patientView,
                            arguments: PatientViewArguments(patient: patient),
                          )
                        },
                      ),
                    ),
                  ],
                ),
              ),
              Card(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Padding(
                      padding: EdgeInsets.all(8.0),
                      child: Text(
                        "Patients Tomorrow",
                        style: TextStyle(
                          fontSize: 16,
                          color: Colors.grey,
                        ),
                      ),
                    ),
                    ...model.patientsToday.map(
                      (Patient patient) => ListTile(
                        title: Text(patient.fullName),
                        subtitle: Text(
                            "${patient.age} | ${patient.gender == PatientGenderEnum.male ? "M" : "F"} | ${patient.mobileNumber}"),
                        leading: CircleAvatar(),
                        onTap: () => {
                          _navigationService.navigateTo(
                            Routes.patientView,
                            arguments: PatientViewArguments(patient: patient),
                          )
                        },
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
      viewModelBuilder: () => DashboardViewModel(),
    );
  }
}
