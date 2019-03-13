import React from "react";
import { Button, Table, } from "semantic-ui-react";

const Card = ({ id, front, back, remove, }) => (
  <Table.Row>
    <Table.Cell>{ front }</Table.Cell>
    <Table.Cell>{ back }</Table.Cell>
    <Table.Cell>
      <Button color="blue" onClick={() => remove(id)}>Delete</Button>
    </Table.Cell>
  </Table.Row>
)

export default Card;
