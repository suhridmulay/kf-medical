import 'package:flutter/material.dart';
import 'package:hello_doctor/app/app.locator.dart';
import 'package:hello_doctor/app/app.router.dart';
import 'package:hello_doctor/ui/visit/visit_box.dart';
import 'package:kf_openapi_generated/api.dart';
import 'package:stacked/stacked.dart';
import 'package:stacked_services/stacked_services.dart';

import 'patient_VM.dart';

class PatientView extends StatelessWidget {
  Patient patient;
  PatientView({Key? key, required this.patient}) : super(key: key);
  NavigationService _navigationService = locator<NavigationService>();

  @override
  Widget build(BuildContext context) {
    print(patient);
    return ViewModelBuilder<PatientViewModel>.reactive(
      builder: (context, model, child) => Scaffold(
        appBar: AppBar(
          title: Text(patient.fullName),
        ),
        floatingActionButton: FloatingActionButton.extended(
            onPressed: () {
              _navigationService.navigateTo(
                Routes.visitFormView,
                arguments: VisitFormViewArguments(patient: patient),
              );
            },
            label: Row(
              children: const [
                Icon(
                  Icons.add,
                  size: 24,
                ),
                Padding(padding: EdgeInsets.all(2)),
                Text("Add Visit")
              ],
            )),
        body: ListView(
          children: [
            Card(
              child: Stack(
                children: [
                  Positioned(
                    child: IconButton(
                      icon: const Icon(Icons.edit),
                      color: Colors.blue,
                      iconSize: 18,
                      onPressed: () {
                        _navigationService.navigateTo(Routes.patientFormView,
                            arguments:
                                PatientFormViewArguments(patient: patient));
                      },
                    ),
                    top: 0,
                    right: 0,
                  ),
                  IntrinsicHeight(
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: [
                        const Padding(
                          padding: EdgeInsets.all(16.0),
                          child: CircleAvatar(
                            minRadius: 50,
                            foregroundImage:
                                AssetImage("assets/images/user.png"),
                          ),
                        ),
                        const VerticalDivider(
                          width: 30,
                          thickness: 1,
                          indent: 20,
                          endIndent: 20,
                        ),
                        IntrinsicHeight(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(patient.fullName),
                              Text(patient.mobileNumber ?? "Mobile not found"),
                              Text(
                                  "${patient.age} | ${patient.gender == PatientGenderEnum.male ? 'M' : 'F'}"),
                              Text(
                                  patient.localityName ?? "Locality not found"),
                            ],
                          ),
                        )
                      ],
                    ),
                  ),
                ],
              ),
            ),
            Card(
              child: Column(children: [
                const Padding(
                  padding: EdgeInsets.all(8.0),
                  child: Text(
                    "Visits and Lab reports",
                    style: TextStyle(fontSize: 24),
                  ),
                ),
                ...patient.medicalVisits.map((visit) => VisitBox(visit: visit)),
              ]),
            ),
          ],
        ),
      ),
      viewModelBuilder: () => PatientViewModel(),
    );
  }
}
