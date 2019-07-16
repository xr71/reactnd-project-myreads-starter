import React, { Component } from "react";
import BookShelf from './BookShelf';

class AllShelves extends Component {
  render() {
    {/* console.log(this.props.books) */}
    return (
      <div className="list-books-content">
        <BookShelf books={this.props.books} shelf="currentlyReading" />
        <BookShelf books={this.props.books} shelf="wantToRead" />
        <BookShelf books={this.props.books} shelf="read" />
      </div>
    )
  }
}

export default AllShelves;