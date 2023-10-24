import { Modal, Button } from "react-bootstrap";

function NetworkAttributeCovariateModal(props) {
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
            <div key={index}>{attr}</div>
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
