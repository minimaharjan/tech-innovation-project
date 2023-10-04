import { useState, useEffect } from 'react';
import { Modal, Button, Form , Row, Col} from "react-bootstrap";
import UploadButton from "components/General/UploadButton";
import { CSVtoArray } from 'utils/utils';

function NetworkOptionSetModal (props) {
  const [directed, setDirected] = useState(false);
  const [linkingAttribute, setLinkingAttribute] = useState('');
  const [groupingAttribute, setGroupingAttribute] = useState('')
  const [edgeData, setEdgeData] =useState([])

  const handleSubmit = (event) => {
    if (!linkingAttribute) {
      alert('Linking attribute is required')
      return;
    }
    console.log({directed, linkingAttribute, groupingAttribute, edgeData})
    // add validation for selection, can't be same and all
    if (groupingAttribute == linkingAttribute) {
      // use Toast
      alert('Grouping and Linking Attribute can\'t  be the same')
      return
    }


    props.onSave({
      directed, linkingAttribute, groupingAttribute, edgeData
    })
  };

  const handleNetworkEdgeCSV = async (file) => {
    const networkEdgeData = await CSVtoArray(file)
    setEdgeData(networkEdgeData)
  }

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      backdrop="static"
      keyboard={false}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Select Network Graph Options
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate onSubmit={handleSubmit} className="ps-2 pe-2">
          <Row className="mb-3">
            <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch"
              label="Directed Graph"
              checked={directed}
              onChange={(e) => setDirected(e.target.checked)}
            />
          </Row>
          <Row className="mb-3">
            <Form.Label className="ps-0">Select Node Linking Attribute/Column</Form.Label>
            <Form.Select
              size="sm"onChange={(e) => setGroupingAttribute(e.target.value)}
              value={linkingAttribute}
              onChange={(e) => setLinkingAttribute(e.target.value)}
              >
                <option value="" className="d-none"></option>
              {
                props.graphAttributeList.map((attr, index) =>
                  <option key={index}>{attr}</option>
                )
              }
            </Form.Select>
          </Row>
          <Row>
            <Form.Label className="ps-0">Select Node Grouping Attribute/Column <span style={{color:'red'}}>(Optional)</span></Form.Label>
            <Form.Select size="sm"
              value={groupingAttribute}
              selected={groupingAttribute}
              onChange={(e) => setGroupingAttribute(e.target.value)}
              >
                <option value="" className="d-none"></option>
              {
                props.graphAttributeList
                  .map((attr, index) =>
                  <option key={index} value={attr}>{attr}</option>
                )
              }
            </Form.Select>
          </Row>
        </Form>
        <div className="border-top pt-3">
          <div className="border-top pt-2 pb-2">Select Edge List File</div>
          <UploadButton
            accept=".csv"
            buttonTitle="Upload Network Edge/Link Data"
            onSuccessFullUpload={handleNetworkEdgeCSV}
          />
        </div>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit}>Save Settings</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NetworkOptionSetModal;