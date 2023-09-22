import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Bayesian() {
  return (
    <>
    <InputGroup className="mb-2">
        <InputGroup.Text >Maximum lag (SACF)</InputGroup.Text>
        <Form.Control aria-label="Text input with radio button" placeholder='' type="number"/>
        
      </InputGroup>
    <InputGroup className="mb-2">
        <InputGroup.Radio aria-label="Radio button for following text input" />
        <Form.Control aria-label="Text input with radio button" placeholder='Scaled identity matrix'/>       
    </InputGroup>
    <InputGroup className="mb-2">
        <InputGroup.Radio aria-label="Radio button for following text input" />
        <Form.Control aria-label="Text input with radio button" placeholder='Combined simulation'/>       
    </InputGroup>
    <InputGroup className="mb-2">
        <InputGroup.Radio aria-label="Radio button for following text input" />
        <Form.Control aria-label="Text input with radio button" placeholder='Nonconditional simulation'/>       
    </InputGroup>
    <InputGroup className="mb-2">
        <InputGroup.Radio aria-label="Radio button for following text input" />
        <Form.Control aria-label="Text input with radio button" placeholder='Scaled identity matrix'/>       
    </InputGroup>
    <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>file input</Form.Label>
        <Form.Control type="file" />
      </Form.Group>

    </>
  )
}

export default Bayesian