import React, { useState } from 'react'
import { Row, Col, Button, Image, Container, Card } from 'react-bootstrap'
import Gauge from './Gauge'
import OFF from "../../../assets/images/off.PNG";
import ON from "../../../assets/images/on.PNG";
import DO from "../../../assets/images/doorOpen.PNG";
import DC from "../../../assets/images/doorClose.PNG";

export const Actuator = () => {

  const [light, setLight] = useState(false);
  const [door, setDoor] = useState(false);


  const changeLight = () => {
    setLight(!light);
  }

  const changeDoor = () => {
    setDoor(!door);
  }

  return (
    <Container>
      <Row className='container'>
        <Col md={4}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">
                Ventilador
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Gauge />
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Row className='container'>
            <Col md={6}>
              <Card>
                <Card.Header>
                  <Card.Title as="h5">
                    Calor
                  </Card.Title>
                </Card.Header>
                <Card.Body>
                  <Button className="md container" variant="white" onClick={changeLight}>
                    <Image className='align-items-center' roundedCircle src={light ? ON : OFF} style={{ width: "15vw", height: "20vh" }} />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card>
                <Card.Header>
                  <Card.Title as="h5">
                    Puerta
                  </Card.Title>
                </Card.Header>
                <Card.Body>
                  <Button className="md container" variant="white" onClick={changeDoor}>
                    <Image src={door ? DO : DC} style={{ width: "15vw", height: "45vh" }} />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

    </Container>
  )
}
