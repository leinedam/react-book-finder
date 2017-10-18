import React from 'react';


const BooksListItem = ({book, onBookSelect}) => {
const imageUrl = book.volumeInfo.imageLinks.smallThumbnail;

  return (
    <li onClick={() => onBookSelect(book)} className="list-group-item book-item" >
        <div className="media">
            <div className="media-left">
                <img className="media-object" src={imageUrl} />
              </div>
            <div className="list-item-title">
              <div className="list-item-heading">
                <p className="title-list">{book.volumeInfo.title}</p>
                <p className="descr-list">Category: {book.volumeInfo.categories}</p>
                <p className="descr-list">Author/s: {book.volumeInfo.authors}</p>
              </div>
            </div>
        </div>
    </li>
  );
};

export default BooksListItem;
