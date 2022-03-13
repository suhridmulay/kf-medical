import 'package:stacked/stacked.dart';

import 'package:flutter/material.dart';
import 'package:stacked/stacked.dart';

import 'DashboardVM.dart';

class DashboardView extends StatelessWidget {
  const DashboardView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ViewModelBuilder<DashboardViewModel>.reactive(
      builder: (context, model, child) => Scaffold(
        appBar: AppBar(),
        drawer: Drawer(
            child: Column(
          children: [
            DrawerHeader(child: Row()),
            const ListTile(
              title: Text("Patients by location"),
            ),
          ],
        )),
        body: ListView(
          children: const [
            TextField(),
          ],
        ),
      ),
      viewModelBuilder: () => DashboardViewModel(),
    );
  }
}
