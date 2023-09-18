import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import { Container, Row, Col, Stack, Button } from 'react-bootstrap';

function MainPage() {
  return (
      <Container fluid>
        <Row>
          {/* Menu Selection */}
          <Col>
          <Stack gap={2} direction="horizontal">
            <div className="p-2 border-end">Files</div>
            <div className="p-2 border-end">Model Specification</div>
            <div className="p-2 border-end">Settings</div>
          </Stack>
          </Col>
        </Row>

        <Row className="border-top">
          <Col>
            {/* Active Menu Drilled down menu */}
            <Stack gap={2} direction="horizontal">
              <Button className="p-2">Load Project</Button>
              <Button className="p-2">Save Project</Button>
              <Button className="p-2">Export</Button>
            </Stack>
          </Col>
        </Row>
        
        <Row className="border-top p-0">
          <Col xs={1} className="border-end">
            {/* Left Side Menu */}
            <Stack gap={2}>
              <div className="p-2">Simulation</div>
              <div className="p-2">Estimation</div>
              <div className="p-2">Bayesian</div>
            </Stack>
          </Col>
          <Col xs={10}>
            Content Area
          </Col>
          <Col xs={1}>
            {/* Right Side Menu */}
            <Stack gap={2} className="border-start">
              <div className="p-2">Node Info</div>
              <div className="p-2">Second item</div>
              <div className="p-2">Third item</div>
            </Stack>
          </Col>
        </Row>
      </Container>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}
