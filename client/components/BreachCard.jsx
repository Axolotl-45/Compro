import React from 'react';

const BreachCard = props => {
  const { deleteCard } = props;
  return (
    <div>
      <p>Image</p>
      <p>Name</p>
      <p>Description</p>
      <p>Compromised Data</p>
      <button onClick={deleteCard}>Delete</button>
    </div>
  );
}

export default BreachCard;