import React from 'react';
import BreachCard from './BreachCard.jsx';

const BreachContainer = (props) => {
  const { length, deleteCard, name, title, domain, date, pwnCount, description, logo } = props;
  const cards = [];
  // console.log(length);

  for (let x = 0; x < length; x++) {
    cards.push(<BreachCard
      key={x}
      id={x}
      deleteCard={deleteCard}
      name={name}
      title={title}
      domain={domain}
      date={date}
      pwnCount={pwnCount}
      description={description}
      logo={logo}
    />);
  }

  return (
    <div>
      {cards}
    </div>
  );
};

export default BreachContainer;
