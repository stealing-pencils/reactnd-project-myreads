import React, { Component } from 'react';
import Shelves from './Shelves'
import SearchBooks from './SearchBooks'
import { Link } from 'react-router-dom'


class MainPage extends Component {
  render() {
    const { books } = this.props
    // console.log(books)

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="currentlyReading">
              < Shelves
                books = {this.props.books}
              />
            </div>
            <div className="wantToRead">
              < Shelves
                books = {this.props.books}
              />
            </div>
            <div className="read">
              < Shelves
                books = {this.props.books}
              />
            </div>
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
