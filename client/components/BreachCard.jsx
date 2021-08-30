import React from 'react';
import { Markup } from 'interweave';

/* card template -- populates the data info */
const BreachCard = (props) => {
  const { deleteCard, info, id } = props;
  const { Name, Title, Domain, BreachDate, PwnCount, Description, LogoPath } = info;

  return (
    <div className="breach-card">
      <img src={LogoPath} height='100' width='100' className='breach-card-image' />
      <p>Name: {Name}</p>
      <p>Title: {Title}</p>
      <p>Domain: <a href={Domain}>{Domain}</a></p>
      <p>Breach Date: {BreachDate}</p>
      <p>Pwn Count: {PwnCount}</p>
      <p>Description: <Markup content={Description}/></p>
      <button class="deleteBtn" onClick={deleteCard} id={id} >Delete</button>
    </div>
  );
};

export default BreachCard;