import React from 'react';
import {Form, Button} from 'react-bootstrap';

/* search bar to send api request */
const Search = props => {
  const { findUser } = props;

  return (
    <div className="searchbar">
      <input type="type" id="search"/>
      <button class="searchBtn" onClick={findUser}>Submit</button>
    </div>
  );
};

export default Search;