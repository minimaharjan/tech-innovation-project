import { Modal, Button } from "react-bootstrap";

function GraphStatistics(props) {
  const { show, onHide, graphStats } = props;
  return (
    <Modal
      show={show}
      onHide={onHide}
      backdrop="static"
      keyboard={false}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Network Graph Statistics
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <section className="mb-2">
          <h6>Graph Summary</h6>
          <div>Number of nodes: {graphStats.graph_summary.total_nodes}</div>
          <div>Number of edges: {graphStats.graph_summary.total_edges}</div>
          {/* <div>Maximum degree: {}</div>
          <div>Minimum degree: {}</div>
          <div>Average degree: {}</div>
          <div>Median degree: {}</div> */}
          <div>Reciprocity: {graphStats.graph_summary.reciprocity}</div>
        </section>
        <section className="mb-2">
          <h6>Graph Connetivity</h6>
          <div>Strongly Connected Components: {graphStats.graph_connectivity.strongly_connected_components}</div>
          <div>Weakly Connected Components: {graphStats.graph_connectivity.weakly_connected_components}</div>
          <div>Size of Largest Strongly Connected Component : {graphStats.graph_connectivity.largest_strongly_connected_component_size}</div>
        </section>
        <section className="mb-2">
          <h6>Graph Clustering</h6>
          <div>Transitivity: {graphStats.graph_clustering.transitivity}</div>
          <div>Average Clustering Coefficient: {graphStats.graph_clustering.average_clustering_coefficient}</div>
          <div>Density: {graphStats.graph_clustering.density}</div>
        </section>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  );
}

export default GraphStatistics;
