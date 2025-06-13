import React from "react";
import "./Hero.css";

// Image imports
import h1 from "../assets/images/h11.jpg";
import h2 from "../assets/images/h12.jpg";
import h3 from "../assets/images/h21.jpg";
import h4 from "../assets/images/h22.jpg";
import h5 from "../assets/images/h31.jpg";
import h6 from "../assets/images/h32.jpg";
import h7 from "../assets/images/h41.jpg";
import h8 from "../assets/images/h42.jpg";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-wrapper">
          {/* LEFT IMAGE AREA */}
          <div className="hero-images">
            <div className="image-column scroll-down">
              <img src={h1} alt="img1" />
              <img src={h2} alt="img2" />
              <img src={h3} alt="img3" />
              <img src={h4} alt="img4" />
            </div>
            <div className="image-column scroll-up">
              <img src={h5} alt="img5" />
              <img src={h6} alt="img6" />
              <img src={h7} alt="img7" />
              <img src={h8} alt="img8" />
            </div>
          </div>

          {/* RIGHT TEXT AREA */}
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-heading">
                <div className="line1">Book an appointment with</div>
                <div className="line2">
                  <span className="gradient">lifestyle medicine</span> experts
                </div>
              </h1>
              <p className="hero-subheading">
                Optimize your lifestyle and reverse chronic diseases.
              </p>
            </div>
          </div>

          {/* FORM AREA — OVERLAPPING CENTER BOTTOM */}
          <div className="hero-form">
            <div className="input-wrapper">
              <span className="input-icon">📄</span>
              <input type="text" placeholder="Condition, procedure, speciality..." />
            </div>

            <div className="input-wrapper">
              <span className="input-icon">📍</span>
              <input type="text" placeholder="City, state, or zipcode" />
            </div>

            <div className="input-wrapper">
              <span className="input-icon">🛡️</span>
              <input type="text" placeholder="Insurance carrier" />
            </div>

            <button
              style={{
                width: "180px",
                height: "50px",
                fontSize: "1.2rem",
                background: "linear-gradient(to right, #4CAF50, #00BCD4)", // Gradient color
                color: "white",
                borderRadius: "8px",
                border: "none",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
              }}
            >
              <span className="search-icon">🔍</span> Find now
            </button>
          </div>
        </div>
      </section>
      <div className="angled-divider"></div>

      
    </>
  );
};

export default Hero;
