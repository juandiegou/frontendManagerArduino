import React from 'react'
import { Row, Col, Button, Image } from 'react-bootstrap'
import Gauge from './Gauge'
import OFF from "./off.PNG";

export const Actuator = () => {
  return (
    <>
      <Row>
        <Col>
          <Gauge />
        </Col>
        <Col>
          <Row>
            <Col>
              <Button className="md" variant="white">
                <Image roundedCircle>
                  <img src={OFF} width="50" />
                </Image>
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>

    </>
  )
}
