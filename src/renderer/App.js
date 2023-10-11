import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import "react-toastify/dist/ReactToastify.css";

import { Container, Row, Col, Button,  Modal } from 'react-bootstrap';

import NetworkGraph from 'components/Graphs/NetworkGraph';
import MenuTab from 'components/Menu/MenuTab';
import MenuLeftOptions from 'components/Menu/MenuLeftOptions';
import NodeMenu from 'components/Body/NodeMenu';
import { structureNodes, CSVtoArray, structureEdges, httpCall } from 'utils/utils'
import NetworkOptionSetModal from 'components/Body/NetworkOptionSetModal';
import { toast, ToastContainer } from 'react-toastify';
import { useAppContext } from "./../context/Provider";
import ModeModal from 'components/Body/ModeModal';

function MainPage() {
  const { state, dispatch } = useAppContext();
  const [showGraph, setShowGraphState] = useState(false);
  const [networkGraphData, setGraphData] = useState([]);
  const [graphNodes, setGraphNodes] = useState([]);
  const [graphDimensions, setGraphDimensions] = useState([]);
  const [graphLinkingAttribute, setGraphLinkingAttribute]= useState('');
  const [graphGroupingAttribute, setGraphGroupingAttribute] = useState('');
  const [graphLabellingAttribute, setGraphLabellingAttribute] = useState('')
  const [graphEdges, setGraphEdges] = useState([]);
  const [isGraphDirected, setIsGraphDirected] = useState(false);
  const [showNetworkGraphOptionSetModal, setNetworkGraphOptionSetModal] = useState(false)


  const setNetworkGraphOptions = (graphData) => {
    setGraphData(graphData)
    setNetworkGraphOptionSetModal(true)
  }

  const displayGraph = async (settings) => {
    const nodeData = structureNodes(networkGraphData, settings.linkingAttribute, settings.groupingAttribute, settings.labellingAttribute);
    setGraphNodes(nodeData);
    const edgeData = structureEdges(settings.edgeData);
    setGraphEdges(edgeData);
    setGraphLinkingAttribute(settings.linkingAttribute);
    setGraphGroupingAttribute(settings.groupingAttribute);
    setIsGraphDirected(settings.directed);
    setGraphLabellingAttribute(settings.labellingAttribute)
    await getGraphDetails(nodeData, edgeData, settings);
    setNetworkGraphOptionSetModal(false);
    setShowGraphState(true);

       // to select attribute, their type and also attribute by which legend is shown
    // also add a section to select edge list in this popup


    // setGraphDimensions(graphData[0])
    // Add graph weightsetNetworkGraphOptionSetModal
    // Exclude unselect nodes from graphdimension
    // set nodemain attribute dynamically

    // Select attribute to use as legend, attrbiutes to show and category type
  }

  const getGraphDetails = async (nodes, edges, settings) => {
    console.log({
      nodes,
      edges,
      directed: settings.directed,
      linkAttribute: settings.linkingAttribute
    })
    await httpCall('/graph-stats',
    'post',
    {
      nodes,
      edges,
      directed: settings.directed,
      linkAttribute: settings.linkingAttribute
    }).then((data) => {
      console.log(data)
    }).catch((err) => {
      console.log(err)
      toast.error('Error', {
        position: toast.POSITION.TOP_CENTER
      });
    })
  }

  const clearNetworkGraph = () => {
    // Restore to Default Value
    setShowGraphState(false);
    setGraphData([]);
    setGraphNodes([]);
    setGraphEdges([]);
    setGraphLinkingAttribute('');
    setGraphGroupingAttribute('');
    setGraphLabellingAttribute('');
    setIsGraphDirected(false);
  }


  return (
      <Container fluid cclasslassName="h-100 d-flex flex-column pe-0">
        <Row>
          <MenuTab
            onCSVLoad={setNetworkGraphOptions}
            onCloseGraph={clearNetworkGraph}
          />

        </Row>


        <Row className="border-top p-0 h-100">
          {/* <Col xs={3} className="border-end"> */}
            {/* Left Side Menu */}

            {/* <NodeMenu className="border-bottom" />

          </Col> */}
          <Col xs={12} className="p-2">
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
          {/* // TODO: Make a componeclassnt */}

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
        {
          state.modeOption === 'option1'  ? (
            <ModeModal
            modeOption={state.modeOption}
            title="Simulation"
            />
          ):[]}
          {state.modeOption === 'option2' ? (
            <ModeModal
            modeOption={state.modeOption}
            title="Estimation"
            />
          ):[]}
          {state.modeOption === 'option3' ? (
            <ModeModal
            modeOption={state.modeOption}
            title="GOF"
            />
          ):[]}

          {state.modeOption === 'option4' ? (
            <ModeModal
            modeOption={state.modeOption}
            title="Bayesian Estimation"
            />
          ):[]}


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
