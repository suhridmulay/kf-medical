import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:hello_doctor/app/app.locator.dart';
import 'package:hello_doctor/services/prefetchService.dart';
import 'package:intl/intl.dart';
import 'package:kf_openapi_generated/api.dart';
import 'package:stacked/stacked.dart';

import 'visitVM.dart';

class VisitView extends StatelessWidget {
  PatientVisit? visit;
  Patient? patient;
  final formKey = GlobalKey<FormBuilderState>();
  VisitView({Key? key, this.visit, this.patient}) : super(key: key);

  final prefetchService = locator<PrefetchService>();

  @override
  Widget build(BuildContext context) {
    Size screenSize = MediaQuery.of(context).size;

    return ViewModelBuilder<VisitViewModel>.reactive(
      builder: (context, model, child) => Scaffold(
        appBar: AppBar(
          title: Text(visit != null ? "Edit Visit" : "Add a new Visit"),
        ),
        body: ListView(
          children: [
            FormBuilder(
              key: formKey,
              child: Column(
                children: [
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: FormBuilderDropdown(
                      name: 'patient',
                      enabled: false,
                      initialValue: patient!.id,
                      items: [
                        DropdownMenuItem(
                          child: Text(patient!.fullName),
                          value: patient!.id,
                        )
                      ],
                      decoration: const InputDecoration(
                        border: OutlineInputBorder(),
                        label: Text('Patient'),
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: FormBuilderDropdown(
                      name: 'medicalCenter',
                      decoration: const InputDecoration(
                        border: OutlineInputBorder(),
                        label: Text('Medical Center'),
                      ),
                      items: [
                        ...prefetchService.healthCenters.map(
                          (healthCenter) => DropdownMenuItem(
                            child: Text(healthCenter.name),
                            value: healthCenter.id,
                          ),
                        )
                      ],
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: FormBuilderDateTimePicker(
                      name: 'visitDate',
                      decoration: const InputDecoration(
                        border: OutlineInputBorder(),
                        label: Text('Visit Date'),
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: FormBuilderCheckbox(
                      name: 'repeatVisit',
                      decoration: const InputDecoration(
                        border: OutlineInputBorder(),
                        contentPadding: EdgeInsets.all(0),
                      ),
                      title: const Text('Repeat visit'),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: FormBuilderDropdown(
                      name: 'symptom1',
                      decoration: const InputDecoration(
                        border: OutlineInputBorder(),
                        label: Text('Symptom 1'),
                      ),
                      items: [
                        ...prefetchService.symptoms
                            .map((symptom) => DropdownMenuItem(
                                  value: symptom.id,
                                  child: Text(symptom.symptomName),
                                ))
                      ],
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: FormBuilderDropdown(
                      name: 'symptom2',
                      decoration: const InputDecoration(
                        border: OutlineInputBorder(),
                        label: Text('Symptom 2'),
                      ),
                      items: [
                        ...prefetchService.symptoms
                            .map((symptom) => DropdownMenuItem(
                                  value: symptom.id,
                                  child: Text(symptom.symptomName),
                                ))
                      ],
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: FormBuilderDropdown(
                      name: 'symptom 3',
                      decoration: const InputDecoration(
                        border: OutlineInputBorder(),
                        label: Text('Symptom 3'),
                      ),
                      items: [
                        ...prefetchService.symptoms
                            .map((symptom) => DropdownMenuItem(
                                  value: symptom.id,
                                  child: Text(symptom.symptomName),
                                ))
                      ],
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: FormBuilderTextField(
                      name: 'otherSymptoms',
                      minLines: 5,
                      maxLines: 10,
                      decoration: const InputDecoration(
                        border: OutlineInputBorder(),
                        label: Text('Other Symptoms'),
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: FormBuilderSlider(
                      name: 'height',
                      min: 50,
                      max: 200,
                      initialValue: 160,
                      decoration: const InputDecoration(
                        label: Text('Height'),
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: FormBuilderSlider(
                      name: 'weight',
                      min: 0,
                      max: 200,
                      initialValue: 70,
                      decoration: const InputDecoration(
                        label: Text('Weight'),
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: FormBuilderSlider(
                      min: 97.0,
                      max: 105.0,
                      initialValue: 98.6,
                      name: 'temperature',
                      numberFormat: NumberFormat("###.0"),
                      decoration: const InputDecoration(
                        label: Text('Temprature'),
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: FormBuilderTextField(
                      name: 'bloodPressure',
                      decoration: const InputDecoration(
                        border: OutlineInputBorder(),
                        label: Text('Blood Pressure'),
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: FormBuilderTextField(
                      name: 'pulseRate',
                      decoration: const InputDecoration(
                        border: OutlineInputBorder(),
                        label: Text('Pulse Rate'),
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: FormBuilderTextField(
                      name: 'oxygenLevel',
                      decoration: const InputDecoration(
                        border: OutlineInputBorder(),
                        label: Text('Oxygen Level'),
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: FormBuilderTextField(
                      name: 'vitalStatisticsOther',
                      minLines: 2,
                      maxLines: 5,
                      decoration: const InputDecoration(
                        border: OutlineInputBorder(),
                        label: Text('Other Vital Statistics'),
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: FormBuilderTextField(
                      name: 'diagnosis',
                      minLines: 5,
                      maxLines: 10,
                      decoration: const InputDecoration(
                        border: OutlineInputBorder(),
                        label: Text('Diagnosis'),
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: FormBuilderTextField(
                      name: 'caseSeverity',
                      decoration: const InputDecoration(
                        border: OutlineInputBorder(),
                        label: Text('Case Severity'),
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Row(
                      children: [
                        Flexible(
                          flex: 3,
                          child: FormBuilderDropdown(
                            name: 'medicine1',
                            decoration: const InputDecoration(
                              border: OutlineInputBorder(),
                              label: Text('Medicine 1'),
                            ),
                            items: [
                              ...prefetchService.medicines.map(
                                (medicine) => DropdownMenuItem(
                                  child: Text(medicine.medicineName),
                                  value: medicine.id,
                                ),
                              ),
                            ],
                          ),
                        ),
                        Padding(padding: EdgeInsets.all(4)),
                        Flexible(
                          child: FormBuilderTextField(
                            name: 'med1Qty',
                            decoration: const InputDecoration(
                              border: OutlineInputBorder(),
                              label: Text('Qty'),
                            ),
                            keyboardType: TextInputType.number,
                          ),
                        ),
                        Padding(padding: EdgeInsets.all(4)),
                        Flexible(
                          child: FormBuilderCheckbox(
                            name: 'med1Supplied',
                            title: Text(''),
                          ),
                        ),
                      ],
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Row(
                      children: [
                        Flexible(
                          flex: 3,
                          child: FormBuilderDropdown(
                            name: 'medicine2',
                            decoration: const InputDecoration(
                              border: OutlineInputBorder(),
                              label: Text('Medicine 2'),
                            ),
                            items: [
                              ...prefetchService.medicines.map(
                                (medicine) => DropdownMenuItem(
                                  child: Text(medicine.medicineName),
                                  value: medicine.id,
                                ),
                              ),
                            ],
                          ),
                        ),
                        Padding(padding: EdgeInsets.all(4)),
                        Flexible(
                          child: FormBuilderTextField(
                            name: 'med2Qty',
                            decoration: const InputDecoration(
                              border: OutlineInputBorder(),
                              label: Text('Qty'),
                            ),
                            keyboardType: TextInputType.number,
                          ),
                        ),
                        Padding(padding: EdgeInsets.all(4)),
                        Flexible(
                          child: FormBuilderCheckbox(
                            name: 'med2Supplied',
                            title: Text(''),
                          ),
                        ),
                      ],
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Row(
                      children: [
                        Flexible(
                          flex: 3,
                          child: FormBuilderDropdown(
                            name: 'medicine3',
                            decoration: const InputDecoration(
                              border: OutlineInputBorder(),
                              label: Text('Medicine 3'),
                            ),
                            items: [
                              ...prefetchService.medicines.map(
                                (medicine) => DropdownMenuItem(
                                  child: Text(medicine.medicineName),
                                  value: medicine.id,
                                ),
                              ),
                            ],
                          ),
                        ),
                        Padding(padding: EdgeInsets.all(4)),
                        Flexible(
                          child: FormBuilderTextField(
                            name: 'med3Qty',
                            decoration: const InputDecoration(
                              border: OutlineInputBorder(),
                              label: Text('Qty'),
                            ),
                            keyboardType: TextInputType.number,
                          ),
                        ),
                        Padding(padding: EdgeInsets.all(4)),
                        Flexible(
                          child: FormBuilderCheckbox(
                            name: 'med3Supplied',
                            title: Text(''),
                          ),
                        ),
                      ],
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Row(
                      children: [
                        Flexible(
                          flex: 3,
                          child: FormBuilderDropdown(
                            name: 'medicine4',
                            decoration: const InputDecoration(
                              border: OutlineInputBorder(),
                              label: Text('Medicine 4'),
                            ),
                            items: [
                              ...prefetchService.medicines.map(
                                (medicine) => DropdownMenuItem(
                                  child: Text(medicine.medicineName),
                                  value: medicine.id,
                                ),
                              ),
                            ],
                          ),
                        ),
                        Padding(padding: EdgeInsets.all(4)),
                        Flexible(
                          child: FormBuilderTextField(
                            name: 'med4Qty',
                            decoration: const InputDecoration(
                              border: OutlineInputBorder(),
                              label: Text('Qty'),
                            ),
                            keyboardType: TextInputType.number,
                          ),
                        ),
                        Padding(padding: EdgeInsets.all(4)),
                        Flexible(
                          child: FormBuilderCheckbox(
                            name: 'med4Supplied',
                            title: Text(''),
                          ),
                        ),
                      ],
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: FormBuilderTextField(
                      name: 'medicineInstructions',
                      decoration: const InputDecoration(
                        border: OutlineInputBorder(),
                        label: Text('Medicine Instructions'),
                      ),
                      minLines: 3,
                      maxLines: 10,
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: FormBuilderTextField(
                      name: 'requestedLabs',
                      decoration: const InputDecoration(
                        border: OutlineInputBorder(),
                        label: Text('Requested Labs'),
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: FormBuilderTextField(
                      name: 'dietaryInstructions',
                      decoration: const InputDecoration(
                        border: OutlineInputBorder(),
                        label: Text('Dietary Instructions'),
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: FormBuilderCheckbox(
                      name: 'isTelemedReferral',
                      decoration: const InputDecoration(
                        border: OutlineInputBorder(),
                        contentPadding: EdgeInsets.all(0),
                      ),
                      title: Text("Telemed Referral"),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: FormBuilderTextField(
                      name: 'patientCopay',
                      decoration: const InputDecoration(
                        border: OutlineInputBorder(),
                        label: Text('Patient Copay'),
                      ),
                      keyboardType: TextInputType.number,
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: FormBuilderTextField(
                      name: 'telemedCopay',
                      decoration: const InputDecoration(
                        border: OutlineInputBorder(),
                        label: Text('Telemed Copay'),
                      ),
                      keyboardType: TextInputType.number,
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: FormBuilderDropdown(
                      name: 'referralHospital',
                      decoration: const InputDecoration(
                        border: OutlineInputBorder(),
                        label: Text('Referral Hospitals'),
                      ),
                      items: [
                        ...prefetchService.healthCenters.map(
                          (center) => DropdownMenuItem(
                            child: Text(center.name),
                            value: center.id,
                          ),
                        ),
                      ],
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: FormBuilderDropdown(
                      name: 'referredSpecialistDoctor',
                      decoration: const InputDecoration(
                        border: OutlineInputBorder(),
                        label: Text('Referred Specialist Doctor'),
                      ),
                      items: [
                        ...prefetchService.doctors.map(
                          (doctor) => DropdownMenuItem(
                            child: Text(doctor.name),
                            value: doctor.id,
                          ),
                        ),
                      ],
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: FormBuilderDateTimePicker(
                      name: 'returnIn',
                      decoration: const InputDecoration(
                        border: OutlineInputBorder(),
                        label: Text('Return Date'),
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: FormBuilderDropdown(
                      name: 'telemedicineDoctor',
                      decoration: const InputDecoration(
                        border: OutlineInputBorder(),
                        label: Text('Telemedicine Doctor'),
                      ),
                      items: [
                        ...prefetchService.doctors.map(
                          (doctor) => DropdownMenuItem(
                            child: Text(doctor.name),
                            value: doctor.id,
                          ),
                        ),
                      ],
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: FormBuilderDateTimePicker(
                      name: 'telemedicineConsultDate',
                      decoration: const InputDecoration(
                        border: OutlineInputBorder(),
                        label: Text('Consulation Date'),
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: FormBuilderTextField(
                      name: 'differentialDiagnosis',
                      decoration: const InputDecoration(
                        border: OutlineInputBorder(),
                        label: Text('Differential Diagnosis'),
                      ),
                      minLines: 3,
                      maxLines: 10,
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: FormBuilderTextField(
                      name: 'differentialRecommendation',
                      decoration: const InputDecoration(
                        border: OutlineInputBorder(),
                        label: Text('Differential Recommendation'),
                      ),
                      minLines: 3,
                      maxLines: 10,
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: FormBuilderTextField(
                      name: 'finalNotes',
                      decoration: const InputDecoration(
                        border: OutlineInputBorder(),
                        label: Text('Final Notes'),
                      ),
                      minLines: 3,
                      maxLines: 10,
                    ),
                  ),
                ],
              ),
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: <Widget>[
                ElevatedButton(
                  child: Text(
                    "Submit",
                    style: TextStyle(color: Colors.white),
                  ),
                  onPressed: () {
                    print(formKey.currentState);
                    formKey.currentState!.save();
                    if (formKey.currentState!.validate()) {
                      print(formKey.currentState!.value);
                    } else {
                      print("validation failed");
                    }
                  },
                ),
                ElevatedButton(
                  child: Text(
                    "Reset",
                    style: TextStyle(color: Colors.white),
                  ),
                  onPressed: () {
                    formKey.currentState!.reset();
                  },
                ),
              ],
            )
          ],
        ),
      ),
      viewModelBuilder: () => VisitViewModel(),
    );
  }
}
