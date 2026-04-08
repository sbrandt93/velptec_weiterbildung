import 'package:flutter/material.dart';

import 'navigation/app_shell.dart';

class DeliveroApp extends StatelessWidget {
  const DeliveroApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Delivero',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(colorSchemeSeed: Colors.deepOrange, useMaterial3: true),
      home: const AppShell(),
    );
  }
}
