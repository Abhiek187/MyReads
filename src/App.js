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
    /*BooksAPI.getAll().then((res) => {
      console.log(res)
      BooksAPI.update(res[0], 'read').then((res2) => {console.log(res2)})
    })
    BooksAPI.search('Art').then((res) => {console.log(res)})*/
    return (
      <div className="app">
        <Route exact path="/" component={Bookshelf}/>
        <Route path="/search" component={Search}/>
      </div>
    )
  }
}

export default BooksApp
