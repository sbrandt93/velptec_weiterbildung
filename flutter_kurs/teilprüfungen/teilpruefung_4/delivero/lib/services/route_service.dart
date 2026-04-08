import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:latlong2/latlong.dart';

/// Berechnet eine Fahrroute über die kostenlose OSRM-API (OpenStreetMap-basiert).
class RouteService {
  static const _baseUrl = 'https://router.project-osrm.org/route/v1/driving';

  /// Gibt eine Liste von [LatLng]-Punkten entlang der Route zurück.
  static Future<List<LatLng>> fetchRoute(LatLng start, LatLng end) async {
    final url = Uri.parse(
      '$_baseUrl/${start.longitude},${start.latitude};${end.longitude},${end.latitude}'
      '?overview=full&geometries=geojson',
    );

    final response = await http.get(url);

    if (response.statusCode != 200) {
      throw Exception(
        'Route konnte nicht geladen werden (${response.statusCode})',
      );
    }

    final data = jsonDecode(response.body) as Map<String, dynamic>;
    final routes = data['routes'] as List<dynamic>;

    if (routes.isEmpty) {
      throw Exception('Keine Route gefunden');
    }

    final coordinates = routes[0]['geometry']['coordinates'] as List<dynamic>;

    return coordinates
        .map((c) => LatLng((c[1] as num).toDouble(), (c[0] as num).toDouble()))
        .toList();
  }
}
