import Bayesian from 'components/Menu/Bayesian';
import Estimation from 'components/Menu/Estimation';
import Simulation from 'components/Menu/Simulation';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModeModal(props) {
    const {modeOption, title}= props;
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          
          <Row>
        <Col xs={12} md={8}>1 of 1</Col>
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
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default ModeModal;