import React,{ useState, useEffect  }  from 'react'
import { Row, Col, Card, Button } from "react-bootstrap";
import RTChart from 'react-rt-chart';
import {requestCore} from "../../api/axios";
import moment from 'moment'
import style from './style.css'

export const Sensor = () => {

  const [data, setData] = useState({
    date: new Date(),
    Temperatura: 0,
    Luz:0,
  });



  useEffect(() => {

    setInterval(refreshData,10000);
  }, [])

  const refreshData = async ()=>{
    //const valor = await requestCore.get("/temperature");
    //const valor2 = await requestCore.get("/ligth");
    //console.log(valor);
    setData({
      date: new Date(),
      Temperatura: Math.random()*250,
      Luz: Math.random()*100
      //Temperatura: valor?.data?.value?(valor.data.value)-39:0,
      //Luz: valor2?.data?.value?1023-(valor2.data.value):0,
    })
  }

  

  return (
    <>
      <Card>
        <Card.Header>
          <Card.Title as="h1">
            Sensor
          </Card.Title>
        </Card.Header>
        <Card.Body>
        <RTChart
            maxValues={120}
            fields={['Temperatura','Luz']}
            data={data} />

        </Card.Body>
      </Card>
    </>
  )

}
