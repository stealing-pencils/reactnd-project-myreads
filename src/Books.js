import React, { Component } from 'react';
import serializeForm from 'form-serialize'
import * as BooksAPI from './BooksAPI'



class Books extends Component {

  state = {
    selectedValue: this.props.book.shelf,
    noShelf: "none"
  }


  render () {
    let bookStyleReady = this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : ''

    // console.log(this.props.newBookList)
    // console.log(this.props.mainPageBook)
    //
    // this.props.mainPageBook.map((book, index) => {
    //   console.log(book[index])
    // })

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193,
            backgroundImage: `url("${bookStyleReady}")`}}></div>
          <div className="book-shelf-changer">
            <select
              value = {"default"}
              onChange = {(event) => (
                this.props.changeBookShelf(this.props.book, event.target.value)
              )}
              >
                <option value={"default"} disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value={"none"}>None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    )
  }
}

export default Books;
