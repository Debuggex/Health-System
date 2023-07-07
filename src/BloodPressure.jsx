import "bootstrap/dist/css/bootstrap.min.css";
import "./BloodPressure.css";

import Calendar from "./assets/Calendar.png";
import Upload from "./assets/Upload.png";
import Left from "./assets/ArrowLeft.png";
import Right from "./assets/ArrowRight.png";
import More from "./assets/more.png";

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
  const MonthsValue = [150, 170, 240, 120];

  return (
    <div className="col-md-12">
      <div className="row col-md-12">
        <div className="col-md-4">
          <button className="secondaryButton">Blood Pressure</button>
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
          <div className="col-md-7 row center-items" >
            <div className="col-md-11">
              <h4 style={{display:"flex",flexDirection:"row",justifyContent:"flex-end"}}><span style={{cursor:"pointer",margin:"0 5px"}}><img src={Left} alt="" width={18} height={18} /></span>Last 30 days (04/18/2023 - 05/17/2023)<span><img style={{cursor:"pointer",margin:"0 5px"}} src={Right} alt="" width={18} height={18}/></span></h4>
            </div>
            <div className="col-md-1 center-items">
              <img className="icon-img" src={More} alt="" width={18} height={18} />
            </div>
          </div>
        </div>
        <br />
        <div className="graphImage">
          <div className="graphNumbers">
                  {sideLimit.map((data, key) => (
                    <div className="numbersContainer">
                      {data}
                    </div>
                  ))}
                </div>

                <div className="graphPlotting">
                  <div className="graphPlottingContainer">
                    {MonthsValue.map((data, key) => (
                      <div style={{width:"20px",height:"1px",border:"1px solid black",transform:`rotate(${data-150}deg)`}}></div>
                      // TODO: Graph development
                    ))}
                  </div>

                  <div
                    style={{
                      width: "80%",
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
                          alignItems:"center",
                          justifyContent:"center",
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
    </div>
  );
}
