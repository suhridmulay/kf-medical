import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:hello_doctor/app/app.locator.dart';
import 'package:hello_doctor/app/app.router.dart';
import 'package:hello_doctor/utils/commons.dart';
import 'package:stacked/stacked.dart';
import 'package:stacked_services/stacked_services.dart';

import 'login_VM.dart';

class LoginView extends StatelessWidget {
  LoginView({Key? key}) : super(key: key);
  final _formKey = GlobalKey<FormBuilderState>();

  @override
  Widget build(BuildContext context) {
    final navigationService = locator<NavigationService>();

    return ViewModelBuilder<LoginViewModel>.reactive(
      builder: (context, model, child) {
        Size screenSize = MediaQuery.of(context).size;

        return Scaffold(
          body: Stack(
            children: [
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Padding(
                      padding: const EdgeInsets.only(
                          top: 8.0, right: 8.0, left: 8.0, bottom: 32.0),
                      child: Center(
                        child: Image.asset(
                          'assets/images/hello-doctor.png',
                          width: screenSize.width * 0.8,
                        ),
                      ),
                    ),
                    FormBuilder(
                      key: _formKey,
                      enabled: !model.isBusy,
                      child: Column(
                        children: [
                          Padding(
                            padding: const EdgeInsets.all(8.0),
                            child: FormBuilderDropdown(
                              name: 'tenentId',
                              decoration: const InputDecoration(
                                border: OutlineInputBorder(),
                                label: Text("Organisation"),
                              ),
                              initialValue:
                                  "0d95b43e-b76d-404a-b115-7e6d27fb1c74",
                              items: const [
                                DropdownMenuItem(
                                  child: Text("Mukti"),
                                  value: "79d841e0-4d34-4075-a865-61ae6a0debb5",
                                ),
                                DropdownMenuItem(
                                  child: Text("Test Mobile"),
                                  value: "0d95b43e-b76d-404a-b115-7e6d27fb1c74",
                                ),
                              ],
                              validator:
                                  FormBuilderValidators.required(context),
                            ),
                          ),
                          Padding(
                            padding: const EdgeInsets.all(8.0),
                            child: FormBuilderTextField(
                              name: 'username',
                              decoration: const InputDecoration(
                                border: OutlineInputBorder(),
                                label: Text("Username"),
                              ),
                              initialValue: "banerjee.dhritiman@gmail.com",
                              validator: FormBuilderValidators.compose([
                                FormBuilderValidators.required(context),
                                FormBuilderValidators.email(context),
                              ]),
                            ),
                          ),
                          Padding(
                            padding: const EdgeInsets.all(8.0),
                            child: FormBuilderTextField(
                              name: 'password',
                              decoration: const InputDecoration(
                                border: OutlineInputBorder(),
                                label: Text("Password"),
                              ),
                              obscureText: true,
                              initialValue: "dman123",
                              validator: FormBuilderValidators.compose([
                                FormBuilderValidators.required(context),
                              ]),
                            ),
                          ),
                        ],
                      ),
                    ),
                    ElevatedButton(
                      onPressed: model.isBusy
                          ? null
                          : () async {
                              _formKey.currentState?.save();
                              if (_formKey.currentState!.validate()) {
                                if (await model.login(
                                  username:
                                      _formKey.currentState?.value['username'],
                                  password:
                                      _formKey.currentState?.value['password'],
                                  tenentId:
                                      _formKey.currentState?.value['tenentId'],
                                )) {
                                  navigationService
                                      .clearStackAndShow(Routes.dashboardView);
                                }
                              }
                            },
                      child: SizedBox(
                        width: screenSize.width * 0.5,
                        child: const Center(
                          child: Padding(
                            padding: EdgeInsets.symmetric(horizontal: 8.0),
                            child: Text("Login"),
                          ),
                        ),
                      ),
                    ),
                    const Padding(padding: EdgeInsets.all(40)),
                    Column(
                      children: [
                        const Text("Powered by"),
                        Padding(
                          padding: const EdgeInsets.only(
                              top: 8.0, right: 8.0, left: 8.0, bottom: 32.0),
                          child: Center(
                            child: Image.asset(
                              'assets/images/logo.png',
                              width: screenSize.width * 0.6,
                            ),
                          ),
                        ),
                      ],
                    )
                  ],
                ),
              ),
              if (model.isBusy) const LoadingScreen()
            ],
          ),
        );
      },
      viewModelBuilder: () => LoginViewModel(),
    );
  }
}
