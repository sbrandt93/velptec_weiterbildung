import 'package:flutter/material.dart';
import '../models/book.dart';
import '../state/library_state.dart';

/// Shows a dialog to rate a book with 1-5 stars.
/// Returns the selected rating or null if skipped.
Future<int?> showRatingDialog(BuildContext context, Book book) async {
  int selectedRating = 3;

  return showDialog<int>(
    context: context,
    builder: (context) => StatefulBuilder(
      builder: (context, setDialogState) => AlertDialog(
        title: const Text('Buch bewerten'),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text('Bewerten Sie "${book.title}"'),
            const SizedBox(height: 16),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: List.generate(5, (index) {
                return IconButton(
                  icon: Icon(
                    index < selectedRating ? Icons.star : Icons.star_border,
                    color: Colors.amber,
                    size: 32,
                  ),
                  onPressed: () {
                    setDialogState(() {
                      selectedRating = index + 1;
                    });
                  },
                );
              }),
            ),
            Text('$selectedRating von 5 Sternen'),
          ],
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('Überspringen'),
          ),
          ElevatedButton(
            onPressed: () => Navigator.pop(context, selectedRating),
            child: const Text('Bewerten'),
          ),
        ],
      ),
    ),
  );
}

/// Shows the rating dialog and saves the rating if provided.
Future<void> rateBook(BuildContext context, Book book) async {
  final rating = await showRatingDialog(context, book);
  if (rating != null) {
    libraryState.rateBook(book, rating);
  }
}
