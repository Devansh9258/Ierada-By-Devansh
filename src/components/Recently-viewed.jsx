import heading_decoration_left from "../assets/heading_decoration_left.svg";
import heading_decoration_right from "../assets/heading_decoration_right.svg";
import "./Recently-viewed.css";

export default function RecentlyViewed() {
  return (
    <div className="recently-viewed-container">
      <div className="recently-heading">
        <img
          src={heading_decoration_left}
          alt="Left decoration"
          className="recently-decoration-left"
        />

        <h2>
          <span className="orange">Recently</span> Viewed
        </h2>

        <img
          src={heading_decoration_right}
          alt="Right decoration"
          className="recently-decoration-right"
        />
      </div>

      <h3 className="sub-heading">Continue Browsing these Brands</h3>

      <p className="description">
        Keep exploring, your next favorite brand might be just a click away.
      </p>
      <p className="sub-description">You haven't viewed any products yet.</p>
      <button
        className="shop-now-btn"
        onClick={() => alert("Shop Now clicked!")}
      >
        Shop Now
      </button>
    </div>
  );
}
