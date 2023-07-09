import "bootstrap/dist/css/bootstrap.min.css";
import "./PatientView.css";
import Calling from "./assets/Calling.png";
import Chat from "./assets/Chat.png";
import Copy from "./assets/copy.png";
import Vitals from "./Vitals";
import BloodPressure from "./BloodPressure";
import Devices from "./Devices";
import Interactions from "./Interactions";
import CarePlan from "./CarePlan";
import { useState } from "react";
import AddDevice from "./AddDevice";



function PatientView(params) {

  const[addDevice,setAddDevice] = useState(false);
  const addDeviceFunction = ()=>{
    setAddDevice(!addDevice);
  }

  const [tab, setTab] = useState("Vitals");

  const selectTab = (tab)=>{
    setTab(tab);
  }

  if(!addDevice){
  return (
    <div className="row col-12" id="PatientView" style={{ width: "100%" }}>
      <div className="col-md-4" id="leftView">
        <div className="col-md-12 topContainer normalText">
          <span
            style={{ color: "#929BA6", marginRight: "5px", cursor: "pointer" }}
            onClick={() => {
              params.showPatientView();
            }}
          >
            Patients List{" "}
          </span>
          &gt; &gt; Patients View
        </div>
        <div className="col-md-12 leftCard">
          <div className="col-md-12">
            <h4>Jennifer Parkins</h4>
          </div>
          <div className="col-md-12">
            <p>
              <span style={{ color: "#929BA6" }}>Female</span>
            </p>
          </div>
          <div className="row">
            <div className="col-md-2">
              <button className="secondaryButton">
                <img src={Calling} alt="" width={18} height={18} />
              </button>
            </div>
            <div className="col-md-2">
              <button className="secondaryButton">
                <img src={Chat} alt="" width={18} height={18} />
              </button>
            </div>
            <div className="col-md-8">
              <button className="secondaryButton">Download Record</button>
            </div>
          </div>
          <div className="col-md-12">
            <h4>General Info</h4>
          </div>
          <div className="row">
            <div className="col-md-6 pull-left">
              <p>
                <span style={{ color: "#929BA6" }}>Phone Number</span>
              </p>
            </div>
            <div className="col-md-6 cardData">
              <p>+1 987 654 3210</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 pull-left">
              <p>
                <span style={{ color: "#929BA6" }}>Email</span>
              </p>
            </div>
            <div className="col-md-6 cardData">
              <p>jenniferparkinson@gmail.com</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 pull-left">
              <p>
                <span style={{ color: "#929BA6" }}>Date of birth</span>
              </p>
            </div>
            <div className="col-md-6 cardData">
              <p>15 May 1959 (76 y.o.)</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 pull-left">
              <p>
                <span style={{ color: "#929BA6" }}>Location</span>
              </p>
            </div>
            <div className="col-md-6 cardData">
              <p>Miami, Florida</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 pull-left">
              <p>
                <span style={{ color: "#929BA6" }}>Devices</span>
              </p>
            </div>
            <div className="col-md-6 cardData">
              <p>
                Blood Glucose Monitor{" "}
                <span style={{ cursor: "pointer" }}>
                  <img src={Copy} alt="" width={16} height={16} />
                </span>
              </p>
            </div>
          </div>
          <hr />
          <div className="col-md-12">
            <h4>Patient Info</h4>
          </div>
          <div className="col-md-12">
            <p style={{ color: "#929BA6" }}>Organization Name</p>
          </div>
          <div className="col-md-12">
            <p>Medical Associates of Highland</p>
          </div>
          <div className="row">
            <div className="col-md-6 pull-left">
              <p>
                <span style={{ color: "#929BA6" }}>Insurance</span>
              </p>
            </div>
            <div className="col-md-6 cardData">
              <p>State Farm </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 pull-left">
              <p>
                <span style={{ color: "#929BA6" }}>Insurance #</span>
              </p>
            </div>
            <div className="col-md-6 cardData">
              <p>223-3456785</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-8" id="RightView">
        <div className="col-md-12 topContainer rightTop">
          <div className="col-md-8 row">
            <div
              className="col-md-2 normalText"
              style={{
                cursor: "pointer",
                color: tab == "Vitals" ? "#7D9FEF" : "#000",
              }}
              onClick={() => {
                selectTab("Vitals");
              }}
            >
              Vitals
            </div>
            <div
              className="col-md-3 normalText"
              style={{
                cursor: "pointer",
                color: tab == "Interactions" ? "#7D9FEF" : "#000",
              }}
              onClick={() => {
                selectTab("Interactions");
              }}
            >
              Interactions
            </div>
            <div
              className="col-md-3 normalText"
              style={{
                cursor: "pointer",
                color: tab == "CarePlan" ? "#7D9FEF" : "#000",
              }}
              onClick={() => {
                selectTab("CarePlan");
              }}
            >
              Care Plan
            </div>
            <div
              className="col-md-3 normalText"
              style={{
                cursor: "pointer",
                color: tab == "Devices" ? "#7D9FEF" : "#000",
              }}
              onClick={() => {
                selectTab("Devices");
              }}
            >
              Devices
            </div>
          </div>
          <div
            className="col-md-2 normalText"
            style={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "flex-end",
              color: "#1FBE05",
            }}
          >
            1:03
          </div>
        </div>
        {tab == "Vitals" && <Vitals />}
        {tab == "Devices" && <Devices addDeviceFun={addDeviceFunction} />}
        {tab == "Interactions" && <Interactions />}
        {tab == "CarePlan" && <CarePlan />}
      </div>
    </div>
  );}
  if(addDevice){
    return <AddDevice addDeviceFun={addDeviceFunction} />;
  }
}

export default PatientView;
