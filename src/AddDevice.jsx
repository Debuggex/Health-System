import "bootstrap/dist/css/bootstrap.min.css";

function AddDevice(params) {
  return (
    <div id="addDevice"
      className="row col-12"
      style={{
        width: "100%",
        borderRadius: "20px",
        padding: "20px 20px",
        backgroundColor: "white",
        height:"125%"
      }}
    >
      <div className="row">
        <div className="col-md-4" style={{ marginBottom: "20px" }}>
          <label
            htmlFor="MRN"
            style={{
              color: "#929BA6",
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "5px",
            }}
          >
            MRN#
          </label>
          <input
            id="MRN"
            type="text"
            style={{
              border: "1px solid #DBDADD",
              padding: "10px",
              borderRadius: "10px",
              fontSize: "14px",
            }}
          />
        </div>
      </div>
      <div className="row" style={{ marginBottom: "20px" }}>
        <div className="col-md-4">
          <label
            htmlFor="FName"
            style={{
              color: "#929BA6",
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "5px",
            }}
          >
            First Name
          </label>
          <input
            type="text"
            id="FName"
            style={{
              border: "1px solid #DBDADD",
              padding: "10px",
              borderRadius: "10px",
              fontSize: "14px",
            }}
          />
        </div>

        <div className="col-md-4">
          <label
            htmlFor="MName"
            style={{
              color: "#929BA6",
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "5px",
            }}
          >
            Middle Name
          </label>
          <input
            type="text"
            id="MName"
            style={{
              border: "1px solid #DBDADD",
              padding: "10px",
              borderRadius: "10px",
              fontSize: "14px",
            }}
          />
        </div>

        <div className="col-md-4">
          <label
            htmlFor="LName"
            style={{
              color: "#929BA6",
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "5px",
            }}
          >
            Last Name
          </label>
          <input
            type="text"
            id="LName"
            style={{
              border: "1px solid #DBDADD",
              padding: "10px",
              borderRadius: "10px",
              fontSize: "14px",
            }}
          />
        </div>
      </div>

      <div className="row" style={{ marginBottom: "20px" }}>
        <div className="col-md-4 select-wrapper">
          <label
            htmlFor="MobileNumber"
            style={{
              color: "#929BA6",
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "5px",
            }}
          >
            Mobile Number *
          </label>
          <select name="MobileNumber" className="" id="MobileNumber">
            <option value="0">Select Mobile Number</option>
            <option value="1">+91 987 654 5432</option>
          </select>
        </div>
      </div>

      <div className="row" style={{ marginBottom: "20px" }}>
        <div className="col-md-4 select-wrapper">
          <label
            htmlFor="DeviceType"
            style={{
              color: "#929BA6",
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "5px",
            }}
          >
            Device Type
          </label>
          <select name="DeviceType" className="" id="MobileNumber">
            <option value="0">Select Device Type</option>
            <option value="1">+91 987 654 5432</option>
          </select>
        </div>

        <div className="col-md-8 select-wrapper">
          <label
            htmlFor="DeviceList"
            style={{
              color: "#929BA6",
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "5px",
            }}
          >
            Device List
          </label>
          <select name="DeviceList" className="" id="MobileNumber">
            <option value="0">Select Device</option>
            <option value="1">+91 987 654 5432</option>
          </select>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12" style={{ marginBottom: "20px" }}>
          <label
            htmlFor="Address"
            style={{
              color: "#929BA6",
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "5px",
            }}
          >
            Address *
          </label>
          <input
            id="Address"
            name="Address"
            type="text"
            style={{
              border: "1px solid #DBDADD",
              padding: "10px",
              borderRadius: "10px",
              fontSize: "14px",
            }}
          />
        </div>
      </div>

      <div className="row" style={{ marginBottom: "20px" }}>
        <div className="col-md-4">
          <label
            htmlFor="FName"
            style={{
              color: "#929BA6",
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "5px",
            }}
          >
            City *
          </label>
          <input
            type="text"
            id="FName"
            style={{
              border: "1px solid #DBDADD",
              padding: "10px",
              borderRadius: "10px",
              fontSize: "14px",
            }}
          />
        </div>

        <div className="col-md-4">
          <label
            htmlFor="MName"
            style={{
              color: "#929BA6",
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "5px",
            }}
          >
            State *
          </label>
          <input
            type="text"
            id="MName"
            style={{
              border: "1px solid #DBDADD",
              padding: "10px",
              borderRadius: "10px",
              fontSize: "14px",
            }}
          />
        </div>

        <div className="col-md-4">
          <label
            htmlFor="LName"
            style={{
              color: "#929BA6",
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "5px",
            }}
          >
            Zip Code *
          </label>
          <input
            type="text"
            id="LName"
            style={{
              border: "1px solid #DBDADD",
              padding: "10px",
              borderRadius: "10px",
              fontSize: "14px",
            }}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-4" style={{ marginBottom: "20px" }}>
          <label
            htmlFor="MRN"
            style={{
              color: "#929BA6",
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "5px",
            }}
          >
            Authorization Code *
          </label>
          <input
            id="MRN"
            type="text"
            style={{
              border: "1px solid #DBDADD",
              padding: "10px",
              borderRadius: "10px",
              fontSize: "14px",
            }}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="col-md-4">
            <h4
              style={{ cursor: "pointer", padding: "10px 0", margin: "10px 0" }}
            >
              Cancel
            </h4>
          </div>
        </div>
        <div
          className="col-md-6"
          style={{
            justifyContent: "flex-end",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div className="col-md-4">
            <button
              className="primaryButton"
              onClick={() => params.addDeviceFun()}
            >
              Add Device
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddDevice;
