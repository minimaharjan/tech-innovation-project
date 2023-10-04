import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import { Container, Row, Col, Button,  Modal } from 'react-bootstrap';

import NetworkGraph from 'components/Graphs/NetworkGraph';
import MenuTab from 'components/Menu/MenuTab';
import MenuLeftOptions from 'components/Menu/MenuLeftOptions';
import NodeMenu from 'components/Body/NodeMenu';
import { structureNodes, CSVtoArray, structureEdges } from 'utils/utils'
import NetworkOptionSetModal from 'components/Body/NetworkOptionSetModal';


function MainPage() {
  const [showGraph, setGraphState] = useState(false);
  const [networkGraphData, setGraphData] = useState([]);
  const [graphNodes, setGraphNodes] = useState([]);
  const [graphDimensions, setGraphDimensions] = useState([]);
  const [graphLinkingAttribute, setGraphLinkingAttribute]= useState('');
  const [graphGroupingAttribute, setGraphGroupingAttribute] = useState('');
  const [graphEdges, setGraphEdges] = useState([]);
  const [isGraphDirected, setIsGraphDirected] = useState(false);
  const [showNetworkGraphOptionSetModal, setNetworkGraphOptionSetModal] = useState(false)

  const setNetworkGraphOptions = (graphData) => {
    setGraphData(graphData)
    setNetworkGraphOptionSetModal(true)
  }

  const displayGraph = (settings) => {
    setGraphNodes(structureNodes(networkGraphData, settings.linkingAttribute, settings.groupingAttribute));
    setGraphEdges(structureEdges(settings.edgeData));
    setGraphLinkingAttribute(settings.linkingAttribute);
    setGraphGroupingAttribute(settings.groupingAttribute);
    setIsGraphDirected(settings.directed);
    setNetworkGraphOptionSetModal(false);

       // to select attribute, their type and also attribute by which legend is shown
    // also add a section to select edge list in this popup


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
          {/* <Col xs={3} className="border-end"> */}
            {/* Left Side Menu */}

            {/* <NodeMenu className="border-bottom" />

          </Col> */}
          <Col xs={12} className="p-2">


            <Button onClick={() => setGraphState(!showGraph)} size="sm">Toggle Graph</Button>
            {
              showGraph && <NetworkGraph
                nodes={graphNodes}
                edges={graphEdges}
                nodeGroupingAttribute={graphGroupingAttribute}
                nodeLinkingAttribute={graphLinkingAttribute}
                dimensions={graphDimensions}
                directed={isGraphDirected}
                emphasis={true}
                />
            }

          </Col>
          {/* <Col xs={2}> */}
          {/* // TODO: Make a component */}

            {/* Right Side Menu */}
            {/* <MenuLeftOptions /> */}
          {/* </Col> */}

        {
          showNetworkGraphOptionSetModal &&
          <NetworkOptionSetModal
            show={showNetworkGraphOptionSetModal}
            onHide={() => setNetworkGraphOptionSetModal(false)}
            onSave={(settings) => displayGraph(settings)}
            graphAttributeList={networkGraphData[0]}
          />
        }

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
