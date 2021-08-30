import React from 'react';

/* search bar to send api request */
const Search = props => {
  const { findUser } = props;

  return (
    <div>
      <input type="type" id="search"/>
      <button onClick={findUser}>Submit</button>
    </div>
  );
};

export default Search;