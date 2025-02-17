import React from "react";
import profileImage1 from "/src/assets/admin_1.jpg";
import profileImage2 from "/src/assets/admin_2.jpg";
const backgroundImage = "src/assets/aboutus_bg.jpg";

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
        <div className="profile-container">
          <div className="row">
            <div className="col-md-6 mx-auto" >
              <div className="profile">
                <a
                  href="https://www.facebook.com/jane.smith"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={profileImage1}
                    alt="Jane Smith"
                    className="profile-image"
                  />
                </a>
                <h2 className="profile-name">Sayr Zwel</h2>
                <ul className="profile-details">
                  <li className="detail">Tarot Reader</li>
                  <li className="detail">Magus</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 mx-auto">
              <div className="profile">
                <a
                  href="https://www.facebook.com/john.doe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={profileImage2}
                    alt="John Doe"
                    className="profile-image"
                  />
                </a>
                <h2 className="profile-name">Sao Nan Waddy</h2>
                <ul className="profile-details">
                  <li className="detail">Tarot Reader</li>
                  <li className="detail">Spellcraft and Candle magic</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
