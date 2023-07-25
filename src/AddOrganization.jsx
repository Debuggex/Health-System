import "bootstrap/dist/css/bootstrap.min.css";

import cross from "./assets/cross.png";
import { useState } from "react";

function AddOrganization(params) {
  const [allCheck, setAllCheck] = useState(false);

  

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
        <div style={{ width: "50%", fontSize: "24px", fontWeight: "600" }}>
          Add Organization
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
      <div style={{ fontSize: "12px", fontWeight: "500", color: "#929BA6" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        tortor risus, euismod a justo quis, pretium bibe ndum risus.
        Pellentesque sem eros, porttitor a ultricies id, consequat ut ex.
        Praesent odio ligula, gravida at pretium at, tempus sit amet felis.{" "}
      </div>
      <br />

      {/* Edit Pop Up Fields Start */}

      <div className="row" style={{ marginBottom: "10px" }}>
        {/* First Row */}
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "500",

                  marginBottom: "5px",
                }}
              >
                Organization Name <span style={{ color: "#FF0000" }}>*</span>
              </div>
              <div
                style={{
                  border: "1px solid #DBDADD",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <input type="text" />
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              fontWeight: "500",
              marginBottom: "5px",
            }}
          >
            Location <span style={{ color: "#FF0000" }}>*</span>
          </div>
          <div
            style={{
              border: "1px solid #DBDADD",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <input type="text" />
          </div>
        </div>
      </div>
      <div className="row" style={{ marginBottom: "10px" }}>
        {/* First Row */}
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "500",

                  marginBottom: "5px",
                }}
              >
                Nature of business <span style={{ color: "#FF0000" }}>*</span>
              </div>
              <div className="col-md-12 select-wrapper3">
                <select name="DeviceType" className="" id="MobileNumber">
                  <option value="0"></option>
                  <option value="1">+91 987 654 5432</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              fontWeight: "500",
              marginBottom: "5px",
            }}
          >
            Phone Number <span style={{ color: "#FF0000" }}>*</span>
          </div>
          <div
            style={{
              border: "1px solid #DBDADD",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <input type="text" />
          </div>
        </div>
      </div>
      <div className="row" style={{ marginBottom: "10px" }}>
        {/* First Row */}
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "500",

                  marginBottom: "5px",
                }}
              >
                Facility Name <span style={{ color: "#FF0000" }}>*</span>
              </div>
              <div
                style={{
                  border: "1px solid #DBDADD",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <input type="text" />
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              fontWeight: "500",
              marginBottom: "5px",
            }}
          >
            Facility Type <span style={{ color: "#FF0000" }}>*</span>
          </div>
          <div
            style={{
              border: "1px solid #DBDADD",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <input type="text" />
          </div>
        </div>
      </div>
      <div className="row" style={{ marginBottom: "10px" }}>
        {/* First Row */}
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "500",

                  marginBottom: "5px",
                }}
              >
                Address Line 1 <span style={{ color: "#FF0000" }}>*</span>
              </div>
              <div
                style={{
                  border: "1px solid #DBDADD",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <input type="text" />
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              fontWeight: "500",
              marginBottom: "5px",
            }}
          >
            Address Line 2 <span style={{ color: "#FF0000" }}>*</span>
          </div>
          <div
            style={{
              border: "1px solid #DBDADD",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <input type="text" />
          </div>
        </div>
      </div>
      <div className="row" style={{ marginBottom: "10px" }}>
        {/* First Row */}
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "500",

                  marginBottom: "5px",
                }}
              >
                City <span style={{ color: "#FF0000" }}>*</span>
              </div>
              <div className="col-md-12 select-wrapper3">
                <select name="DeviceType" className="" id="MobileNumber">
                  <option value="0"></option>
                  <option value="1">+91 987 654 5432</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              fontWeight: "500",
              marginBottom: "5px",
            }}
          >
            State <span style={{ color: "#FF0000" }}>*</span>
          </div>
          <div className="col-md-12 select-wrapper3">
            <select name="DeviceType" className="" id="MobileNumber">
              <option value="0"></option>
              <option value="1">+91 987 654 5432</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row" style={{ marginBottom: "10px" }}>
        {/* First Row */}
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "500",

                  marginBottom: "5px",
                }}
              >
                Zip Code <span style={{ color: "#FF0000" }}>*</span>
              </div>
              <div
                style={{
                  border: "1px solid #DBDADD",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <input type="text" />
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              fontWeight: "500",
              marginBottom: "5px",
            }}
          >
            Country <span style={{ color: "#FF0000" }}>*</span>
          </div>
          <div className="col-md-12 select-wrapper3">
            <select name="DeviceType" className="" id="MobileNumber">
              <option value="0"></option>
              <option value="1">+91 987 654 5432</option>
            </select>
          </div>
        </div>
      </div>

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
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddOrganization;
