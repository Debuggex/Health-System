import download from "./assets/DownlaodWhite.png";
import "./biller.css"


export default function Biller(params){

  function showDownload(){
    // DownloadReportsWarn
    document.getElementById("shadow").style.visibility = "visible";
    document.getElementById("DownloadReportsWarn").style.visibility = "visible";
  } 

  function showBillerRep() {
    params.showBillerReport();
  }
    
    return (
      <div style={{ width: "100%" }}>
        <div className="text-container">
          <div
            style={{
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              margin: "20px",
            }}
          >
            <button onClick={()=>{showBillerRep()}} className="secondaryButton">View Billing Report</button>
          </div>
          <div
            style={{
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
                onClick={() => showDownload()}
              >
                <img
                  style={{ marginRight: "10px" }}
                  src={download}
                  alt=""
                  width={15}
                  height={15}
                />
                <span>Download Report</span>
              </button>
            </div>
          </div>
        </div>
        <div className="cardsContainer">
          <div className="rightCardContainer">
            <div className="cardHeading">66</div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: "500",
                color: "#929BA6",
              }}
            >
              Enrolled Patients
            </div>
            <br />
            <div className="cardsContainer" style={{ padding: "0 20px" }}>
              <div className="leftbar">60%</div>
              <div className="rightbar">40%</div>
            </div>
            <div className="cardsContainer" style={{ padding: "0 20px" }}>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#929BA6",
                }}
              >
                <span style={{ color: "black" }}>57 </span>Active
              </div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#929BA6",
                }}
              >
                <span style={{ color: "black" }}>9 </span>Lapsed
              </div>
            </div>
            <br />
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#E9FAE6",
                  color: "#1FBE05",
                  padding: "10px 20px",
                  width: "58px",
                  fontSize: "30px",
                  fontWeight: "700",
                  borderRadius: "10px",
                  marginRight: "10px",
                }}
              >
                0
              </div>
              <span>
                <div
                  className="cardHeading"
                  style={{ fontSize: "18px", fontWeight: "700" }}
                >
                  Newly Enrolled
                </div>
              </span>
            </div>
          </div>
          <div className="leftCardContainer">
            <div className="cardHeading">Adherence</div>
            <br />
            <div className="cardsContainer" style={{ width: "70%" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "10px",
                  fontWeight: "600",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#E9FAE6",
                      color: "#1FBE05",
                      padding: "0",
                      width: "85px",
                      height: "85px",
                      fontSize: "30px",
                      fontWeight: "700",
                      borderRadius: "50px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    1
                    <span style={{ fontSize: "14px", color: "black" }}>
                      of 6
                    </span>
                  </div>
                </div>
                998665
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "10px",
                  fontWeight: "600",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#FFF8D2",
                      color: "#CCAB00",
                      padding: "0",
                      width: "85px",
                      height: "85px",
                      fontSize: "30px",
                      fontWeight: "700",
                      borderRadius: "50px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    35
                    <span style={{ fontSize: "14px", color: "black" }}>
                      of 6
                    </span>
                  </div>
                </div>
                998665
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "10px",
                  fontWeight: "600",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#E6F4FA",
                      color: "#1A5CF6",
                      padding: "0",
                      width: "85px",
                      height: "85px",
                      fontSize: "30px",
                      fontWeight: "700",
                      borderRadius: "50px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    0
                    <span style={{ fontSize: "14px", color: "black" }}>
                      of 6
                    </span>
                  </div>
                </div>
                998665
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "10px",
                  fontWeight: "600",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#E6F9FA",
                      color: "#10AFE1",
                      padding: "0",
                      width: "85px",
                      height: "85px",
                      fontSize: "30px",
                      fontWeight: "700",
                      borderRadius: "50px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    0
                    <span style={{ fontSize: "14px", color: "black" }}>
                      of 6
                    </span>
                  </div>
                </div>
                998665
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}