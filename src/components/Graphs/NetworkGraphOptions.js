import { Row, Col, Form, Offcanvas, Button } from 'react-bootstrap';

function NetworkGraphOptions(props) {

  const { currentLayout, currentNodeShape, show, onHide } = props;

  const nodeShapes = ['circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none']
  return (
    <Offcanvas
      show={show}
      onHide={onHide}
      placement="end"
      scroll={true}
      backdrop={false}
    >
      <Offcanvas.Header closeButton>
        <h4>Graph Settings</h4>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Row className="mb-3 p-2 border-bottom">
          <Form.Label className="ps-0">Graph Layout</Form.Label>
          <Form.Select size="sm"
            value={currentLayout}
            selected={currentLayout}
            onChange={(e) => props.setCurrentLayout(e.target.value)}
          >
            <option value="circular">circular</option>
            <option value="force">force</option>
          </Form.Select>
        </Row>
        <Row className="mb-3 p-2 border-bottom">
          <Form.Label className="ps-0">Node Shape</Form.Label>
          <Form.Select size="sm"
            value={currentNodeShape}
            selected={currentNodeShape}
            onChange={(e) => props.setCurrentNodeShape(e.target.value)}
          >
              {
                nodeShapes
                  .map((shape, index) =>
                  <option key={index} value={shape}>{shape}</option>
                )
              }
          </Form.Select>
        </Row>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default NetworkGraphOptions;
