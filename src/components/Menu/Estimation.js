import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Estimation() {
  return (
    <>
    <InputGroup className="mb-2">
        <InputGroup.Text >Subphases</InputGroup.Text>
        <Form.Control aria-label="Text input with radio button" placeholder='' type="number"/>
        
      </InputGroup>
      <InputGroup className="mb-2">
        <InputGroup.Text >Gaining Factor</InputGroup.Text>
        <Form.Control aria-label="Text input with radio button" placeholder='' type="number"/>
        
      </InputGroup>
      <InputGroup className="mb-2">
        <InputGroup.Text >Multipication Factor</InputGroup.Text>
        <Form.Control aria-label="Text input with radio button" placeholder='' type="number"/>
        
      </InputGroup>
      <InputGroup className="mb-2">
        <InputGroup.Text >Iterations in phase 3</InputGroup.Text>
        <Form.Control aria-label="Text input with radio button" placeholder='' type="number"/>
        
      </InputGroup>
      <InputGroup className="mb-2">
        <InputGroup.Text >Max. estimation nuns</InputGroup.Text>
        <Form.Control aria-label="Text input with radio button" placeholder='' type="number"/>
        
      </InputGroup>
      <InputGroup className="mb-2">
        <InputGroup.Checkbox aria-label="Radio button for following text input" />
        <InputGroup.Text >Do GOF at converence</InputGroup.Text>
        <Form.Control aria-label="Text input with radio button" type="number"/>
        
      </InputGroup>
      <InputGroup className="mb-2">
        <InputGroup.Checkbox aria-label="Radio button for following text input" />
        <Form.Control aria-label="Text input with radio button" placeholder='Generate GCD at convergence'/>
        
      </InputGroup>
    </>
  )
}

export default Estimation