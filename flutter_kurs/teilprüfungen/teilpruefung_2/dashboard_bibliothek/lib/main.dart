import 'package:flutter/material.dart';

/// Der Einfachheit halber wurde alles in einer Datei implementiert.
/// In einem echten Projekt würde man die verschiedenen Komponenten in separate Dateien auslagern.
/// Zum Beispiel:
/// - models/book.dart
/// - models/category.dart
/// - widgets/category_list_view.dart
/// - widgets/book_list_view.dart
/// - widgets/contact_footer.dart
/// - screens/library_dashboard.dart

void main() {
  runApp(const MainApp());
}

// ============================================================================
// Data Models
// ============================================================================

/// Represents a book in the library
class Book {
  final String title;
  final String author;
  final String category;

  const Book({
    required this.title,
    required this.author,
    required this.category,
  });
}

/// Represents a book category
class Category {
  final String name;
  final IconData icon;

  const Category({required this.name, required this.icon});
}

// ============================================================================
// Sample Data
// ============================================================================

/// Available book categories
const List<Category> categories = [
  Category(name: 'Roman', icon: Icons.auto_stories),
  Category(name: 'Sachbuch', icon: Icons.science),
  Category(name: 'Krimi', icon: Icons.search),
  Category(name: 'Fantasy', icon: Icons.castle),
  Category(name: 'Biografie', icon: Icons.person),
  Category(name: 'Kinderbuch', icon: Icons.child_care),
];

/// Sample books for each category
const List<Book> books = [
  // Roman
  Book(title: 'Der Vorleser', author: 'Bernhard Schlink', category: 'Roman'),
  Book(
    title: 'Die Vermessung der Welt',
    author: 'Daniel Kehlmann',
    category: 'Roman',
  ),
  Book(title: 'Tschick', author: 'Wolfgang Herrndorf', category: 'Roman'),
  Book(title: 'Das Parfum', author: 'Patrick Süskind', category: 'Roman'),
  // Sachbuch
  Book(
    title: 'Eine kurze Geschichte der Zeit',
    author: 'Stephen Hawking',
    category: 'Sachbuch',
  ),
  Book(title: 'Sapiens', author: 'Yuval Noah Harari', category: 'Sachbuch'),
  Book(title: 'Der Schwarm', author: 'Frank Schätzing', category: 'Sachbuch'),
  // Krimi
  Book(title: 'Der Schwur', author: 'Friedrich Dürrenmatt', category: 'Krimi'),
  Book(title: 'Der Name der Rose', author: 'Umberto Eco', category: 'Krimi'),
  Book(title: 'Verblendung', author: 'Stieg Larsson', category: 'Krimi'),
  // Fantasy
  Book(
    title: 'Die unendliche Geschichte',
    author: 'Michael Ende',
    category: 'Fantasy',
  ),
  Book(title: 'Tintenherz', author: 'Cornelia Funke', category: 'Fantasy'),
  Book(title: 'Eragon', author: 'Christopher Paolini', category: 'Fantasy'),
  // Biografie
  Book(title: 'Steve Jobs', author: 'Walter Isaacson', category: 'Biografie'),
  Book(title: 'Becoming', author: 'Michelle Obama', category: 'Biografie'),
  // Kinderbuch
  Book(
    title: 'Die kleine Raupe Nimmersatt',
    author: 'Eric Carle',
    category: 'Kinderbuch',
  ),
  Book(
    title: 'Pippi Langstrumpf',
    author: 'Astrid Lindgren',
    category: 'Kinderbuch',
  ),
  Book(title: 'Jim Knopf', author: 'Michael Ende', category: 'Kinderbuch'),
];

// ============================================================================
// Main App
// ============================================================================

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Bibliothek Dashboard',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.indigo),
        useMaterial3: true,
      ),
      debugShowCheckedModeBanner: false,
      home: const LibraryDashboard(),
    );
  }
}

// ============================================================================
// Library Dashboard Screen
// ============================================================================

class LibraryDashboard extends StatelessWidget {
  const LibraryDashboard({super.key});

