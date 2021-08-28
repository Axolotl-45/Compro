import React, { Component } from 'react';
import Search from './SearchBar.jsx';
import BreachContainer from './BreachContainer.jsx';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      websites: ['asdf', 'a234'],
    };
    this.findUser = this.findUser.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  };

  findUser(e) {
    e.preventDefault();
    const searchKey = e.target.value;
    fetch('/api/createUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ input: searchKey }
      )
    })
      .then(response => {
        this.setState({ websites: response })
      })
      .catch(err => console.log('findUser err: ', err))
  };

  deleteCard(e) {
    e.preventDefault();
    const cardId = e.target.id;
    const newState = this.state;
    newState.websites.splice(cardId, 1);
    this.setState(newState);
  }
  
  componentDidMount() {
    fetch('/api/renderUser')
      .then(res => this.setState({ websites: res }))
      .catch(err => console.log(`componentDidMount ERR: ${err}`)); 
  }
  
  render() {
    return (
      <div>
        <Search findUser={this.findUser} />
        <BreachContainer
          deleteCard={this.deleteCard}
          length={this.state.websites.length}
        />
      </div>
    );
  };
}

export default Container;