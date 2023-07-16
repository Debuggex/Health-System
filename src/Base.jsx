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
import logo from "./assets/Logo.png"
import billers from "./assets/biller.png";
import billerColor from "./assets/billerColor.png";

import search from "./assets/search-normal.svg";
import profilePic from "./assets/ProfilePic.png";
import notification from "./assets/notification.png";
import settings from "./assets/Setting.png";

import "./App.css";
import Dashboard from "./Dashboard";
import Patient from "./Patient";
import PatientView from "./PatientView";
import AddDevice from "./AddDevice";
import UserList from "./UserList";
import InviteUser from "./InviteUser";
import Organization from "./Oragnization";
import AddOrganization from "./AddOrganization";
import AccountSettings from "./AccountSettings";
import NotificationSetting from "./NotificationSetting";
import PrivacyAndSecurity from "./PrivacyAndSecurity";
import HelpAndSecurity from "./HelpAndSupport";
import Biller from "./Biller";
import BillerReport from "./BillerReport";
import DownloadReportsWarn from "./DownloadReportsWarn";


function Base(params) {

    const[dashboard,setDashboard] = useState(true);
    const[user,setUser] = useState(false);
    const[documents,setDocument] = useState(false);
    const[patients,setPatients] = useState(false);
    const [patientsView, setPatientsView] = useState(false);
    const [accSetting, setaccSetting] = useState(false);
    const [notSetting, setnotSetting] = useState(false);
    const[privacySetting,setPrivacySetting]=useState(false);
    const [helpSetting, sethelpSetting] = useState(false);
    const [biller, setbiller] = useState(false);
    
    
    
    const[popUp,setPopUp] = useState(false);

    let settingMenu = [
      "Account Settings",
      "Notification Settings",
      "Privacy and Security Settings",
      "App Preferences",
      "Help and Support",
    ];
  
    function offSetting() {
        setaccSetting(false);
        setnotSetting(false);
        setPrivacySetting(false);
        sethelpSetting(false);
    }

    function offAll() {
      setDashboard(false);
      setUser(false);
      setDocument(false);
      setPatients(false);
      setbiller(false);
    }

    const activeDashboard=function(){
      offAll();  
      setDashboard(true);
      offSetting();  
    };

    const showPatientView = ()=>{
      setPatientsView(!patientsView);
    }

    const showaSetting=function(param){
      offAll();
      offSetting();

      switch (param) {
        case "Account Settings":
          setaccSetting(true);
          break;
        case "Notification Settings":
          setnotSetting(true);
          break;
        case"Privacy and Security Settings":
          setPrivacySetting(true);
          break;  
        case "Help and Support":
          sethelpSetting(true);
          break;  
        default:
          break;
      }   
    }


    const showPopUp = function(){
      setPopUp(!popUp);
    }

    const activeUser = function () {
      offAll();
      setUser(true);
      offSetting();
    };

    const activeDocument = function () {
      offAll();
      setDocument(true);
      offSetting();
    };

     const activeBiller = function () {
       offAll();
       setbiller(true);
       offSetting();
     };

    const activePatients = function () {
      offAll();
      setPatients(true);
      offSetting();
    };

    function showSetting() {
      if (document.getElementById("SettingsMenu").style.visibility == "hidden") {
        document.getElementById("SettingsMenu").style.visibility = "visible";
        return;
      }
      document.getElementById("SettingsMenu").style.visibility = "hidden";
    }
    


  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        position: "relative",
        height: "100vh",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div
        id="shadow"
        style={{
          position: "absolute",
          width: "100%",
          height: "100vh",
          backgroundColor: "rgba(0,0,0, 0.5)",
          zIndex: "50",
          visibility: "visible",
        }}
      ></div>
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
            padding: "20px 0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "50px",
          }}
        >
          <img src={logo} alt="" width={100} />
        </div>
        <div
          style={{
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
                marginBottom: "10px",
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
                marginBottom: "10px",
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
                marginBottom: "10px",
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
                marginBottom: "10px",
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
                marginBottom: "10px",
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
                marginBottom: "10px",
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

          {!documents && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
                marginBottom: "10px",
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

          {documents && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
                marginBottom: "10px",
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

          {/* Biller Icon */}
          {!biller && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
                marginBottom: "10px",
                position: "relative",
                cursor: "pointer",
              }}
              onClick={() => {
                activeBiller();
              }}
            >
              <img src={billers} alt="" width={25} />
            </div>
          )}

          {biller && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
                marginBottom: "10px",
                position: "relative",
              }}
            >
              <img src={billerColor} alt="" width={25} />
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

          {/* Biller Icon End */}
          <div style={{ marginBottom: "80px" }}></div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              position: "relative",
            }}
          >
            <img src={notification} alt="" width={20} height={20} />
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
            <img src={search} alt="" width={20} height={20} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <img
              src={profilePic}
              style={{ cursor: "pointer" }}
              alt=""
              width={40}
              height={40}
              onClick={() => {
                showSetting();
              }}
            />

            <div
              id="SettingsMenu"
              style={{
                position: "absolute",
                padding: "0 20px",
                backgroundColor: "white",
                display: "flex",
                bottom: "5px",
                flexDirection: "column",
                borderRadius: "10px",
                boxShadow: "0 0 5px 0px rgba(182, 169, 169, 0.25)",
                width: "250px",
                visibility: "hidden",
                left: "70%",
              }}
            >
              {settingMenu.map((data, key) => (
                <div
                  key={key}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    fontSize: "14px",
                    alignItems: "center",
                    width: "100%",
                    borderBottom: "1px solid #DADADA",
                    padding: "10px 0",
                    fontWeight: "600",
                  }}
                  onClick={() => {
                    showaSetting(data);
                  }}
                >
                  {data}
                </div>
              ))}
            </div>
          </div>
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
          id="main-content"
          style={{
            display: "flex",
            padding: "40px 55px",
            backgroundColor: "#F7F9F8",
            overflowY: "scroll",
          }}
        >
          {accSetting && <AccountSettings exit={activeDashboard} />}
          {notSetting && <NotificationSetting exit={activeDashboard} />}
          {privacySetting && <PrivacyAndSecurity exit={activeDashboard} />}
          {helpSetting && <HelpAndSecurity exit={activeDashboard} />}

          {dashboard && <Dashboard />}
          {biller && <BillerReport />}
          {user && !patientsView && (
            <Patient
              showHidePopUp={showPopUp}
              showPatientView={showPatientView}
            />
          )}
          {user && patientsView && (
            <PatientView showPatientView={showPatientView} />
          )}
          {patients && <UserList showHidePopUp={showPopUp} />}
          {documents && <Organization />}
        </div>
      </div>
      {false && (
        <div
          style={{
            position: "absolute",
            width: "80%",
            zIndex: "50",
            top: "1.5%",
            left: "25%",
          }}
        >
          <InviteUser />
        </div>
      )}
      {false && (
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: "100%",
            zIndex: "50",
            flexDirection: "column",
            alignItems: "center",
            top: "20%",
          }}
        >
          <AddOrganization />
        </div>
      )}
      {true && (
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: "100%",
            zIndex: "50",
            flexDirection: "column",
            alignItems: "center",
            top: "1%",
          }}
        >
          <DownloadReportsWarn />
        </div>
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
