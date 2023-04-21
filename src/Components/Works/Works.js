import React from 'react'
import WorkCards from './Cards'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import './Works.css'
function Works() {
  return (
    <div>
        <Row className='m-5'>
            <Col>
            <div className='Card'><WorkCards/></div>
            <div className='Card'><WorkCards/></div>
            <div className='Card'><WorkCards/></div>
            <div className='Card'><WorkCards/></div>
            <div className='Card'><WorkCards/></div>
            <div className='Card'><WorkCards/></div>
            <div className='Card'><WorkCards/></div>
            <div className='Card'><WorkCards/></div>
            <div className='Card'><WorkCards/></div>
            <div className='Card'><WorkCards/></div>
            </Col>
        </Row>
        
    </div>
  )
}

export default Works