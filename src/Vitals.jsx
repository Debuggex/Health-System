import "bootstrap/dist/css/bootstrap.min.css";

import Calendar from "./assets/Calendar.png";
import Upload from "./assets/Upload.png";
import EmptyState from "./assets/EmptyState.png";

function Vitals(params) {
  return (
    <div className="col-md-12">
      <div className="row col-md-12">
        <div className="col-md-4">
          <button className="secondaryButton">Vitals</button>
        </div>
        <div className="col-md-1">
          <button className="secondaryButton">
            <img src={Calendar} alt="" width={18} height={18} />
          </button>
        </div>
        <div className="col-md-1">
          <button className="secondaryButton">
            <img src={Upload} alt="" width={18} height={18} />
          </button>
        </div>
      </div>
      <div className="col-md-12 rightCard">
        <img src={EmptyState} alt="" />
        <p style={{ color: "#929BA6" }}>Click on Buttons to see data</p>
      </div>
    </div>
  );
}

export default Vitals;