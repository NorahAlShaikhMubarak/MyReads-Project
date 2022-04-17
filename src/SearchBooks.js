import React, { Component } from 'react';
import SearchBooksResults from './SearchBooksResults';
import { Link } from 'react-router-dom';
import SearchBooksInput from './SearchBooksInput';

class SearchBooks extends Component {

  render() {
    const {
      searchBooks,
      myBooks,
      onSearch,
      onResetSearch,
      move
    } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search" onClick={onResetSearch}>
              Close
            </button>
          </Link>
          <SearchBooksInput onSearch={onSearch} />
        </div>
        <SearchBooksResults
          searchBooks={searchBooks}
          myBooks={myBooks}
          move={move}
        />
      </div>
    );
  }
}

export default SearchBooks;
