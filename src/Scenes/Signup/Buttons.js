import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import AppNavbar from '../../Components/Navbar/AppNavbar'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
function Buttons() {
  return (
    <div>
        <AppNavbar/>
        <Row className="justify-content-md-center mt-5 pt-5">
        <Col md="auto" > <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" style={{height: '300px'}} src={require("../../Assets/Images/a-cropped-photo-of-a-construction-worker-ud9f840nkmboshfu.jpg")} />
      <Card.Body>
        <Card.Text className='text-center'>
         Register As A Worker In SeekIN
        </Card.Text>
        <div className='text-center'><Link to={'/WSignup'}><Button variant='info'>Worker Signup</Button></Link></div>
      </Card.Body>
    </Card></Col>
    <Col md="auto" > <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" style={{height: '300px'}} src={require("../../Assets/Images/cytonn-photography-n95VMLxqM2I-unsplash.jpg")} />
      <Card.Body>
        <Card.Text className='text-center'>
         Signup As A User to Access Services
        </Card.Text>
        <div className='text-center'><Link to={'/USignup'}><Button variant='info'>User Signup</Button></Link></div>
      </Card.Body>
    </Card></Col>
      </Row>
    </div>
  )
}

export default Buttons