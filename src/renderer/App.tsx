import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import { Container, Row, Col, Stack, Button } from 'react-bootstrap';

import NetworkGraph from 'components/Graphs/NetworkGraph';

function MainPage() {
  const [showGraph, setGraphState] = useState(false);

  return (
      <Container fluid>
        <Row>
          {/* Menu Selection */}
          <Col>
          {/* Use Tabs Here */}
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
            <Stack direction="horizontal">
              <Button className="p-2" variant="outline-secondary rounded-0" size="sm">Load Project</Button>
              <Button className="p-2" variant="outline-secondary rounded-0 border-start-0" size="sm">Save Project</Button>
              <Button className="p-2" variant="outline-secondary rounded-0 border-start-0" size="sm">Export</Button>
            </Stack>
          </Col>
        </Row>
        
        <Row className="border-top p-0">
          <Col xs={2} className="border-end">
            {/* Left Side Menu */}
            <Stack gap={2}>
              <div className="p-2">Simulation</div>
              <div className="p-2">Estimation</div>
              <div className="p-2">Bayesian</div>
            </Stack>
          </Col>
          <Col xs={8} className="p-2">


            <Button onClick={() => setGraphState(!showGraph)}>Toggle Graph</Button>
            {
              showGraph && <NetworkGraph  />
            }

          </Col>
          <Col xs={2}>
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
