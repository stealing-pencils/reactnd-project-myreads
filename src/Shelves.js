import React, { Component } from 'react';
import Books from './Books'


class Shelves extends Component {




// this.state.shelfName.map(shelfNam => <Shelf shelfName={shelfName} key={shelfName} books={this.state.books.filter(book => book.shelf === shelfName)} />)

  render () {

    return (
      <div className="bookshelf">

        <h2 className="bookshelf-title">
          placeholder
        </h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.filter(book => (
              book.shelf === "currentlyReading")
            ).map(book => (
              <li key= {book.id} className="displayed book">
                < Books
                  book = {book}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}



export default Shelves;
