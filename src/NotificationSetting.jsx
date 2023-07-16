import { useState } from "react";
import "./settings.css";
import profilePic from "./assets/image.png";
import picEdit from "./assets/picEdit.png";

function NotificationSetting(props) {
  const [updateState, setState] = useState(false);

  const [data, setData] = useState([
    { type: "Notifications", email: false, desktop: true },
    { type: "Message", email: true, desktop: false },
    { type: "Updates", email: true, desktop: true },
    { type: "Events", email: false, desktop: true },
  ]);

  function setEmail(index) {
    setData(
      data.map((datas, key) =>
        key == index
          ? {
              ...datas,
              email: !datas.email,
            }
          : datas
      )
    );
  }

  function setDesktop(index) {
    setData(
      data.map((datas, key) =>
        key == index
          ? {
              ...datas,
              desktop: !datas.desktop,
            }
          : datas
      )
    );
  }
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
            Notification Settings
          </div>
        </div>
      </div>
      <br />
      <div className="settingContainer" style={{ padding: "20px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: "10px",
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              fontWeight: "500",
              color: "#929BA6",
            }}
          >
            For important updates regarding your activity, certain notifications
            cannot be disabled.
          </div>
        </div>
        <br />
        <div className="text-container">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "60%",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                fontSize: "14px",
                fontWeight: "700",
              }}
            >
              Type
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "20%",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                fontSize: "14px",
                fontWeight: "700",
              }}
            >
              Email
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "20%",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                fontSize: "14px",
                fontWeight: "700",
              }}
            >
              Desktop
            </div>
          </div>
        </div>
        {data.map((data, key) => (
          <div className="text-container" key={key}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "60%",
                marginBottom: "10px",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                {data.type}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "20%",
                marginBottom: "10px",
              }}
            >
              <div className="checkbox-wrapper">
                <label
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <input
                    type="checkbox"
                    className={data.email ? "checked" : "unChecked"}
                    onChange={() => {
                      setEmail(key);
                    }}
                  />
                </label>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "20%",
                marginBottom: "20px",
              }}
            >
              <div className="checkbox-wrapper">
                <label
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <input
                    type="checkbox"
                    className={data.desktop ? "checked" : "unChecked"}
                    onChange={() => {
                      setDesktop(key);
                    }}
                  />
                </label>
              </div>
            </div>
          </div>
        ))}

        <hr />
        <div
          style={{
            fontSize: "14px",
            fontWeight: "700",
          }}
        >
          REAL-TIME NOTIFICATIONS
        </div>
        <br />
        <div className="switchContainer">
          <div className="switchBlock">
            Enable/disable real-time notifications
          </div>
          <div
            className="switchBlock"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>
        </div>
        <div className="switchContainer">
          <div className="switchBlock">Enable/disable sound</div>
          <div
            className="switchBlock"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>
        </div>
        <div className="text-container">
          <div
            style={{
              width: "50%",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              display:"flex",
              alignItems:"center",
              margin: "20px 0 0 0",
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
              margin: "20px 0 0 0",
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

export default NotificationSetting;
