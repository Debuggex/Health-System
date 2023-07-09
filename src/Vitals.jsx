import "bootstrap/dist/css/bootstrap.min.css";

import Calendar from "./assets/Calendar.png";
import Upload from "./assets/Upload.png";
import EmptyState from "./assets/EmptyState.png";
import { useState } from "react";
import BloodPressure from "./BloodPressure";

function Vitals(params) {

  const[dropdown,setDropDown] = useState("Vitals");

  if (dropdown == "Vitals") {
    return (
      <div className="col-md-12">
        <div className="row col-md-12">
          <div className="col-md-4 select-wrapper1">
            <select className="secondaryButton" onChange={(value)=>setDropDown(event.target.value)}>
              <option value="Vitals">Vitals</option>
              <option value="Blood Pressure">Blood Pressure</option>
            </select>
          </div>
          <div className="col-md-1">
            <button className="secondaryButton">
              <img src={Calendar} alt="" width={18} height={18} />
            </button>
          </div>
          <div className="col-md-1">
            <button className="secondaryButton">
              <img src={Upload} alt="" width={18} height={18} />
            </button>
          </div>
        </div>
        <div className="col-md-12 rightCard">
          <img src={EmptyState} alt="" />
          <p style={{ color: "#929BA6" }}>Click on Buttons to see data</p>
        </div>
      </div>
    );
  } else if (dropdown == "Blood Pressure") {
    return <BloodPressure />;
  }
}

export default Vitals;