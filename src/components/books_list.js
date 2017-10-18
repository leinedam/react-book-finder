import React from 'react';
import BooksListItem from './books_list_item.js';

const BookList = (props) => {

  const bookItems = props.books.map((book) =>{
    return <BooksListItem
    onBookSelect={props.onBookSelect}
    key={book.etag}
    book={book}/>
  });

  return (
    <div className="col-md-4 scroll" >
            <ul className="list-group">
                {bookItems}
            </ul>
    </div>

  );
}

export default BookList;
