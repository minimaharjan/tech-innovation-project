import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { useAppContext } from "context/Provider";

function ERGMActions() {
  const { state, dispatch } = useAppContext();
  

  const [selectedOption, setOption] = useState("option1");
  useEffect(() => {
    setOption(state?.modeOption)
  }, [state?.modeOption]);
  
  const actionList = {
    option1: {
      id: 1,
      actionName: "Simulation"
    },
    option2: {
      id: 2,
      actionName: "Estimation"
    },
    option3: {
      id: 3,
      actionName: "GOF"
    },
    option4: {
      id: 4,
      actionName: "Bayesiam estimation"
    },
  }
  const handleSimulation = () => {
    dispatch({ type: 'SETSIMULATION' });
  };


  return (
    <Form>
      <div className="text-secondary fw-bold">Select Action</div>
      <div key="inline-radio" className="mt-2 mb-2 border p-1 bg-light">
        <Form.Check
          inline
          label="Simulation"
          name="group1"
          type="radio"
          id="inline-radio-1"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={(e) => handleSimulation(e.target.value)}
        />
        <Form.Check
          inline
          label="Estimation"
          name="group1"
          type="radio"
          id="inline-radio-2"
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={(e) => setOption(e.target.value)}
        />
        <Form.Check
          inline
          label="GOF"
          name="group1"
          type="radio"
          id="inline-radio-3"
          value="option3"
          checked={selectedOption === 'option3'}
          onChange={(e) => setOption(e.target.value)}
        />
        <Form.Check
          inline
          label="Bayesian estimation"
          name="group1"
          type="radio"
          id="inline-radio-4"
          value="option4"
          checked={selectedOption === 'option4'}
          onChange={(e) => setOption(e.target.value)}
        />
      </div>
    </Form>
  );
}
export default ERGMActions;
