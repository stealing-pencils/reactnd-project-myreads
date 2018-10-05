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

  searchBooks = (query) => {
    if(query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      BooksAPI.search(query.trim()).then((bookResults) => {
        if( bookResults.error ) {
          this.setState({ booksResults : [] })
        } else {
          this.setState({ bookResults : bookResults })
          // console.log(this.state.bookResults)
          // this.checkForShelf( this.state.bookResults )
        }
      })
    } else {
      this.setState({ bookResults : [] })
    }
  }

  // checkForShelf = ( onScreenBooks ) => {
  //   let updateShelf
  //   onScreenBooks.map((bookResultsBook) => {
  //     this.props.books.filter((mainPageBook) => {
  //       if(bookResultsBook.id === mainPageBook.id){
  //         if(this.state.hasShelf.includes(mainPageBook)){
  //           // console.log(mainPageBook.shelf)
  //           // console.log("here at this bit")
  //           updateShelf = mainPageBook.shelf
  //           // console.log(updateShelf)
  //         } else {
  //           updateShelf = mainPageBook.shelf
  //           // console.log(updateShelf)
  //           // console.log("at this other bit")
  //           // this.state.hasShelf.push(mainPageBook)
  //           // console.log(this.state.hasShelf)
  //         }
  //       } else {
  //         updateShelf = 'none'
  //         // console.log(updateShelf)
  //         // console.log("no go")
  //       }
  //     })
  //   })
  // }


  // updateBookResults = (mainPageBook) => {
  //   this.state.hasShelf.findIndex((book) => book.id ===)
  // }
  //   this.state.hasShelf.

  // updateShelf = ()
  setShelf = (book) => {
    this.props.books.filter((mainPageBook) => {
      if(book.id === mainPageBook.id){
        return mainPageBook.shelf
        // console.log(updateShelf)
      } else {
        return 'none'
      }
    })
  }

  render () {

    let updateShelf


    // console.log(this.state.bookResults)
    // console.log(this.props.books)

    // let updateShelf = 'none'


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
              this.setShelf(book),
              <li key = {book.id} className = "returned search books">
              < Books
                book = {book}
                changeBookShelf={this.props.changeBookShelf}
                bookResults = {this.state.bookResults}

                // updateShelf = {}
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
