import { Modal, Button, Row, Col } from "react-bootstrap";
import { numToRound3 } from "utils/utils";
import './GraphStatistics.css'
import DegreeDistributionGraph from "./DegreeDistributionGraph";
import html2pdf from 'html2pdf.js';

function GraphStatistics(props) {
  const { show, onHide, graphStats } = props;

  const downloadGraphStats = () => {
    const element_stats = document.getElementById('graph-stats-modal');
    const element_nw_graph = document.getElementById("graph-main");

    const opt = {
      margin:       .25,
      filename:     'network-graph-stats.pdf',
      image:        { type: 'jpeg', quality: 1 },
      html2canvas:  { scale: 1 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf()
      .set(opt)
      .from(element_nw_graph).toPdf().get('pdf')
      .then(function (pdf) {
        pdf.addPage();
      })
      .from(element_stats)
      .toContainer().toCanvas().toPdf().save();
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      backdrop="static"
      keyboard={false}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      id="graph-stats-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <Row>
            <Col>
              Network Graph Statistics
            </Col>
            <Col className="ms-auto" data-html2canvas-ignore="true">
              <Button onClick={downloadGraphStats}>Download Graph Stats</Button>
            </Col>
          </Row>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col className="border-end">
          <section className="mb-2">
            <h3 className="graph-stats-header">Graph Summary</h3>
            <Row>
              <Col className="mb-2">
                <div className="graph-stats-detail-number">{graphStats.graph_summary.total_nodes}</div>
                <div className="graph-stats-detail-title">Number of nodes</div>
              </Col>
              <Col className="mb-2">
                <div className="graph-stats-detail-number">{graphStats.graph_summary.total_edges}</div>
                <div className="graph-stats-detail-title">Number of edges</div>
              </Col>
              <Col className="mb-2">
                <div className="graph-stats-detail-number">{numToRound3(graphStats.graph_summary.reciprocity)}</div>
                <div className="graph-stats-detail-title">Reciprocity</div>
              </Col>
            </Row>
            {/* <div>Maximum degree: {}</div>
            <div>Minimum degree: {}</div>
            <div>Average degree: {}</div>
            <div>Median degree: {}</div> */}
          </section>
          </Col>

          <Col className="border-end">
            <section className="mb-2">
              <h3 className="graph-stats-header">Graph Connetivity</h3>
              <Row>
                <Col className="mb-2">
                  <div className="graph-stats-detail-number">{graphStats.graph_connectivity.strongly_connected_components}</div>
                  <div className="graph-stats-detail-title">Strongly Connected Components</div>
                </Col>
                <Col className="mb-2">
                  <div className="graph-stats-detail-number">{graphStats.graph_connectivity.weakly_connected_components}</div>
                  <div className="graph-stats-detail-title">Weakly Connected Components</div>
                </Col>
                <Col className="mb-2">
                  <div className="graph-stats-detail-number">{graphStats.graph_connectivity.largest_strongly_connected_component_size}</div>
                  <div className="graph-stats-detail-title">Size of Largest Strongly Connected Component</div>
                </Col>
              </Row>
            </section>
          </Col>
          <Col>
            <section className="mb-2">
              <h3 className="graph-stats-header">Graph Clustering</h3>
              <Row>
                <Col className="mb-2">
                  <div className="graph-stats-detail-number">{numToRound3(graphStats.graph_clustering.transitivity)}</div>
                  <div className="graph-stats-detail-title">Transitivity</div>
                </Col>
                <Col className="mb-2">
                  <div className="graph-stats-detail-number">{numToRound3(graphStats.graph_clustering.average_clustering_coefficient)}</div>
                  <div className="graph-stats-detail-title">Average Clustering Coefficient</div>
                </Col>
                <Col className="mb-2">
                  <div className="graph-stats-detail-number">{numToRound3(graphStats.graph_clustering.density)}</div>
                  <div className="graph-stats-detail-title">Density</div>
                </Col>
              </Row>
            </section>
          </Col>
        </Row>
        <Row>
          <DegreeDistributionGraph
            degreeList={graphStats.graph_degree_distribution.list_of_unique_degree}
            degreeOccurenceList={graphStats.graph_degree_distribution.count_of_unique_degree}
            className="mt-2 border-top p-1"/>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default GraphStatistics;
