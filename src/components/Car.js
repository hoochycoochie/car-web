import React from "react";
import { Card, Image } from "semantic-ui-react";

export const Car = ({ car }) => {
  return (
    <Card>
      <Image src={car.picture} style={{ width: "100%", height: 250 }} />
      <Card.Content>
        <Card.Header>{car.name}</Card.Header>
      </Card.Content>
    </Card>
  );
};
