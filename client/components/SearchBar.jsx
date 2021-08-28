import React from 'react';

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