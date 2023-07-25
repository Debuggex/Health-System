import cross from "./assets/cross.png";

function EditUser(params) {
  return (
    <div
      style={{
        display: "flex",
        position: "absolute",
        width: "70vw",
        borderRadius: "20px",
        backgroundColor: "white",
        zIndex: "51",
        flexDirection: "column",
        padding: "40px",
      }}
    >
      {/* Edit Pop Up Header */}
      <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
        <div style={{ width: "50%", fontSize: "24px", fontWeight: "600" }}>
          Edit User
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => params.exit()}
        >
          <img src={cross} alt="" width="18px" height="18px" />
        </div>
      </div>
      <br />
      <hr color="" style={{ width: "100%", color: "#DBDADD" }} />
      <br />
      <div style={{ fontSize: "14px", fontWeight: "500", color: "#929BA6" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        tortor risus, euismod a justo quis, pretium bibe ndum risus.
        Pellentesque sem eros, porttitor a ultricies id, consequat ut ex.
        Praesent odio ligula, gravida at pretium at, tempus sit amet felis.{" "}
      </div>
      <br />

      {/* Edit Pop Up Fields Start */}

      {/* First Row */}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <div style={{ width: "45%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                fontSize: "16px",
                fontWeight: "500",
                marginBottom: "15px",
              }}
            >
              First Name <span style={{ color: "#FF0000" }}>*</span>
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
        <div
          style={{
            width: "45%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                fontSize: "16px",
                fontWeight: "500",
                marginBottom: "15px",
              }}
            >
              Last Name <span style={{ color: "#FF0000" }}>*</span>
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
      </div>

      {/* Second Row */}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            fontSize: "16px",
            fontWeight: "500",
            marginBottom: "15px",
          }}
        >
          Email <span style={{ color: "#FF0000" }}>*</span>
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

      {/* Third Row */}

      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <div style={{ width: "45%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                fontSize: "16px",
                fontWeight: "500",
                marginBottom: "15px",
              }}
            >
              Adherents
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
        <div
          style={{
            width: "45%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                fontSize: "16px",
                fontWeight: "500",
                marginBottom: "15px",
              }}
            >
              Readings
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
      </div>

      {/* Forth Row */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            fontSize: "16px",
            fontWeight: "500",
            marginBottom: "15px",
          }}
        >
          Location
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
      {/* Bottom Buttons */}
      <br />
      <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
        <div
          style={{
            width: "50%",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
          onClick={() => params.exit()}
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
          }}
        >
          <button
            type="submit"
            className="primaryButton"
            onClick={() => params.exit()}
          >
            Send Invitation
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
