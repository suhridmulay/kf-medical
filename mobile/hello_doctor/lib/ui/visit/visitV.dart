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

  final _prefetchService = locator<PrefetchService>();

  @override
  Widget build(BuildContext context) {
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
                  if (patient!.id != null)
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
                        ..._prefetchService.healthCenters.map(
                          (healthCenter) => DropdownMenuItem(
                            child: Text(healthCenter.name),
                            value: healthCenter.id,
                          ),
                        )
                      ],
                      validator: FormBuilderValidators.required(context),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: FormBuilderDateTimePicker(
                      name: 'visitDate',
                      initialValue: visit?.visitDate ?? DateTime.now(),
                      decoration: const InputDecoration(
                        border: OutlineInputBorder(),
                        label: Text('Visit Date'),
                      ),
                      validator: FormBuilderValidators.required(context),
                      inputType: InputType.date,
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: FormBuilderCheckbox(
                      name: 'repeatVisit',
                      initialValue: visit?.repeatVisit,
                      decoration: const InputDecoration(
                        border: OutlineInputBorder(),
                        contentPadding: EdgeInsets.all(0),
                      ),
                      title: const Text('Repeat visit'),
                      validator: FormBuilderValidators.required(context),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: FormBuilderDropdown(
                      name: 'symptom1',
                      initialValue: visit?.symptom1,
                      decoration: const InputDecoration(
                        border: OutlineInputBorder(),
                        label: Text('Symptom 1'),
                      ),
                      items: [
                        ..._prefetchService.symptoms
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
                      initialValue: visit?.symptom2,
                      decoration: const InputDecoration(
                        border: OutlineInputBorder(),
                        label: Text('Symptom 2'),
                      ),
                      items: [
                        ..._prefetchService.symptoms.map(
                          (symptom) => DropdownMenuItem(
                            value: symptom.id,
                            child: Text(symptom.symptomName),
                          ),
                        ),
                      ],
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: FormBuilderDropdown(
                      name: 'symptom 3',
                      initialValue: visit?.symptom3,
                      decoration: const InputDecoration(
                        border: OutlineInputBorder(),
                        label: Text('Symptom 3'),
                      ),
                      items: [
                        ..._prefetchService.symptoms.map(
                          (symptom) => DropdownMenuItem(
                            value: symptom.id,
                            child: Text(symptom.symptomName),
                          ),
                        ),
                      ],
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: FormBuilderTextField(
                      name: 'otherSymptoms',
                      initialValue: visit?.otherSymptoms ?? "",
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
                      initialValue:
                          num.tryParse(visit?.height ?? "150")!.toDouble(),
                      min: 50,
                      max: 200,
                      decoration: const InputDecoration(
                        label: Text('Height'),
                      ),
                      valueTransformer: (text) => text?.toString(),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: FormBuilderSlider(
                      name: 'weight',
                      initialValue:
                          num.tryParse(visit?.weight ?? "50")!.toDouble(),
                      min: 0,
                      max: 200,
                      decoration: const InputDecoration(
                        label: Text('Weight'),
                      ),
                      valueTransformer: (text) => text?.toString(),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: FormBuilderSlider(
                      min: 97.0,
                      max: 105.0,
                      initialValue: num.tryParse(visit?.temperature ?? "98.6")!
                          .toDouble(),
                      name: 'temperature',
                      numberFormat: NumberFormat("###.0"),
                      decoration: const InputDecoration(
                        label: Text('Temprature'),
                      ),
                      valueTransformer: (text) => text?.toString(),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: FormBuilderTextField(
                      name: 'bloodPressure',
                      initialValue: visit?.bloodPressure,
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
                      initialValue: visit?.pulseRate,
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
                      initialValue: visit?.oxygenLevel,
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
                      initialValue: visit?.vitalStatisticsOther,
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
                      initialValue: visit?.diagnosis,
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
                    child: FormBuilderDropdown(
                      name: 'caseSeverity',
                      initialValue: visit?.caseSeverity,
                      decoration: const InputDecoration(
                        border: OutlineInputBorder(),
                        label: Text('Case Severity'),
                      ),
                      items: [
                        ...PatientVisitCaseSeverityEnum.values
                            .map((severity) => DropdownMenuItem(
                                  child: Text(severity.value),
                                  value: severity,
                                ))
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
                            name: 'medicine1',
                            initialValue: visit?.medicine1,
                            decoration: const InputDecoration(
                              border: OutlineInputBorder(),
                              label: Text('Medicine 1'),
                            ),
                            items: [
                              ..._prefetchService.medicines.map(
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
                            initialValue: visit?.med1Qty.toString(),
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
                            initialValue: visit?.med1Supplied,
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
                              ..._prefetchService.medicines.map(
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
                              ..._prefetchService.medicines.map(
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
                              ..._prefetchService.medicines.map(
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
                        ..._prefetchService.healthCenters.map(
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
                        ..._prefetchService.doctors.map(
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
                      inputType: InputType.date,
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
                        ..._prefetchService.doctors.map(
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
                      inputType: InputType.date,
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
