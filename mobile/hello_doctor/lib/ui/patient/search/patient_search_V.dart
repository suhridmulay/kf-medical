import 'package:flutter/material.dart';
import 'package:stacked/stacked.dart';

import 'patient_search_VM.dart';

class PatientSearchView extends StatelessWidget {
  const PatientSearchView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ViewModelBuilder<PatientSearchViewModel>.reactive(
      builder: (context, model, child) => Scaffold(),
      viewModelBuilder: () => PatientSearchViewModel(),
    );
  }
}
