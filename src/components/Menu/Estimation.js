import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Estimation() {
  return (
    <>
    <InputGroup className="mb-2">
        <InputGroup.Text >Subphases</InputGroup.Text>
        <Form.Control aria-label="Text input with radio button" placeholder='5' defaultValue='5' type="number"/>
        
      </InputGroup>
      <InputGroup className="mb-2">
        <InputGroup.Text >Gaining Factor</InputGroup.Text>
        <Form.Control aria-label="Text input with radio button" placeholder='0.010' defaultValue='0.010' type="number"/>
        
      </InputGroup>
      <InputGroup className="mb-2">
        <InputGroup.Text >Multipication Factor</InputGroup.Text>
        <Form.Control aria-label="Text input with radio button" placeholder='10' defaultValue='10' type="number"/>
        
      </InputGroup>
      <InputGroup className="mb-2">
        <InputGroup.Text >Iterations in phase 3</InputGroup.Text>
        <Form.Control aria-label="Text input with radio button" placeholder='500' defaultValue='500' type="number"/>
        
      </InputGroup>
      <InputGroup className="mb-2">
        <InputGroup.Text >Max. estimation nuns</InputGroup.Text>
        <Form.Control aria-label="Text input with radio button" placeholder='1' defaultValue='1' type="number"/>
        
      </InputGroup>
      <InputGroup className="mb-2">
        <InputGroup.Checkbox aria-label="Radio button for following text input" />
        <InputGroup.Text >Do GOF at converence</InputGroup.Text>
        <Form.Control aria-label="Text input with radio button" placeholder="500" defaultValue='500' type="number"/>
        
      </InputGroup>
      <InputGroup className="mb-2">
        <InputGroup.Checkbox aria-label="Radio button for following text input" />
        <Form.Control aria-label="Text input with radio button" placeholder='Generate GCD at convergence'/>
        
      </InputGroup>
    </>
  )
}

export default Estimation