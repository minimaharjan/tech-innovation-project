import React from 'react'

function Estimation() {
  return (
    <>
    <div>Estimation</div>
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
    </>
  )
}

export default Estimation