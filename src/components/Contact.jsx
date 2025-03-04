import React from "react";
import "./Components.css";
import profileImage1 from "/src/assets/admin_1.jpg";
import profileImage2 from "/src/assets/admin_2.jpg";
const backgroundImage = "/aboutus_bg.jpg";

const Contact = () => {
  return (
    <>
      <section style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="tarot-section overlay">
          <h1 className="tarot-title">Where Do I contact?</h1>
          <p className="tarot-text">
            You can contact with us by clicking on our profiles.
          </p>
        </div>
        <div className="container my-3 p-3">
          <div className="row">
            <div className="col d-flex flex-column justify-content-center align-items-center">
              <div className="profile_overlay"></div>
              <div className="profile_card border-0">
                <img src={profileImage1} alt="" className="card-img-top" />
              </div>
            </div>
            <div className="col d-flex flex-column justify-content-center align-items-center">
              <div className="profile_overlay"></div>
              <div className="profile_card border-0">
                <img src={profileImage2} alt="" className="card-img-top" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
