import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';
import BookShelf from './components/BookShelf';
import AllShelves from './components/AllShelves';
import Search from './components/Search';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    // the returned books array has objects 
    // with key shelf [currentlyReading, wantToRead, read]
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books: books
      }))
    })
  }

  render() {
      return (
        <div className="app">
          <Route exact path="/" 
            render={() => (
              <AllShelves 
                books={this.state.books}
              />
            )}
          />

          <Route exact path="/search" 
            render={() => (
              <Search />
            )}
          />
        </div>
        
      )
  }
}

export default BooksApp;