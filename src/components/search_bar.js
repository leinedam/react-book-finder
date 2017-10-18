import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props){
    super(props);
    this.state = {
      term : ''
    }
  }

  render() {
    return (
      <div className="input-group search-bar">
          <input className="form-control"
          value={this.state.term}
          onChange={(e) => this.onInputChange(e.target.value)} placeholder="Search any book" />
          <span className="input-group-btn">
            <button
            value={this.state.term}
            onChange={(e) => this.onClick(e.target.value)}
            className="btn btn-default" type="button">Go!</button>
          </span>
      </div>
    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
