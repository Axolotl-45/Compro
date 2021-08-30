import React from 'react';

/* card template -- populates the data info */
const BreachCard = (props) => {
  const { deleteCard, info, id } = props;
  const { Name, Title, Domain, BreachDate, PwnCount, Description, LogoPath } = info;

  return (
    <div>
      <p>Name: {Name}</p>
      <p>Title: {Title}</p>
      <p>Domain: {Domain}</p>
      <p>Breach Date: {BreachDate}</p>
      <p>Pwn Count: {PwnCount}</p>
      <p>Description: {Description}</p>
      <img src={LogoPath} height='100' width='100' />
      <button onClick={deleteCard} id={id} >Delete</button>
    </div>
  );
};

export default BreachCard;