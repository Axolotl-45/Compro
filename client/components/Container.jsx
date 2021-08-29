import React, { Component } from 'react';

import Search from './SearchBar.jsx';
import BreachContainer from './BreachContainer.jsx';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      websites: [{name: '123'}],
    };
    this.findUser = this.findUser.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  };

  // componentDidMount() {
<<<<<<< HEAD
=======

>>>>>>> dev
  //   fetch('/api/renderUser')
  //     .then(res => this.setState({ websites: res }))
  //     .catch(err => console.log(`componentDidMount ERR: ${err}`)); 
  // }

  /* sends api query to find comproised data via email/username */
  findUser(e) {
    e.preventDefault();
    const searchKey = document.getElementById('search').value;
    
    fetch('/api/createUser', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input: searchKey })
    })
      .then(response => {
        // console.log(response);
        this.setState({ websites: response })
<<<<<<< HEAD
=======

>>>>>>> dev
      })
      .catch(err => console.log('findUser err: ', err));
  }

  /* removes the website from their list of compromised sites */
  deleteCard(e) {
<<<<<<< HEAD
=======

>>>>>>> dev
    // e.preventDefault();
    const cardId = 'help';
    console.log(e.target.id);
    console.log(e.target);
    fetch('/api/updateUser', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input: e.target.info.name })
    })
    .then(response => {
        const newState = this.state;
        newState.websites.splice(cardId, 1);
        console.log('response', response);
        this.setState(newState);
      })
      .catch(err => console.log('deleteCard err: ', err))
  };
  
<<<<<<< HEAD
=======


>>>>>>> dev
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