import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from './MainPage'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'


class BooksApp extends React.Component {
  state = {
     books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  changeBookShelf= (book, shelf) => (
    BooksAPI.update(book,shelf),

    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  )

  searchBooks= (query) => {
    BooksAPI.search(query)
  }


  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          < MainPage
            books={this.state.books}
            changeBookShelf={this.changeBookShelf}
          />
        )}/>
        <Route path="/SearchBooks" render={() => (
          < SearchBooks
            searchBooks={this.searchBooks}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
