import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Simulation() {
  return (
    <>
    <div>Output Files</div>

      <InputGroup className="mb-2">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        <Form.Control aria-label="Text input with checkbox" placeholder="Sample networks"/>
      </InputGroup>
      <InputGroup className="mb-2">
        <InputGroup.Checkbox aria-label="Radio button for following text input" />
        <Form.Control aria-label="Text input with radio button" placeholder='Sample degree distributions'/>
        
      </InputGroup>
      <InputGroup className="mb-2">
        <InputGroup.Checkbox aria-label="Radio button for following text input" />
        <Form.Control aria-label="Text input with radio button" placeholder='Generate GCD' />
        
      </InputGroup>
      <InputGroup className="mb-2">
        <InputGroup.Text >Burn-in</InputGroup.Text>
        <Form.Control aria-label="Text input with radio button" placeholder='' type="number"/>
        
      </InputGroup>
      <InputGroup className="mb-2">
        <InputGroup.Text >Iterations</InputGroup.Text>
        <Form.Control aria-label="Text input with radio button" placeholder='' type="number"/>
        
      </InputGroup>
      <InputGroup className="mb-2">
        <InputGroup.Text >Samples</InputGroup.Text>
        <Form.Control aria-label="Text input with radio button" placeholder='' type="number"/>
        
      </InputGroup>
    </>
  )
}

export default Simulation