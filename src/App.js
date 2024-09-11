import React, {Component} from 'react'
import {Route, Routes} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import Bookshelf from './Bookshelf'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({books})
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then(books => {
        this.setState({books})
      })
    })
  }

  render() {
    return (
      <div className="app">
        <Routes>
          <Route exact path="/" element={
            <Bookshelf books={this.state.books} onChangeShelf={this.changeShelf}/>
          }/>
          <Route path="/search" element={
            <Search books={this.state.books} onChangeShelf={this.changeShelf}/>
          }/>
        </Routes>
      </div>
    )
  }
}

export default BooksApp
