import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:hello_doctor/app/app.locator.dart';
import 'package:hello_doctor/app/app.router.dart';
import 'package:stacked/stacked.dart';
import 'package:stacked_services/stacked_services.dart';

import 'loginVM.dart';

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
          body: Padding(
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
                      'assets/images/logo.png',
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
                                label: Text("NGO"),
                              ),
                              initialValue:
                                  "79d841e0-4d34-4075-a865-61ae6a0debb5",
                              items: const [
                                DropdownMenuItem(
                                  child: Text("Mukti"),
                                  value: "79d841e0-4d34-4075-a865-61ae6a0debb5",
                                )
                              ]),
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
                          ),
                        ),
                      ],
                    )),
                ElevatedButton(
                  onPressed: () async {
                    _formKey.currentState?.save();
                    if (_formKey.currentState!.validate()) {
                      if (await model.login(
                        username: _formKey.currentState?.value['username'],
                        password: _formKey.currentState?.value['password'],
                        tenentId: _formKey.currentState?.value['tenentId'],
                      )) {
                        navigationService
                            .clearStackAndShow(Routes.dashboardView);
                      }
                    }
                  },
                  child: Container(
                    width: screenSize.width * 0.5,
                    child: const Center(child: Text("Login")),

                  ),
                ),
                ElevatedButton(
                  onPressed: () {
                    navigationService.navigateTo(Routes.dashboardView);
                  },
                  style: ButtonStyle(
                    backgroundColor:
                        MaterialStateProperty.all(Colors.redAccent),
                  ),
                  child: Container(
                    width: screenSize.width * 0.5,
                    child: const Center(child: Text("Login with Google")),
                  ),
                ),
                ElevatedButton(
                  onPressed: () {
                    navigationService.navigateTo(Routes.dashboardView);
                  },
                  style: ButtonStyle(
                    backgroundColor:
                        MaterialStateProperty.all(Colors.blueAccent),
                  ),
                  child: Container(
                    width: screenSize.width * 0.5,
                    child: const Center(child: Text("Login with Meta")),
                  ),
                ),
              ],
            ),
          ),
        );
      },
      viewModelBuilder: () => LoginViewModel(),
    );
  }
}
