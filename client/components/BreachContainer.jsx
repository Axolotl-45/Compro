import React from 'react';
import BreachCard from './BreachCard.jsx'

const BreachContainer = props => {
  const { length, deleteCard } = props;
  const cards = [];
  console.log(length);

  for (let x = 0; x < length; x++) {
    cards.push(<BreachCard
      key={x}
      id={x}
      deleteCard={deleteCard} />)
  }

  return (
    <div>
      {cards}
    </div>
  )
}

export default BreachContainer;