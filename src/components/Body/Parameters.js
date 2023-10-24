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

      const parameterList = [
        {
          id: 1,
          effects: "EdgeA",
          include:"include1",
          fixed:"fixed1",
          lambda:"lambda1",
          value:"value1"
        },
         {
          id: 2,
          effects: "Star2A",
          include:"include2",
          fixed:"fixed2",
          lambda:"lambda2",
          value:"value2"
        },
         {
          id: 3,
          effects: "Star3A",
          include:"include3",
          fixed:"fixed3",
          lambda:"lambda3",
          value:"value3"
        },
         
        {
          id: 4,
          effects: "Star4A",
          include:"include4",
          fixed:"fixed4",
          lambda:"lambda4",
          value:"value4"
        },
        {
          id: 5,
          effects: "Star5A",
          include:"include5",
          fixed:"fixed5",
          lambda:"lambda5",
          value:"value5"
        },
         {
          id: 6,
          effects: "TriangleA",
          include:"include6",
          fixed:"fixed6",
          lambda:"lambda6",
          value:"value6"
        },
         {
          id: 7,
          effects: "Cycle4A",
          include:"include7",
          fixed:"fixed7",
          lambda:"lambda7",
          value:"value7"
        },
         
        {
          id: 8,
          effects: "IsolateA",
          include:"include8",
          fixed:"fixed8",
          lambda:"lambda8",
          value:"value8"
        },
        {
          id: 9,
          effects: "IsolateEdgesA",
          include:"include9",
          fixed:"fixed9",
          lambda:"lambda9",
          value:"value9"
        },
         
        {
          id: 10,
          effects: "ASA",
          include:"include10",
          fixed:"fixed10",
          lambda:"lambda10",
          value:"value10"
        },
        {
          id: 11,
          effects: "ASA2",
          include:"include11",
          fixed:"fixed11",
          lambda:"lambda11",
          value:"value11"
        },
         {
          id: 12,
          effects: "ATA",
          include:"include12",
          fixed:"fixed12",
          lambda:"lambda12",
          value:"value12"
        },
         
        {
          id: 13,
          effects: "A2PA",
          include:"include13",
          fixed:"fixed13",
          lambda:"lambda13",
          value:"value13"
        },
        {
          id: 14,
          effects: "AETA",
          include:"include14",
          fixed:"fixed14",
          lambda:"lambda14",
          value:"value14"
        },
      ]

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

        <Modal.Body >
        {/* hover style={{ height: '300px' }} className="overflow-auto" */}
        <Table striped bordered style={{ display: 'block', height: '400px', overflowY: 'scroll' }}>
      <thead sticky="top">
        <tr>
          <th>S.N.</th>
          <th>Effects</th>
          <th>Include</th>
          <th>Fixed</th>
          <th>λ</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody >
      {parameterList.map((option, index) => (
        <tr>
        <td>{index+1}</td>
        <td>{option.effects}</td>
        <td>
          <Form.Check
          type="checkbox"
          id="Include1"
          value={option}
          
          />
        </td>
        <td>
        <Form.Check
          type="checkbox"
          id="Fixed1"
          value={option}
          />
        </td>
        <td>
          <Form.Control
          type="number"
          id="λ1"
          placeholder='2'
          value={option}
          />
          </td>
        <td>
          <Form.Control
          type="number"
          id="value1"
          placeholder='0'
          value={option}
          />
          </td>
        
      </tr>
      ))
    }
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
          <Button variant="primary" onClick={handleClose}>Save changes</Button>
        </Modal.Footer>
      {/* </Modal.Dialog> */}
      </Modal>
  )
}

export default Parameters