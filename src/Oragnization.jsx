import { useState } from "react";
import swap from "./assets/Swap.png";
import like from "./assets/like.png";
import Calling from "./assets/Calling.png";
import Chat from "./assets/Chat.png";
import dots from "./assets/dots.png";
import trash from "./assets/trash.png";
import edit from "./assets/edit-2.png";
import archive from "./assets/archive.png";
import Tick from "./assets/TickSquare.png";
import Cross from "./assets/Group.png";
import heart from "./assets/heart-attack.png";
import bp from "./assets/bp.png";
import lungs from "./assets/lungs.png";
import bodyScale from "./assets/body-scale.png";
import temperature from "./assets/temperature.png";
import arrowDown from "./assets/Arrow - Down 2.png";
import Upload from "./assets/Upload.png";
import "./Patients.css";
import { useEffect } from "react";
import InviteUser from "./InviteUser";

function Organization(props) {
  const [allCheck, setAllCheck] = useState(false);

  let data = [
    {
      name: "Thomas Schnieder",
      Location: "Location Name",
    },
    {
      name: "Millie Bell",
      Location: "Location Name",
    },
    {
      name: "Jordan Antoine",
      Location: "Location Name",
    },
    {
      name: "Mildred Pearson",
      Location: "Location Name",
    },
    {
      name: "Sai Kapur",
      Location: "Location Name",
    },
    {
      name: "Gabin Martinez",
      Location: "Location Name",
    },
    {
      name: "Aimee Brown",
      Location: "Location Name",
    },
    {
      name: "Mason Walker",
      Location: "Location Name",
    },
    {
      name: "Sophie Pohl",
      Location: "Location Name",
    },
  ];

  const showFilterPop = function (popUpName) {
    if (document.getElementById(popUpName).style.visibility == "visible") {
      document.getElementById(popUpName).style.visibility = "hidden";
      return;
    }
    document.getElementById(popUpName).style.visibility = "visible";
  };
  
    const showOrganization = () => {
      document.getElementById("shadow").style.visibility = "visible";
      document.getElementById("AddOrganization").style.visibility = "visible";
    }; 

  const showPopUp = function (index) {
    if (
      document.getElementById("popUp" + index).style.visibility == "visible"
    ) {
      document.getElementById("popUp" + index).style.visibility = "hidden";
      return;
    }
    document.getElementById("popUp" + index).style.visibility = "visible";
  };

  const showPop = function () {
    showHidePopUp();
  };
  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "50%" }}></div>
        <button className="primaryButton" onClick={() => showOrganization()}>
          Add Organization
        </button>
      </div>
      <div className="list" style={{ height: "85vh" }}>
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
            <div className="checkbox-wrapper">
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

                width: "45%",
              }}
            >
              Oraganization Name
            </div>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "600",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "47%",
              }}
            >
              Oraganization Location
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

                  <div id="name" className="list-name" style={{ width: "47%" }}>
                    <div>{datas.name}</div>
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      width: "47%",
                    }}
                  >
                    {datas.Location}
                  </div>
                  <div
                    style={{
                      width: "5%",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        position: "relative",
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <img
                        style={{ cursor: "pointer" }}
                        src={dots}
                        alt=""
                        width={24}
                        height={24}
                        onClick={() => showPopUp(index)}
                      />
                      <div
                        id={`popUp${index}`}
                        key={index}
                        style={{
                          position: "absolute",
                          padding: "20px 20px",
                          backgroundColor: "white",
                          display: "flex",
                          top: "25px",
                          flexDirection: "column",
                          borderRadius: "10px",
                          boxShadow: "0 0 5px 0px rgba(182, 169, 169, 0.25)",
                          width: "150px",
                          visibility: "hidden",
                          zIndex: `${index + 5}`,
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            fontSize: "14px",
                            alignItems: "center",
                            width: "100%",
                            borderBottom: "2px solid #DADADA",
                            padding: "5px 0",
                          }}
                        >
                          <img
                            src={trash}
                            alt=""
                            width="15px"
                            height="15px"
                            style={{ marginRight: "5px", color: "#FF0000" }}
                          />
                          Delete
                        </div>

                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            fontSize: "14px",
                            alignItems: "center",
                            width: "100%",
                            borderBottom: "2px solid #DADADA",
                            padding: "5px 0",
                          }}
                        >
                          <img
                            src={archive}
                            alt=""
                            width="15px"
                            height="15px"
                            style={{ marginRight: "5px" }}
                          />
                          Archive
                        </div>

                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            fontSize: "14px",
                            alignItems: "center",
                            width: "100%",
                            borderBottom: "2px solid #DADADA",
                            padding: "5px 0",
                            cursor: "pointer",
                            zIndex: "60",
                          }}
                          onClick={() => props.showHidePopUp()}
                        >
                          <img
                            src={edit}
                            alt=""
                            width="15px"
                            height="15px"
                            style={{ marginRight: "5px" }}
                          />
                          Edit
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Organization;
