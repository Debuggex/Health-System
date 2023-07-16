import { useState } from "react";
import "./settings.css";
import profilePic from "./assets/image.png";
import picEdit from "./assets/picEdit.png";


function AccountSettings(props) {
  return (
    <div>
      <div className="filter-container">
        <div
          style={{ width: "25%", marginRight: "20px", position: "relative" }}
        >
          <div
            style={{
              fontSize: "16px",
              fontWeight: "600",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",

              width: "100%",
            }}
          >
            Account Settings
          </div>
        </div>
      </div>
      <br />
      <div className="settingContainer">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "10px",
            position: "relative",
          }}
        >
          <img src={profilePic} alt="" width={100} height={100} />
          <div
            style={{
              position: "absolute",
              padding: "5px",
              borderRadius: "50px",
              left: "52%",
              top: "50%",
              cursor: "pointer",
            }}
          >
            <img src={picEdit} alt="" width={35} height={35} />
          </div>
        </div>
        <br />
        <div className="text-container">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
              marginBottom: "10px",
              margin: "20px",
            }}
          >
            <div
              style={{
                fontSize: "14px",
                fontWeight: "500",
                color: "#929BA6",
              }}
            >
              Full Name
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
              marginBottom: "10px",
              margin: "20px",
            }}
          >
            <div
              style={{
                fontSize: "14px",
                fontWeight: "500",
                color: "#929BA6",
              }}
            >
              Email Address
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
        <div className="text-container">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
              marginBottom: "10px",
              margin: "20px",
            }}
          >
            <div
              style={{
                fontSize: "14px",
                fontWeight: "500",
                color: "#929BA6",
              }}
            >
              Password
            </div>
            <div
              style={{
                border: "1px solid #DBDADD",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <input type="password" />
            </div>
          </div>
        </div>
        <div
          style={{
            fontSize: "14px",
            fontWeight: "500",
            color: "#929BA6",
            margin: "20px",
          }}
        >
          Account created : 23 June 2023
        </div>
        <br />
        <div className="text-container">
          <div
            style={{
              width: "50%",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              margin: "20px",
            }}
            onClick={() => props.exit()}
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
              margin: "20px",
            }}
          >
            <div>
              <button
                type="submit"
                className="primaryButton"
                onClick={() => props.exit()}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountSettings;
