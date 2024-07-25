import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const TotalCard = ({ products }) => {
  const subtotal = products.reduce(
    (acc, product) => acc + product.price * (product.amount || 1),
    0
  );
  const tax = subtotal * 0.18;
  const shipping = subtotal > 1000 ? 0 : 25;
  const total = subtotal + tax + shipping;

  return (
    <Card style={{ width: "20rem", height: "10rem" }}>
      <ListGroup variant="flush">
        <ListGroup.Item className="d-flex">
          Subtotal <span className="ms-auto">{subtotal.toFixed(2)} €</span>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex">
          Tax <span className="ms-auto">${tax.toFixed(2)} €</span>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex">
          Shipping <span className="ms-auto">${shipping.toFixed(2)} €</span>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex">
          Total <span className="ms-auto">${total.toFixed(2)} €</span>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default TotalCard;
