import React, { Component } from 'react';
import Books from './Books'


class Shelves extends Component {


  render () {
    // console.log("here are the shelves")
    // console.log(this.props.books)
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
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
