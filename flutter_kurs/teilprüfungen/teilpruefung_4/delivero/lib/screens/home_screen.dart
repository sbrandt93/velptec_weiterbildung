import 'package:flutter/material.dart';

import '../data/delivery_data.dart';
import '../widgets/delivery_card.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Delivero')),
      body: ListView.builder(
        padding: const EdgeInsets.all(16),
        itemCount: deliveryOptions.length,
        itemBuilder: (context, index) {
          return DeliveryCard(option: deliveryOptions[index]);
        },
      ),
    );
  }
}
