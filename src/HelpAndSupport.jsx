import { useState } from "react";
import "./settings.css";
import messageBlack from "./assets/MessageBlack.png"
import callBlack from "./assets/CallingBlack.png";

function HelpAndSecurity(props) {
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
            Help & Support:
          </div>
        </div>
      </div>
      <br />
      <div className="settingContainer" style={{ padding: "20px" }}>
        <div>
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
            viverra, ac interdum nulla scelerisque. Sed suscipit, magna quis
            malesuada condimentum, sapien leo pulvinar diam, in tincidunt sem
            purus vitae lacus. Morbi dapibus leo a odio aliquam laoreet.
          </div>
          <br />
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
            viverra, ac interdum nulla scelerisque. Sed suscipit, magna quis
            malesuada condimentum, sapien leo pulvinar diam, in tincidunt sem
            purus vitae lacus. Morbi dapibus leo a odio aliquam laoreet.
          </div>
        </div>
        <br />
        <div className="icon-textContainer">
          <img
            src={messageBlack}
            alt=""
            width={20}
            height={20}
            style={{ marginRight: "10px" }}
          />
          <span>help@example.com</span>
        </div>
        <div className="icon-textContainer">
          <img
            src={callBlack}
            alt=""
            width={20}
            height={20}
            style={{ marginRight: "10px" }}
          />
          <span>+1 123 123 1234</span>
        </div>
        <div className="text-container">
          <div
            style={{
              width: "50%",
              display: "flex",
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
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpAndSecurity;
