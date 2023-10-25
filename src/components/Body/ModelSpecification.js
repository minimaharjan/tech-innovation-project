import { useState, useEffect } from "react";
import { useAppContext } from "context/Provider";
import {Container, Row, Col, InputGroup, Form, Button} from 'react-bootstrap';
import UploadButton from "components/General/UploadButton";
import NetworkAttributeCovariateModal from "./NetworkAttributeCovariateModal";
import { CSVtoArray } from "utils/utils";

function ModelSpecification() {
    const { state, dispatch } = useAppContext();
    const handleSelectParameter=()=>{
        let result={
            showParameterModal:true
        }
        dispatch({ type: 'SETPARAMETER', payload: result});
    }

    const [nodesData, setNodesData] = useState([]);
    const [networkAttributeCovariateModal, setNetworkAttributeCovariateModal]= useState(false);
    const handleNetworkFile = async (file) => {
      const networkData = await CSVtoArray(file);
      setNodesData(networkData);
      setNetworkAttributeCovariateModal(true);
    }

  return (
    <Container>
      <Row>Model Specification</Row>
      <Form>
        <Form.Group>
          <div  className="d-flex justify-content-around mb-3">
            <Form.Check
              type="checkbox"
              label={<span className="fs-6">Include</span>}
              id="checkbox1"
              className="me-2"
            />
            <Form.Check
              type="checkbox"
              label="Directed"
              id="checkbox2"
              className="me-2"
            />
            <Form.Check
              type="checkbox"
              label="Fix "
              id="checkbox3"
              className="me-2"
            />
            <Form.Check
              type="checkbox"
              label="Fixed Density"
              id="checkbox4"
              className="me-2"
            />
            <div>Starting Density</div>
            <Form.Control
            id="Staring Density"
            label="Starting Density"
            placeholder="0"
            defaultValue='0'
            type="number"/>

          </div>
        </Form.Group>
      </Form>
      <Row xs={1} md={2}>
        <Col>
          <Row className="mb-3">
            <UploadButton
            buttonTitle="Upload Network File"
            buttonColor="outline-primary"
            onSuccessFullUpload={handleNetworkFile}
            />
            {
              networkAttributeCovariateModal &&
                <NetworkAttributeCovariateModal
                  attributes={nodesData}
                  show={networkAttributeCovariateModal}
                  onHide={() => setNetworkAttributeCovariateModal(false)}
                />
            }

          </Row>
          <Row className="mb-3">
            <UploadButton
            buttonTitle="Structural Zero File"
            buttonColor="outline-primary"
            />
          </Row>
          <Row className="mb-3">
            <UploadButton
            buttonTitle="Missing Indicator"
            buttonColor="outline-primary"
            />
          </Row>
        </Col>

        <div  className="d-flex justify-content-center">
          <Button
          variant="primary"
          className='btn-sm'
          size="lg"
          style={{ width: '100px', height: '100px' }}
          onClick={handleSelectParameter}
          >
          Select parameter
          </Button>
        </div>
      </Row>
    </Container>
  )
}

export default ModelSpecification
