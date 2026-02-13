import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sale from "../assets/Sale.jpg";
import MegaSale from "../assets/MegaSale.jpg";
import Discount from "../assets/Discount.jpg";
import Discount2 from "../assets/Discount2.jpg";

export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    BiPause: true,
  };

  return (
    <div className="App">
      <Slider {...settings}>
        <div>
          <img
            src={Sale}
            style={{ height: "200px", width: "100%", cursor: "pointer" }}
            onClick={() =>
              (window.location.href = "https://www.ierada.com/collection/all")
            }
          />
        </div>
        <div>
          <img
            src={MegaSale}
            style={{ height: "200px", width: "100%", cursor: "pointer" }}
          />
        </div>
        <div>
          <img
            src={Discount}
            style={{ height: "200px", width: "100%", cursor: "pointer" }}
          />
        </div>
        <div>
          <img
            src={Discount2}
            style={{ height: "200px", width: "100%", cursor: "pointer" }}
          />
        </div>
      </Slider>
    </div>
  );
}
