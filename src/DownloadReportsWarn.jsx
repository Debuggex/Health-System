import "bootstrap/dist/css/bootstrap.min.css";

import cross from "./assets/cross.png";
import { useState } from "react";

function DownloadReportsWarn(params) {
  const [allCheck, setAllCheck] = useState(false);
  let data=["New","Threshold","Value","Timesince"]

  function showDownload() {
    
    document.getElementById("DownloadReportsWarn").style.visibility = "hidden";
    document.getElementById("DownloadReport").style.visibility="visible";
  }

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
          Some columns will not be exported.
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
      <div className="icon-text" style={{ fontSize: "14px" }}>
        The following column will NOT be exported to the CSV file:
      </div>
      <br />
      <div className="icon-text" style={{ fontSize: "14px" }}>
        Last Readings
      </div>
      <br />
      {data.map((data, key) => (
        <div
          className="icon-text"
          style={{
            fontSize: "14px",
            margin: "5px 0",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span>
            <div
              style={{
                padding: "2px",
                backgroundColor: "#7D9FEF",
                borderRadius: "20px",
                marginRight: "10px",
              }}
            ></div>
          </span>
          {data}
        </div>
      ))}
      <br />
      <div className="icon-text" style={{ fontSize: "14px" }}>
        Do you want to export all the other columns to a CSV?
      </div>
      <br />
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
            onClick={() => showDownload()}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default DownloadReportsWarn;

// DownloadReportsWarn
