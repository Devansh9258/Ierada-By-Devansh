import "./Categories.css";
import heading_decoration_left from "../assets/heading_decoration_left.svg";
import heading_decoration_right from "../assets/heading_decoration_right.svg";
import baby from "../assets/baby.png";
import Bags from "../assets/Bags.png";
import Home from "../assets/Home.png";
import Kitchen from "../assets/Kitchen.png";
import Men from "../assets/Men.png";
import Personal from "../assets/Personal.png";
import Stationary from "../assets/Stationary.png";
import Toys from "../assets/Toys.png";
import Women from "../assets/Women.png";

export default function Categories() {
  return (
    <>
      <div className="categories-section">
        <div className="heading-wrapper">
          <h2>
            <img
              src={heading_decoration_left}
              alt="left-decoration"
              className="left-decoration"
            />
            <span className="orange">Go</span> With Categories
          </h2>{" "}
          <img
            src={heading_decoration_right}
            alt="right-decoration"
            className="right-decoration"
          />
        </div>
        <h3 className="sub-heading">Grab It Before It's Gone</h3>
        <p className="description">
          "Don't wait! These exclusive deals are live only for today. Grab your
          favorites before the timer runs out."
        </p>
      </div>
      <div
        className="categories-grid"
        onClick={() => alert("Category clicked!")}
      >
        <figcaption>
          <img src={baby} alt="Baby & Kids" /> BABY & KIDS
        </figcaption>

        <figcaption>
          <img src={Bags} alt="Bags & Backpacks" /> BAGS & BACKPACKS
        </figcaption>

        <figcaption>
          <img src={Home} alt="Home & Kitchen" /> HOME & KITCHEN
        </figcaption>

        <figcaption>
          <img src={Kitchen} alt="Kitchen & Dining" /> KITCHEN & DINING
        </figcaption>

        <figcaption>
          <img src={Men} alt="Men's Fashion" /> MEN'S FASHION
        </figcaption>

        <figcaption>
          <img src={Personal} alt="Personal Care" /> PERSONAL CARE
        </figcaption>

        <figcaption>
          <img src={Stationary} alt="Stationary" /> STATIONARY
        </figcaption>

        <figcaption>
          <img src={Toys} alt="Toys & Games" /> TOYS & GAMES
        </figcaption>

        <figcaption>
          <img src={Women} alt="Women's Fashion" /> WOMEN'S FASHION
        </figcaption>
      </div>
    </>
  );
}
