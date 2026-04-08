import 'package:flutter/material.dart';

import '../models/delivery_option.dart';

final List<DeliveryOption> deliveryOptions = [
  const DeliveryOption(
    id: 'food',
    title: 'Essen',
    description: 'Frische Mahlzeiten direkt an deine Tür geliefert.',
    icon: Icons.restaurant,
    estimatedTime: '30–45 Min.',
    cost: 3.99,
    details:
        'Wähle aus einer Vielzahl lokaler Restaurants. '
        'Unsere Fahrer holen dein Essen warm ab und liefern es schnellstmöglich. '
        'Temperaturkontrollierte Liefertaschen sorgen für beste Qualität.',
  ),
  const DeliveryOption(
    id: 'documents',
    title: 'Dokumente',
    description: 'Sichere und schnelle Zustellung wichtiger Unterlagen.',
    icon: Icons.description,
    estimatedTime: '20–30 Min.',
    cost: 5.99,
    details:
        'Vertrauliche Dokumente werden sicher und diskret transportiert. '
        'GPS-Tracking und Empfangsbestätigung inklusive. '
        'Ideal für Verträge, Rechnungen und amtliche Schreiben.',
  ),
  const DeliveryOption(
    id: 'packages',
    title: 'Pakete',
    description: 'Pakete jeder Größe zuverlässig zugestellt.',
    icon: Icons.inventory_2,
    estimatedTime: '45–60 Min.',
    cost: 7.99,
    details:
        'Von kleinen Päckchen bis hin zu großen Kartons – wir liefern alles. '
        'Versichert bis 500 €. Echtzeit-Tracking vom Abhol- bis zum Zustellort. '
        'Same-Day-Delivery im gesamten Stadtgebiet.',
  ),
];
