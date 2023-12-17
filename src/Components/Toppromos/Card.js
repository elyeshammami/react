import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cardch = ({data}) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.img} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <div className='price'>
        <Card.Text style={{textDecoration:"line-through",color:"red",fontSize:"22px"}}>
          {data.oldprice}
        </Card.Text>
        <Card.Text>
          <span style={{color:"green",fontSize:"22px"}}>{data.newprice}</span>
        </Card.Text>
        </div>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Cardch
