import React from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';

const BookDetail = (props) => {
  if(!props.book){
    return <div>Loading..</div>;
  }
  if(!props.book.volumeInfo.ratingsCount){
     props.book.volumeInfo.ratingsCount = 0;
  }
  return (

    <div className="book-detail-container" >
        <div className="book-detail-header">
            <p>{props.book.volumeInfo.title}</p>
        </div>
        <div className="book-detail">
            <div className="book-img">
                <img  src={props.book.volumeInfo.imageLinks.thumbnail} />
            </div>
            <div className="book-info">
            <p className="rating-count-box">
            <StarRatingComponent
                                name="rate1"
                                starCount={5}
                                editing={false}
                                value={props.book.volumeInfo.averageRating}

                            />
              <span className="rating-count"> {props.book.volumeInfo.ratingsCount} votes </span></p>
              <p><span>Category: </span>{props.book.volumeInfo.categories}</p>
              <p><span>Author/s: </span>{props.book.volumeInfo.authors}</p>
              <p><span>Publisher: </span>{props.book.volumeInfo.publisher}</p>
              <p><span>Pages: </span>{props.book.volumeInfo.pageCount}</p>
              <p><span>Description: </span>{props.book.volumeInfo.description}</p>
            </div>
        </div>
    </div>
  );
};

export default BookDetail;
