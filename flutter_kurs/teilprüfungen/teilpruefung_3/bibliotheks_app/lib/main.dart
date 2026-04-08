import 'package:flutter/material.dart';

import 'pages/home_page.dart';
import 'pages/browse_books_page.dart';
import 'pages/my_loans_page.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Bibliotheks-App',
      theme: ThemeData(primarySwatch: Colors.blue, useMaterial3: true),
      initialRoute: '/',
      routes: {
        '/': (context) => const HomePage(),
        '/browse': (context) => const BrowseBooksPage(),
        '/loans': (context) => const MyLoansPage(),
      },
      debugShowCheckedModeBanner: false,
    );
  }
}
