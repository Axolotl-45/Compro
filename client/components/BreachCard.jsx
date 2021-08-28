import React from 'react';

const BreachCard = props => {
  const { deleteCard } = props;
  return (
    <div>
      <p>Name</p>
      <p>Title</p>
      <p>Domain</p>
      <p>Breach Date</p>
      <p>Pwn Count</p>
      <p>Description</p>
      <p>Logo</p>
      <button onClick={deleteCard}>Delete</button>
    </div>
  );
}

export default BreachCard;