import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import { BsFacebook, BsInstagram,BsTwitter,BsGoogle,BsLinkedin,BsApp} from 'react-icons/bs';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <MDBRow pt='4'>
        <MDBCol>
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f1f1f1' }}>
      <MDBContainer className='pt-4'>
        <section className='mb-4'>
         <Link to={''} ><MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            role='button'
          >
            <BsFacebook/>
          </MDBBtn></Link>

         <Link to={''}><MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            role='button'
          >
            <BsTwitter/>
          </MDBBtn></Link>

          <Link to={''}><MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            role='button'
          >
            <BsGoogle/>
          </MDBBtn></Link>

          <Link to={''}><MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            role='button'
          >
            <BsInstagram/>
          </MDBBtn></Link>

          <Link to={''}><MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            role='button'
          >
            <BsLinkedin/>
          </MDBBtn></Link>

          <Link to={''}> <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            role='button'
          >
            <BsApp/>
          </MDBBtn></Link>
        </section>
      </MDBContainer>

      <Link to={''}><div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)',textDecoration:'none' }}>
        Register For Free
        
      </div></Link>
    </MDBFooter>
    </MDBCol>
    </MDBRow>
  );
}