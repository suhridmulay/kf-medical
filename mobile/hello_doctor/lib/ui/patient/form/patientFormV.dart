import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:form_builder_image_picker/form_builder_image_picker.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:hello_doctor/app/app.locator.dart';
import 'package:hello_doctor/app/app.snackbar.dart';
import 'package:hello_doctor/ui/patient/form/patientFormVM.dart';
import 'package:kf_openapi_generated/api.dart';
import 'package:stacked/stacked.dart';
import 'package:stacked_services/stacked_services.dart';

class PatientFormView extends StatelessWidget {
  Patient? patient;
  PatientFormView({Key? key, this.patient}) : super(key: key);
  final SnackbarService _snackbarService = locator.get<SnackbarService>();
  final NavigationService _navigationService = locator.get<NavigationService>();

  final _formKey = GlobalKey<FormBuilderState>();

  @override
  Widget build(BuildContext context) {
    return ViewModelBuilder<PatientFormViewModel>.reactive(
      builder: (context, model, child) {
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
                              enabled: false,
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
                          initialValue: patient?.firstName ?? "John",
                          decoration: const InputDecoration(
                            border: OutlineInputBorder(),
                            label: Text("First Name"),
                          ),
                          validator: FormBuilderValidators.compose([
                            FormBuilderValidators.required(context),
                            FormBuilderValidators.max(context, 30,
                                errorText:
                                    "Name should not be longer than 30 characters")
                          ]),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: FormBuilderTextField(
                          name: 'middleName',
                          initialValue: patient?.middleName ?? "Alice",
                          decoration: const InputDecoration(
                            border: OutlineInputBorder(),
                            label: Text("Middle Name"),
                          ),
                          validator: FormBuilderValidators.compose([
                            FormBuilderValidators.required(context),
                            // TODO: Check max length
                            FormBuilderValidators.maxLength(context, 30,
                                errorText:
                                    "Name should not be longer than 30 characters")
                          ]),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: FormBuilderTextField(
                          name: 'lastName',
                          initialValue: patient?.lastName ?? "Doe",
                          decoration: const InputDecoration(
                            border: OutlineInputBorder(),
                            label: Text("Last Name"),
                          ),
                          validator: FormBuilderValidators.compose([
                            FormBuilderValidators.required(context),
                            // TODO: Check max length
                            FormBuilderValidators.maxLength(context, 30,
                                errorText:
                                    "Name should not be longer than 30 characters")
                          ]),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: FormBuilderTextField(
                          name: 'fullName',
                          initialValue: patient?.fullName ?? "John Alice Doe",
                          decoration: const InputDecoration(
                            border: OutlineInputBorder(),
                            label: Text("Full Name"),
                          ),
                          validator: FormBuilderValidators.compose([
                            FormBuilderValidators.required(context),
                            // TODO: Check max length
                            FormBuilderValidators.maxLength(context, 30,
                                errorText:
                                    "Name should not be longer than 30 characters")
                          ]),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: FormBuilderDropdown(
                          name: 'gender',
                          initialValue:
                              patient?.gender ?? PatientGenderEnum.female,
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
                          validator: FormBuilderValidators.required(context),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: FormBuilderTextField(
                          name: 'age',
                          initialValue: patient?.age.toString() ?? "25",
                          decoration: const InputDecoration(
                            border: OutlineInputBorder(),
                            label: Text("Age"),
                          ),
                          keyboardType: TextInputType.number,
                          valueTransformer: (text) => num.tryParse(text!),
                          validator: FormBuilderValidators.compose([
                            FormBuilderValidators.required(context),
                            FormBuilderValidators.numeric(context)
                          ]),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: FormBuilderTextField(
                          name: 'localityName',
                          initialValue:
                              patient?.localityName ?? "Demo Locality",
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
                          initialValue: patient?.mobileNumber ?? "1234567890",
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
                          initialValue:
                              patient?.aadharNumber ?? "1111222233334444",
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
                          initialValue: patient?.dateOfBirth ?? DateTime.now(),
                          decoration: const InputDecoration(
                            border: OutlineInputBorder(),
                            label: Text("Date Of Birth"),
                          ),
                          inputType: InputType.date,
                          valueTransformer: (date) =>
                              date?.millisecondsSinceEpoch,
                        ),
                      ),
                    ],
                  ),
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: <Widget>[
                    ElevatedButton(
                      child: const Text(
                        "Submit",
                        style: TextStyle(color: Colors.white),
                      ),
                      onPressed: () async {
                        _formKey.currentState!.save();
                        if (_formKey.currentState!.validate()) {
                          var result = await model
                              .addOrUpdatePatient(_formKey.currentState!.value);
                          if (result) {
                            _snackbarService.showCustomSnackBar(
                              message:
                                  "User ${patient != null ? "updated" : "added"} successfully",
                              variant: SnackbarType.success,
                            );
                            _navigationService.popRepeated(1);
                          } else {
                            _snackbarService.showCustomSnackBar(
                              message: "Error: Could not add user",
                              variant: SnackbarType.error,
                            );
                          }
                        } else {
                          _snackbarService.showCustomSnackBar(
                            message: "Validation failed",
                            variant: SnackbarType.error,
                          );
                        }
                      },
                    ),
                    ElevatedButton(
                      child: const Text(
                        "Reset",
                        style: TextStyle(color: Colors.white),
                      ),
                      onPressed: () {
                        _formKey.currentState!.reset();
                      },
                    ),
                  ],
                )
              ],
            ),
          ),
        );
      },
      viewModelBuilder: () => PatientFormViewModel(),
      // onModelReady: (PatientFormViewModel model) => {model.initialise()},
    );
  }
}
