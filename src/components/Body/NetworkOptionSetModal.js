import { useState } from 'react';
import { Modal, Button } from "react-bootstrap";
import UploadButton from "components/General/UploadButton";
import { CSVtoArray } from 'utils/utils';

function NetworkOptionSetModal (props) {
  const [directed, setDirected] = useState(true);
  const [linkingAttribute, setLinkingAttribute] = useState('');
  const [groupingAttribute, setGroupingAttribute] = useState('')
  const [edgeData, setEdgeData] =useState([])

  const handleNetworkEdgeCSV = async (file) => {
    const networkEdgeData = await CSVtoArray(file)
    setEdgeData(networkEdgeData)
  }

  const handleSettings = () => {
    props.onSave({
      directed, linkingAttribute, groupingAttribute, edgeData
    })
  }

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      backdrop="static"
      keyboard={false}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Select Network Graph Options
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          Select if the graph is directed
        </div>
        {/* TODO: Make it a form for validation */}
        <div className="pt-2 pb-2">
          Select Main Linking Attribute (used for source and target)
          Require Field

          use a drop down
        </div>
        <div className="border-top pt-2 pb-2">
          Select Grouping Attribue
          {/* Linking Attribute can't be grouping attribute */}
          {/* { can be empty though} */}
        </div>
        <div className="border-top pt-2 pb-2">Select Edge List File</div>
        <UploadButton
            accept=".csv"
            buttonTitle="Upload Network Edge/Link Data"
            onSuccessFullUpload={handleNetworkEdgeCSV}
          />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSettings}>Save Settings</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NetworkOptionSetModal;
