import React from "react";
import Card from "./Card";
import { Table, } from "semantic-ui-react";

const Cards = ({ cardList, remove, }) => (
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Question</Table.HeaderCell>
        <Table.HeaderCell>Answer</Table.HeaderCell>
        <Table.HeaderCell>Options</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        cardList.map( (card, index) => (
          <Card key={index} {...card} remove={remove} />
        ))
      }
    </Table.Body>
  </Table>
)

export default Cards;
