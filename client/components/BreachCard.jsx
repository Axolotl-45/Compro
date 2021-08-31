import React from 'react';
import { Markup } from 'interweave';

/* card template -- populates the data info */
const BreachCard = (props) => {
  const { deleteCard, info, id } = props;
  const { Name, Title, Domain, BreachDate, PwnCount, Description, LogoPath } = info;
  const pwnCountStr = PwnCount.string
  return (
    <div className="breach-card">
      <img src={LogoPath} className='breach-card-image' />
      <h3><b>{Name}</b></h3>
      <p><b>Domain:</b> <a href={'http://' + Domain} target="_blank">{Domain}</a></p>
      <p><b>Breach Date:</b> <i>{BreachDate}</i></p>
      <p><b>Pwn Count:</b> {PwnCount}</p>
      <p><b>Description:</b> <Markup content={Description}/></p>
      <button className="deleteBtn" onClick={deleteCard} id={id} >Delete</button>
    </div>
  );
};

export default BreachCard;