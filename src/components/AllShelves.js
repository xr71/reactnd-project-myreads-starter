import React, { Component } from "react";
import BookShelf from './BookShelf';
import OpenSearch from './OpenSearch';

class AllShelves extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf books={this.props.books} shelf="currentlyReading" />
          <BookShelf books={this.props.books} shelf="wantToRead" />
          <BookShelf books={this.props.books} shelf="read" />
        </div>
        <OpenSearch />
      </div>
      
      
    )
  }
}

export default AllShelves;