  /// Default selected category
  static const String selectedCategory = 'Roman';

  @override
  Widget build(BuildContext context) {
    // Get books for the selected category
    final categoryBooks = books
        .where((book) => book.category == selectedCategory)
        .toList();

    return Scaffold(
      appBar: AppBar(
        title: const Text('Bücherecke'),
        centerTitle: true,
        backgroundColor: Theme.of(context).colorScheme.primaryContainer,
      ),
      body: Column(
        children: [
          // Horizontal category list
          const CategoryListView(),
          // Vertical book list
          Flexible(child: BookListView(books: categoryBooks)),
          // Footer with contact information
          const ContactFooter(),
        ],
      ),
    );
  }
}

// ============================================================================
// Category List Widget
// ============================================================================

/// Horizontal scrollable list of book categories
class CategoryListView extends StatelessWidget {
  const CategoryListView({super.key});

  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;

    // Responsive height based on screen width
    final categoryHeight = screenWidth < 600 ? 80.0 : 100.0;

    return Container(
      height: categoryHeight,
      padding: const EdgeInsets.symmetric(vertical: 8.0),
      child: ListView.builder(
        scrollDirection: Axis.horizontal,
        itemCount: categories.length,
        padding: const EdgeInsets.symmetric(horizontal: 8.0),
        itemBuilder: (context, index) {
          return CategoryItem(
            category: categories[index],
            isSelected:
                categories[index].name == LibraryDashboard.selectedCategory,
          );
        },
      ),
    );
  }
}

/// Individual category item widget
class CategoryItem extends StatelessWidget {
  final Category category;
  final bool isSelected;

  const CategoryItem({
    super.key,
    required this.category,
    this.isSelected = false,
  });

  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;

    // Responsive width based on screen size
    final itemWidth = screenWidth < 600 ? 100.0 : 140.0;
    final fontSize = screenWidth < 600 ? 12.0 : 14.0;
    final iconSize = screenWidth < 600 ? 24.0 : 32.0;

    return Container(
      width: itemWidth,
      margin: const EdgeInsets.symmetric(horizontal: 6.0),
      decoration: BoxDecoration(
        color: isSelected
            ? Theme.of(context).colorScheme.primaryContainer
            : Theme.of(context).colorScheme.surfaceContainerHighest,
        borderRadius: BorderRadius.circular(12.0),
        border: isSelected
            ? Border.all(
                color: Theme.of(context).colorScheme.primary,
                width: 2.0,
              )
            : null,
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(
            category.icon,
            size: iconSize,
            color: isSelected
                ? Theme.of(context).colorScheme.primary
                : Theme.of(context).colorScheme.onSurfaceVariant,
          ),
          const SizedBox(height: 4.0),
          Text(
            category.name,
            style: TextStyle(
              fontSize: fontSize,
              fontWeight: isSelected ? FontWeight.bold : FontWeight.normal,
              color: isSelected
                  ? Theme.of(context).colorScheme.primary
                  : Theme.of(context).colorScheme.onSurfaceVariant,
            ),
            textAlign: TextAlign.center,
          ),
        ],
      ),
    );
  }
}

// ============================================================================
// Book List Widget
// ============================================================================

/// Vertical scrollable list of books
class BookListView extends StatelessWidget {
  final List<Book> books;

  const BookListView({super.key, required this.books});

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: books.length,
      padding: const EdgeInsets.all(16.0),
      itemBuilder: (context, index) {
        return BookItem(book: books[index]);
      },
    );
  }
}

/// Individual book item widget
class BookItem extends StatelessWidget {
  final Book book;

  const BookItem({super.key, required this.book});

  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;

    // Responsive sizing
    final isTablet = screenWidth >= 600;
    final contentPadding = isTablet
        ? const EdgeInsets.all(20.0)
        : const EdgeInsets.all(16.0);
    final titleFontSize = isTablet ? 18.0 : 16.0;
    final authorFontSize = isTablet ? 14.0 : 12.0;

