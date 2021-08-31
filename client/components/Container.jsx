import React, { Component } from 'react';

import Search from './SearchBar.jsx';
import BreachContainer from './BreachContainer.jsx';

class Container extends Component {
  constructor(props) {
    super(props);
    /*
    STATE:
    websites : Array of objects
    currentUser: String
    */
    this.state = {
      websites: [],
      currentUser: '',
    };
    this.findUser = this.findUser.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  };

  /* loads data */
  componentDidMount() {
    fetch('/api/renderUser')
      .then(data => data.json())
      .then(res => this.setState({ websites: res }))
      .catch(err => console.log(`componentDidMount ERR: ${err}`)); 
  }

  /* search button for api query */
  findUser(e) {
    e.preventDefault();
    const searchKey = document.getElementById('search').value;

    fetch('/api/createUser', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input: searchKey })
    })
      .then(res => res.json())
      .then(response => {
        // console.log('data received', response);
        this.setState({ websites: response, currentUser: searchKey })
      })
      .catch(err => console.log('findUser err: ', err));
  }

  /* sends an update request via pressing the delete button */
  deleteCard(e) {
    e.preventDefault();
    const cardId = e.target.id
    const name = this.state.websites[cardId].Name;

    fetch('/api/updateUser', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input: name, username: this.state.currentUser })
    })
      .catch(err => console.log('deleteCard err: ', err));
    
    /* deletes card from current state */ 
    const newState = this.state;
    newState.websites.splice(cardId, 1);
    this.setState(newState);
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