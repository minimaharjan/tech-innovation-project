import { Accordion } from "react-bootstrap";

function MenuLeftOptions() {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header style={{fontSize: ".9rem"}}>Simulation</Accordion.Header>
                <Accordion.Body>
                    Simulation Options
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header  style={{fontSize: ".9rem"}}>Estimation</Accordion.Header>
                <Accordion.Body>
                    Estimation Options
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Bayesian</Accordion.Header>
                <Accordion.Body>
                    Bayesian Options
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default MenuLeftOptions