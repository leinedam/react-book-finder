import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/search_bar.js';
import {Grid, Col, Row} from 'react-bootstrap';
import axios from 'axios';
import BookList from './components/books_list.js';
import BookDetail from './components/book_detail.js';
import _ from 'lodash';

class App extends Component {

CONST_API_KEY = "AIzaSyD2I3Kea-SMNub8DWUcEOXCHo-Cb8uH5YE";

constructor(props){
    super(props);
    this.state = {
      books:[],
      selectedBook: null
    }
    this.bookSearch('the lord of the rings');
  }


  bookSearch(term){
    axios.request({
      method: 'get',
      url: 'https://www.googleapis.com/books/v1/volumes?q='+term
    }).then((response) => {
      this.setState({
        books: response.data.items,
        selectedBook : response.data.items[0]
      }, () => {
        console.log(this.state);
      });
    }).catch((error) => {
      console.log(error);
    });
  }


  render() {
    const bookSearch = _.debounce((term) => {this.bookSearch(term)}, 300);
    return (
      <body>
            <div className="header col-md-8">
            <div className="container">
                <h2 className="logo">Book Streamer</h2>
                <p><SearchBar onSearchTermChange={bookSearch} /></p>
                <BookDetail book={this.state.selectedBook}/>
            </div>
            </div>
             <BookList
             onBookSelect={selectedBook =>this.setState({selectedBook})}
             books={this.state.books} />
      </body>
    );
  }
}

export default App;
