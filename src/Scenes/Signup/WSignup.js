import React,{useState} from 'react';
// import Signup from './Signup';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import './Signup.css'
// import Button from 'react-bootstrap/Button'
function WSignup() {
    const [username,setUsername]=useState('')
    const [occupation,setOccupation]=useState('')
    const [experience,setExperience]=useState('')
    const [address,setAddress]=useState('')
    const [additionalinformation,setAdditionalinformation]=useState('')
    const [pincode,setPincode]=useState('')
    const [jobdescription,setJobdescription]=useState('')
    const [expectedearnings,setExpectedearnings]=useState('')
    const [phonenumber,setPhonenumber]=useState('')
    const [emailaddress,setEmailaddress]=useState('')
    const [password,setPassword]=useState('')
    const [image,setImage]=useState()

    const handleSubmit= (e)=> {
        e.preventDefault()
        console.log(username)
    }
return ( 
    <div className='bkg'>
        {/* <Signup/> */}
    <MDBContainer fluid className='h-custom'>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12' className='m-5'>

          <MDBCard className='card-registration card-registration-2' style={{borderRadius: '15px'}}>

            <MDBCardBody className='p-0'>
                <Row>
                <Col md={{span:6,offset:3}}>
              <MDBRow>
              <form onSubmit={handleSubmit}>

                <MDBCol md={{span:6,offset:3}} className='p-5 bg-white'>
                
                  <MDBRow>
                    
                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' value={username} onChange={(e)=>setUsername(e.target.value)} label=' Name' size='lg' id='form1' type='text'/>
                    </MDBCol>

                    
                  </MDBRow>

                  
                  <MDBInput wrapperClass='mb-4' label='Occupation'  value={occupation} onChange={(e)=>setOccupation(e.target.value)} size='lg' id='form3' type='text'/>

                  <MDBRow>

                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='Experience'  value={experience} onChange={(e)=>setExperience(e.target.value)} size='lg' id='form4' type='text'/>
                    </MDBCol>

                    <MDBCol md='6'>
                      
                    </MDBCol>

                  </MDBRow>

                </MDBCol>

                
                <MDBCol md='12' className='ml-3 bg-indigo p-5'>
                
                   
                  <h3 className="fw-normal mb-5 text-white float-right" style={{color: '#4835d4'}}>Contact Details</h3>
                  <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Address'  value={address} onChange={(e)=>setAddress(e.target.value)} size='lg' id='form5' type='text'/>
                  <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Additional Information (if any)'  value={additionalinformation} onChange={(e)=>setAdditionalinformation(e.target.value)} size='lg' id='form6' type='text'/>

                  <MDBRow>

                    <MDBCol md='5'>
                      <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Pin Code' value={pincode} onChange={(e)=>setPincode(e.target.value)} size='lg' id='form6' type='text'/>
                    </MDBCol>

                    <MDBCol md='7'>
                      <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Job Description'  value={jobdescription} onChange={(e)=>setJobdescription(e.target.value)} size='lg' id='form7' type='text'/>
                    </MDBCol>

                  </MDBRow>

                 
                  <MDBRow>

                    <MDBCol md='5'>
                      <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Expected Earnings'  value={expectedearnings} onChange={(e)=>setExpectedearnings(e.target.value)} size='lg' id='form9' type='text'/>
                    </MDBCol>

                    <MDBCol md='7'>
                      <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Phone Number'  value={phonenumber} onChange={(e)=>setPhonenumber(e.target.value)} size='lg' id='form10' type='text' required/>
                    </MDBCol>
                  </MDBRow>

                  <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Email Address'  value={emailaddress} onChange={(e)=>setEmailaddress(e.target.value)} size='lg' id='form8' type='email' required/>
                  <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Password'  value={password} onChange={(e)=>setPassword(e.target.value)} size='lg' id='form8' type='text' required />
                  <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Image'  value={image} onChange={(e)=>setImage(e.target.value)} size='lg' id='form8' type='file'/>


                  <MDBCheckbox name='flexCheck' id='flexCheckDefault' labelClass='text-white mb-4' label='I do accept the Terms and Conditions of your site.' />
                  <input type="submit" bg="light" value="Register" />
                  
                 
                </MDBCol>
                
                </form>
              </MDBRow>
              </Col>
              </Row>
            </MDBCardBody>

          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
    </div>
  );
}

export default WSignup