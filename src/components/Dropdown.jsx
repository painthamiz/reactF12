import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "../styles/dropdown.css";
function DropDown() {
  return (
    <div className="drpdwn">
      <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          Choose Screen
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item id="item" href="#/action-1">
            A-ADDRESS/PHONE
          </Dropdown.Item>
          {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default DropDown;
