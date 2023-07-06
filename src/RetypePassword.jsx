

function RetypePassword(props){

    return (
      <div>
        <div
          style={{
            width: "60vw",
            height: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* MedKick Logo */}
            <div style={{ fontSize: "36px", fontWeight: "600" }}>Medkick</div>

            <br />
            {/* Email */}
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
                New Password <span style={{ color: "#FF0000" }}>*</span>
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
            {/* Password */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                marginBottom: "15px",
              }}
            >
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  marginBottom: "10px",
                }}
              >
                Retype Password <span style={{ color: "#FF0000" }}>*</span>
              </div>
              <div
                style={{
                  border: "1px solid #DBDADD",
                  padding: "10px",
                  borderRadius: "10px",
                  marginBottom: "10px",
                }}
              >
                <input type="password" />
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#929BA6",
                    width: "50%",
                  }}
                >
                  Must be at least 8 characters
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#7D9FEF",
                    width: "50%",
                    display: "flex",
                    justifyContent: "flex-end",
                    visibility: "hidden",
                  }}
                >
                  <u style={{ cursor: "pointer" }}> Forgot password?</u>
                </div>
              </div>
            </div>

            {/* Request OTP Button */}
            <button
              type="submit"
              className="primaryButton"
              onClick={props.goToLogin}
            >
              Set new password
            </button>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    );
}

export default RetypePassword;