import { useState } from "react";
import { InputGroup, Form } from "react-bootstrap";

function NodeMenu (props) {
  const [networkA, setNetworkANodes] = useState(0);
  const [networkB, setNetworkBNodes] = useState(0);

    return (
    <div className={props.className}>
      <div className="mb-2 mt-2">Number of Nodes</div>
      <InputGroup className="mb-3">
        <InputGroup.Text id="network-a-node">Network A nodes</InputGroup.Text>
        <Form.Control
          type="number"
          min="0"
          placeholder=""
          aria-label="Network A nodes"
          aria-describedby="network-a-node"
          onChange={(e) => setNetworkANodes(e.target.value)}
          value={networkA}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="networkb-node">Network B nodes</InputGroup.Text>
        <Form.Control
          type="number"
          min="0"
          placeholder=""
          aria-label="Network B nodes"
          aria-describedby="network-b-node"
          onChange={(e) => setNetworkBNodes(e.target.value)}
          value={networkB}
        />
      </InputGroup>
    </div>
  );
}

export default NodeMenu;
