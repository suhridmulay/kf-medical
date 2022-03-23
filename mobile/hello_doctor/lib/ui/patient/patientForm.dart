import 'package:flutter/material.dart';
import 'package:hello_doctor/ui/patient/patientVM.dart';
import 'package:stacked/stacked.dart';

class PatientForm extends StatelessWidget {
  const PatientForm({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ViewModelBuilder<PatientViewModel>.reactive(
      builder: (context, model, child) {
        Size screenSize = MediaQuery.of(context).size;

        return Scaffold(
          appBar: AppBar(
            title: Text(true ? "Edit Patient" : "Add new Patient"),
          ),
          body: Padding(
            padding: const EdgeInsets.all(8.0),
            child: ListView(children: [
              Stack(
                children: [
                  Center(
                    child: CircleAvatar(
                      radius: 100,
                    ),
                  ),
                  Positioned(
                    child: ClipOval(
                      child: Container(
                        color: Colors.blue,
                        child: IconButton(
                          icon: Icon(
                            Icons.edit,
                          ),
                          onPressed: () {},
                          color: Colors.white,
                          iconSize: 24,
                        ),
                      ),
                    ),
                    bottom: 0,
                    right: screenSize.width * 0.20,
                  ),
                ],
              ),
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: TextField(
                  decoration: InputDecoration(
                      labelText: "First name", border: OutlineInputBorder()),
                ),
              ),
            ]),
          ),
        );
      },
      viewModelBuilder: () => PatientViewModel(),
    );
  }
}
