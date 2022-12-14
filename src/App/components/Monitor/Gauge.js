import React, { useCallback, useEffect, useState } from 'react'
import { Row, Col, Card, Button } from "react-bootstrap";
import GaugeChart from 'react-gauge-chart'

export default function Gauge() {
  const [data, setData] = useState({
    percent: 0.50
  })


  const setInformation = useCallback(()=>{
    setData({percent:Math.random()});
  });

  useEffect(() => {
    setTimeout(setInformation,5000);

  }, [data]);
  



  return (
    <Row 
      variant="dark"
    >
      <GaugeChart id="gauge-chart3"
        className='dark'
        nrOfLevels={30}
        textColor={'#000000'}
        needleBaseColor={'#AAAAAA'}
        colors={['#24da1e',"##fff93e", "#ff0000"]}
        arcWidth={0.3}
        percent={data.percent}
      />

    </Row>
  )
}
