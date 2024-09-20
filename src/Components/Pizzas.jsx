import { Button, Card, Col, Container, Row } from "react-bootstrap";
import React from "react";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Pizza(props) {
  return (
    <Container>
      <Row className="d-flex align-items-center">
        <Col>
          <Card style={{ width: "12rem" }}>
            <Card.Img variant="top" src={props.photoName} alt={props.name} />
          </Card>
        </Col>
        <Col>
          <div>
            <Card.Body>
              <Card.Title>
                <h3>{props.name}</h3>
              </Card.Title>
              <Card.Text>{props.ingredients}</Card.Text>
              <Button variant="primary">{props.price} $</Button>
            </Card.Body>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Pizza;
