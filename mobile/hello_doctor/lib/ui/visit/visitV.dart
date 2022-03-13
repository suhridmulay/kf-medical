import 'package:flutter/material.dart';
import 'package:stacked/stacked.dart';

import 'visitVM.dart';

class VisitView extends StatelessWidget {
  const VisitView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ViewModelBuilder<VisitViewModel>.reactive(
      builder: (context, model, child) => Scaffold(),
      viewModelBuilder: () => VisitViewModel(),
    );
  }
}
