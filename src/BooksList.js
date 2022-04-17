import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';

class BooksList extends Component {

  render() {
    const { bookshelves, books, move } = this.props;
    return (

      <div className="list-books">
        <div className="list-books-title">
          <h1>My Reads Project</h1>
        </div>

        <div className="list-books-content">
          <div>
            {bookshelves.map(shelf => (
              <Bookshelf
                key={shelf.key}
                shelf={shelf}
                books={books}
                move={move}
              />
            ))}
          </div>
        </div>

        <div className="open-search">
          <Link to="search">
            <button>Add a Book</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default BooksList;
