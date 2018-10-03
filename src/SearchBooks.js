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
    bookResults: [],
    hasShelf: []
  }

  updateQuery = (query) => {
    this.setState({ query : query })
    this.searchBooks(this.state.query)
  }

//TO DO:  clearQuery = () => {
  //   this.setState({ query: ''})
  // }


  searchBooks = (query) => {
    if(query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      BooksAPI.search(query.trim()).then((bookResults) => {
        if( bookResults.error ) {
          this.setState({ booksResults : [] })
        } else {
          this.setState({ bookResults : bookResults })
          this.checkForShelf( this.state.bookResults )
        }
      })
    } else {
      this.setState({ bookResults : [] })
    }
  }

  checkForShelf = ( onScreenBooks ) => {
    onScreenBooks.map((bookResultsBook) => {
      this.props.books.filter((mainPageBook) => {
        if(bookResultsBook.id === mainPageBook.id){
          if(this.state.hasShelf.includes(mainPageBook)){
            console.log("has one already")
            console.log(this.state.hasShelf)
          } else {
            console.log("had to push")
            // this.setState({ hasShelf : mainPageBook })
            this.state.hasShelf.push(mainPageBook)
            console.log(this.state.hasShelf)
          }
        } else {
          console.log("no go")
        }
      })
    })
  }



  render () {





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
                changeBookShelf={this.props.changeBookShelf}
                hasShelf = {this.state.hasShelf}
                // mainPageBook = {this.mainPageBook}
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
