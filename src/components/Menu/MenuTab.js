import ERGMActions from 'components/Body/ERGMActions';
import { Tabs, Tab, Stack, Button, Row, Col } from 'react-bootstrap';
import './MenuTab.css';
import MenuMainActionButtons from './MenuMainActionButtons';
import UploadButton from 'components/General/UploadButton';
import Papa from 'papaparse';
import { toast, ToastContainer } from 'react-toastify';
import { CSVtoArray } from 'utils/utils';
import Help from './Help';
import { useAppContext } from "context/Provider";



function MenuTab(props) {
  const { state, dispatch } = useAppContext();
  const  handleNetworkCSV = async (file) => {
    const networkData = await CSVtoArray(file)
    toast.success("Network Data uploaded successfully", {
      position: toast.POSITION.TOP_CENTER
    });
    props.onCSVLoad(networkData)
  }

  const handleHelp=()=>{
    let result={
      showHelpModal: true
    }
    dispatch({type:'SETHELP', payload:result});
  }

  return (
    <Row className="pe-0">
      <Col>
        <Tabs
          defaultActiveKey="files"
          transition={false}
          id="uncontrolled-tab-example"
          className="text-dark mb-1"
        >
          <Tab eventKey="files" title="Files" className="mb-1">
            <Stack direction="horizontal">
              {/* <Button
                className="p-2"
                variant="outline-danger rounded-0 me-2"
                size="sm">Start New Project</Button>
              <Button
                className="p-2"
                variant="outline-danger rounded-0 me-2"
                size="sm">Load Project</Button>

              <Button
                className="p-2"
                variant="outline-danger rounded-0 me-2"
                size="sm">Save Project</Button> */}
              {/* TODO: ADD xlsx and .xls file type later */}
              <UploadButton
                accept=".csv"
                buttonTitle="Upload Network Data"
                onSuccessFullUpload={handleNetworkCSV}
              />
              <ToastContainer />
              {/* <Button
                className="p-2"
                variant="outline-danger rounded-0 me-2"
                type="file"
                size="sm">Export</Button> */}

              <Button
                className="p-2 custom-button"
                variant="outline-danger"
                type="file"
                size="sm"
                onClick={props.onCloseGraph}
              ><span className="btn-text">Close Current Graph</span>
              </Button>

            </Stack>
          </Tab>
          <Tab eventKey="mode" title="Mode" className="text-dark mb-1 mode tab">
            <ERGMActions />
          </Tab>
          {/* <Tab eventKey="settings" title="Settings">
            Tab content for Settings
          </Tab> */}
          {/* <Tab eventKey="help" title="Help">
            Tab content for Help and Manual
          </Tab> */}
          <Tab eventKey="help" title="Help" >
          
          <Button
          className="p-2 custom-button"
          variant="outline-danger"
          size="sm"
          onClick={handleHelp}>
          <span className="btn-text">Help</span>
          </Button>

          </Tab>
        </Tabs>
      </Col>
      {/* <Col className="border-start">
        <MenuMainActionButtons />
      </Col> */}
    </Row>

  );
}

export default MenuTab;
