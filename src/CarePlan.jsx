import "bootstrap/dist/css/bootstrap.min.css";
import Upload from "./assets/Upload.png";
import EmptyState from "./assets/EmptyState.png";

function CarePlan(params) {
  return (
    <div className="col-md-12">
      <div className="row">
        <div
          className="col-md-4"
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div className="col-md-2">
            <button className="secondaryButton">
              <img src={Upload} alt="" width={18} height={18} />
            </button>
          </div>
        </div>
        <div
          className="col-md-8"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <div className="col-md-4">
            <button className="primaryButton">+ Add Care Plan</button>
          </div>
        </div>
      </div>
      <div className="col-md-12 rightCard">
        <img src={EmptyState} alt="" />
        <p style={{ color: "#929BA6" }}>Add Care Plan</p>
      </div>
    </div>
  );
}

export default CarePlan;
