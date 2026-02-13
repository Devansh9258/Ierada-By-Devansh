import "./New-arrival.css";
import heading_decoration_left from "../assets/heading_decoration_left.svg";
import heading_decoration_right from "../assets/heading_decoration_right.svg";
import NewArrivalBanner from "../assets/NewArrivalBanner.png";
export default function NewArrival() {
  return (
    <div className="new-arrival-container">
      <div className="new-arrival-heading">
        <h2>
          <img
            src={heading_decoration_left}
            alt="New Arrival Heading Decoration Left"
            className="arrival-left-decoration"
          />
          <span className="orange">New</span> Arrivals
          <img
            src={heading_decoration_right}
            alt="New Arrival Heading Decoration Right"
            className="arrival-right-decoration"
          />{" "}
        </h2>
      </div>

      <h3 className="sub-heading">“What's New this week at IERADA”</h3>
      <img
        src={NewArrivalBanner}
        alt="New Arrival Banner"
        className="new-arrival-banner"
        onClick={() => alert("New Arrival Coming Soon!")}
      />
    </div>
  );
}
