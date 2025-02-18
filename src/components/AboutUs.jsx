import React from "react";
const backgroundImage = "./public/aboutus_bg.jpg";

const AboutUs = () => {
  return (
    <>
      <section style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="overlay">
          <div className="about-us">
            <h2 className="about-title">About Us</h2>
            <p className="about-text">
              We are passionate about empowering individuals through tarot
              readings. Our platform connects you with experienced readers who
              provide guidance, clarity, and insights into your life's journey.
              Whether you're seeking answers or looking to discover yourself, we
              are here to illuminate your path with wisdom and intuition.
            </p>
          </div>
          <div className="goals">
            <h2 className="goal-title">Our Goals</h2>
            <p className="goal-text">
              Our primary goal is to ensure our clients achieve success in all
              aspects of their lives. We are dedicated to understanding their
              unique challenges and providing tailored solutions to help
              overcome obstacles effectively. Through our guidance, we aim to
              empower individuals with clarity, confidence, and actionable
              insights. By focusing on solving problems and offering meaningful
              direction, we help our clients unlock their full potential.
              Together, we work to illuminate the path toward their goals and
              ultimate success.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
