


function ForgotPassword1(props){



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
         <div style={{ fontSize: "16px", fontWeight: "500", color: "#929BA6" }}>
           Enter your email address to send 6digit OTP
         </div>
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

         {/* Request OTP Button */}
         <button
           style={{ width: "100%" }}
           type="submit"
           className="primaryButton"
           onClick={props.goToOTP}
         >
           Request OTP
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

export default ForgotPassword1;