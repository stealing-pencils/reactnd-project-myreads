import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import Books from './Books'
import * as BooksAPI from './BooksAPI'


class SearchPage extends Component {

  state = {
    query: '',
    bookResults: []
  }

  updateQuery = (query) => {
    this.setState({ query : query })
  }

  searchBooks = (query) => {
    BooksAPI.search(query).then((bookResults) => {
      if (bookResults.error) {
        this.setState( { bookResults : [] })
      } else {
        this.setState({ bookResults : bookResults })
      }
    })
  }






  render () {

    let showBooks;

    if(this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      showBooks = this.searchBooks(this.state.query)
    } else {
      this.state.bookResults = []
    }

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
            className="search books"
            type="text"
            placeholder="Search by title or author"
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.bookResults.map((book) => (
              <li key = {book.id} className = "returned search books">
              < Books
                book = {book}
                books = {this.props.books}
                changeBookShelf = {this.props.changeBookShelf}
              />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage;
