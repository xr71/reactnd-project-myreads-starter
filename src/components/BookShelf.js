import React, { Component } from "react";

class BookShelf extends Component {

  
  render() {
    
    const { books, shelf } = this.props;
    const this_shelf_books = books.filter((book) => book.shelf === shelf);
    // console.log(books);

    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">
            { shelf }
          </h2>

          <div className="bookshelf-books">
            {/* {console.log(books)} */}
            {/* {console.log(shelf)} */}
            <div className="books-grid">
              {console.log( this_shelf_books )}
              {
                this_shelf_books.map((book) => (
                  <li key={ book.id }>
                    {book.title}
                  </li>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BookShelf;