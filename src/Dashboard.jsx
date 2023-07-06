import arrowDown from "./assets/ArrowDown.svg";
import profile from "./assets/Profile.png";
import downgrade from "./assets/downgrade.png";
import group from "./assets/Group.png";
import upgrade from "./assets/upgrade.png";
import NumberOfPatients from "./assets/NumberOfPatients.png";
import NumberOfPatientsActive from "./assets/NumberOfPatientsActive.png";


function Dashboard(params) {


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
  const sideLimit = [10, 8, 6, 4, 2, 0];
  const MonthsValue = [5, 8, 6, 7, 1, 2, 6, 4, 7, 8];


   const showInfo=function(key){
    console.log(key);
    document.getElementById("barInfo"+key).style.opacity="100%";
    document.getElementById("bar" + key).style.backgroundColor = "#7E9FED";
    document.getElementById("barInfo" + key).style.zIndex = 8;
    
   };

   const hideInfo=function(key){
        console.log(key);
        document.getElementById("barInfo" + key).style.opacity = "0%";
        document.getElementById("bar" + key).style.backgroundColor = "#CCD9F9";
        document.getElementById("barInfo" + key).style.zIndex = 5;
   }

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <div>
          <div
            id="graphbar"
            style={{
              padding: "30px",
              backgroundColor: "white",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "row",
              width:"50vw"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width:"70%"
              }}
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div
                  style={{
                    width: "80%",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    fontWeight: "600",
                    fontSize: "16px",
                  }}
                >
                  Average Patient Visit
                </div>
                <div
                  style={{
                    width: "50%",
                    justifyContent: "flex-end",
                    display: "flex",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      padding: "5px 10px",
                      backgroundColor: "#E3EBFA",
                      color: "#7D9FEF",
                      borderRadius: "10px",
                      fontSize:"14px",
                      fontWeight:"500"
                    }}
                  >
                    Monthly{" "}
                    <span style={{ marginLeft: "10px" }}>
                      <img src={arrowDown} alt="" width={12}/>
                    </span>
                  </div>
                </div>
              </div>
              <div
                id="graphImage"
                style={{ display: "flex", flexDirection: "row"}}
              >
                <div
                  id="graphNumbers"
                  style={{
                    width: "5%",
                    display: "flex",
                    flexDirection: "column",
                    marginRight: "20px",
                    // height:"40vh"
                  }}
                >
                  {sideLimit.map((data, key) => (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-end",
                        color: "#929BA6",
                        fontWeight: "500",
                        marginTop: "20px",
                        lineHeight: 0.7,
                        fontSize:"14px"
                      }}
                    >
                      {data}
                    </div>
                  ))}
                </div>

                <div
                  id="graphPlottin"
                  style={{
                    width: "100%",
                    borderBottom: "1px solid #E0E1E2",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      // width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "flex-end",
                      zIndex: 5,
                      position: "relative",
                    }}
                  >
                    {MonthsValue.map((data, key) => (
                      <div
                        id={"bar" + key}
                        style={{
                          width: "10%",
                          height: `${data * 10}%`,
                          backgroundColor: "#CCD9F9",
                          borderRadius: "8px 8px 0 0",
                          marginRight: `${key!=MonthsValue.length-1?"20px":"0px"}`,
                          position: "relative",
                          cursor: "pointer",
                        }}
                        onMouseOver={() => {
                          showInfo(key);
                        }}
                        onMouseLeave={() => {
                          hideInfo(key);
                        }}
                      >
                        <div
                          id={"barInfo" + key}
                          style={{
                            position: "absolute",
                            backgroundColor: "#7E9FED",
                            color: "white",
                            padding: "10px 30px",
                            bottom: "100%",
                            right: "-50%",
                            borderRadius: "10px",
                            fontWeight: "600",
                            zIndex: 10,
                            opacity: 0,
                            marginBottom: "15px",
                          }}
                        >
                          <div style={{ position: "relative" }}>
                            {data}
                            <br />
                            <div
                              style={{
                                width: 0,
                                height: 0,
                                borderLeft: "20px solid transparent",
                                borderRight: "20px solid transparent",
                                borderTop: "20px solid #7E9FED",
                                position: "absolute",
                                right: -15,
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      width: "100%",
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
                          justifyContent: "flex-end",
                          alignItems: "flex-end",
                          color: "#929BA6",
                          fontWeight: "500",
                          height: `${100 / sideLimit.length}%`,
                          width: "100%",
                        }}
                      >
                        <hr
                          style={{
                            width: "100%",
                            border: "1px dashed #E0E1E2",
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
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "10px",
                }}
              >
                <div
                  style={{
                    width: "5%",
                    display: "flex",
                    flexDirection: "column",
                    marginRight: "20px",
                  }}
                ></div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  {months.map((data, key) => (
                    <div
                      style={{
                        marginRight: "10px",
                        color: "#929BA6",
                        fontWeight: "500",
                        width: "20%",
                        fontSize:"14px"
                      }}
                    >
                      {data}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              style={{
                width: "30%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  display: "flex",
                  flexDirection: "column",
                  marginLeft:"10%",
                  width: "50%",
                  marginRight: "10px",
                }}
              >
                <img src={profile} alt="" width={40} height={40} />
                <br />
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#929BA6",
                  }}
                >
                  This month
                </div>
                <br />
                <br />
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  $12.9k
                </div>

                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#7D9FEF",
                  }}
                >
                  -3.1%{" "}
                  <span>
                    <img src={downgrade} alt="" />
                  </span>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "white",
                  display: "flex",
                  flexDirection: "column",
                  width: "50%",
                }}
              >
                <img src={group} alt="" width={40} height={40} />
                <br />
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#929BA6",
                  }}
                >
                  This month
                </div>
                <br />
                <br />
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  $12.9k
                </div>

                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#EDBF85",
                  }}
                >
                  -3.1%{" "}
                  <span>
                    <img src={upgrade} alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: "20px",
        }}
      >
        <div
          style={{
            width: "50%",
            backgroundColor: "white",
            borderRadius: "20px",
            marginRight: "20px",
            padding: "50px 25px",
          }}
        >
          <img src={NumberOfPatients} alt="" width={50} height={50} />
          <br />
          <br />
          <div style={{ fontSize: "30px", fontWeight: "600" }}> 32.9k</div>
          <br />
          <div
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "#929BA6",
            }}
          >
            Total Number of patients
          </div>
        </div>

        <div
          style={{
            width: "50%",
            backgroundColor: "white",
            borderRadius: "20px",
            marginRight: "20px",
            padding: "50px 25px",
          }}
        >
          <img src={NumberOfPatientsActive} alt="" width={50} height={50} />
          <br />
          <br />
          <div style={{ fontSize: "30px", fontWeight: "600" }}> 32.9k</div>
          <br />
          <div
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "#929BA6",
            }}
          >
            Total Number of patients
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
