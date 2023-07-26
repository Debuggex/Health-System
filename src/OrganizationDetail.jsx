import "bootstrap/dist/css/bootstrap.min.css";
import "./PatientView.css";
import Calling from "./assets/Calling.png";
import Back from "./assets/Back.png";
import Chat from "./assets/Chat.png";
import Copy from "./assets/copy.png";
import Vitals from "./Vitals";
import BloodPressure from "./BloodPressure";
import Devices from "./Devices";
import Interactions from "./Interactions";
import CarePlan from "./CarePlan";
import { useState } from "react";
import AddDevice from "./AddDevice";

function OrganizationDetail(params) {
  const [addDevice, setAddDevice] = useState(false);
  const addDeviceFunction = () => {
    setAddDevice(!addDevice);
  };

  const [tab, setTab] = useState("Vitals");

  const selectTab = (tab) => {
    setTab(tab);
  };

  let data = [
    { title: "Nature of Business", value: "Name Here" },
    { title: "Phone Number", value: "+92 889 5556 330" },
    { title: "Facility Type", value: "Type" },
    { title: "Facility Name", value: "Name" },
    { title: "Nature of Business", value: "Name Here" },
    { title: "Address Line 1", value: "Address 01" },
    { title: "Address Line 2", value: "Address 02" },
    { title: "City", value: "City" },
    { title: "Zip Code", value: "Zip" },
    { title: "State", value: "State" },
    { title: "Country", value: "Country" },
  ];
   const showOrganization = () => {
     document.getElementById("shadow").style.visibility = "visible";
     document.getElementById("AddOrganization").style.visibility = "visible";
   };

    return (
      <div className="row col-12" id="PatientView" style={{ width: "100%" }}>
        <div className="col-md-12" id="leftView">
          <div className="col-md-12 topContainer normalText" style={{justifyContent:"space-between"}}>
            <span
              style={{
                color: "#929BA6",
                marginRight: "5px",
                cursor: "pointer",
              }}
              onClick={() => {
                params.showOrganization();
              }}
            >
              <img src={Back} alt="" />
            </span>
            
          </div>
          <div className="col-md-4 leftCard">
            <div className="col-md-12">
              <h4>Organization Name</h4>
            </div>
            <div className="col-md-12">
              <p>
                <span style={{ color: "#929BA6" }}>Location</span>
              </p>
            </div>

            <hr />
            <div className="col-md-12">
              <h4>General Info</h4>
            </div>
            <br />
            {data.map((data, key) => (
              <div className="row">
                <div className="col-md-6 pull-left">
                  <p>
                    <span style={{ color: "#929BA6" }}>{data.title}</span>
                  </p>
                </div>
                <div className="col-md-6 cardData">
                  <p>{data.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  
}

export default OrganizationDetail;
