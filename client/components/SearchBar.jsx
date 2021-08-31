import React from 'react';

/* search bar to send api request */
const Search = props => {
  const { findUser } = props;

  return (
    <div className="searchbar">
      <input type="type" id="search" placeholder="Enter email address..."/>
      <button className="searchBtn" onClick={findUser}>Submit</button>
    </div>
  );
};

export default Search;