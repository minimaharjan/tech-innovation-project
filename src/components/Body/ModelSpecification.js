import { useState, useEffect } from "react";
import { useAppContext } from "context/Provider";
import {Container, Row, Col, InputGroup, Form, Button} from 'react-bootstrap';

function ModelSpecification() {
    const { state, dispatch } = useAppContext();
    const handleSelectParameter=()=>{
        let result={
            showParameterModal:true
        }
        dispatch({ type: 'SETPARAMETER', payload: result});
    }
  return (
    <Container>
      <Row>Model Specification</Row>
      {/* <Row xs={2} md={4} lg={5}> */}
    
      <Form>
      <Form.Group controlId="checkboxGroup">
        <div  className="d-flex justify-content-evenly mb-3">
          <Form.Check
            type="checkbox"
            label={<span className="fs-6">Include</span>}
            id="checkbox1"
            className="mr-1"
          />
          <Form.Check
            type="checkbox"
            label="Directed"
            id="checkbox2"
            className="mr-1"
          />
          <Form.Check
            type="checkbox"
            label="Fix "
            id="checkbox3"
            className="mr-1"
          />
          <Form.Check
            type="checkbox"
            label="Fixed Density"
            id="checkbox4"
            className="mr-1"
          />
          <div>Starting Density</div>
          <Form.Control 
          id="Staring Density"
          label="Starting Density"
          type="number"/>
         
        </div>
      </Form.Group>
    </Form>      
      {/* </Row> */}
      <Row xs={1} md={2}>
      <Col>1 of 3</Col>
        
      <div  className="d-flex justify-content-end">
      <Button
      variant="primary"
      className='btn-sm'
      size="lg"
      style={{ width: '100px', height: '100px' }}
      onClick={handleSelectParameter}
    >
      Select parameter
    </Button>
        
      </div>
        
      </Row>
      <Row xs="auto">
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  )
}

export default ModelSpecification