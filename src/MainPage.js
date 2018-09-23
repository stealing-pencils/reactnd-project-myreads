import React, { Component } from 'react';
import Books from './Books'
import { Link } from 'react-router-dom'


class MainPage extends Component {
  render() {
    // console.log(this.props)
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">

                  {this.props.books.map((book) => (
                    <li key= {book.id} className="displayed book">
                      < Books/>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  <li>
                    < Books/>
                  </li>
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  <li>
                    < Books/>
                  </li>
                </ol>
              </div>
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
