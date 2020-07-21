import React from "react";
import DatePicker from "react-datepicker";
import "/src/styles/date.css";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";


function Daterange() {
  const [startDate, setStartDate] = useState(new Date("2018/01/01"));
  const [endDate, setEndDate] = useState(new Date());
  return (
    <div className="datePick">
      <div className="card">
        <div className="row">
          {/* <label>From:</label> */}
          <div className="col-sm-6">
            <p>Start Date</p>
            <DatePicker
              className="pick1"
              selected={startDate}
              onChange={date => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              hoverable={true}
            />
          </div>
          {/* <label>To:</label> */}
          <div className="col-sm-6">
            <p>&nbsp;End Date</p>
            <DatePicker
              className="pick2"
              placeholderText="End Date"
              selected={endDate}
              onChange={date => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Daterange;
