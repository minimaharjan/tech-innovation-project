import { Modal, Button } from "react-bootstrap";
import UploadButton from "components/General/UploadButton";

function NetworkOptionSetModal (props) {
  const handleNetworkEdgeCSV = async (file) => {
    const networkEdgeData = await CSVtoArray(file)
    console.log(networkEdgeData)
    // props.onCSVLoad(networkData)
  }

  return (
    <Modal
      {...props}
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
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NetworkOptionSetModal;
