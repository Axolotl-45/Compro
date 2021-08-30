import React, { Component } from 'react';

import Search from './SearchBar.jsx';
import BreachContainer from './BreachContainer.jsx';

/* dummy data */
const dummy = {
  name: 'first',
  title: 'Google',
  domain: 'google.com',
  date: 'Aug 27, 2021',
  pwnCount: '90000000000000',
  description: 'barnicles',
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png'
};

class Container extends Component {
  constructor(props) {
    super(props);
    /*
    STATE:
    websites : array of objects
    */
    this.state = {
      websites: [dummy],
    };
    this.findUser = this.findUser.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  };

  /* loads loggined in user's data */
  // componentDidMount() {
  //   fetch('/api/renderUser')
  //     .then(res => this.setState({ websites: res }))
  //     .catch(err => console.log(`componentDidMount ERR: ${err}`)); 
  // }

  /* search button for api query */
  findUser(e) {
    e.preventDefault();
    const searchKey = document.getElementById('search').value;
    console.log('search key: ', searchKey)
    
    fetch('/api/createUser', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input: searchKey })
    })
      .then(response => {
        console.log('data received', response);
        this.setState({ websites: response })
      })
      .catch(err => console.log('findUser err: ', err));
  }

  /* sends an update request via pressing the delete button */
  deleteCard(e) {
    e.preventDefault();
    const cardId = 'help';
    console.log('id', e.target.getAttribute('id'));
    console.log(e.target);
    fetch('/api/updateUser', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input: e.target.info.name })
    })
      .then(response => {
        /* updates state by deleting old card */
        const newState = this.state;
        newState.websites.splice(cardId, 1);
        console.log('response', response);
        this.setState(newState);
      })
      .catch(err => console.log('deleteCard err: ', err))
  };
  
  render() {
    return (
      <div>
        <Search findUser={this.findUser} />
        <BreachContainer
          deleteCard={this.deleteCard}
          websites={this.state.websites}
        />
      </div>
    );
  };
}

export default Container;