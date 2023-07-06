import { useNavigate } from "react-router-dom";
import LoginImg from "./assets/LoginImg.png";
import { useState } from "react";
import ForgotPassword1 from "./ForgotPassword1";
import VerifyOTP from "./VerifyOTP";
import RetypePassword from "./RetypePassword";

function Login(params) {

  const [forgotPass1,setForgotPass1] = useState(false);
  const [Login, setLogin] = useState(true);
  const [VerifyOTPs, setVerifyOTP] = useState(false);
  const [RetypePass, setRetypePass] = useState(false);


    const navigate = useNavigate();

    const ForgotPassword= ()=>{
      setLogin(false);
      setForgotPass1(true);
    }

    const VerifyOTPScreen=()=>{
      setForgotPass1(false);
      setVerifyOTP(true);
    }

    const RetypePassScreen = () => {
      setVerifyOTP(false);
      setRetypePass(true);
    };

    const BackToLogin=()=>{
      setRetypePass(false);
      setLogin(true);
    }
    
  
    const goToApp = () => navigate("/app");
  

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
      }}
    >
      {Login && (
        <div
          style={{
            width: "60%",
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
                  <u
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      ForgotPassword();
                    }}
                  >
                    {" "}
                    Forgot password?
                  </u>
                </div>
              </div>
            </div>

            {/* SignUp Button */}
            {/* <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                marginBottom: "10px",
              }}
              onClick={goToApp}
            >
              <div
                style={{
                  backgroundColor: "#7D9FEF",
                  padding: "10px",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                <div>Sign In</div>
              </div>
            </div> */}
            <button type="submit" className="primaryButton" onClick={goToApp}>Sign In</button>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            {/* Already Have an account */}
            <div style={{ fontSize: "16px", fontWeight: "600" }}>
              Already have account?{" "}
              <u style={{ color: "#7D9FEF", cursor: "pointer" }}>Sign Up</u>
            </div>
          </div>
        </div>
      )}

      {forgotPass1 && <ForgotPassword1 goToOTP={VerifyOTPScreen} />}
      {VerifyOTPs && <VerifyOTP goToRetype={RetypePassScreen} />}
      {RetypePass && <RetypePassword goToLogin={BackToLogin} />}

      <div style={{ width: "40%", height: "100vh", display: "flex" }}>
        <img src={LoginImg} alt="" width="100%" />
      </div>
    </div>
  );
}

export default Login;
