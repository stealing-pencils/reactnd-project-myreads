import React, { Component } from 'react';
import Books from './Books'


class Shelves extends Component {

  state = {
    findShelf: ["currentlyReading", "wantToRead", "read"]
  }

  render () {

    let bookShelf = this.state.findShelf[this.props.index]


    return (
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.filter(book => (
              book.shelf === bookShelf)
            ).map(book => (
              <li key= {book.id} className="displayed book">
                < Books
                  book = {book}
                  books = {this.props.books}
                  changeBookShelf = {this.props.changeBookShelf}
                  updateShelf = {book.shelf}
                />
              </li>
            ))}
          </ol>
        </div>
    )
  }
}

export default Shelves;
