import 'package:flutter/material.dart';
import '../models/book.dart';
import '../state/library_state.dart';
import '../widgets/book_card.dart';
import '../widgets/rating_dialog.dart';

/// Page for browsing and borrowing books.
class BrowseBooksPage extends StatefulWidget {
  const BrowseBooksPage({super.key});

  @override
  State<BrowseBooksPage> createState() => _BrowseBooksPageState();
}

class _BrowseBooksPageState extends State<BrowseBooksPage> {
  @override
  void initState() {
    super.initState();
    libraryState.addListener(_onStateChanged);
  }

  @override
  void dispose() {
    libraryState.removeListener(_onStateChanged);
    super.dispose();
  }

  void _onStateChanged() {
    setState(() {});
  }

  Future<void> _showBorrowDialog(Book book) async {
    final shouldBorrow = await showDialog<bool>(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Buch ausleihen'),
        content: Text('Möchten Sie "${book.title}" ausleihen?'),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context, false),
            child: const Text('Abbrechen'),
          ),
          ElevatedButton(
            onPressed: () => Navigator.pop(context, true),
            child: const Text('Ausleihen'),
          ),
        ],
      ),
    );

    if (shouldBorrow == true && mounted) {
      libraryState.borrowBook(book);
      ScaffoldMessenger.of(
        context,
      ).showSnackBar(const SnackBar(content: Text('Buch ausgeliehen')));
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Bücher durchsuchen'),
        backgroundColor: Theme.of(context).colorScheme.primaryContainer,
      ),
      body: ListView.builder(
        padding: const EdgeInsets.all(16),
        itemCount: libraryState.books.length,
        itemBuilder: (context, index) {
          final book = libraryState.books[index];
          final isAlreadyBorrowed = libraryState.isBookBorrowed(book);

          return BookCard(
            book: book,
            actions: [
              ElevatedButton(
                onPressed: isAlreadyBorrowed
                    ? null
                    : () => _showBorrowDialog(book),
                child: Text(
                  isAlreadyBorrowed ? 'Bereits ausgeliehen' : 'Ausleihen',
                ),
              ),
              const SizedBox(width: 8),
              ElevatedButton(
                onPressed: () => rateBook(context, book),
                child: const Text('Bewerten'),
              ),
            ],
          );
        },
      ),
    );
  }
}
