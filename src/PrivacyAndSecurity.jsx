import { useState } from "react";
import "./settings.css";

function PrivacyAndSecurity(props) {
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
            Privacy and Security Settings
          </div>
        </div>
      </div>
      <br />
      <div className="settingContainer" style={{ padding: "20px" }}>
        <div>
          <div className="switchContainer">
            <div className="switchBlock">Data Sharing</div>
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
          <div
            style={{
              fontSize: "14px",
              fontWeight: "500",
              color: "#929BA6",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sed massa nunc. Cras aliquet mauris ante. Aenean semper quis leo
            quis ornare. Vivamus id neque elit. Cras quis elementum orci. Sed in
            elit vel dui maximus tristique. Donec erat nibh, feugiat id nisi sit
            amet, mollis lobortis velit. Vestibulum sagittis turpis nec quam
            viverra.
          </div>
          <hr />
        </div>
        <div>
          <div className="switchContainer">
            <div className="switchBlock">Two-factor authentication</div>
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
          <div
            style={{
              fontSize: "14px",
              fontWeight: "500",
              color: "#929BA6",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sed massa nunc. Cras aliquet mauris ante. Aenean semper quis leo
            quis ornare. Vivamus id neque elit. Cras quis elementum orci. Sed in
            elit vel dui maximus tristique. Donec erat nibh, feugiat id nisi sit
            amet, mollis lobortis velit. Vestibulum sagittis turpis nec quam
            viverra.
          </div>
          <hr />
        </div>
        <div>
          <div className="switchContainer">
            <div className="switchBlock">
              Other privacy and security features
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
          <div
            style={{
              fontSize: "14px",
              fontWeight: "500",
              color: "#929BA6",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sed massa nunc. Cras aliquet mauris ante. Aenean semper quis leo
            quis ornare. Vivamus id neque elit. Cras quis elementum orci. Sed in
            elit vel dui maximus tristique. Donec erat nibh, feugiat id nisi sit
            amet, mollis lobortis velit. Vestibulum sagittis turpis nec quam
            viverra.
          </div>
          <hr />
        </div>
        <div className="text-container">
          <div
            style={{
              width: "50%",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
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

export default PrivacyAndSecurity;
