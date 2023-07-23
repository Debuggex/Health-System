function VerifyOTP(params) {
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
          <div
            style={{ fontSize: "16px", fontWeight: "500", color: "#929BA6" }}
          >
            Please enter 6 digit OTP sent to n******@example.com
          </div>
          <br />
          {/* Email */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              marginBottom: "10px",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                border: "1px solid #DBDADD",
                padding: "10px",
                borderRadius: "10px",
                width: "10%",
                display: "flex",
                marginRight: "20px",
              }}
            >
              <input
                type="tel"
                maxLength={1}
                style={{ width: "100%", textAlign: "center" }}
              />
            </div>
            <div
              style={{
                border: "1px solid #DBDADD",
                padding: "10px",
                borderRadius: "10px",
                width: "10%",
                display: "flex",
                marginRight: "20px",
              }}
            >
              <input
                type="tel"
                maxLength={1}
                style={{ width: "100%", textAlign: "center" }}
              />
            </div>
            <div
              style={{
                border: "1px solid #DBDADD",
                padding: "10px",
                borderRadius: "10px",
                width: "10%",
                display: "flex",
                marginRight: "20px",
              }}
            >
              <input
                type="tel"
                maxLength={1}
                style={{ width: "100%", textAlign: "center" }}
              />
            </div>
            <div
              style={{
                border: "1px solid #DBDADD",
                padding: "10px",
                borderRadius: "10px",
                width: "10%",
                display: "flex",
                marginRight: "20px",
              }}
            >
              <input
                type="tel"
                maxLength={1}
                style={{ width: "100%", textAlign: "center" }}
              />
            </div>
            <div
              style={{
                border: "1px solid #DBDADD",
                padding: "10px",
                borderRadius: "10px",
                width: "10%",
                display: "flex",
                marginRight: "20px",
              }}
            >
              <input
                type="tel"
                maxLength={1}
                style={{ width: "100%", textAlign: "center" }}
              />
            </div>
            <div
              style={{
                border: "1px solid #DBDADD",
                padding: "10px",
                borderRadius: "10px",
                width: "10%",
                display: "flex",
                marginRight: "20px",
              }}
            >
              <input
                type="tel"
                maxLength={1}
                style={{ width: "100%", textAlign: "center" }}
              />
            </div>
          </div>
          {/* Password */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              marginBottom: "15px",
              visibility: "hidden",
            }}
          >
            <div
              style={{
                fontSize: "16px",
                fontWeight: "500",
                marginBottom: "10px",
              }}
            >
              Password <span style={{ color: "#FF0000" }}>*</span>
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
                }}
              >
                <u style={{ cursor: "pointer" }}> Forgot password?</u>
              </div>
            </div>
          </div>

          {/* Verify Button */}

          <button
            style={{ width: "100%" }}
            type="submit"
            className="primaryButton"
            onClick={params.goToRetype}
          >
            Verify
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

export default VerifyOTP;
