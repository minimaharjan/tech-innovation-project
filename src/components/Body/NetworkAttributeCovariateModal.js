import { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

function NetworkAttributeCovariateModal(props) {
  const [selectedAttributes, setSelectedAttributes] = useState([]);

  const addAttribute = (attribute) => {
    // TODO: Add check if exists
    setSelectedAttributes.append(attribute)
  }

  const removeAttribute = (attribute) => {

    // TODO: find index and remove
    // TODO: Add check if exists
  }

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      backdrop="static"
      keyboard={false}
      fullscreen={true}
      aria-labelledby="cov-contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="cov-contained-modal-title-vcenter">
          Select Attribute Covariate
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        {/* Include column, attribute name, attribute type that has 3 columns */}
        {
          props.attributes[0].map((attr, index) =>
          <Row>
            <Col xs={4}>
              <Form.Check
                key={index}
                type="checkbox"
                id={`checkbox-attr-${index}`}
                label={attr}
              />
            </Col>
            <Col xs={8}>
            <Form.Check
              inline
              label="Binary"
              name={`group-${index}`}
              type="radio"
              id={`inline-${index}-1`}
            />
            <Form.Check
              inline
              label="Categorical"
              name={`group-${index}`}
              type="radio"
              id={`inline-${index}-2`}
            />
            <Form.Check
              inline
              label="Continous"
              name={`group-${index}`}
              type="radio"
              id={`inline-${index}-3`}
            />
            </Col>
          </Row>

          )
        }
      </Modal.Body>
      <Modal.Footer>
        <Button>Save</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
      {/* Binary Categorical Continous */}
       {/* loop through list of attribute */}
       {/* select attribute each row and each row can have radio if attribute cat or bin or cont */}
    </Modal>
  );
}

export default NetworkAttributeCovariateModal;
