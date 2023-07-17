import "bootstrap/dist/css/bootstrap.min.css";

import cross from "./assets/cross.png";
import search from "./assets/search-normal.svg";

import { useState } from "react";
import { useEffect } from "react";
import Organization from './Oragnization';

function Filter(params) {
  const [allCheck, setAllCheck] = useState(false);
  let months = [
    "Select Month",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [years, setYears] = useState(["Select Year"]);
  const [inputVal, setInputVal] = useState("");
  const [lists, setLists] = useState([]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setLists((list) => [...list, inputVal]);
      setInputVal("");
      event.preventDefault();
    }
  };

  const deleteIt = (index) => {
    var arr = [...lists];
    arr.splice(index, 1);
    setLists(arr);
  };

  const handleChange = (event) => {
    setInputVal(event.target.value);
  };

  useEffect(() => {
    let date = new Date();
    setYears(["Select Year"]);
    let current = date.getFullYear();

    for (let i = 2000; i <= current; i++) {
      setYears((years) => [...years, i.toString()]);
    }
    console.log(years);
  }, []);

  return (
    <div
      id="PatientEditPopUp"
      style={{
        display: "flex",
        position: "absolute",
        width: "50vw",
        top: "5%",
        borderRadius: "20px",
        backgroundColor: "white",
        zIndex: "51",
        flexDirection: "column",
        padding: "20px 40px",
      }}
    >
      {/* Edit Pop Up Header */}
      <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
        <div style={{ width: "80%", fontSize: "24px", fontWeight: "600" }}>
          Filter
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => params.exit()}
        >
          <img src={cross} alt="" width="18px" height="18px" />
        </div>
      </div>
      <hr color="" style={{ width: "100%", color: "#DBDADD" }} />
      <div className="row" style={{ display: "flex", alignItems: "center" }}>
        <div className="col-md-2" style={{ fontWeight: "600" }}>
          Organization
        </div>
        <div className="col-md-10">
          <select name="MobileNumber" className="" id="MobileNumber">
            <option value="0">- Select -</option>
            <option value="1">Google</option>
            <option value="2">Microsoft</option>
          </select>
        </div>
      </div>
      <br />
      <div className="row" style={{ display: "flex", alignItems: "center" }}>
        <div className="col-md-2" style={{ fontWeight: "600" }}>
          Progress
        </div>
        <div className="col-md-3">
          <button className="primaryButton">Last Month</button>
        </div>
        <div className="col-md-3">
          <button className="primaryButton">This Month</button>
        </div>
      </div>
      <br />
      {/* Bottom Buttons */}
      <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
        <div
          style={{
            width: "50%",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
          onClick={() => params.exit()}
        >
          cancel
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
            <button
              type="submit"
              className="primaryButton"
              onClick={() => params.exit()}
            >
              Download
            </button>
          
        </div>
      </div>
    </div>
  );
}

export default Filter;

// Filter
