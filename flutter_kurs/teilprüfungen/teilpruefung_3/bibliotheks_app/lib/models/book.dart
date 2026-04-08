/// Model class representing a book in the library.
class Book {
  final String id;
  final String title;
  final String author;
  double rating;
  int ratingCount;

  Book({
    required this.id,
    required this.title,
    required this.author,
    this.rating = 0.0,
    this.ratingCount = 0,
  });

  /// Adds a new rating (1-5 stars) and recalculates the average rating.
  void addRating(int stars) {
    final totalRating = rating * ratingCount + stars;
    ratingCount++;
    rating = totalRating / ratingCount;
  }
}
