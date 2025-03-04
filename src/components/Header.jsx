import React from "react";
import "./Components.css";
const backgroundImage = "./public/background.jpg";
const backgroundImage_2 = "./public/packages_bg.jpg";

const Header = () => {
  return (
    <>
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="overlay">
          <h1 className="hero-title">Unlock the Secrets of the Universe</h1>
        </div>
      </div>

      <section style={{ backgroundImage: `url(${backgroundImage_2})` }}>
        <div className="overlay">
          <div className="tarot-section ">
            <h1 className="tarot-title">What is Tarot?</h1>
            <p className="tarot-text">
              Tarot is a deck of 78 cards used for divination, self-reflection,
              and spiritual guidance. The deck is divided into the Major Arcana,
              which represents major life events, and the Minor Arcana, which
              reflects day-to-day experiences. Tarot readings involve shuffling
              the cards and drawing a set number to interpret their meanings
              based on their symbolism and positions. People turn to tarot for
              clarity, insight into life challenges, and to explore their
              emotional and spiritual state. While not meant for exact
              predictions, tarot serves as a powerful tool for self-discovery
              and guidance.
            </p>
          </div>
          <div className="tarot-history ">
            <h1 className="tarot-title">What is the purpose of Tarot?</h1>
            <p className="tarot-text">
              The purpose of tarot is to provide guidance, self-reflection, and
              insight into various aspects of life. It is often used to gain
              clarity on personal questions, explore emotional states, or
              navigate difficult decisions. Tarot serves as a tool for
              introspection, helping individuals understand themselves better
              and uncover hidden truths. It also offers a way to gain
              perspective on life challenges, enabling people to make more
              informed choices. Ultimately, tarot is a spiritual tool that
              promotes self-awareness and growth by tapping into intuition and
              symbolism.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
