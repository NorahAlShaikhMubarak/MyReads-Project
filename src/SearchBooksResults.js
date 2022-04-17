import React from 'react';
import Book from './Book';

const SearchBooksResults = props => {
  const { searchBooks, myBooks, move } = props;

  const updatedBooks = searchBooks.map(book => {
    myBooks.map(b => {
      if (b.id === book.id) {
        book.shelf = b.shelf;
      }
      return b;
    });
    return book;
  });
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {updatedBooks.map(book => (
          <Book
            key={book.id}
            book={book}
            shelf={book.shelf ? book.shelf : 'none'}
            move={move}
          />
        ))}
      </ol>
    </div>
  );
};

export default SearchBooksResults;
