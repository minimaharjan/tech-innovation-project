import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Simulation() {
  const [burnin, setBurnin] = useState(100000);
  const handleNumberChange = (e) => {
    setBurnin(e.target.value);
  };
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
        <Form.Control aria-label="Text input with radio button"  value ={burnin} type="number" onChange={handleNumberChange}/>
        
      </InputGroup>
      <InputGroup className="mb-2">
        <InputGroup.Text >Iterations</InputGroup.Text>
        <Form.Control aria-label="Text input with radio button" placeholder='1000000' defaultValue ="1000000" type="number"/>
        
      </InputGroup>
      <InputGroup className="mb-2">
        <InputGroup.Text >Samples</InputGroup.Text>
        <Form.Control aria-label="Text input with radio button" placeholder='1000' defaultValue="1000" type="number"/>
        
      </InputGroup>
    </>
  )
}

export default Simulation