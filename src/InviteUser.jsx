import "bootstrap/dist/css/bootstrap.min.css";

import cross from "./assets/cross.png";
import { useState } from "react";

function InviteUser(params) {
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
          Add User
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => params.exit()()}
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

      {/* First Row */}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <div style={{ width: "48%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                fontSize: "14px",
                fontWeight: "500",
                marginBottom: "15px",
              }}
            >
              First Name <span style={{ color: "#FF0000" }}>*</span>
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
        <div
          style={{
            width: "48%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                fontSize: "14px",
                fontWeight: "500",
                marginBottom: "15px",
              }}
            >
              Last Name <span style={{ color: "#FF0000" }}>*</span>
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
          width: "100%",
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            fontSize: "14px",
            fontWeight: "500",
            marginBottom: "15px",
          }}
        >
          Email <span style={{ color: "#FF0000" }}>*</span>
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

      {/* Third Row */}

      <div
        style={{
          width: "100%",
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            fontSize: "14px",
            fontWeight: "700",
          }}
        >
          Rules
        </div>
        <div
          id="name"
          className="list-name"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            marginBottom: "10px",
          }}
        >
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
          <div>
            <div style={{ fontSize: "14px" }}>View Data</div>
            <div className="icon-text" style={{ fontSize: "14px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </div>
          </div>
        </div>

        <div
          id="name"
          className="list-name"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            marginBottom: "10px",
          }}
        >
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
          <div>
            <div style={{ fontSize: "14px" }}>Admin</div>
            <div className="icon-text" style={{ fontSize: "14px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </div>
          </div>
        </div>
        <div
          id="name"
          className="list-name"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            marginBottom: "10px",
          }}
        >
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
          <div>
            <div style={{ fontSize: "14px" }}>Patient Management</div>
            <div className="icon-text" style={{ fontSize: "14px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </div>
          </div>
        </div>
      </div>

      {/* Forth Row */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            fontSize: "14px",
            fontWeight: "700",
            marginBottom: "15px",
          }}
        >
          Accrues time towards CPT Codes
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            id="name"
            className="list-name"
            style={{
              width: "20%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              marginBottom: "10px",
            }}
          >
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
            <div>
              <div>No</div>
            </div>
          </div>
          <div
            id="name"
            className="list-name"
            style={{
              width: "20%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              marginBottom: "10px",
            }}
          >
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
            <div>
              <div>Yes</div>
            </div>
          </div>
        </div>
        <div style={{ fontSize: "12px", fontWeight: "500", color: "#929BA6" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          tortor risus, euismod a justo quis, pretium bibe ndum risus.
          Pellentesque sem eros, porttitor a ultricies id, consequat ut ex.
          Praesent odio ligula, gravida at pretium at, tempus sit amet felis.{" "}
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
            Send Invitation
          </button>
        </div>
      </div>
    </div>
  );
}

export default InviteUser;
