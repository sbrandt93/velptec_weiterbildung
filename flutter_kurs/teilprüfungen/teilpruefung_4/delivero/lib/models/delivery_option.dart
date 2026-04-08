import 'package:flutter/material.dart';

class DeliveryOption {
  final String id;
  final String title;
  final String description;
  final IconData icon;
  final String estimatedTime;
  final double cost;
  final String details;

  const DeliveryOption({
    required this.id,
    required this.title,
    required this.description,
    required this.icon,
    required this.estimatedTime,
    required this.cost,
    required this.details,
  });
}
