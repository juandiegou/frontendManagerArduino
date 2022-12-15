import React from 'react';
import { Card } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';


export const TableData = () => {
  return (
    <div className='col'>
      <Card>
        <Card.Header>
          <Card.Title as="h5">
            Datos
          </Card.Title>
          <Card.Body>
            <Table striped hover size="xl">
              <thead>
                <tr>
                  <th>Sensor</th>
                  <th>Valor Minimo</th>
                  <th>Valor Maximo</th>
                  <th>Valor Actual</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Temperatura</td>
                  <td>Luminosidad</td>
                  <td>Humedad</td>
                  <td>Proximidad</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Larry the Bird</td>
                  <td>@twitter</td>
                  <td>G</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>

        </Card.Header>
      </Card>

    </div>
  )
}
