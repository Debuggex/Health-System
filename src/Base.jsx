import { useState } from "react";
import graphIcon from "./assets/GraphColor.svg";
import profile from "./assets/Profile.svg";
import people from "./assets/People.svg";
import documentIcon from "./assets/Document.png";
import Graph from "./assets/Graph.png";
import profileColor from "./assets/profileColor.png";
import peopleColor from "./assets/peopleColor.png";
import documentColor from "./assets/documentColor.png";
import logo from "./assets/Logo.png";
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
import DownloadReport from "./DownloadReport";
import Calendar from "./Calendar";
import Search from "./Search";
import Filter from "./Filter";
import EditUser from "./EditUser";
import OrganizationDetail from "./OrganizationDetail";

function Base(params) {
  const [dashboard, setDashboard] = useState(true);
  const [user, setUser] = useState(false);
  const [documents, setDocument] = useState(false);
  const [patients, setPatients] = useState(false);
  const [patientsView, setPatientsView] = useState(false);
  const [accSetting, setaccSetting] = useState(false);
  const [notSetting, setnotSetting] = useState(false);
  const [privacySetting, setPrivacySetting] = useState(false);
  const [helpSetting, sethelpSetting] = useState(false);
  const [biller, setbiller] = useState(false);
  const [billerReport, setBillerReport] = useState(false);
  const [organizationDetial,setOrganizationDetail] = useState(false);
  

  const [popUp, setPopUp] = useState(false);

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

  const activeDashboard = function () {
    offAll();
    setDashboard(true);
    offSetting();
  };

  const showPatientView = () => {
    setPatientsView(!patientsView);
  };

  function showBillerReport() {
    setBillerReport(!billerReport);
  }

  const showSearch = () => {
    document.getElementById("shadow").style.visibility = "visible";
    document.getElementById("Search").style.visibility = "visible";
  };

  function hideAllPopUps() {
    document.getElementById("shadow").style.visibility = "hidden";
    document.getElementById("Search").style.visibility = "hidden";
    document.getElementById("AddOrganization").style.visibility = "hidden";
    //  inviteUser
    document.getElementById("inviteUser").style.visibility = "hidden";
    // DownloadReportsWarn
    document.getElementById("DownloadReportsWarn").style.visibility = "hidden";
    // DownloadReport
    document.getElementById("DownloadReport").style.visibility = "hidden";
    // Calendar
    document.getElementById("Calendar").style.visibility = "hidden";
    // Filter
    document.getElementById("Filter").style.visibility = "hidden";
    // Edit User
    document.getElementById("EditUser").style.visibility="hidden";
  }

  const showaSetting = function (param) {
    offAll();
    offSetting();

    switch (param) {
      case "Account Settings":
        setaccSetting(true);
        break;
      case "Notification Settings":
        setnotSetting(true);
        break;
      case "Privacy and Security Settings":
        setPrivacySetting(true);
        break;
      case "Help and Support":
        sethelpSetting(true);
        break;
      default:
        break;
    }
  };

  const showPopUp = function () {
    setPopUp(!popUp);
  };

  const showOrganization = function(){
    setOrganizationDetail(!organizationDetial)
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
    setBillerReport(false);
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
          visibility: "hidden",
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
              <img src={documentIcon} alt="" width={25} />
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
              <img src={documentColor} alt="" width={25} />
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
            <img
              style={{ cursor: "pointer" }}
              onClick={() => {
                showSearch();
              }}
              src={search}
              alt=""
              width={20}
              height={20}
            />
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
          {biller && billerReport && (
            <BillerReport showBillerReport={showBillerReport} />
          )}
          {biller && !billerReport && (
            <Biller showBillerReport={showBillerReport} />
          )}
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
          {documents && !organizationDetial && (
            <Organization showOrganization={showOrganization} />
          )}
          {documents && organizationDetial && (
            <OrganizationDetail showOrganization={showOrganization} />
          )}
        </div>
      </div>
      <div
        id="inviteUser"
        style={{
          position: "absolute",
          width: "80%",
          zIndex: "50",
          top: "1.5%",
          left: "25%",
          visibility: "hidden",
        }}
      >
        <InviteUser exit={hideAllPopUps} />
      </div>

      <div
        id="AddOrganization"
        style={{
          position: "absolute",
          display: "flex",
          width: "100%",
          zIndex: "50",
          flexDirection: "column",
          alignItems: "center",
          top: "2%",
          visibility: "hidden",
        }}
      >
        <AddOrganization exit={hideAllPopUps} />
      </div>

      <div
        id="EditUser"
        style={{
          position: "absolute",
          display: "flex",
          width: "100%",
          zIndex: "50",
          flexDirection: "column",
          alignItems: "center",
          top: "3%",
          visibility: "hidden",
        }}
      >
        <EditUser exit={hideAllPopUps} />
      </div>

      <div
        id="DownloadReportsWarn"
        style={{
          position: "absolute",
          display: "flex",
          width: "100%",
          zIndex: "50",
          flexDirection: "column",
          alignItems: "center",
          top: "20%",
          visibility: "hidden",
        }}
      >
        <DownloadReportsWarn exit={hideAllPopUps} />
      </div>

      <div
        id="DownloadReport"
        style={{
          position: "absolute",
          display: "flex",
          width: "100%",
          zIndex: "50",
          flexDirection: "column",
          alignItems: "center",
          top: "20%",
          visibility: "hidden",
        }}
      >
        <DownloadReport exit={hideAllPopUps} />
      </div>

      <div
        id="Calendar"
        style={{
          position: "absolute",
          display: "flex",
          width: "100%",
          zIndex: "50",
          flexDirection: "column",
          alignItems: "center",
          top: "15%",
          visibility: "hidden",
        }}
      >
        <Calendar exit={hideAllPopUps} />
      </div>

      <div
        id="Search"
        style={{
          position: "absolute",
          display: "flex",
          width: "100%",
          zIndex: "50",
          flexDirection: "column",
          alignItems: "center",
          top: "20%",
          visibility: "hidden",
        }}
      >
        <Search exit={hideAllPopUps} />
      </div>
      <div
        id="Filter"
        style={{
          position: "absolute",
          display: "flex",
          width: "100%",
          zIndex: "50",
          flexDirection: "column",
          alignItems: "center",
          top: "20%",
          visibility: "hidden",
        }}
      >
        <Filter exit={hideAllPopUps} />
      </div>
    </div>
  );
}

export default Base;
