import { useState } from "react";
import graphIcon from "./assets/GraphColor.svg";
import profile from "./assets/Profile.svg";
import people from "./assets/People.svg";
import documentIcon from "./assets/Document.svg";
import Graph from "./assets/Graph.png";
import profileColor from "./assets/profileColor.png";
import peopleColor from "./assets/peopleColor.png";
import documentColor from "./assets/documentColor.png";
import cross from "./assets/cross.png";

import search from "./assets/search-normal.svg";
import profilePic from "./assets/ProfilePic.png";
import notification from "./assets/notification.png";

import "./App.css";
import Dashboard from "./Dashboard";
import Patient from "./Patient";
import PatientView from "./PatientView";

function Base(params) {

    const[dashboard,setDashboard] = useState(true);
    const[user,setUser] = useState(false);
    const[document,setDocument] = useState(false);
    const[patients,setPatients] = useState(false);
    const[popUp,setPopUp] = useState(false);

    const activeDashboard=function(){
        setDashboard(true);
        setUser(false);
        setDocument(false);
        setPatients(false);       
    };

    const showPopUp = function(){
      setPopUp(!popUp);
    }

    const activeUser = function () {
      setDashboard(false);
      setUser(true);
      setDocument(false);
      setPatients(false);
    };

    const activeDocument = function () {
      setDashboard(false);
      setUser(false);
      setDocument(true);
      setPatients(false);
    };

    const activePatients = function () {
      setDashboard(false);
      setUser(false);
      setDocument(false);
      setPatients(true);
    };
    


  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        position: "relative",
        height: "100vh",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "10%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#FFF",
        }}
      >
        <div
          style={{
            height: "15%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "50px",
          }}
        >
          <p style={{ fontWeight: "600" }}>Medkick</p>
        </div>
        <div
          style={{
            height: "90%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {dashboard && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
                marginBottom: "20px",
                position: "relative",
              }}
            >
              <img src={graphIcon} alt="" width={20} />
              <div
                style={{
                  position: "absolute",
                  height: "10%",
                  padding: "15px 3px",
                  borderRadius: "50px",
                  backgroundColor: "#7D9FEF",
                  left: "97%",
                }}
              ></div>
            </div>
          )}

          {!dashboard && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
                marginBottom: "20px",
                position: "relative",
                cursor: "pointer",
              }}
              onClick={() => {
                activeDashboard();
              }}
            >
              <img src={Graph} alt="" width={20} />
            </div>
          )}

          {!user && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
                marginBottom: "20px",
                flexDirection: "row",
                position: "relative",
                cursor: "pointer",
              }}
              onClick={() => {
                activeUser();
              }}
            >
              <img src={profile} alt="" width={15} />
            </div>
          )}
          {user && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
                marginBottom: "20px",
                flexDirection: "row",
                position: "relative",
              }}
            >
              <img src={profileColor} alt="" width={15} />
              <div
                style={{
                  position: "absolute",
                  height: "10%",
                  padding: "15px 3px",
                  borderRadius: "50px",
                  backgroundColor: "#7D9FEF",
                  left: "97%",
                }}
              ></div>
            </div>
          )}
          {!patients && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
                marginBottom: "20px",
                position: "relative",
                cursor: "pointer",
              }}
              onClick={() => {
                activePatients();
              }}
            >
              <img src={people} alt="" width={25} />
            </div>
          )}
          {patients && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
                marginBottom: "20px",
                position: "relative",
              }}
            >
              <img src={peopleColor} alt="" width={25} />
              <div
                style={{
                  position: "absolute",
                  height: "10%",
                  padding: "15px 3px",
                  borderRadius: "50px",
                  backgroundColor: "#7D9FEF",
                  left: "97%",
                }}
              ></div>
            </div>
          )}

          {!document && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
                marginBottom: "20px",
                position: "relative",
                cursor: "pointer",
              }}
              onClick={() => {
                activeDocument();
              }}
            >
              <img src={documentIcon} alt="" width={20} />
            </div>
          )}

          {document && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
                marginBottom: "20px",
                position: "relative",
              }}
            >
              <img src={documentColor} alt="" width={20} />
              <div
                style={{
                  position: "absolute",
                  height: "10%",
                  padding: "15px 3px",
                  borderRadius: "50px",
                  backgroundColor: "#7D9FEF",
                  left: "97%",
                }}
              ></div>
            </div>
          )}
        </div>
      </div>
      <div
        style={{
          width: "90%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#F7F9F8",
        }}
      >
        <div
          id="header"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            backgroundColor: "white",
          }}
        >
          <div
            id="searchbar"
            style={{
              width: "50%",
              display: "flex",
              padding: "20px 40px",
            }}
          >
            <div
              style={{
                width: "50%",
                display: "flex",
                flexDirection: "row",
                padding: "10px 15px",
                backgroundColor: "#F3F5F4",
                borderRadius: "10px",
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
                <img src={search} alt="" width="90%" />
              </div>
              <input
                type="text"
                style={{ background: "none", border: "none", width: "100%" }}
                placeholder="Search"
              />
            </div>
          </div>
          <div
            id="profilePic"
            style={{
              width: "50%",
              display: "flex",
              padding: "20px 40px",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                cursor: "pointer",
                marginRight: "15px",
              }}
            >
              <img src={notification} alt="" width="70%" />
              <div
                style={{
                  position: "absolute",
                  padding: "5px",
                  backgroundColor: "#FF0000",
                  borderRadius: "50px",
                  border: "2px solid #FFF",
                  bottom: "50%",
                  left: "50%",
                }}
              ></div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "10px",
                }}
              >
                <img src={profilePic} alt="" width="70%" />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "500",
                }}
              >
                Sadik
              </div>
            </div>
          </div>
        </div>
        <div
          id="main-content"
          style={{
            display: "flex",
            padding: "55px",
            backgroundColor: "#F7F9F8",
          }}
        >
          {dashboard && <Dashboard />}
          {/* {user && <Patient showHidePopUp={showPopUp} />} */}
          {user && <PatientView/>}
        </div>
      </div>
      {popUp && (
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100vh",
            backgroundColor: "rgba(0,0,0, 0.5)",
            zIndex: "50",
          }}
        ></div>
      )}
      {/* Edit Pop Up Start */}
      {popUp && (
        <div
          id="PatientEditPopUp"
          style={{
            display: "flex",
            position: "absolute",
            width: "70vw",
            top: "5%",
            borderRadius: "20px",
            backgroundColor: "white",
            zIndex: "51",
            flexDirection: "column",
            padding: "40px",
          }}
        >
          {/* Edit Pop Up Header */}
          <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
            <div style={{ width: "50%", fontSize: "24px", fontWeight: "600" }}>
              Edit User
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
              <img src={cross} alt="" width="18px" height="18px" />
            </div>
          </div>
          <br />
          <hr color="" style={{ width: "100%", color: "#DBDADD" }} />
          <br />
          <div
            style={{ fontSize: "14px", fontWeight: "500", color: "#929BA6" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque tortor risus, euismod a justo quis, pretium bibe ndum
            risus. Pellentesque sem eros, porttitor a ultricies id, consequat ut
            ex. Praesent odio ligula, gravida at pretium at, tempus sit amet
            felis.{" "}
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
            <div style={{ width: "45%" }}>
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
                    fontSize: "16px",
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
                width: "45%",
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
                    fontSize: "16px",
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
                fontSize: "16px",
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
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <div style={{ width: "45%" }}>
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
                    fontSize: "16px",
                    fontWeight: "500",
                    marginBottom: "15px",
                  }}
                >
                  Adherents
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
                width: "45%",
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
                    fontSize: "16px",
                    fontWeight: "500",
                    marginBottom: "15px",
                  }}
                >
                  Readings
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
                fontSize: "16px",
                fontWeight: "500",
                marginBottom: "15px",
              }}
            >
              Location
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
          {/* Bottom Buttons */}
          <br />
          <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
            <div
              style={{
                width: "50%",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
              }}
              onClick={() => showPopUp()}
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
              <div style={{ width: "50%" }}>
                <button
                  type="submit"
                  className="primaryButton"
                  onClick={() => showPopUp()}
                >
                  Send Invitation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Edit Pop Up End */}
    </div>
  );
}

export default Base;
