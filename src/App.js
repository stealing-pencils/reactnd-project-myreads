import React from 'react'
import './App.css'
import MainPage from './MainPage'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import { Switch, Route } from 'react-router-dom'


class BooksApp extends React.Component {
  state = {
     books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  changeBookShelf= (book, shelf) => {
    BooksAPI.update(book,shelf).then(() => {
      BooksAPI.getAll().then((books) => {
        this.setState({ books })
      })
    })
  }

  searchBooks= (query) => {
    BooksAPI.search(query).then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={() => (
            < MainPage
              books={this.state.books}
              changeBookShelf={this.changeBookShelf}
            />
          )}/>
          <Route path="/SearchBooks" render={() => (
            < SearchBooks
              books={this.state.books}
              searchBooks={this.searchBooks}
              changeBookShelf={this.changeBookShelf}
            />
          )}/>
        </Switch>
      </div>
    )
  }
}

export default BooksApp
