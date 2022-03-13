import 'package:flutter/material.dart';
import 'package:hello_doctor/app/app.locator.dart';
import 'package:hello_doctor/app/app.router.dart';
import 'package:stacked/stacked.dart';
import 'package:stacked_services/stacked_services.dart';

import 'loginVM.dart';

class LoginView extends StatelessWidget {
  const LoginView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final navigationService = locator<NavigationService>();

    return ViewModelBuilder<LoginViewModel>.reactive(
      builder: (context, model, child) => Scaffold(
        body: Column(
          children: [
            Image.asset('assets/images/logo.png'),
            ElevatedButton(
              onPressed: () {
                navigationService.navigateTo(Routes.dashboardView);
              },
              child: const Text("Login"),
            ),
            ElevatedButton(
              onPressed: () {
                navigationService.navigateTo(Routes.dashboardView);
              },
              child: const Text("Login with Google"),
            ),
            ElevatedButton(
              onPressed: () {
                navigationService.navigateTo(Routes.dashboardView);
              },
              child: const Text("Login with Facebook"),
            ),
          ],
        ),
      ),
      viewModelBuilder: () => LoginViewModel(),
    );
  }
}
