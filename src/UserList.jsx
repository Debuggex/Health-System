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

function UserList(props) {
  const [allCheck, setAllCheck] = useState(false);

  let data = [
    {
      name: "Thomas Schnieder",
      heart: 120,
      BP: 120,
      Lungs: "79%",
      bodyScale: 120,
      temperature: 104,
      Readings: 112,
      LastLogin: "Feb 22,2022",
    },
    {
      name: "Millie Bell",
      heart: 120,
      BP: 120,
      Lungs: "79%",
      bodyScale: 120,
      temperature: 104,
      Readings: 49,
      LastLogin: "Feb 22,2022",
    },
    {
      name: "Jordan Antoine",
      heart: 120,
      BP: 120,
      Lungs: "79%",
      bodyScale: 120,
      temperature: 104,
      Readings: 49,
      LastLogin: "Feb 22,2022",
    },
    {
      name: "Mildred Pearson",
      heart: 120,
      BP: 120,
      Lungs: "79%",
      bodyScale: 120,
      temperature: 104,
      Readings: 112,
      LastLogin: "Feb 22,2022",
    },
    {
      name: "Sai Kapur",
      heart: 120,
      BP: 120,
      Lungs: "79%",
      bodyScale: 120,
      temperature: 104,
      Readings: 49,
      LastLogin: "Feb 22,2022",
    },
    {
      name: "Gabin Martinez",
      heart: 120,
      BP: 120,
      Lungs: "79%",
      bodyScale: 120,
      temperature: 104,
      Readings: 112,
      LastLogin: "Feb 22,2022",
    },
    {
      name: "Aimee Brown",
      heart: 120,
      BP: 120,
      Lungs: "79%",
      bodyScale: 120,
      temperature: 104,
      Readings: 112,
      LastLogin: "Feb 22,2022",
    },
    {
      name: "Mason Walker",
      heart: 120,
      BP: 120,
      Lungs: "79%",
      bodyScale: 120,
      temperature: 104,
      Readings: 112,
      LastLogin: "Feb 22,2022",
    },
    {
      name: "Sophie Pohl",
      heart: 120,
      BP: 120,
      Lungs: "79%",
      bodyScale: 120,
      temperature: 104,
      Readings: 49,
      LastLogin: "Feb 22,2022",
    },
  ];

  const showFilterPop = function (popUpName) {
    if (document.getElementById(popUpName).style.visibility == "visible") {
      document.getElementById(popUpName).style.visibility = "hidden";
      return;
    }
    document.getElementById(popUpName).style.visibility = "visible";
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
    <div className="list">
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

              width: "40%",
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
              width: "20%",
            }}
          >
            Role{" "}
          </div>
          <div
            style={{
              fontSize: "16px",
              fontWeight: "600",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "20%",
            }}
          >
            Accrues Time{" "}
          </div>
          <div
            style={{
              fontSize: "16px",
              fontWeight: "600",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "20%",
            }}
          >
            Last Login
          </div>
          <div
            style={{
              fontSize: "16px",
              fontWeight: "600",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
              width: "5%",
            }}
          >
            <span
              style={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <img src={dots} alt="" width={24} height={24} />
            </span>
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

                <div id="name" className="list-name" style={{ width: "40%" }}>
                  <div>{datas.name}</div>
                  <div className="icon-text">jordanantoine@gmail.com</div>
                </div>
                <div id="devices" className="devices" style={{ width: "20%" }}>
                  {/* Select Role */}
                  <div className="row col-md-8">
                    <div className="col-md-12 select-wrapper2">
                      <select
                        name="MobileNumber"
                        className=""
                        id="MobileNumber"
                        style={{ borderRadius: "50px", padding: "8px 30px" }}
                      >
                        <option value="0">Admin</option>
                        <option value="1">User</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="readings">
                  {datas.Readings > 100 && <img src={Tick} />}
                  {!(datas.Readings > 100) && <img src={Cross} />}
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    width: "20%",
                  }}
                >
                  {datas.LastLogin}
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
  );
}

export default UserList;
