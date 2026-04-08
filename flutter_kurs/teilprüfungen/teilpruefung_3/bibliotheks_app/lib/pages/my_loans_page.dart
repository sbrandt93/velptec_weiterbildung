import 'package:flutter/material.dart';
import '../models/book.dart';
import '../state/library_state.dart';
import '../widgets/rating_dialog.dart';

/// Page showing all borrowed books with return functionality.
class MyLoansPage extends StatefulWidget {
  const MyLoansPage({super.key});

  @override
  State<MyLoansPage> createState() => _MyLoansPageState();
}

class _MyLoansPageState extends State<MyLoansPage> {
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

  Future<void> _returnBook(Book book) async {
    await rateBook(context, book);
    libraryState.returnBook(book);
    if (mounted) {
      ScaffoldMessenger.of(
        context,
      ).showSnackBar(const SnackBar(content: Text('Buch zurückgegeben')));
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Meine Ausleihen'),
        backgroundColor: Theme.of(context).colorScheme.primaryContainer,
      ),
      body: libraryState.loans.isEmpty
          ? const Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Icon(Icons.book_outlined, size: 64, color: Colors.grey),
                  SizedBox(height: 16),
                  Text(
                    'Keine Bücher ausgeliehen',
                    style: TextStyle(fontSize: 18, color: Colors.grey),
                  ),
                ],
              ),
            )
          : ListView.builder(
              padding: const EdgeInsets.all(16),
              itemCount: libraryState.loans.length,
              itemBuilder: (context, index) {
                final book = libraryState.loans[index];

                return Card(
                  margin: const EdgeInsets.only(bottom: 12),
                  child: Padding(
                    padding: const EdgeInsets.all(16),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          book.title,
                          style: const TextStyle(
                            fontSize: 18,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        const SizedBox(height: 8),
                        Text(
                          'Autor: ${book.author}',
                          style: const TextStyle(
                            fontSize: 14,
                            color: Colors.grey,
                          ),
                        ),
                        const SizedBox(height: 12),
                        ElevatedButton(
                          onPressed: () => _returnBook(book),
                          style: ElevatedButton.styleFrom(
                            backgroundColor: Colors.red.shade100,
                            foregroundColor: Colors.red.shade900,
                          ),
                          child: const Text('Zurückgeben'),
                        ),
                      ],
                    ),
                  ),
                );
              },
            ),
    );
  }
}
