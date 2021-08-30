import React from 'react';

import BreachCard from './BreachCard.jsx'

/* feed container for cards */
const BreachContainer = (props) => {
  const { deleteCard, websites } = props;
  // console.log(websites.length);
  
  /* populates the cards and properties */
  const cards = websites.map((site, i) => {
    return (
      <BreachCard
        key={i}
        id={i}
        deleteCard={deleteCard}
        info={site}
      />
    );
  });
 
  return (
    <div>
      {cards}
    </div>
  );
};

export default BreachContainer;