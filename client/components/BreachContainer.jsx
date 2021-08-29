import React from 'react';

import BreachCard from './BreachCard.jsx'

const BreachContainer = (props) => {
  const { deleteCard, websites } = props;
  // console.log(websites.length);
  
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