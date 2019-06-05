import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

class Search extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }

  state = {
    showingBooks: []
  }

  searchBooks = query => {
    BooksAPI.search(query).then(books => {
      this.setState({showingBooks: books})
    }).catch(
      this.setState({showingBooks: []})
    )
  }

	render() {
    const {books, onChangeShelf} = this.props
    const {showingBooks} = this.state

		return (
			<div className="search-books">
        <div className="search-books-bar">
        	<Link className="close-search" to="/">Close</Link>
      		<div className="search-books-input-wrapper">
        		{/*
          		NOTES: The search from BooksAPI is limited to a particular set of search terms.
          		You can find these search terms here:
          		https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

          		However, remember that the BooksAPI.search method DOES search by title or author. So, don't
              worry if you don't find a specific author or title. Every search is limited by search terms.
        		*/}
          	<input type="text" placeholder="Search by title or author"
              onChange={event => this.searchBooks(event.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {showingBooks && !showingBooks.error && showingBooks.map(book => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{width: 128, height: 193,
                      backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : ''})`}}>
                    </div>
                    <div className="book-shelf-changer">
                      <select defaultValue={books.filter(b => b.id === book.id).length > 0 ?
                        books.filter(b => b.id === book.id)[0].shelf : "none"}
                        onChange={event => onChangeShelf(book, event.target.value)}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors" style={{whiteSpace: 'pre'}}>
                    {book.authors ? book.authors.join('\r\n') : 'No Author'}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
		)
	}
}

export default Search
