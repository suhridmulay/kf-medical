import 'package:flutter/material.dart';
import 'package:hello_doctor/app/app.locator.dart';
import 'package:hello_doctor/app/app.router.dart';
import 'package:intl/intl.dart';
import 'package:kf_openapi_generated/api.dart';
import 'package:stacked_services/stacked_services.dart';

class VisitBox extends StatelessWidget {
  PatientVisit visit;
  bool editable = false;
  VisitBox({Key? key, this.editable = false, required this.visit})
      : super(key: key);
  Color visitSeverityColor = Colors.grey;
  final NavigationService _navigationService = locator<NavigationService>();

  Widget build(BuildContext context) {
    switch (visit.caseSeverity) {
      case PatientVisitCaseSeverityEnum.green:
        visitSeverityColor = Colors.green.shade100;
        break;
      case PatientVisitCaseSeverityEnum.orange:
        visitSeverityColor = Colors.orange.shade100;
        break;
      case PatientVisitCaseSeverityEnum.red:
        visitSeverityColor = Colors.red.shade100;
        break;
      default:
        visitSeverityColor = Colors.grey.shade100;
    }
    return Card(
      color: visitSeverityColor,
      child: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Expanded(
                  child: Text(
                    "${DateFormat('dd/MM/yyyy').format(visit.visitDate)} | ${visit.medicalCenter.name}",
                    style: const TextStyle(
                      fontSize: 16,
                      fontWeight: FontWeight.bold,
                    ),
                    overflow: TextOverflow.ellipsis,
                  ),
                ),
                if (editable)
                  IconButton(
                    onPressed: () {
                      _navigationService.navigateTo(
                        Routes.visitView,
                        arguments: VisitViewArguments(
                          visit: visit,
                          patient: visit.patient,
                        ),
                      );
                    },
                    icon: const Icon(Icons.edit),
                  ),
              ],
            ),
            Divider(
              color: Colors.black,
            ),
            Table(
              columnWidths: const {
                0: FlexColumnWidth(4),
                1: FlexColumnWidth(6),
              },
              children: [
                if (visit.doctor != null)
                  TableRow(children: [
                    const Text("Doctor"),
                    Text(visit.doctor.name)
                  ]),
                if (visit.repeatVisit != null)
                  TableRow(children: [
                    const Text("Repeat Visit"),
                    Text(visit.repeatVisit ? "Yes" : "No")
                  ]),
                if (visit.symptom1 != null ||
                    visit.symptom2 != null ||
                    visit.symptom3 != null)
                  TableRow(children: [
                    const Text("Symptoms"),
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        if (visit.symptom1 != null)
                          Text(visit.symptom1.symptomName),
                        if (visit.symptom2 != null)
                          Text(visit.symptom2.symptomName),
                        if (visit.symptom3 != null)
                          Text(visit.symptom3.symptomName),
                      ],
                    )
                  ]),
                if (visit.otherSymptoms != null)
                  TableRow(children: [
                    const Text("Other Symptoms"),
                    Text(visit.otherSymptoms)
                  ]),
                if (visit.height != null)
                  TableRow(
                      children: [const Text("Height"), Text(visit.height)]),
                if (visit.weight != null)
                  TableRow(
                      children: [const Text("Weight"), Text(visit.weight)]),
                if (visit.temperature != null)
                  TableRow(children: [
                    const Text("Temprature"),
                    Text(visit.temperature)
                  ]),
                if (visit.bloodPressure != null)
                  TableRow(children: [
                    const Text("Blood Pressure"),
                    Text(visit.bloodPressure)
                  ]),
                if (visit.pulseRate != null)
                  TableRow(children: [
                    const Text("Pulse Rate"),
                    Text(visit.pulseRate)
                  ]),
                if (visit.oxygenLevel != null)
                  TableRow(children: [
                    const Text("Oxygen Level"),
                    Text(visit.oxygenLevel)
                  ]),
                if (visit.vitalStatisticsOther != null)
                  TableRow(children: [
                    const Text("Other Vital statistics"),
                    Text(visit.vitalStatisticsOther)
                  ]),
                if (visit.diagnosis != null)
                  TableRow(children: [
                    const Text("Diagnosis"),
                    Text(visit.diagnosis)
                  ]),
                if (visit.medicine1 != null ||
                    visit.medicine2 != null ||
                    visit.medicine3 != null ||
                    visit.medicine4 != null)
                  TableRow(
                    children: [
                      const Text("Medicines"),
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          if (visit.medicine1 != null)
                            Text(
                                "${visit.medicine1.medicineName} ${visit.med1Qty}"),
                          if (visit.medicine2 != null)
                            Text(
                                "${visit.medicine2.medicineName} ${visit.med2Qty}"),
                          if (visit.medicine3 != null)
                            Text(
                                "${visit.medicine3.medicineName} ${visit.med3Qty}"),
                          if (visit.medicine4 != null)
                            Text(
                                "${visit.medicine4.medicineName} ${visit.med4Qty}"),
                        ],
                      ),
                    ],
                  ),
                if (visit.medicineInstructions != null)
                  TableRow(children: [
                    const Text("Medicine Instructions"),
                    Text(visit.medicineInstructions)
                  ]),
                if (visit.requestedLabs != null)
                  TableRow(children: [
                    const Text("Requested Labs"),
                    Text(visit.requestedLabs)
                  ]),
                if (visit.dietaryInstructions != null)
                  TableRow(children: [
                    const Text("Dietary Instructions"),
                    Text(visit.dietaryInstructions)
                  ]),
                if (visit.differentialDiagnosis != null)
                  TableRow(children: [
                    const Text("Differential Diagnosis"),
                    Text(visit.differentialDiagnosis)
                  ]),
                if (visit.differentialRecommendation != null)
                  TableRow(children: [
                    const Text("Differential Recommendation"),
                    Text(visit.differentialRecommendation)
                  ]),
                if (visit.finalNotes != null)
                  TableRow(
                      children: [const Text("Notes"), Text(visit.finalNotes)]),
              ],
            )
          ],
        ),
      ),
    );
  }
}
