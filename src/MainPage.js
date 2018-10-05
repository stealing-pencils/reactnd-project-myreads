import React, { Component } from 'react';
import Shelves from './Shelves'
import SearchBooks from './SearchBooks'
import { Link } from 'react-router-dom'


class MainPage extends Component {

  state = {
    shelfName: ["Currently Reading", "Want to Read", "Read"],
    findShelf: ["currentlyReading", "wantToRead", "read"]


  }

  render() {

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.state.shelfName.map((shelf, index) => (
              <div key={[index]} className="shelf">
                <div className="bookshelf">
                  <h2 className="bookshelf-title">
                    {this.state.shelfName[index]}
                  </h2>
                    < Shelves
                      books = {this.props.books}
                      index = {index}
                      changeBookShelf = {this.props.changeBookShelf}
                      // getBookId = {this.props.bookId}
                    />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link
            to = "/SearchBooks"
            className = "open-search-icon"
          >Add a book</Link>
        </div>
      </div>
    )
  }

}

export default MainPage;
