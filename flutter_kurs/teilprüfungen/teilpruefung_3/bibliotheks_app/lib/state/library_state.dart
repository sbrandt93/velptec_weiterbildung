import 'package:flutter/foundation.dart';
import '../models/book.dart';

/// Global state management for books and loans.
class LibraryState extends ChangeNotifier {
  final List<Book> _books = [
    Book(id: '1', title: 'Der Herr der Ringe', author: 'J.R.R. Tolkien'),
    Book(
      id: '2',
      title: 'Harry Potter und der Stein der Weisen',
      author: 'J.K. Rowling',
    ),
    Book(id: '3', title: 'Die Verwandlung', author: 'Franz Kafka'),
    Book(id: '4', title: 'Faust', author: 'Johann Wolfgang von Goethe'),
    Book(id: '5', title: '1984', author: 'George Orwell'),
    Book(
      id: '6',
      title: 'Der kleine Prinz',
      author: 'Antoine de Saint-Exupéry',
    ),
  ];

  final List<Book> _loans = [];

  List<Book> get books => _books;
  List<Book> get loans => _loans;

  /// Borrows a book if not already borrowed.
  void borrowBook(Book book) {
    if (!_loans.contains(book)) {
      _loans.add(book);
      notifyListeners();
    }
  }

  /// Returns a borrowed book.
  void returnBook(Book book) {
    _loans.remove(book);
    notifyListeners();
  }

  /// Adds a rating to a book.
  void rateBook(Book book, int stars) {
    book.addRating(stars);
    notifyListeners();
  }

  /// Checks if a book is currently borrowed.
  bool isBookBorrowed(Book book) => _loans.contains(book);
}

/// Global library state instance.
final libraryState = LibraryState();
