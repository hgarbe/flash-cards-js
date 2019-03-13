import React, { Component } from 'react';
import './App.css';
import CardForm from "./CardForm";
import Cards from "./Cards";
import { Container, Header, Button, Icon, } from "semantic-ui-react";

class App extends Component {
  state = {
    cards: [
      {id: 1, front:"What is is my favorite color? ", back:"Grey" },
      {id: 2, front:"What is is my favorite basketball team? ", back:"Utah Jazz" },
      {id: 3, front:"What is is my car? ", back:"1968 Chevy Nova SS" },
    ],
    showForm: false,
  };

  getId = () => Math.floor((1 + Math.random()) * 10000);

  addCard = (cardData) => {
    let card = { id: this.getId(), ...cardData, };
    this.setState({ cards: [...this.state.cards, card], });
  }

  removeCard = (id) => {
    const cards = this.state.cards.filter( card => {
      if (card.id !== id)
        return card
    });
    this.setState({ cards, });
  }

  toggleForm = () => this.setState({ showForm: !this.state.showForm, });

  render() {
    return (
      <Container textAlign="center" style={{ paddingTop: "25px", }}>
        <Header as="h1">React Flash Cards </Header>
        <br />
        <div>
          <Button icon color="blue" onClick={this.toggleForm}>
            <Icon name={`angle double ${this.state.showForm ? "up" : "down"}`} />
          </Button>
          { this.state.showForm ? <CardForm addCard={this.addCard} /> : null }
        </div>
        <br />
        <Cards 
          cardList={this.state.cards} 
          remove={this.removeCard} 
        />
      </Container>
    );
  }
}

export default App;

