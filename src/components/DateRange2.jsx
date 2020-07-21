import React from "react";
import "../styles/date2.css";

function Date2() {
  return (
    <div className="dates">
      <label id="dtfrom">DATE FROM & TO &nbsp;&nbsp;</label>
      <input
        type="date"
        id="dt1"
        className="form-control"
        placeholdertext="Enter Date"
      />
      {/* <label id="dtto">DATE TO&nbsp;&nbsp;</label> */}
      <input
        type="date"
        id="dt2"
        className="form-control"
        placeholdertext="Enter Date"
      />
    </div>
  );
}

export default Date2;
