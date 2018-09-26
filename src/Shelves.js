import React, { Component } from 'react';
import Books from './Books'


class Shelves extends Component {

  state = {
    findShelf: ["currentlyReading", "wantToRead", "read"]
  }

  render () {
    return (
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.filter(book => (
              book.shelf === `${this.state.findShelf[this.props.index]}`)
            ).map(book => (
              <li key= {book.id} className="displayed book">
                < Books
                  book = {book}
                />
              </li>
            ))}
          </ol>
        </div>
    )
  }
}



export default Shelves;
