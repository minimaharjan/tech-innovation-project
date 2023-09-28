import ERGMActions from 'components/Body/ERGMActions';
import { Tabs, Tab, Stack, Button, Row, Col } from 'react-bootstrap';
import MenuMainActionButtons from './MenuMainActionButtons';
import UploadButton from 'components/General/UploadButton';
import Papa from 'papaparse';

function MenuTab() {
  const handleNetworkCSV = (file) => {
    // TODO: ADD Support for xlsx and xls
    Papa.parse(file, {
      complete: function(result) {
          console.log(result.data)
      }
    })
  }

  return (
    <Row>
      <Col xs={9}>
        <Tabs
          defaultActiveKey="mode"
          transition={false}
          id="uncontrolled-tab-example"
          className="text-dark mb-1"
        >
          <Tab eventKey="files" title="Files" className="mb-1">
            <Stack direction="horizontal">
              <Button
                className="p-2"
                variant="outline-danger rounded-0 me-2"
                size="sm">Start New Project</Button>
              <Button
                className="p-2"
                variant="outline-danger rounded-0 me-2"
                size="sm">Load Project</Button>
              {/* TODO: ADD xlsx and .xls file type later */}
              <Button
                className="p-2"
                variant="outline-danger rounded-0 me-2"
                size="sm">Save Project</Button>
              <UploadButton
                accept=".csv"
                buttonTitle="Upload Network Data"
                onSuccessFullUpload={handleNetworkCSV}
              />
              <Button
                className="p-2"
                variant="outline-danger rounded-0"
                type="file"
                size="sm">Export</Button>
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
          <Tab eventKey="help" title="Help" disabled>
            Tab content for Help and Manual
          </Tab>
        </Tabs>`
      </Col>
      <Col className="border-start">
        <MenuMainActionButtons />
      </Col>
    </Row>

  );
}

export default MenuTab;
