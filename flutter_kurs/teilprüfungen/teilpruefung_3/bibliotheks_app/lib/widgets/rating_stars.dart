import 'package:flutter/material.dart';
import '../models/book.dart';

/// Widget that displays the rating stars for a book.
class RatingStars extends StatelessWidget {
  final Book book;

  const RatingStars({super.key, required this.book});

  @override
  Widget build(BuildContext context) {
    if (book.ratingCount == 0) {
      return const Text(
        'Noch keine Bewertung',
        style: TextStyle(fontSize: 12, color: Colors.grey),
      );
    }

    return Row(
      children: [
        ...List.generate(5, (index) {
          if (index < book.rating.floor()) {
            return const Icon(Icons.star, color: Colors.amber, size: 16);
          } else if (index < book.rating.ceil() && book.rating % 1 >= 0.5) {
            return const Icon(Icons.star_half, color: Colors.amber, size: 16);
          } else {
            return const Icon(Icons.star_border, color: Colors.amber, size: 16);
          }
        }),
        const SizedBox(width: 8),
        Text(
          '${book.rating.toStringAsFixed(1)} (${book.ratingCount})',
          style: const TextStyle(fontSize: 12, color: Colors.grey),
        ),
      ],
    );
  }
}
