import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:form_builder_image_picker/form_builder_image_picker.dart';
import 'package:hello_doctor/ui/patient/patientVM.dart';
import 'package:kf_openapi_generated/api.dart';
import 'package:stacked/stacked.dart';

class PatientFormView extends StatelessWidget {
  Patient? patient;
  PatientFormView({Key? key, this.patient}) : super(key: key);

  final _formKey = GlobalKey<FormBuilderState>();

  @override
  Widget build(BuildContext context) {
    return ViewModelBuilder<PatientViewModel>.reactive(
      builder: (context, model, child) {
        Size screenSize = MediaQuery.of(context).size;

        return Scaffold(
          appBar: AppBar(
            title: Text(patient != null ? "Edit Patient" : "Add new Patient"),
          ),
          body: Padding(
            padding: const EdgeInsets.all(8.0),
            child: ListView(
              children: [
                FormBuilder(
                  key: _formKey,
                  child: Column(
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                        children: [
                          const Flexible(
                            child: Padding(padding: EdgeInsets.all(8)),
                          ),
                          Flexible(
                            child: FormBuilderImagePicker(
                              name: 'image',
                              placeholderImage:
                                  const AssetImage("assets/images/user.png"),
                              maxImages: 1,
                              fit: BoxFit.fitWidth,
                            ),
                          ),
                          const Flexible(
                            child: Padding(padding: EdgeInsets.all(8)),
                          ),
                        ],
                      ),
                      Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: FormBuilderTextField(
                          name: 'firstName',
                          initialValue: patient?.firstName,
                          decoration: const InputDecoration(
                            border: OutlineInputBorder(),
                            label: Text("First Name"),
                          ),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: FormBuilderTextField(
                          name: 'middleName',
                          initialValue: patient?.middleName,
                          decoration: const InputDecoration(
                            border: OutlineInputBorder(),
                            label: Text("Middle Name"),
                          ),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: FormBuilderTextField(
                          name: 'lastName',
                          initialValue: patient?.lastName,
                          decoration: const InputDecoration(
                            border: OutlineInputBorder(),
                            label: Text("Last Name"),
                          ),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: FormBuilderTextField(
                          name: 'fullName',
                          initialValue: patient?.fullName,
                          decoration: const InputDecoration(
                            border: OutlineInputBorder(),
                            label: Text("Full Name"),
                          ),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: FormBuilderDropdown(
                          name: 'gender',
                          initialValue: patient?.gender,
                          decoration: const InputDecoration(
                            border: OutlineInputBorder(),
                            label: Text("Gender"),
                          ),
                          items: [
                            ...[
                              PatientGenderEnum.male,
                              PatientGenderEnum.female
                            ].map(
                              (gender) => DropdownMenuItem(
                                child: Text(gender.value),
                                value: gender,
                              ),
                            ),
                          ],
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: FormBuilderTextField(
                          name: 'age',
                          initialValue: patient?.age.toString(),
                          decoration: const InputDecoration(
                            border: OutlineInputBorder(),
                            label: Text("Age"),
                          ),
                          keyboardType: TextInputType.number,
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: FormBuilderTextField(
                          name: 'localityName',
                          initialValue: patient?.localityName,
                          decoration: const InputDecoration(
                            border: OutlineInputBorder(),
                            label: Text("Locality Name"),
                          ),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: FormBuilderTextField(
                          name: 'mobileNumber',
                          initialValue: patient?.mobileNumber,
                          decoration: const InputDecoration(
                            border: OutlineInputBorder(),
                            label: Text("Mobile Number"),
                          ),
                          keyboardType: TextInputType.number,
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: FormBuilderTextField(
                          name: 'aadharNumber',
                          initialValue: patient?.aadharNumber,
                          decoration: const InputDecoration(
                            border: OutlineInputBorder(),
                            label: Text("Aadhar Number"),
                          ),
                          keyboardType: TextInputType.number,
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: FormBuilderDateTimePicker(
                          name: 'dateOfBirth',
                          initialValue: patient?.dateOfBirth,
                          decoration: const InputDecoration(
                            border: OutlineInputBorder(),
                            label: Text("Date Of Birth"),
                          ),
                          inputType: InputType.date,
                        ),
                      ),
                    ],
                  ),
                )
              ],
            ),
          ),
        );
      },
      viewModelBuilder: () => PatientViewModel(),
    );
  }
}
