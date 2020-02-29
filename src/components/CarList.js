import React from "react";
import { Card } from "semantic-ui-react";
import { Car } from "./Car";

export const CarList = ({ cars }) => {
  if (!cars || !cars.length) {
    return null;
  }

  return (
    <Card.Group itemsPerRow={3} style={{ padding: 20 }}>
      {cars.map((car, index) => (
        <Car car={car} key={index} />
      ))}
    </Card.Group>
  );
};
