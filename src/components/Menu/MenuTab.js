import { Tabs, Tab, Stack, Button } from 'react-bootstrap';

function MenuTab() {
    return (
        <Tabs
          defaultActiveKey="files"
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
              <Button
                className="p-2"
                variant="outline-danger rounded-0 me-2"
                size="sm">Save Project</Button>
              <Button
                className="p-2"
                variant="outline-danger rounded-0"
                size="sm">Export</Button>
            </Stack>
          </Tab>
          <Tab eventKey="model" title="Model Specification" className="text-dark">
            Tab content for Model Specification
          </Tab>
          <Tab eventKey="settings" title="Settings">
            Tab content for Settings
          </Tab>
          <Tab eventKey="help" title="Help" disabled>
            Tab content for Help and Manual
          </Tab>
        </Tabs>
    );
}

export default MenuTab;