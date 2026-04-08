import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_map/flutter_map.dart';
import 'package:latlong2/latlong.dart';

import '../services/route_service.dart';

class MapScreen extends StatefulWidget {
  const MapScreen({super.key});

  @override
  State<MapScreen> createState() => _MapScreenState();
}

class _MapScreenState extends State<MapScreen> {
  // Heiligenröder Str. 84-86, 34123 Kassel
  static const _shopPosition = LatLng(51.2982, 9.5267);
  // Vor der Warte 18, 34329 Nieste
  static const _destination = LatLng(51.3162, 9.6038);

  List<LatLng> _routePoints = [];
  late LatLng _driverPosition;
  int _currentRouteIndex = 0;
  Timer? _timer;
  bool _isLoading = true;
  String? _errorMessage;

  @override
  void initState() {
    super.initState();
    _driverPosition = _shopPosition;
    _loadRoute();
  }

  Future<void> _loadRoute() async {
    try {
      final points = await RouteService.fetchRoute(_shopPosition, _destination);
      if (!mounted) return;
      setState(() {
        _routePoints = points;
        _isLoading = false;
      });
      _startAnimation();
    } catch (e) {
      if (!mounted) return;
      setState(() {
        _isLoading = false;
        _errorMessage = e.toString();
      });
    }
  }

  void _startAnimation() {
    _timer = Timer.periodic(const Duration(milliseconds: 500), (_) {
      if (_currentRouteIndex >= _routePoints.length - 1) {
        _timer?.cancel();
        return;
      }
      setState(() {
        _currentRouteIndex++;
        _driverPosition = _routePoints[_currentRouteIndex];
      });
    });
  }

  @override
  void dispose() {
    _timer?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    if (_isLoading) {
      return Scaffold(
        appBar: AppBar(title: const Text('Live-Tracking')),
        body: const Center(child: CircularProgressIndicator()),
      );
    }

    if (_errorMessage != null) {
      return Scaffold(
        appBar: AppBar(title: const Text('Live-Tracking')),
        body: Center(child: Text('Fehler: $_errorMessage')),
      );
    }

    return Scaffold(
      appBar: AppBar(title: const Text('Live-Tracking')),
      body: FlutterMap(
        options: MapOptions(
          initialCenter: LatLng(
            (_shopPosition.latitude + _destination.latitude) / 2,
            (_shopPosition.longitude + _destination.longitude) / 2,
          ),
          initialZoom: 13,
        ),
        children: [
          TileLayer(
            urlTemplate: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
            userAgentPackageName: 'com.example.delivero',
          ),
          PolylineLayer(
            polylines: [
              Polyline(
                points: _routePoints,
                strokeWidth: 4,
                color: Colors.blue.withValues(alpha: 0.7),
              ),
            ],
          ),
          MarkerLayer(
            markers: [
              Marker(
                point: _shopPosition,
                width: 40,
                height: 40,
                child: const Icon(Icons.store, color: Colors.green, size: 40),
              ),
              Marker(
                point: _destination,
                width: 40,
                height: 40,
                child: const Icon(
                  Icons.location_on,
                  color: Colors.red,
                  size: 40,
                ),
              ),
              Marker(
                point: _driverPosition,
                width: 40,
                height: 40,
                child: const Icon(
                  Icons.local_shipping,
                  color: Colors.blue,
                  size: 36,
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
