// Dependencies
import React from "react";
import { Row, Col, Card, Image, Button } from "react-bootstrap";
import Image404 from "../../../assets/images/404.svg";

const Page404 = () => (
  <Row>
    <Col>
      <Card>
        <Card.Body>
          <Image
            src={Image404}
            className="mx-auto d-block"
            fluid
            style={{ width: "50%" }}
          />
          <h1 className="display-1 text-center">404</h1>
          <h3 className="text-center">
            Lo sentimos la página que buscas no existe
          </h3>
          <br></br>
        </Card.Body>
      </Card>
    </Col>
  </Row>
);

export default Page404;
