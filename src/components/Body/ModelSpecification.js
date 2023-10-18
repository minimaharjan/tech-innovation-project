import { useState, useEffect } from "react";
import { useAppContext } from "context/Provider";
import {Container, Row, Col, InputGroup, Form, Button} from 'react-bootstrap';
import UploadButton from "components/General/UploadButton";

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
        <div  className="d-flex justify-content-around mb-3">
          <Form.Check
            type="checkbox"
            label={<span className="fs-6">Include</span>}
            id="checkbox1"
            className="me-2"
          />
          <Form.Check
            type="checkbox"
            label="Directed"
            id="checkbox2"
            className="me-2"
          />
          <Form.Check
            type="checkbox"
            label="Fix "
            id="checkbox3"
            className="me-2"
          />
          <Form.Check
            type="checkbox"
            label="Fixed Density"
            id="checkbox4"
            className="me-2"
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
      <Col>
      
        <Row className="mb-3">
        <UploadButton
        buttonTitle="Upload Network File"
        buttonColor="outline-primary"
        />
        </Row>
        <Row className="mb-3">
        <UploadButton
        buttonTitle="Structural Zero File"
        buttonColor="outline-primary"
        />
        </Row>
        <Row className="mb-3">
        <UploadButton
        buttonTitle="Missing Indicator"
        buttonColor="outline-primary"
        />
        </Row>
      </Col>
        
      <div  className="d-flex justify-content-center">
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
      
    </Container>
  )
}

export default ModelSpecification