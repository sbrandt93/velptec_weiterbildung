import 'package:flutter/material.dart';
import '../models/book.dart';
import 'rating_stars.dart';

/// Reusable card widget for displaying book information.
class BookCard extends StatelessWidget {
  final Book book;
  final List<Widget> actions;

  const BookCard({super.key, required this.book, required this.actions});

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: const EdgeInsets.only(bottom: 12),
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              book.title,
              style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 8),
            Text(
              'Autor: ${book.author}',
              style: const TextStyle(fontSize: 14, color: Colors.grey),
            ),
            const SizedBox(height: 8),
            RatingStars(book: book),
            const SizedBox(height: 12),
            Row(children: actions),
          ],
        ),
      ),
    );
  }
}
