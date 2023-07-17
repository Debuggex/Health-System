import "bootstrap/dist/css/bootstrap.min.css";

import cross from "./assets/cross.png";
import calendarLeft from "./assets/CalendarLeft.png";
import calendarRight from "./assets/CalendarRight.png";


import { useState } from "react";
import { useEffect } from "react";

function Calendar(params) {
  const [allCheck, setAllCheck] = useState(false);
  let months = [
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
  let days = ["M", "T", "W", "T", "F", "S", "S"];

  const [years, setYears] = useState(["Select Year"]);
  const [toDates,setToDates] = useState([""]);
  const [fromDates, setFromDates] = useState([""]);
  const[toMonth,setToMonth]=useState(0);
  const[toYear,setToYear]=useState(2023);

  
  const [fromMonth, setFromMonth] = useState(0);
  const [fromYear, setFromYear] = useState(2023);
  
  function increaseToMont() {
    let temp = toMonth;
    temp++;
    if(temp>11){
        setToMonth(0);
        temp = toYear;
        temp++;
        setToYear(temp);
    }else{
        setToMonth(temp);
    }
    console.log(temp);
  }

  function decreaseToMont() {
    let temp = toMonth;
    temp--;
    if (temp < 0) {
      setToMonth(11);
      temp = toYear;
      temp--;
      setToYear(temp);
    } else {
      setToMonth(temp);
    }
    console.log(temp);
  }


    function increaseFromMont() {
      let temp = fromMonth;
      temp++;
      if (temp > 11) {
        setFromMonth(0);
        temp = fromYear;
        temp++;
        setFromYear(temp);
      } else {
        setFromMonth(temp);
      }
      console.log(temp);
    }

    function decreaseFromMont() {
      let temp = fromMonth;
      temp--;
      if (temp < 0) {
        setFromMonth(11);
        temp = toYear;
        temp--;
        setFromYear(temp);
      } else {
        setFromMonth(temp);
      }
      console.log(temp);
    }

  function generateFromDate() {
    let date = new Date(fromYear, fromMonth, 1);
    setFromDates([""]);
    let lastDate = new Date(fromYear, fromMonth + 1, 0);
    console.log(lastDate.getDate());

    // Entering Empty On Previous Month Slots
    for (let i = 1; i < date.getDay(); i++) {
      setFromDates((toD) => [...toD, "NaN"]);
    }

    // Entering Current Month Dates
    for (let i = 1; i <= lastDate.getDate(); i++) {
      let temp = i.toString();
      if (temp.length == 1) {
        temp = "0" + temp;
      }
      setFromDates((toD) => [...toD, temp]);
    }

    console.log(toDates);
  }

  function generateToDates() {
    let date = new Date(toYear,toMonth,1);
    setToDates([""]);
    let lastDate = new Date(toYear, toMonth + 1, 0);
    console.log(lastDate.getDate());

    // Entering Empty On Previous Month Slots
    for (let i = 1; i < date.getDay(); i++) {
      setToDates((toD) => [...toD, "NaN"]);
    }

    // Entering Current Month Dates
    for (let i = 1; i <= lastDate.getDate(); i++) {
      let temp = i.toString();
      if (temp.length == 1) {
        temp = "0" + temp;
      }
      setToDates((toD) => [...toD, temp]);
    }

    console.log(toDates);
  }

  useEffect(() => {
    generateFromDate();
    generateToDates();

  }, [toMonth,fromMonth,toYear,fromYear]);

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
          Calendar
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => showPopUp()}
        >
          <img
            onClick={() => params.exit()}
            src={cross}
            alt=""
            width="18px"
            height="18px"
          />
        </div>
      </div>
      <hr color="" style={{ width: "100%", color: "#DBDADD" }} />
      <div className="row" style={{ marginBottom: "20px" }}>
        <div className="col-md-5">
          <label
            htmlFor="MobileNumber"
            style={{
              color: "#929BA6",
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "20px",
            }}
          >
            From
          </label>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontWeight: "600",
            }}
          >
            <img
              style={{ cursor: "pointer" }}
              src={calendarLeft}
              alt=""
              width={8}
              height={16}
              onClick={() => {
                decreaseFromMont();
              }}
            />
            <div>
              {months[fromMonth]} {fromYear}
            </div>
            <img
              style={{ cursor: "pointer" }}
              src={calendarRight}
              alt=""
              width={8}
              height={16}
              onClick={() => {
                increaseFromMont();
              }}
            />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
            }}
          >
            {days.map((data, key) => (
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#929BA6",
                  margin: "10px",
                }}
              >
                {data}
              </div>
            ))}
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
            }}
          >
            {fromDates.map((data, key) => (
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  margin: "10px",
                  cursor: "default",
                }}
              >
                {data != null && data != "NaN" ? data : ""}
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5">
          <label
            htmlFor="MobileNumber"
            style={{
              color: "#929BA6",
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "20px",
            }}
          >
            To
          </label>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontWeight: "600",
            }}
          >
            <img
              style={{ cursor: "pointer" }}
              src={calendarLeft}
              alt=""
              width={8}
              height={16}
              onClick={() => {
                decreaseToMont();
              }}
            />
            <div>
              {months[toMonth]} {toYear}
            </div>
            <img
              style={{ cursor: "pointer" }}
              src={calendarRight}
              alt=""
              width={8}
              height={16}
              onClick={() => {
                increaseToMont();
              }}
            />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
            }}
          >
            {days.map((data, key) => (
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#929BA6",
                  margin: "10px",
                }}
              >
                {data}
              </div>
            ))}
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
            }}
          >
            {toDates.map((data, key) => (
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  margin: "10px",
                  cursor: "default",
                }}
              >
                {data != null && data != "NaN" ? data : ""}
              </div>
            ))}
          </div>
        </div>
      </div>

      <br />

      {/* Bottom Buttons */}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "10%",
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
          }}
        >
          <div style={{ width: "50%" }}>
            <button
              type="submit"
              className="primaryButton"
              onClick={() => params.exit()}
              style={{ cursor: "pointer" }}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;

// Calendar
