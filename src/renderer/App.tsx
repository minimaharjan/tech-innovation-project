import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import { Container, Row, Col, Button,  Modal } from 'react-bootstrap';

import NetworkGraph from 'components/Graphs/NetworkGraph';
import MenuTab from 'components/Menu/MenuTab';
import MenuLeftOptions from 'components/Menu/MenuLeftOptions';
import NodeMenu from 'components/Body/NodeMenu';
import { structureNodes, CSVtoArray } from 'utils/utils'
import NetworkOptionSetModal from 'components/Body/NetworkOptionSetModal';


function MainPage() {
  const [showGraph, setGraphState] = useState(false);
  const [graphNodes, setGraphNodes] = useState([]);
  const [graphDimensions, setGraphDimensions] = useState([]);
  const [graphEdges, setGraphEdges] = useState([]);
  const [showNetworkGraphOptionSetModal, setNetworkGraphOptionSetModal] = useState(false)

  const setNetworkGraphOptions = (graphData: any) => {

    // setNetworkGraphOptionSetModal(true)
    // to select attribute, their typeand also attribute by which legend is shown
    // also add a section to select edge list in this popup
    setGraphNodes(structureNodes(graphData))


    // setGraphDimensions(graphData[0])
    // Add graph weightsetNetworkGraphOptionSetModal
    // Exclude unselect nodes from graphdimension
    // set nodemain attribute dynamically

    // Select attribute to use as legend, attrbiutes to show and category type
  }


  return (
      <Container fluid>
        <Row>
          <MenuTab
            onCSVLoad={setNetworkGraphOptions}/>
        </Row>

        <Row className="border-top p-0">
          <Col xs={3} className="border-end">
            {/* Left Side Menu */}

            <NodeMenu className="border-bottom" />

          </Col>
          <Col xs={7} className="p-2">


            <Button onClick={() => setGraphState(!showGraph)} size="sm">Toggle Graph</Button>
            {
              showGraph && <NetworkGraph
                nodes={graphNodes}
                nodeGroupingAttribute="Country"
                nodeLinkingAttribute="Participant-ID"
                dimensions={graphDimensions}
                />
            }

          </Col>
          <Col xs={2}>
          {/* // TODO: Make a component */}

            {/* Right Side Menu */}
            <MenuLeftOptions />
          </Col>



          <NetworkOptionSetModal
            show={showNetworkGraphOptionSetModal}
            onHide={() => setNetworkGraphOptionSetModal(false)}
          />

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
