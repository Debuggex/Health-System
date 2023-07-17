import "bootstrap/dist/css/bootstrap.min.css";
import Trash from "./assets/trash.png";


function Devices(params) {

  

    const Readings = [
      {
        device: "Blood glucose moniter",
        deviceId: "326-445678933",
        assignDate: "12/3/22",
      },
      {
        device: "Blood glucose moniter",
        deviceId: "326-445678933",
        assignDate: "12/3/22",
      },
      {
        device: "Blood glucose moniter",
        deviceId: "326-445678933",
        assignDate: "12/3/22",
      },
    ];
    return (
      <div className="col-md-12">
        <div
          className="col-md-12"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
            <button className="primaryButton" onClick={()=>{params.addDeviceFun()}}>+ Devices</button>
        </div>

        <div
          className="listCard"
          style={{ overflowY: "hidden" }}
        >
          <div className="list" style={{height:"inherit"}}>
            <div
              className="listDataContainer"
              style={{ backgroundColor: "#E9EBEA" }}
            >
              <div className="listData" style={{ width: "30%" }}>
                <h4>Device</h4>
              </div>
              <div className="listData" style={{ width: "30%" }}>
                <h4>Device ID</h4>
              </div>
              <div className="listData" style={{ width: "30%" }}>
                <h4>Assign Date</h4>
              </div>
              <div className="listData" style={{ width: "10%" }}>
                <h4></h4>
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
                  <div className="listData" style={{ width: "30%" }}>
                    <h4>{data.device}</h4>
                  </div>
                  <div className="listData" style={{ width: "30%" }}>
                    <h4>{data.deviceId}</h4>
                  </div>
                  <div className="listData" style={{ width: "30%" }}>
                    <h4>{data.assignDate}</h4>
                  </div>
                  <div className="listData" style={{ width: "10%" }}>
                    <img style={{cursor:"pointer"}} src={Trash} alt="" width={18} height={18} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Devices;