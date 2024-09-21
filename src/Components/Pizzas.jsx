import { Button, Card, Col, Container, Row } from "react-bootstrap";
import React from "react";

function Pizza(props) {
  return (
    <li className={`${props.pizzaObj.soldOut ? "sold-out" : ""} `}>
      <Container className="d-flex align-items-start">
        <Row className="d-flex align-items-center justify-content-around ">
          <Col>
            <Card style={{ width: "12rem" }}>
              <Card.Img
                variant="top"
                src={props.pizzaObj.photoName}
                alt={props.pizzaObj.name}
              />
            </Card>
          </Col>
          <Col>
            <div>
              <Card.Body>
                <Card.Title>
                  <h3>{props.pizzaObj.name}</h3>
                </Card.Title>
                <Card.Text>{props.pizzaObj.ingredients}</Card.Text>
                <Button variant="primary" className="btn">
                  {props.pizzaObj.soldOut ? " SOLD OUT" : props.pizzaObj.price}{" "}
                  $
                </Button>
              </Card.Body>
            </div>
          </Col>
        </Row>
      </Container>
    </li>
  );
}

export default Pizza;
