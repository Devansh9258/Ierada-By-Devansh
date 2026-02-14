import "./Buy-Region.css";
import heading_decoration_left from "../assets/heading_decoration_left.svg";
import heading_decoration_right from "../assets/heading_decoration_right.svg";
import Tamil_Nadu from "../assets/Tamil_Nadu.jpg";
import Gujarat from "../assets/Gujarat.jpg";
import Uttar_pradesh from "../assets/Uttar_pradesh.jpg";
import Panipat from "../assets/Panipat.jpg";
import Shopping from "../assets/Shopping.jpg";

export default function BuyRegion() {
  return (
    <div className="buy-region">
      <div className="buy-region-container">
        <h2>
          <img
            src={heading_decoration_left}
            alt="Decoration Left"
            className="region-left-decoration"
          />
          <span className="orange">Buy</span> by Region
          <img
            src={heading_decoration_right}
            alt="Decoration Right"
            className="region-right-decoration"
          />
        </h2>
      </div>
      <h3 className="sub-heading">
        Compare and purchase plans tailored to your location
      </h3>
      <p className="description">
        Would you like me to make this more formal (professional website style)
        or catchy (marketing/ad style)?
      </p>
      <div className="region-section">
        <div className="region-grid">
          <div className="region-item">
            <img src={Tamil_Nadu} alt="Tamil Nadu" />
            <div className="overlay">
              <button onClick={() => alert("Coming Soon!")}>
                Explore more →
              </button>
            </div>
          </div>

          <div className="region-item">
            <img src={Uttar_pradesh} alt="Uttar Pradesh" />
            <div className="overlay">
              <button onClick={() => alert("Coming Soon!")}>
                Explore more →
              </button>
            </div>
          </div>

          <div className="region-item">
            <img src={Gujarat} alt="Gujarat" />
            <div className="overlay">
              <button onClick={() => alert("Coming Soon!")}>
                Explore more →
              </button>
            </div>
          </div>

          <div className="region-item">
            <img src={Panipat} alt="Uttar Pradesh" />
            <div className="overlay">
              <button onClick={() => alert("Coming Soon!")}>
                Explore more →
              </button>
            </div>
          </div>
        </div>

        <div className="shopping-banner">
          <img src={Shopping} alt="Mega Sale" />
        </div>
      </div>
    </div>
  );
}
