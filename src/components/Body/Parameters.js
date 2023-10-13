import React from 'react'
import { Row, Col, Form, InputGroup, Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useAppContext } from "context/Provider";

function Parameters(props) {
    const { state, dispatch } = useAppContext();
    const {showParameterModal}= props;
    const handleClose=(value)=>{
        let result={
        
          showParameterModal: false
        }
        dispatch({ type: 'SETPARAMETER', payload:result});
        
      }
  return (
    <Modal
        show={showParameterModal}
        onHide={handleClose}
        backdrop="static"
        // keyboard={false}
        size='lg'
        centered
      >
        {/* {showModeModal} */}
      {/* <Modal.Dialog size='lg' dialogClassName="modal-lg"> */}
        <Modal.Header closeButton>
          <Modal.Title>Parameters</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
          <td>Thornton</td>
          <td>@fat</td>

        </tr>
      </tbody>
    </Table>
        </Modal.Body>

        <Modal.Footer>
        <Button variant="secondary" 
          onClick={handleClose}
          >Clear All</Button>
          <Button variant="secondary">Select All</Button>
          <Button variant="secondary" 
          onClick={handleClose}
          >Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      {/* </Modal.Dialog> */}
      </Modal>
  )
}

export default Parameters