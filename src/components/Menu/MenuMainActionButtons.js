import { Button } from "react-bootstrap";

function MenuMainActionButtons() {
  return (
    <div className="p-1">
      {/* TODO: Disable Start until min requirment for current selection satisfied */}
      <Button variant="primary" size="sm">Start</Button>
    </div>
  );
}

export default MenuMainActionButtons;
