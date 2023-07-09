import "bootstrap/dist/css/bootstrap.min.css";
import "./BloodPressure.css";

import Calendar from "./assets/Calendar.png";
import Upload from "./assets/Upload.png";
import Left from "./assets/ArrowLeft.png";
import Right from "./assets/ArrowRight.png";
import More from "./assets/more.png";
import Trend from "./assets/trend.png";
import { useEffect } from "react";

export default function BloodPressure(params) {

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
  ];
  const sideLimit = [210, 180, 150, 120, 90, 60];
  const MonthsValue = [
    150, 150, 170, 110, 120, 150, 150, 110, 135, 155, 150, 170, 110, 120, 150,
    150, 110, 135, 155, 150, 150, 170, 110, 120, 150, 150, 110, 135, 155, 150,
    170
  ];
  const Readings = [
    {
      reading: "Feb 22, 1997",
      systolic: "165",
      dialostic: "105",
      pulse: "102",
    },
    {
      reading: "Feb 22, 1997",
      systolic: "165",
      dialostic: "105",
      pulse: "102",
    },
    ,
    {
      reading: "Feb 22, 1997",
      systolic: "165",
      dialostic: "105",
      pulse: "102",
    },
    ,
    {
      reading: "Feb 22, 1997",
      systolic: "165",
      dialostic: "105",
      pulse: "102",
    },
    ,
    {
      reading: "Feb 22, 1997",
      systolic: "165",
      dialostic: "105",
      pulse: "102",
    },
    ,
    {
      reading: "Feb 22, 1997",
      systolic: "165",
      dialostic: "105",
      pulse: "102",
    },
    ,
    {
      reading: "Feb 22, 1997",
      systolic: "165",
      dialostic: "105",
      pulse: "102",
    },
    ,
    {
      reading: "Feb 22, 1997",
      systolic: "165",
      dialostic: "105",
      pulse: "102",
    },
    ,
    {
      reading: "Feb 22, 1997",
      systolic: "165",
      dialostic: "105",
      pulse: "102",
    },
  ];

  function getOffset(el) {
    var rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.pageXOffset,
      top: rect.top + window.pageYOffset,
      width: rect.width || el.offsetWidth,
      height: rect.height || el.offsetHeight,
    };
  }

  function connect(div1, div2, color, thickness) {
    // draw a line connecting elements
    var off1 = getOffset(div1);
    var off2 = getOffset(div2);
    // bottom right
    var x1 = off1.left + (off1.width/2);
    var y1 = off1.top+(off1.height/2);
    // top right
    var x2 = off2.left + (off2.width/2);
    var y2 = off2.top + off1.height / 2;
    // distance
    var length = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    // center
    var cx = (x1 + x2) / 2 - length / 2;
    var cy = (y1 + y2) / 2 - thickness / 2;
    // angle
    var angle = Math.atan2(y1 - y2, x1 - x2) * (180 / Math.PI);
    // make hr
    var htmlLine =
      "<div style='padding:0px; margin:0px; height:" +
      thickness +
      "px; background-color:" +
      color +
      "; line-height:1px; position:absolute; left:" +
      cx +
      "px; top:" +
      cy +
      "px; width:" +
      length +
      "px; -moz-transform:rotate(" +
      angle +
      "deg); -webkit-transform:rotate(" +
      angle +
      "deg); -o-transform:rotate(" +
      angle +
      "deg); -ms-transform:rotate(" +
      angle +
      "deg); transform:rotate(" +
      angle +
      "deg);"+"bottom:15px;"+"' />";
    //
    // alert(htmlLine);
    document
      .getElementById("BloodPressure")
      .insertAdjacentHTML("beforeend", htmlLine);
  }

  useEffect(()=>{
    for (let i = 0; i < MonthsValue.length - 1; i++) {
      let div1 = document.getElementById("BPRead" + i);
      let div2 = document.getElementById("BPRead" + (i + 1));
      connect(div1, div2, "#7D9FEF", 1);
    }

    // LowBPRead

    for (let i = 0; i < MonthsValue.length - 1; i++) {
      let div1 = document.getElementById("LowBPRead" + i);
      let div2 = document.getElementById("LowBPRead" + (i + 1));
      connect(div1, div2, "#7D9FEF", 1);
    }

  },[MonthsValue])

  return (
    <div className="col-md-12" id="BloodPressure">
      <div className="row col-md-12">
        <div className="col-md-4 select-wrapper1">
          <select className="secondaryButton">
            <option value="0">Blood Pressure</option>
            <option value="1">Vitals</option>
          </select>
        </div>
        <div className="col-md-1">
          <button className="secondaryButton">
            <img src={Calendar} alt="" width={18} height={18} />
          </button>
        </div>
        <div className="col-md-1">
          <button className="secondaryButton">
            <img src={Upload} alt="" width={18} height={18} />
          </button>
        </div>
      </div>
      <div className="col-md-12 BPCard">
        <div className="row">
          <div className="col-md-5 center-items">
            <h4>Blood pressure</h4>
          </div>
          <div className="col-md-7 row center-items">
            <div className="col-md-11">
              <h4
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                <span style={{ cursor: "pointer", margin: "0 5px" }}>
                  <img src={Left} alt="" width={18} height={18} />
                </span>
                Last 30 days (04/18/2023 - 05/17/2023)
                <span>
                  <img
                    style={{ cursor: "pointer", margin: "0 5px" }}
                    src={Right}
                    alt=""
                    width={18}
                    height={18}
                  />
                </span>
              </h4>
            </div>
            <div className="col-md-1 center-items">
              <img
                className="icon-img"
                src={More}
                alt=""
                width={18}
                height={18}
              />
            </div>
          </div>
        </div>
        <br />
        <div className="graphImage">
          <div className="graphNumbers">
            {sideLimit.map((data, key) => (
              <div className="numbersContainer">{data}</div>
            ))}
          </div>

          <div className="graphPlotting">
            <div className="graphPlottingContainer">
              {MonthsValue.map((data, key) => (
                <div
                  key={key}
                  id={"BPRead" + key}
                  style={{
                    width: "4px",
                    height: "15px",
                    borderRadius: "20px",
                    border: "1px solid #7D9FEF",
                    marginBottom: `${data - 150}px`,
                    marginRight: "16px",
                    backgroundColor: "#7D9FEF",
                  }}
                ></div>
              ))}

              <div
                className="subText"
                style={{
                  position: "absolute",
                  left: "100%",
                  color: "#929BA6",
                  width: "20%",
                }}
              >
                <span>
                  <img
                    style={{ marginRight: "5px" }}
                    src={Trend}
                    alt=""
                    width={16}
                    height={16}
                  />
                </span>
                Systolic 154 avg
              </div>
            </div>
            <div className="graphPlottingContainer" style={{ top: "137px" }}>
              {MonthsValue.map((data, key) => (
                <div
                  key={key}
                  id={"LowBPRead" + key}
                  style={{
                    width: "4px",
                    height: "15px",
                    borderRadius: "20px",
                    border: "1px solid #7D9FEF",
                    marginBottom: `${data - 150}px`,
                    marginRight: "16px",
                    backgroundColor: "#7D9FEF",
                  }}
                ></div>
              ))}
              <div
                className="subText"
                style={{
                  position: "absolute",
                  left: "100%",
                  color: "#929BA6",
                  width: "20%",
                }}
              >
                <span>
                  <img
                    style={{ marginRight: "5px" }}
                    src={Trend}
                    alt=""
                    width={16}
                    height={16}
                  />
                </span>
                Diastolic 154 avg
              </div>
            </div>

            <div
              style={{
                width: "82%",
                position: "absolute",
                height: "100%",
                bottom: "0%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              {sideLimit.map((data, key) => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#929BA6",
                    fontWeight: "500",
                    height: "500px",
                    width: "100%",
                  }}
                >
                  <hr
                    style={{
                      width: "100%",
                      border: "1px solid #E0E1E2",
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      //   zIndex:6
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="listCard" style={{ overflowY: "scroll", height: "20%" }}>
        <div className="list">
          <div
            className="listDataContainer"
            style={{ backgroundColor: "#E9EBEA" }}
          >
            <div className="listData">
              <h4>Reading Date (EDT)</h4>
            </div>
            <div className="listData">
              <h4>Systolic</h4>
            </div>
            <div className="listData">
              <h4>Diastolic</h4>
            </div>
            <div className="listData">
              <h4>Pulse</h4>
            </div>
          </div>

          <div>
            {Readings.map((data, key) => (
              <div
                className="listDataContainer"
                style={{
                  backgroundColor: "white",
                  border: "1px solid #EFEEF1",
                }}
              >
                <div className="listData">
                  <h4>{data.reading}</h4>
                </div>
                <div className="listData">
                  <h4>{data.systolic}</h4>
                </div>
                <div className="listData">
                  <h4>{data.dialostic}</h4>
                </div>
                <div className="listData">
                  <h4>{data.pulse}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
