import React, { Component } from 'react'
import { Route } from 'react-router-dom'
//import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import Bookshelf from './Bookshelf'

class BooksApp extends Component {
  state = {
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (<Bookshelf/>)}/>
        <Route path="/search" render={() => (<Search/>)}/>
      </div>
    )
  }
}

export default BooksApp
