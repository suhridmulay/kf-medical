import 'package:flutter/material.dart';
import 'package:hello_doctor/app/app.locator.dart';
import 'package:hello_doctor/app/app.router.dart';
import 'package:hello_doctor/ui/visit/visitBox.dart';
import 'package:hello_doctor/utils/demoData.dart';
import 'package:kf_openapi_generated/api.dart';
import 'package:stacked/stacked.dart';
import 'package:stacked_services/stacked_services.dart';

import 'patientVM.dart';

class PatientView extends StatelessWidget {
  Patient patient;
  PatientView({Key? key, required this.patient}) : super(key: key);
  NavigationService _navigationService = locator<NavigationService>();

  @override
  Widget build(BuildContext context) {
    return ViewModelBuilder<PatientViewModel>.reactive(
      builder: (context, model, child) => Scaffold(
        appBar: AppBar(
          title: Text(patient.fullName),
        ),
        floatingActionButton: FloatingActionButton.extended(
            onPressed: () {
              _navigationService.navigateTo(
                Routes.visitView,
                arguments: VisitViewArguments(patient: patient),
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
                              Text(patient.mobileNumber),
                              Text(
                                  "${patient.age} | ${patient.gender == PatientGenderEnum.male ? 'M' : 'F'}"),
                              Text(patient.aadharNumber),
                              Text(patient.localityName),
                              Text(patient.dateOfBirth.toString())
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
                VisitBox(
                  editable: true,
                  visit: PatientVisit(
                    patient: demoPatient,
                    visitDate: DateTime.now(),
                    medicalCenter:
                        HealthCenter(name: "Anand Vatika Healtcare Center"),
                    caseSeverity: PatientVisitCaseSeverityEnum.green,
                    doctor: Doctor(name: "Anand Kumar"),
                    repeatVisit: true,
                    symptom1: SymptomsEnum(symptomName: "Headache"),
                    symptom2: SymptomsEnum(symptomName: "Stomach Ache"),
                    symptom3: SymptomsEnum(symptomName: "Runny nose"),
                    otherSymptoms: "Red eyes",
                    height: "5'10\"",
                    weight: "60 Kg",
                    temperature: "98.8 C",
                    bloodPressure: "120/80",
                    pulseRate: "72 bpm",
                    oxygenLevel: "100 spo2",
                    vitalStatisticsOther: "lung vol 2L",
                    diagnosis: "Flu",
                    medicine1: MedicineEnum(medicineName: "Paracetamol"),
                    med1Qty: 5,
                    medicine2: MedicineEnum(medicineName: "Calpol"),
                    med2Qty: 5,
                    medicine3: MedicineEnum(medicineName: "Benadryl"),
                    med3Qty: 5,
                    medicine4: MedicineEnum(medicineName: "Honeytus"),
                    med4Qty: 5,
                    medicineInstructions: "One daily after dinner",
                    dietaryInstructions: "Daliya",
                    differentialDiagnosis: "Flu",
                    differentialRecommendation: "Drink lots of boiled water",
                  ),
                ),
                VisitBox(
                  visit: PatientVisit(
                    patient: demoPatient,
                    visitDate: DateTime.now(),
                    medicalCenter:
                        HealthCenter(name: "Anand Vatika Healtcare Center"),
                    caseSeverity: PatientVisitCaseSeverityEnum.orange,
                    doctor: Doctor(name: "Anand Kumar"),
                    repeatVisit: true,
                    symptom1: SymptomsEnum(symptomName: "Headache"),
                    medicineInstructions: "One daily after dinner",
                    dietaryInstructions: "Daliya",
                    differentialDiagnosis: "Flu",
                    differentialRecommendation: "Drink lots of boiled water",
                  ),
                ),
                VisitBox(
                  visit: PatientVisit(
                    patient: demoPatient,
                    visitDate: DateTime.now(),
                    medicalCenter:
                        HealthCenter(name: "Anand Vatika Healtcare Center"),
                    caseSeverity: PatientVisitCaseSeverityEnum.red,
                    doctor: Doctor(name: "Anand Kumar"),
                    repeatVisit: true,
                    symptom1: SymptomsEnum(symptomName: "Headache"),
                    medicineInstructions: "One daily after dinner",
                    dietaryInstructions: "Daliya",
                    differentialDiagnosis: "Flu",
                    differentialRecommendation: "Drink lots of boiled water",
                  ),
                ),
              ]),
            ),
          ],
        ),
      ),
      viewModelBuilder: () => PatientViewModel(),
    );
  }
}
