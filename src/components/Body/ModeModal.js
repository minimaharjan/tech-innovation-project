import Bayesian from 'components/Menu/Bayesian';
import Estimation from 'components/Menu/Estimation';
import Simulation from 'components/Menu/Simulation';
import { useEffect } from 'react';
import { Row, Col, Form, InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useAppContext } from "context/Provider";
import ModelSpecification from './ModelSpecification';

function ModeModal(props) {
  const { state, dispatch } = useAppContext();
  const {modeOption, title, showModeModal}= props;
  
    
  // const handleClose=(value)=>{
  //   console.log(value)
  //   dispatch({ type: 'SETMODE', payload:modeOption, showModeModal: value});
    
  // }
    
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
    {/* <Modal
        // show={showModeModal}
        // onHide={handleClose}
        backdrop="static"
        // keyboard={false}
      > */}
        {/* {showModeModal} */}
      <Modal.Dialog size='lg' dialogClassName="modal-lg">
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          
          <Row>
        <Col xs={12} md={8}>
          <Row >
            <Col xs={6} md={4}>
          <InputGroup className="mb-2">
        <InputGroup.Text >A</InputGroup.Text>
        <Form.Control aria-label="Text input with radio button" placeholder='' type="number"/>
        
      </InputGroup>
      </Col>
          </Row>
          <ModelSpecification/>
        </Col>
        <Col xs={6} md={4}>
        {(() => {
        switch (title) {
          case "Simulation":   return (<Simulation/>);
          case "Estimation": return (<Estimation/>);
          case "Bayesian Estimation":  return (<Bayesian/>);
          default:      return (<Simulation/>);
        }
      })()}
            {/* {title === "Simulation" ?
        <Simulation/> :[]   
        } */}
        </Col>
      </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" 
          // onClick={handleClose(false)}
          >Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
      {/* </Modal> */}
    </div>
  );
}

export default ModeModal;