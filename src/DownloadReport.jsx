import "bootstrap/dist/css/bootstrap.min.css";

import cross from "./assets/cross.png";
import closeBox from "./assets/Close Square.png";

import { useState } from "react";
import { useEffect } from "react";

function DownloadReport(params) {
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

  const [years,setYears] = useState(["Select Year"]);
  const [inputVal, setInputVal] = useState("");
  const[lists,setLists]=useState([]);

  const handleKeyDown = (event) =>{
    if(event.key === "Enter"){
        setLists((list)=>[...list,inputVal]);
        setInputVal("");
        event.preventDefault();
    }
  }

  const deleteIt=(index)=>{
    var arr = [...lists];
    arr.splice(index,1);
    setLists(arr);
  }

  const handleChange = (event) => {
    setInputVal(event.target.value);
  };

  useEffect(()=>{
    let date = new Date();
    setYears(["Select Year"]);
    let current = date.getFullYear();
    
    for(let i = 2000;i<=current;i++){
        setYears((years) => [...years, i.toString()]);
    }
    console.log(years);
  },[])


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
          Download Report
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
          <img
            onClick={() => params.exit}
            src={cross}
            alt=""
            width="18px"
            height="18px"
          />
        </div>
      </div>
      <hr color="" style={{ width: "100%", color: "#DBDADD" }} />
      <div className="row" style={{ marginBottom: "20px" }}>
        <div className="col-md-4 select-wrapper">
          <label
            htmlFor="MobileNumber"
            style={{
              color: "#929BA6",
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "5px",
            }}
          >
            From
          </label>
          <select name="MobileNumber" className="" id="MobileNumber">
            {months.map((data, key) => (
              <option value={key}>{data}</option>
            ))}
          </select>
        </div>
        <div className="col-md-4 select-wrapper">
          <label
            htmlFor="MobileNumber"
            style={{
              color: "#929BA6",
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "5px",
            }}
          >
            To
          </label>
          <select name="MobileNumber" className="" id="MobileNumber">
            {months.map((data, key) => (
              <option value={key}>{data}</option>
            ))}
          </select>
        </div>
        <div className="col-md-4 select-wrapper">
          <label
            htmlFor="MobileNumber"
            style={{
              color: "#929BA6",
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "5px",
            }}
          >
            Year
          </label>
          <select name="MobileNumber" className="" id="MobileNumber">
            {years.map((data, key) => (
              <option value={key}>{data}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="col-md-12">
        <label
          htmlFor="LName"
          style={{
            color: "#929BA6",
            fontSize: "16px",
            fontWeight: "600",
            marginBottom: "5px",
          }}
        >
          Months
        </label>
        <div
          style={{
            border: "1px solid #DBDADD",
            padding: "10px",
            borderRadius: "10px",
            fontSize: "14px",
            display: "flex",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            {lists.map((data, key) => (
              <div
                style={{
                  padding: "10px",
                  backgroundColor: "#EFEEF1",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "5px",
                }}
              >
                <div style={{ marginRight: "5px", fontWeight: "600" }}>
                  {data}
                </div>
                <img
                  style={{ cursor: "pointer" }}
                  src={closeBox}
                  alt=""
                  width={20}
                  height={20}
                  onClick={() => deleteIt(key)}
                />
              </div>
            ))}
          </div>
          <textarea
            type="text"
            id="LName"
            value={inputVal}
            rows={1}
            style={{
              borderRadius: "10px",
              fontSize: "14px",
              margin: "0 10px",
            }}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
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

export default DownloadReport;

// DownloadReport
