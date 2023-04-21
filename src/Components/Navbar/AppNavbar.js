import React from 'react'
import { Link } from 'react-router-dom'
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BsFillHouseDoorFill,BsFillPersonLinesFill,BsFillChatRightTextFill} from 'react-icons/bs'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './AppNavbar.css'

function AppNavbar() {
  return (
    
   
       <div>
      <Navbar className='navbar ' bg='light' >
      
     

          
          <Navbar.Collapse id="navbarScroll">
          <Nav >
            <Nav.Link className="text-end  " as={Link} to="/"><BsFillHouseDoorFill/></Nav.Link>
            <Nav.Link className="text-end" as={Link} to="/profile"><BsFillPersonLinesFill/></Nav.Link>
            <Nav.Link className="text-end " as={Link} to="/notifications"><BsFillChatRightTextFill/></Nav.Link>
            <Form className="d-flex float-right">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-1"
              aria-label="Search"
            />
            <Button  variant="outline-primary">Search</Button>
          </Form>
            
          </Nav>
          </Navbar.Collapse>
          <img className='logo' src={require('../../Assets/Images/Screenshot (57).jpg')} alt=''/>
        
      </Navbar>

    
      </div>
      
      
      
      

        
    


  )
}

export default AppNavbar