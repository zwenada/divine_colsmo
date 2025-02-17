import React from "react";
import serviceImage1 from "/src/assets/service_1.jpg";
import serviceImage2 from "/src/assets/service_3.jpg";
import tarotImage1 from "/src/assets/tarot_1.jpg";
import tarotImage2 from "/src/assets/tarot_2.jpg";
import magicImage1 from "/src/assets/magic_candle.jpg";
import runeImage2 from "/src/assets/rune.jpg";
const backgroundImage = "src/assents/packages_bg.jpg";



const Services = () => {
  return (
    <>
      <section style={{ backgroundImage: `url(${backgroundImage})` }}>
        <h1 className="services-title overlay">
          Discover Insight and Guidance with Our Tarot Reading Services
        </h1>
        <div className="card-group card-display">
          <div className="card ">
            <img src={serviceImage1} className="card-img-top" alt="..." />
            {/* <div className="card-body"> */}
            <h5 className="card-title daily-title">🌞 Daily Tarot Message</h5>
            <p className="daily-text">
              Daily Tarot is the reading for your day. We will take care the
              service at morning and watch your fortune. So, we can tell advice
              you what to wear and what to advoice. If you are interesting, you
              can click on image and read more detail.
            </p>
            <div className="hover-text">
              <ul className="weekly-text ">
                <li className="package-item">
                  <strong>Package Name:</strong> Daily Tarot Insight
                </li>
                <li className="package-item ">
                  <strong>About Package:</strong> Start your day with clarity
                  and purpose. Let today’s Tarot message guide your thoughts and
                  actions, offering insight into the energy surrounding you.
                </li>
                <li className="package-item">
                  <strong>Price:</strong> $20
                </li>
              </ul>
              {/* </div> */}
            </div>
          </div>
          <div className="card ">
            <img src={tarotImage1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title daily-title">🌞 Love Tarot reading</h5>
              <p className="daily-text">
                love Tarot is the reading for your lovelife. We will take care
                the service and watch your fortune. So, we can tell advice If
                you are interesting, you can click on image and read more
                detail.
              </p>
              <div className="hover-text">
                <ul className="weekly-text ">
                  <li className="package-item">
                    <strong>Package Name:</strong> Love Tarot reading
                  </li>
                  <li className="package-item ">
                    <strong>About Package:</strong> Your future love-life.
                    Partner energy checking and we will read your "past, present
                    and future".
                  </li>
                  <li className="package-item">
                    <strong>Price:</strong> $35
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="card-group card-display mt-5">
          <div className="card ">
            <img src={serviceImage2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title daily-title">
                🌞 Career Tarot Reading
              </h5>
              <p className="daily-text">
                We will take care the service for your career and watch your
                fortune. So, we can tell advice you what to wear and what to
                advoice at your work place. If you are interesting, you can
                click on image and read more detail.
              </p>
              <div className="hover-text">
                <ul className="weekly-text ">
                  <li className="package-item">
                    <strong>Package Name:</strong> Career Tarot Insight
                  </li>
                  <li className="package-item ">
                    <strong>About Package:</strong> About your career and what
                    to do and what to wear. Focus on your career and make some
                    ritual.
                  </li>
                  <li className="package-item">
                    <strong>Price:</strong> $45
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card ">
            <img src={tarotImage2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title daily-title">
                Relationship Tarot Message
              </h5>
              <p className="daily-text">
                We will take care your relationship problem and your single
                life. This package include ritual and some others fancy thing.
                We will use three spread cards reading and focus on your side.
              </p>
              <div className="hover-text">
                <ul className="weekly-text ">
                  <li className="package-item">
                    <strong>Package Name:</strong> Relationship Tarot Package
                  </li>
                  <li className="package-item ">
                    <strong>About Package:</strong> Relationship package is not
                    only for relationship but also for single people. There will
                    be three spread cards reading. If you have bad luck, don't
                    worry. We are expects in ritual.
                  </li>
                  <li className="package-item">
                    <strong>Price:</strong> $75
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ backgroundImage: `url(${backgroundImage})` }}>
        <h1 className="services-title overlay">
          living in the Universe, feel the energy flow and get Ritual
        </h1>
        <div className="card-group card-display">
          <div className="card ">
            <img src={magicImage1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title daily-title">
                🌞 Candle ritual (Inn, Sama)
              </h5>
              <p className="daily-text">
                Candle ritual have many types like love, luck and career. We
                will use our traditional ritual (Inn,Sama). It is hard to create
                and also powerfull.
              </p>
              <div className="hover-text">
                <ul className="weekly-text ">
                  <li className="package-item">
                    <strong>Package Name:</strong> Ritual Candle
                  </li>
                  <li className="package-item ">
                    <strong>About Package:</strong>Inn, Sama candle package
                    include candle that we create and pray to Devia. That need
                    to wait 1 week or less than that.
                  </li>
                  <li className="package-item">
                    <strong>Price:</strong> $35
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card ">
            <img src={runeImage2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title daily-title">🌞 Daily Tarot Message</h5>
              <p className="daily-text">
                Daily Tarot is the reading for your day. We will take care the
                service at morning and watch your fortune. So, we can tell
                advice you what to wear and what to advoice. If you are
                interesting, you can click on image and read more detail.
              </p>
              <div className="hover-text">
                <ul className="weekly-text ">
                  <li className="package-item">
                    <strong>Package Name:</strong> Daily Tarot Insight
                  </li>
                  <li className="package-item ">
                    <strong>About Package:</strong> Start your day with clarity
                    and purpose. Let today’s Tarot message guide your thoughts
                    and actions, offering insight into the energy surrounding
                    you.
                  </li>
                  <li className="package-item">
                    <strong>Price:</strong> $20
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="get-start-container overlay">
          <h2 className="get-title">Get Started with Tarot</h2>
          <p className="get-text">
            Ready to unlock the wisdom of the Tarot cards? Start your journey
            with a personalized reading. Whether you're seeking guidance,
            clarity, or a new perspective, the Tarot is here to help you on your
            path.
          </p>
          <a
            href="https://www.facebook.com/profile.php?id=61556887649786"
            target="_blank"
            rel="noopener noreferrer"
            className="get-start-link"
          >
            <button className="get-start-button">Get Started</button>
          </a>
        </div>
      </section>
    </>
  );
};

export default Services;
