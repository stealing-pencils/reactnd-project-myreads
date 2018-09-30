import React, { Component } from 'react';
import Books from './Books'


class Shelves extends Component {

  state = {
    findShelf: ["currentlyReading", "wantToRead", "read"]
  }

  render () {

    let thisShelf = this.state.findShelf[this.props.index]

    return (
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.filter(book => (
              book.shelf === thisShelf)
            ).map(book => (
              <li key= {book.id} className="displayed book">
                < Books
                  book = {book}
                  books = {this.props.books}
                  changeBookShelf = {this.props.changeBookShelf}
                />
              </li>
            ))}
          </ol>
        </div>
    )
  }
}

export default Shelves;
