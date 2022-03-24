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
                    child: Column(
                      children: [
                        Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: FormBuilderDropdown(
                              name: 'tenentId',
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
                          ),
                        ),
                      ],
                    )),
                ElevatedButton(
                  onPressed: () {
                    navigationService.navigateTo(Routes.dashboardView);
                  },
                  child: Container(
                    width: screenSize.width * 0.5,
                    child: Center(child: const Text("Login")),
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
                    child: Center(child: const Text("Login with Google")),
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
                    child: Center(child: const Text("Login with Meta")),
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
