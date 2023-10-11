import React from 'react';
import {Container, Row, Col, InputGroup, Form} from 'react-bootstrap';

function ModelSpecification() {
  return (
    <Container>
      <Row>Model Specification</Row>
      <Row xs={2} md={4} lg={6}>
    
      <Form>
      <Form.Group controlId="checkboxGroup">
        <div className="d-flex">
          <Form.Check
            type="checkbox"
            label="Include"
            id="checkbox1"
            className="mr-2"
          />
          <Form.Check
            type="checkbox"
            label="Directed"
            id="checkbox2"
            className="mr-2"
          />
          <Form.Check
            type="checkbox"
            label="Fix "
            id="checkbox3"
          />
          <Form.Check
            type="checkbox"
            label="Fixed Density"
            id="checkbox4"
          />
         
        </div>
      </Form.Group>
    </Form>      
      </Row>
      <Row xs={1} md={2}>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
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