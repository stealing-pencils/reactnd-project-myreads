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
    // this.props.searchBooks(query)
  }

  searchBooks = (query) => {
    BooksAPI.search(query).then((bookResults) => {
      this.setState({ bookResults : bookResults })
    })
  }

  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   const values = searlizeForm(e.target, {hash: true})
  // }

  render () {

    // let showBooks;
    //
    // if(this.state.query) {
    //   const match = new RegExp(escapeRegExp(this.state.query))
    //   showBooks = this.props.books.filter((searchedBook) => match.test(searchedBook.name))
    //
    // } else {
    //   showBooks = this.props.books
    // }

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
            {this.state.query}
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
