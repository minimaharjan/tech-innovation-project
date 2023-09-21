import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import { Container, Row, Col, Stack, Button, Tabs, Tab } from 'react-bootstrap';

import NetworkGraph from 'components/Graphs/NetworkGraph';
import MenuTab from 'components/Menu/MenuTab';
import MenuLeftOptions from 'components/Menu/MenuLeftOptions';

function MainPage() {
  const [showGraph, setGraphState] = useState(false);

  return (
      <Container fluid>
        <Row>
          <MenuTab />
        </Row>
        
        <Row className="border-top p-0">
          <Col xs={2} className="border-end">
            {/* Left Side Menu */}
            <MenuLeftOptions />
          </Col>
          <Col xs={8} className="p-2">


            <Button onClick={() => setGraphState(!showGraph)} size="sm">Toggle Graph</Button>
            {
              showGraph && <NetworkGraph />
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
