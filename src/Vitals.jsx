import "bootstrap/dist/css/bootstrap.min.css";

import Calendar from "./assets/Calendar.png";
import Upload from "./assets/Upload.png";
import EmptyState from "./assets/EmptyState.png";
import { useState } from "react";
import BloodPressure from "./BloodPressure";

function Vitals(params) {

  const[dropdown,setDropDown] = useState("Vitals");
  function showElements(params) {
    if(params=="BP"){
      setDropDown("Blood Pressure");
    }
  }

  function showCalendar(params) {
    document.getElementById("Calendar").style.visibility="visible";
    document.getElementById("shadow").style.visibility = "visible";
    
  }

  if (dropdown == "Vitals") {
    return (
      <div className="col-md-12">
        <div className="row col-md-12">
          <div className="col-md-7" style={{display:"flex"}}>
            <button className="roundButton" onClick={()=>{showElements("BP")}}>BP</button>
            <button className="roundButton">Blood Glucose</button>
            <button className="roundButton">Heart Rate</button>
          </div>
          <div className="col-md-1">
            <button className="filterBtn" onClick={()=>{showCalendar()}}>
              <img src={Calendar} alt="" width={18} height={18} />
            </button>
          </div>
          <div className="col-md-1">
            <button className="filterBtn">
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