    return Container(
      margin: const EdgeInsets.only(bottom: 12.0),
      padding: contentPadding,
      decoration: BoxDecoration(
        color: Theme.of(context).colorScheme.surface,
        borderRadius: BorderRadius.circular(12.0),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withValues(alpha: 0.05),
            blurRadius: 8.0,
            offset: const Offset(0, 2),
          ),
        ],
        border: Border.all(
          color: Theme.of(context).colorScheme.outlineVariant,
          width: 1.0,
        ),
      ),
      child: Row(
        children: [
          // Book icon
          Container(
            width: isTablet ? 60.0 : 50.0,
            height: isTablet ? 80.0 : 70.0,
            decoration: BoxDecoration(
              color: Theme.of(context).colorScheme.primaryContainer,
              borderRadius: BorderRadius.circular(8.0),
            ),
            child: Icon(
              Icons.menu_book,
              size: isTablet ? 32.0 : 28.0,
              color: Theme.of(context).colorScheme.primary,
            ),
          ),
          const SizedBox(width: 16.0),
          // Book details
          Flexible(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  book.title,
                  style: TextStyle(
                    fontSize: titleFontSize,
                    fontWeight: FontWeight.w600,
                    color: Theme.of(context).colorScheme.onSurface,
                  ),
                ),
                const SizedBox(height: 4.0),
                Text(
                  book.author,
                  style: TextStyle(
                    fontSize: authorFontSize,
                    color: Theme.of(context).colorScheme.onSurfaceVariant,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

// ============================================================================
// Footer Widget
// ============================================================================

/// Footer with library contact information
class ContactFooter extends StatelessWidget {
  const ContactFooter({super.key});

  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    final isTablet = screenWidth >= 600;

    return Container(
      width: double.infinity,
      padding: EdgeInsets.symmetric(
        vertical: isTablet ? 20.0 : 16.0,
        horizontal: 16.0,
      ),
      decoration: BoxDecoration(
        color: Theme.of(context).colorScheme.surfaceContainerHighest,
        border: Border(
          top: BorderSide(
            color: Theme.of(context).colorScheme.outlineVariant,
            width: 1.0,
          ),
        ),
      ),
      child: isTablet
          ? _buildTabletLayout(context)
          : _buildPhoneLayout(context),
    );
  }

  /// Layout for tablet screens (horizontal arrangement)
  Widget _buildTabletLayout(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: [
        _buildContactItem(
          context,
          Icons.location_on,
          'An der Hauptstraße 7, 12345 Lessak',
        ),
        _buildContactItem(context, Icons.phone, '+49 1234 567890'),
        _buildContactItem(context, Icons.email, 'info@lessak-buecherecke.de'),
      ],
    );
  }

  /// Layout for phone screens (vertical arrangement)
  Widget _buildPhoneLayout(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Text(
          'Kontakt',
          style: TextStyle(
            fontWeight: FontWeight.bold,
            fontSize: 14.0,
            color: Theme.of(context).colorScheme.onSurface,
          ),
        ),
        const SizedBox(height: 8.0),
        _buildContactRow(context, Icons.location_on, 'Lessak'),
        const SizedBox(height: 4.0),
        _buildContactRow(context, Icons.phone, '+49 1234 567890'),
        const SizedBox(height: 4.0),
        _buildContactRow(context, Icons.email, 'info@lessak-buecherecke.de'),
      ],
    );
  }

  Widget _buildContactItem(BuildContext context, IconData icon, String text) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        Icon(icon, size: 18.0, color: Theme.of(context).colorScheme.primary),
        const SizedBox(width: 8.0),
        Text(
          text,
          style: TextStyle(
            fontSize: 13.0,
            color: Theme.of(context).colorScheme.onSurfaceVariant,
          ),
        ),
      ],
    );
  }

  Widget _buildContactRow(BuildContext context, IconData icon, String text) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Icon(icon, size: 16.0, color: Theme.of(context).colorScheme.primary),
        const SizedBox(width: 6.0),
        Text(
          text,
          style: TextStyle(
            fontSize: 12.0,
            color: Theme.of(context).colorScheme.onSurfaceVariant,
          ),
        ),
      ],
    );
  }
}
