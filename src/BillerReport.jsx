import Upload from "./assets/Upload.png";
import search from "./assets/search-normal.svg";
import filter from "./assets/SearchFilter.png";
import cross from "./assets/cross.png";
import dots from "./assets/dots.png";
import trash from "./assets/trash.png";
import edit from "./assets/edit-2.png";
import archive from "./assets/archive.png";

import { useState } from "react";

function BillerReport(params) {

  function showFilter() {
    
    document.getElementById("Filter").style.visibility = "visible";
    document.getElementById("shadow").style.visibility = "visible";
  }

    function showCalendar() {
      // Calendar
      document.getElementById("Calendar").style.visibility="visible";
      document.getElementById("shadow").style.visibility = "visible";
      
    }
    const [allCheck, setAllCheck] = useState(false);

    let data = [
      {
        name: "Thomas Schnieder",
        DOS: "3/12/2023",
        Provider: "sarah",
        Diagnosis: 110,
        CPT: "-",
        ReadingDays: 13,
        TotalMinutes: "-",
        MonthlyReq: "No",
        Service: "ccm",
        CareManager: "-",
      },
      {
        name: "Thomas Schnieder",
        DOS: "3/12/2023",
        Provider: "sarah",
        Diagnosis: 110,
        CPT: "-",
        ReadingDays: 13,
        TotalMinutes: "-",
        MonthlyReq: "No",
        Service: "ccm",
        CareManager: "-",
      },
      {
        name: "Thomas Schnieder",
        DOS: "3/12/2023",
        Provider: "sarah",
        Diagnosis: 110,
        CPT: "-",
        ReadingDays: 13,
        TotalMinutes: "-",
        MonthlyReq: "No",
        Service: "ccm",
        CareManager: "-",
      },
      {
        name: "Thomas Schnieder",
        DOS: "3/12/2023",
        Provider: "sarah",
        Diagnosis: 110,
        CPT: "-",
        ReadingDays: 13,
        TotalMinutes: "-",
        MonthlyReq: "No",
        Service: "ccm",
        CareManager: "-",
      },
      ,
      {
        name: "Thomas Schnieder",
        DOS: "3/12/2023",
        Provider: "sarah",
        Diagnosis: 110,
        CPT: "-",
        ReadingDays: 13,
        TotalMinutes: "-",
        MonthlyReq: "No",
        Service: "ccm",
        CareManager: "-",
      },
      {
        name: "Thomas Schnieder",
        DOS: "3/12/2023",
        Provider: "sarah",
        Diagnosis: 110,
        CPT: "-",
        ReadingDays: 13,
        TotalMinutes: "-",
        MonthlyReq: "No",
        Service: "ccm",
        CareManager: "-",
      },
      {
        name: "Thomas Schnieder",
        DOS: "3/12/2023",
        Provider: "sarah",
        Diagnosis: 110,
        CPT: "-",
        ReadingDays: 13,
        TotalMinutes: "-",
        MonthlyReq: "No",
        Service: "ccm",
        CareManager: "-",
      },
    ];

  return (
    <div style={{ display: "flex", width: "100%", flexDirection: "column" }}>
      <div
        style={{
          width: "100%",
          marginRight: "20px",
          marginBottom: "10px",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: "18px",
            fontWeight: "700",
            width: "50%",
          }}
        >
          Billing
        </div>
        <div style={{ width: "3.5%" }}>
          <button className="filterBtn">
            <img src={Upload} alt="" width={18} height={18} />
          </button>
        </div>
      </div>
      <div style={{ width: "25%", marginRight: "20px", position: "relative" }}>
        <div
          style={{
            fontSize: "16px",
            fontWeight: "700",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",

            width: "100%",
          }}
        >
          Billing Report
        </div>
      </div>
      <div className="rowContainer">
        <div
          id="searchbar"
          style={{
            width: "100%",
            display: "flex",
            padding: "20px 0",
          }}
        >
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "row",
              padding: "10px 15px",
              backgroundColor: "#FFF",
              borderRadius: "10px",
              marginRight: "20px",
            }}
          >
            <div
              style={{
                marginRight: "10px",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={search} alt="" width={20} height={20} />
            </div>
            <input
              type="text"
              style={{ background: "none", border: "none", width: "100%" }}
              placeholder="Search"
            />
          </div>
          <div
            style={{
              width: "7%",
              display: "flex",
              flexDirection: "row",
              padding: "10px 15px",
              backgroundColor: "#FFF",
              borderRadius: "10px",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={()=>{showFilter()}}
          >
            <img src={filter} alt="" width={15} height={15} />
          </div>
        </div>
        <div
          id="searchbar"
          style={{
            width: "100%",
            display: "flex",
            padding: "20px 0",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              fontWeight: "600",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              marginRight: "10px",
            }}
          >
            Date Range
          </div>
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "row",
              padding: "10px 15px",
              backgroundColor: "#FFF",
              alignItems: "center",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={() => {
              showCalendar()
            }}
          >
            <input
              type="type"
              disabled
              style={{
                background: "none",
                border: "none",
                width: "100%",
                cursor: "pointer",
              }}
              placeholder="Select Date"
            />
            <img src={cross} alt="" width={15} height={15} />
          </div>
        </div>
      </div>
      <div className="list-header">
        <div
          style={{
            padding: "15px 30px",
            borderRadius: "20px 20px 0 0",
            backgroundColor: "#E9EBEA",
            borderL: "1px solid #EFEEF1",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            className="checkbox-wrapper"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <label
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <input
                type="checkbox"
                className={allCheck ? "checked" : "unChecked"}
                onChange={(check) => setAllCheck((check) => !check)}
              />
            </label>
          </div>

          <div
            style={{
              fontSize: "16px",
              fontWeight: "600",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",

              width: "15%",
            }}
          >
            Name
          </div>
          <div
            style={{
              fontSize: "16px",
              fontWeight: "600",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "10%",
            }}
          >
            DOS{" "}
          </div>
          <div
            style={{
              fontSize: "16px",
              fontWeight: "600",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "10%",
            }}
          >
            Provider{" "}
          </div>
          <div
            style={{
              fontSize: "16px",
              fontWeight: "600",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "10%",
            }}
          >
            Diagnosis{" "}
          </div>
          <div
            style={{
              fontSize: "16px",
              fontWeight: "600",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "10%",
            }}
          >
            Cpt Codes{" "}
          </div>
          <div
            style={{
              fontSize: "16px",
              fontWeight: "600",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "10%",
            }}
          >
            Reading Days{" "}
          </div>
          <div
            style={{
              fontSize: "16px",
              fontWeight: "600",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "8%",
            }}
          >
            Total Minutes{" "}
          </div>
          <div
            style={{
              fontSize: "16px",
              fontWeight: "600",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "10%",
            }}
          >
            Monthly Req Met{" "}
          </div>
          <div
            style={{
              fontSize: "16px",
              fontWeight: "600",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "8%",
            }}
          >
            Service{" "}
          </div>
          <div
            style={{
              fontSize: "16px",
              fontWeight: "600",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "10%",
            }}
          >
            Care Manager{" "}
          </div>
        </div>
        {/* Header End */}
        {/* Data Start */}
        <div style={{ overflowY: "scroll" }}>
          <div style={{}}>
            {data.map((datas, index) => (
              <div className="list-data" style={{ cursor: "default" }}>
                <div
                  className="checkbox-wrapper"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      className={allCheck ? "checked" : "unChecked"}
                      onChange={(check) => setAllCheck((check) => !check)}
                      onClick={() => {
                        props.showPatientView();
                      }}
                    />
                  </label>
                </div>

                <div id="name" className="list-name" style={{ width: "15%" }}>
                  <div>{datas.name}</div>
                </div>
                <div id="name" className="list-name" style={{ width: "10%" }}>
                  <div>{datas.DOS}</div>
                </div>
                <div id="name" className="list-name" style={{ width: "10%" }}>
                  <div>{datas.Provider}</div>
                </div>
                <div id="name" className="list-name" style={{ width: "10%" }}>
                  <div>{datas.Diagnosis}</div>
                </div>
                <div id="name" className="list-name" style={{ width: "10%" }}>
                  <div>{datas.CPT}</div>
                </div>
                <div id="name" className="list-name" style={{ width: "10%" }}>
                  <div>{datas.ReadingDays}</div>
                </div>
                <div id="name" className="list-name" style={{ width: "8%" }}>
                  <div>{datas.TotalMinutes}</div>
                </div>
                <div id="name" className="list-name" style={{ width: "10%" }}>
                  <div>{datas.MonthlyReq}</div>
                </div>
                <div id="name" className="list-name" style={{ width: "8%" }}>
                  <div>{datas.Service}</div>
                </div>
                <div id="name" className="list-name" style={{ width: "10%" }}>
                  <div>{datas.CareManager}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillerReport;
