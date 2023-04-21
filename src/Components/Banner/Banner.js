import React from 'react'
import './Banner.css'
// import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/esm/Button'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    // <Container>
    <Row className='justify-content-md-center'>
    <div className="banner text-center ">
      <Row>
       <Col md={{span:6,offset:4}}><h1 className='bannerText mt-5 text-center'>Bringing Up The Needs And Deeds Together</h1></Col> 
       </Row>
       <Row>
        <Col md={{span:6,offset:3}}><p className='text-center mt-3 fs-2'>Introducing Seek IN - The online Contracting App</p></Col>
        </Row>   
       <Row>
        <Col md={{span:6,offset:3}}><Link to={'/Signup'} ><Button variant="info">Sign Up</Button></Link></Col>
        </Row>  
       </div>
    </Row>
    // </Container>
  )
}

export default Banner