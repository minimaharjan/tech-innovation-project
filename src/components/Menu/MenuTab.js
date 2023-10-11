import ERGMActions from 'components/Body/ERGMActions';
import { Tabs, Tab, Stack, Button, Row, Col } from 'react-bootstrap';
import MenuMainActionButtons from './MenuMainActionButtons';
import UploadButton from 'components/General/UploadButton';
import Papa from 'papaparse';
import { toast, ToastContainer } from 'react-toastify';
import { CSVtoArray } from 'utils/utils';


function MenuTab(props) {
  const  handleNetworkCSV = async (file) => {
    const networkData = await CSVtoArray(file)
    toast.success("Network Data uploaded successfully", {
      position: toast.POSITION.TOP_CENTER
    });
    props.onCSVLoad(networkData)
  }

  return (
    <Row className="pe-0">
      <Col>
        <Tabs
          defaultActiveKey="mode"
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
              <Button
                className="p-2"
                variant="outline-danger rounded-0 me-2"
                type="file"
                size="sm">Export</Button>
              <Button
                className="p-2"
                variant="outline-danger rounded-0"
                type="file"
                size="sm"
                onClick={props.onCloseGraph}
              >Close Current Graph</Button>
            </Stack>
          </Tab>
          <Tab eventKey="mode" title="Mode" className="text-dark mb-1">
            <ERGMActions />
          </Tab>
          <Tab eventKey="model" title="Model Specification" className="mb-1">
            <Stack direction="horizontal">
              <Button
                className="p-2"
                variant="outline-danger rounded-0 me-2"
                size="sm">Model Type</Button>
              <Button
                className="p-2"
                variant="outline-danger rounded-0 me-2"
                size="sm">Parameters</Button>
              <Button
                className="p-2"
                variant="outline-danger rounded-0 me-2"
                size="sm">Attributes</Button>
            </Stack>
          </Tab>
          <Tab eventKey="settings" title="Settings">
            Tab content for Settings
          </Tab>
          {/* <Tab eventKey="help" title="Help" disabled>
            Tab content for Help and Manual
          </Tab> */}
        </Tabs>
      </Col>
      {/* <Col className="border-start">
        <MenuMainActionButtons />
      </Col> */}
    </Row>

  );
}

export default MenuTab;
