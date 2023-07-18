import "bootstrap/dist/css/bootstrap.min.css";
import Calendar from "./assets/Calendar.png";
import Upload from "./assets/Upload.png";
import EllipsisText from "react-ellipsis-text/lib/components/EllipsisText";
import { useState } from "react";

function Interactions(params) {

  const [Sync,setsync] = useState(false);
  const [UnSync, setunSync] = useState(false);

  const hidePopUp =()=>{
    document.getElementById("shadow").style.visibility="hidden";
    document.getElementById("InteractionPopUp").style.visibility = "hidden";
    
  }
  

  const Readings = [
    {
      date: "Feb 22, 1997",
      time: "09:00AM - 11:00AM",
      duration: "30 minutes",
      notes:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi lectus, pretium et laoreet interdum, ullamcorper quis eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla sed justo molestie, efficitur metus eu, laoreet velit. Duis non nisi sed velit pharetra mollis in vitae magna. Sed accumsan pellentesque magna quis lacinia. Aliquam placerat ultricies tellus vitae dictum. Nullam purus eros, dictum a ultricies non, eleifend at neque. Ut vestibulum nec nunc id luctus. Sed placerat augue non diam fermentum cursus. Mauris pharetra dignissim sapien, sagittis rhoncus turpis efficitur nec. Sed pellentesque, orci nec faucibus ultricies, risus quam accumsan tortor, nec commodo mi ante non quam.Ut porttitor nisi eget risus mattis porttitor eget a mi. In a fermentum mi. Praesent sagittis, quam ac porttitor vehicula, quam ligula rutrum nulla, sed consectetur purus felis vitae eros. Pellentesque sollicitudin erat non augue tempor pretium. Aliquam sit amet mi vel nibh lacinia commodo. Proin non arcu in ligula condimentum egestas ut vel mi. Aliquam accumsan, mauris id gravida pharetra, ante sapien porttitor eros, ac facilisis neque nunc eget justo. Proin aliquam, mauris vitae ornare accumsan, libero sapien molestie eros, non aliquam justo mi ullamcorper elit. Aliquam erat volutpat. Nunc massa purus, aliquet id tristique ac, ultricies et magna. Donec non risus at elit sodales egestas. Duis viverra diam vitae erat gravida feugiat. Nunc enim magna, fermentum quis dictum non, hendrerit vel arcu. Mauris ac facilisis mauris. Aenean eget elit vel orci rutrum tempus id nec ante. Pellentesque vel nunc iaculis, convallis nisl ut, interdum quam.",
    },
    {
      date: "Feb 22, 1997",
      time: "09:00AM - 11:00AM",
      duration: "30 minutes",
      notes:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi lectus, pretium et laoreet interdum, ullamcorper quis eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla sed justo molestie, efficitur metus eu, laoreet velit. Duis non nisi sed velit pharetra mollis in vitae magna. Sed accumsan pellentesque magna quis lacinia. Aliquam placerat ultricies tellus vitae dictum. Nullam purus eros, dictum a ultricies non, eleifend at neque. Ut vestibulum nec nunc id luctus. Sed placerat augue non diam fermentum cursus. Mauris pharetra dignissim sapien, sagittis rhoncus turpis efficitur nec. Sed pellentesque, orci nec faucibus ultricies, risus quam accumsan tortor, nec commodo mi ante non quam.Ut porttitor nisi eget risus mattis porttitor eget a mi. In a fermentum mi. Praesent sagittis, quam ac porttitor vehicula, quam ligula rutrum nulla, sed consectetur purus felis vitae eros. Pellentesque sollicitudin erat non augue tempor pretium. Aliquam sit amet mi vel nibh lacinia commodo. Proin non arcu in ligula condimentum egestas ut vel mi. Aliquam accumsan, mauris id gravida pharetra, ante sapien porttitor eros, ac facilisis neque nunc eget justo. Proin aliquam, mauris vitae ornare accumsan, libero sapien molestie eros, non aliquam justo mi ullamcorper elit. Aliquam erat volutpat. Nunc massa purus, aliquet id tristique ac, ultricies et magna. Donec non risus at elit sodales egestas. Duis viverra diam vitae erat gravida feugiat. Nunc enim magna, fermentum quis dictum non, hendrerit vel arcu. Mauris ac facilisis mauris. Aenean eget elit vel orci rutrum tempus id nec ante. Pellentesque vel nunc iaculis, convallis nisl ut, interdum quam.",
    },
    {
      date: "Feb 22, 1997",
      time: "09:00AM - 11:00AM",
      duration: "30 minutes",
      notes:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi lectus, pretium et laoreet interdum, ullamcorper quis eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla sed justo molestie, efficitur metus eu, laoreet velit. Duis non nisi sed velit pharetra mollis in vitae magna. Sed accumsan pellentesque magna quis lacinia. Aliquam placerat ultricies tellus vitae dictum. Nullam purus eros, dictum a ultricies non, eleifend at neque. Ut vestibulum nec nunc id luctus. Sed placerat augue non diam fermentum cursus. Mauris pharetra dignissim sapien, sagittis rhoncus turpis efficitur nec. Sed pellentesque, orci nec faucibus ultricies, risus quam accumsan tortor, nec commodo mi ante non quam.Ut porttitor nisi eget risus mattis porttitor eget a mi. In a fermentum mi. Praesent sagittis, quam ac porttitor vehicula, quam ligula rutrum nulla, sed consectetur purus felis vitae eros. Pellentesque sollicitudin erat non augue tempor pretium. Aliquam sit amet mi vel nibh lacinia commodo. Proin non arcu in ligula condimentum egestas ut vel mi. Aliquam accumsan, mauris id gravida pharetra, ante sapien porttitor eros, ac facilisis neque nunc eget justo. Proin aliquam, mauris vitae ornare accumsan, libero sapien molestie eros, non aliquam justo mi ullamcorper elit. Aliquam erat volutpat. Nunc massa purus, aliquet id tristique ac, ultricies et magna. Donec non risus at elit sodales egestas. Duis viverra diam vitae erat gravida feugiat. Nunc enim magna, fermentum quis dictum non, hendrerit vel arcu. Mauris ac facilisis mauris. Aenean eget elit vel orci rutrum tempus id nec ante. Pellentesque vel nunc iaculis, convallis nisl ut, interdum quam.",
    },
    {
      date: "Feb 22, 1997",
      time: "09:00AM - 11:00AM",
      duration: "30 minutes",
      notes:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi lectus, pretium et laoreet interdum, ullamcorper quis eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla sed justo molestie, efficitur metus eu, laoreet velit. Duis non nisi sed velit pharetra mollis in vitae magna. Sed accumsan pellentesque magna quis lacinia. Aliquam placerat ultricies tellus vitae dictum. Nullam purus eros, dictum a ultricies non, eleifend at neque. Ut vestibulum nec nunc id luctus. Sed placerat augue non diam fermentum cursus. Mauris pharetra dignissim sapien, sagittis rhoncus turpis efficitur nec. Sed pellentesque, orci nec faucibus ultricies, risus quam accumsan tortor, nec commodo mi ante non quam.Ut porttitor nisi eget risus mattis porttitor eget a mi. In a fermentum mi. Praesent sagittis, quam ac porttitor vehicula, quam ligula rutrum nulla, sed consectetur purus felis vitae eros. Pellentesque sollicitudin erat non augue tempor pretium. Aliquam sit amet mi vel nibh lacinia commodo. Proin non arcu in ligula condimentum egestas ut vel mi. Aliquam accumsan, mauris id gravida pharetra, ante sapien porttitor eros, ac facilisis neque nunc eget justo. Proin aliquam, mauris vitae ornare accumsan, libero sapien molestie eros, non aliquam justo mi ullamcorper elit. Aliquam erat volutpat. Nunc massa purus, aliquet id tristique ac, ultricies et magna. Donec non risus at elit sodales egestas. Duis viverra diam vitae erat gravida feugiat. Nunc enim magna, fermentum quis dictum non, hendrerit vel arcu. Mauris ac facilisis mauris. Aenean eget elit vel orci rutrum tempus id nec ante. Pellentesque vel nunc iaculis, convallis nisl ut, interdum quam.",
    },
    {
      date: "Feb 22, 1997",
      time: "09:00AM - 11:00AM",
      duration: "30 minutes",
      notes:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi lectus, pretium et laoreet interdum, ullamcorper quis eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla sed justo molestie, efficitur metus eu, laoreet velit. Duis non nisi sed velit pharetra mollis in vitae magna. Sed accumsan pellentesque magna quis lacinia. Aliquam placerat ultricies tellus vitae dictum. Nullam purus eros, dictum a ultricies non, eleifend at neque. Ut vestibulum nec nunc id luctus. Sed placerat augue non diam fermentum cursus. Mauris pharetra dignissim sapien, sagittis rhoncus turpis efficitur nec. Sed pellentesque, orci nec faucibus ultricies, risus quam accumsan tortor, nec commodo mi ante non quam.Ut porttitor nisi eget risus mattis porttitor eget a mi. In a fermentum mi. Praesent sagittis, quam ac porttitor vehicula, quam ligula rutrum nulla, sed consectetur purus felis vitae eros. Pellentesque sollicitudin erat non augue tempor pretium. Aliquam sit amet mi vel nibh lacinia commodo. Proin non arcu in ligula condimentum egestas ut vel mi. Aliquam accumsan, mauris id gravida pharetra, ante sapien porttitor eros, ac facilisis neque nunc eget justo. Proin aliquam, mauris vitae ornare accumsan, libero sapien molestie eros, non aliquam justo mi ullamcorper elit. Aliquam erat volutpat. Nunc massa purus, aliquet id tristique ac, ultricies et magna. Donec non risus at elit sodales egestas. Duis viverra diam vitae erat gravida feugiat. Nunc enim magna, fermentum quis dictum non, hendrerit vel arcu. Mauris ac facilisis mauris. Aenean eget elit vel orci rutrum tempus id nec ante. Pellentesque vel nunc iaculis, convallis nisl ut, interdum quam.",
    },
    {
      date: "Feb 22, 1997",
      time: "09:00AM - 11:00AM",
      duration: "30 minutes",
      notes:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi lectus, pretium et laoreet interdum, ullamcorper quis eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla sed justo molestie, efficitur metus eu, laoreet velit. Duis non nisi sed velit pharetra mollis in vitae magna. Sed accumsan pellentesque magna quis lacinia. Aliquam placerat ultricies tellus vitae dictum. Nullam purus eros, dictum a ultricies non, eleifend at neque. Ut vestibulum nec nunc id luctus. Sed placerat augue non diam fermentum cursus. Mauris pharetra dignissim sapien, sagittis rhoncus turpis efficitur nec. Sed pellentesque, orci nec faucibus ultricies, risus quam accumsan tortor, nec commodo mi ante non quam.Ut porttitor nisi eget risus mattis porttitor eget a mi. In a fermentum mi. Praesent sagittis, quam ac porttitor vehicula, quam ligula rutrum nulla, sed consectetur purus felis vitae eros. Pellentesque sollicitudin erat non augue tempor pretium. Aliquam sit amet mi vel nibh lacinia commodo. Proin non arcu in ligula condimentum egestas ut vel mi. Aliquam accumsan, mauris id gravida pharetra, ante sapien porttitor eros, ac facilisis neque nunc eget justo. Proin aliquam, mauris vitae ornare accumsan, libero sapien molestie eros, non aliquam justo mi ullamcorper elit. Aliquam erat volutpat. Nunc massa purus, aliquet id tristique ac, ultricies et magna. Donec non risus at elit sodales egestas. Duis viverra diam vitae erat gravida feugiat. Nunc enim magna, fermentum quis dictum non, hendrerit vel arcu. Mauris ac facilisis mauris. Aenean eget elit vel orci rutrum tempus id nec ante. Pellentesque vel nunc iaculis, convallis nisl ut, interdum quam.",
    },
    {
      date: "Feb 22, 1997",
      time: "09:00AM - 11:00AM",
      duration: "30 minutes",
      notes:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi lectus, pretium et laoreet interdum, ullamcorper quis eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla sed justo molestie, efficitur metus eu, laoreet velit. Duis non nisi sed velit pharetra mollis in vitae magna. Sed accumsan pellentesque magna quis lacinia. Aliquam placerat ultricies tellus vitae dictum. Nullam purus eros, dictum a ultricies non, eleifend at neque. Ut vestibulum nec nunc id luctus. Sed placerat augue non diam fermentum cursus. Mauris pharetra dignissim sapien, sagittis rhoncus turpis efficitur nec. Sed pellentesque, orci nec faucibus ultricies, risus quam accumsan tortor, nec commodo mi ante non quam.Ut porttitor nisi eget risus mattis porttitor eget a mi. In a fermentum mi. Praesent sagittis, quam ac porttitor vehicula, quam ligula rutrum nulla, sed consectetur purus felis vitae eros. Pellentesque sollicitudin erat non augue tempor pretium. Aliquam sit amet mi vel nibh lacinia commodo. Proin non arcu in ligula condimentum egestas ut vel mi. Aliquam accumsan, mauris id gravida pharetra, ante sapien porttitor eros, ac facilisis neque nunc eget justo. Proin aliquam, mauris vitae ornare accumsan, libero sapien molestie eros, non aliquam justo mi ullamcorper elit. Aliquam erat volutpat. Nunc massa purus, aliquet id tristique ac, ultricies et magna. Donec non risus at elit sodales egestas. Duis viverra diam vitae erat gravida feugiat. Nunc enim magna, fermentum quis dictum non, hendrerit vel arcu. Mauris ac facilisis mauris. Aenean eget elit vel orci rutrum tempus id nec ante. Pellentesque vel nunc iaculis, convallis nisl ut, interdum quam.",
    },
    {
      date: "Feb 22, 1997",
      time: "09:00AM - 11:00AM",
      duration: "30 minutes",
      notes:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi lectus, pretium et laoreet interdum, ullamcorper quis eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla sed justo molestie, efficitur metus eu, laoreet velit. Duis non nisi sed velit pharetra mollis in vitae magna. Sed accumsan pellentesque magna quis lacinia. Aliquam placerat ultricies tellus vitae dictum. Nullam purus eros, dictum a ultricies non, eleifend at neque. Ut vestibulum nec nunc id luctus. Sed placerat augue non diam fermentum cursus. Mauris pharetra dignissim sapien, sagittis rhoncus turpis efficitur nec. Sed pellentesque, orci nec faucibus ultricies, risus quam accumsan tortor, nec commodo mi ante non quam.Ut porttitor nisi eget risus mattis porttitor eget a mi. In a fermentum mi. Praesent sagittis, quam ac porttitor vehicula, quam ligula rutrum nulla, sed consectetur purus felis vitae eros. Pellentesque sollicitudin erat non augue tempor pretium. Aliquam sit amet mi vel nibh lacinia commodo. Proin non arcu in ligula condimentum egestas ut vel mi. Aliquam accumsan, mauris id gravida pharetra, ante sapien porttitor eros, ac facilisis neque nunc eget justo. Proin aliquam, mauris vitae ornare accumsan, libero sapien molestie eros, non aliquam justo mi ullamcorper elit. Aliquam erat volutpat. Nunc massa purus, aliquet id tristique ac, ultricies et magna. Donec non risus at elit sodales egestas. Duis viverra diam vitae erat gravida feugiat. Nunc enim magna, fermentum quis dictum non, hendrerit vel arcu. Mauris ac facilisis mauris. Aenean eget elit vel orci rutrum tempus id nec ante. Pellentesque vel nunc iaculis, convallis nisl ut, interdum quam.",
    },
    {
      date: "Feb 22, 1997",
      time: "09:00AM - 11:00AM",
      duration: "30 minutes",
      notes:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi lectus, pretium et laoreet interdum, ullamcorper quis eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla sed justo molestie, efficitur metus eu, laoreet velit. Duis non nisi sed velit pharetra mollis in vitae magna. Sed accumsan pellentesque magna quis lacinia. Aliquam placerat ultricies tellus vitae dictum. Nullam purus eros, dictum a ultricies non, eleifend at neque. Ut vestibulum nec nunc id luctus. Sed placerat augue non diam fermentum cursus. Mauris pharetra dignissim sapien, sagittis rhoncus turpis efficitur nec. Sed pellentesque, orci nec faucibus ultricies, risus quam accumsan tortor, nec commodo mi ante non quam.Ut porttitor nisi eget risus mattis porttitor eget a mi. In a fermentum mi. Praesent sagittis, quam ac porttitor vehicula, quam ligula rutrum nulla, sed consectetur purus felis vitae eros. Pellentesque sollicitudin erat non augue tempor pretium. Aliquam sit amet mi vel nibh lacinia commodo. Proin non arcu in ligula condimentum egestas ut vel mi. Aliquam accumsan, mauris id gravida pharetra, ante sapien porttitor eros, ac facilisis neque nunc eget justo. Proin aliquam, mauris vitae ornare accumsan, libero sapien molestie eros, non aliquam justo mi ullamcorper elit. Aliquam erat volutpat. Nunc massa purus, aliquet id tristique ac, ultricies et magna. Donec non risus at elit sodales egestas. Duis viverra diam vitae erat gravida feugiat. Nunc enim magna, fermentum quis dictum non, hendrerit vel arcu. Mauris ac facilisis mauris. Aenean eget elit vel orci rutrum tempus id nec ante. Pellentesque vel nunc iaculis, convallis nisl ut, interdum quam.",
    },
  ];

  const showPopUp=()=>{
    document.getElementById("shadow").style.visibility="visible";
    document.getElementById("InteractionPopUp").style.visibility = "visible";
    
  }
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
          <div className="col-md-3" style={{ marginRight: "10px" }}>
            <button className="secondaryButton">
              <img src={Calendar} alt="" width={24} height={24} />
            </button>
          </div>
          <div className="col-md-3">
            <button className="secondaryButton">
              <img src={Upload} alt="" width={24} height={24} />
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
            <button className="primaryButton" onClick={()=>{showPopUp()}}>+ Interactions</button>
          </div>
        </div>
      </div>

      <div className="listCard" style={{ overflowY: "hidden" }}>
        <div className="list" style={{ height: "inherit" }}>
          <div
            className="listDataContainer"
            style={{ backgroundColor: "#E9EBEA" }}
          >
            <div className="listData">
              <h4>Date</h4>
            </div>
            <div className="listData">
              <h4>Time</h4>
            </div>
            <div className="listData">
              <h4>Duration</h4>
            </div>
            <div className="listData">
              <h4>Notes</h4>
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
                <div className="listData">
                  <h4>{data.date}</h4>
                </div>
                <div className="listData">
                  <h4>{data.time}</h4>
                </div>
                <div className="listData">
                  <h4>{data.duration}</h4>
                </div>
                <div className="listData">
                  <h4>
                    <EllipsisText text={data.notes} length="15" />
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Interaction Pop Up Started */}
      <div
        id="InteractionPopUp"
        className="col-md-12"
        style={{
          position: "absolute",
          width: "50vw",
          zIndex: "52",
          height: "80%",
          backgroundColor: "white",
          top: "10%",
          right: "0px",
          left: "25%",
          bottom: "0px",
          borderRadius: "20px",
          visibility:"hidden"
        }}
      >
        <div
          className="col-md-12"
          style={{ fontSize: "24px", fontWeight: "700", padding: "30px" }}
        >
          Add Interactions
        </div>
        <hr
          color=""
          style={{ width: "100%", color: "#DBDADD", margin: "0", padding: "0" }}
        />
        <div
          className="col-md-12"
          style={{
            fontSize: "14px",
            fontWeight: "500",
            color: "#929BA6",
            padding: "30px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          tortor risus, euismod a justo quis, pretium bibe ndum risus.
          Pellentesque sem eros, porttitor a ultricies id, consequat ut ex.
          Praesent odio ligula, gravida at pretium at, tempus sit amet felis.{" "}
        </div>

        <div
          className="row"
          style={{ padding: "0 30px", marginBottom: "20px" }}
        >
          <div className="col-md-6">
            <label
              htmlFor="FName"
              style={{
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "5px",
              }}
            >
              Interaction Date
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
          <div className="col-md-6">
            <label
              htmlFor="FName"
              style={{
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "5px",
              }}
            >
              Minutes
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
        </div>

        <div
          className="col-md-12"
          style={{ padding: "0 30px", marginBottom: "20px" }}
        >
          <label
            htmlFor="FName"
            style={{
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "5px",
            }}
          >
            Synchronous communication
          </label>
          <div>
            <div className="col-md-6 row">
              <div className="col-md-6">
                <div className="checkbox-wrapper-popUp">
                  <label
                    style={{
                      display: "flex",
                      fontSize: "14px",
                      alignItems: "center",
                      fontWeight: "500",
                    }}
                  >
                    <input
                      type="checkbox"
                      className={Sync ? "checkedPopUp" : "unCheckedPopUp"}
                      onChange={(check) => setsync((check) => !check)}
                    />
                    Yes (Synchronous)
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="checkbox-wrapper-popUp">
                  <label
                    style={{
                      display: "flex",
                      fontSize: "14px",
                      alignItems: "center",
                      fontWeight: "500",
                    }}
                  >
                    <input
                      type="checkbox"
                      className={UnSync ? "checkedPopUp" : "unCheckedPopUp"}
                      onChange={(check) => setunSync((check) => !check)}
                    />
                    No (Asynchronous)
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12" style={{ padding: "0 30px" }}>
          <label
            htmlFor="FName"
            style={{
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "5px",
            }}
          >
            Note
          </label>
          <br />
          <textarea
            rows={5}
            style={{
              border: "1px solid #DBDADD",
              padding: "10px",
              borderRadius: "8px",
              fontSize: "14px",
              width: "100%",
            }}
          />
        </div>
        <div className="row" style={{ padding: "0 30px" }}>
          <div className="col-md-6">
            <div className="col-md-4">
              <h4
                style={{
                  cursor: "pointer",
                  padding: "10px 0",
                  margin: "10px 0",
                }}
                onClick={() => {
                  hidePopUp();
                }}
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
            <div className="col-md-6">
              <button
                className="primaryButton"
                onClick={() => {
                  hidePopUp();
                }}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interactions;
