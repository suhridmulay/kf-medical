import 'package:flutter/material.dart';
import 'package:stacked/stacked.dart';

import 'patientVM.dart';

class PatientView extends StatelessWidget {
  const PatientView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ViewModelBuilder<PatientViewModel>.reactive(
      builder: (context, model, child) => Scaffold(),
      viewModelBuilder: () => PatientViewModel(),
    );
  }
}
