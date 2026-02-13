import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sale from "../assets/Sale.jpg";
import MegaSale from "../assets/MegaSale.jpg";

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
            src="https://images.pexels.com/photos/18887675/pexels-photo-18887675.jpeg?_gl=1*12pfcb7*_ga*Mjc1Nzc4NjY2LjE3NzA5NzU2OTk.*_ga_8JE65Q40S6*czE3NzA5NzU2OTgkbzEkZzEkdDE3NzA5NzU3MzIkajI2JGwwJGgw"
            style={{ height: "200px", width: "100%", cursor: "pointer" }}
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/18887675/pexels-photo-18887675.jpeg?_gl=1*12pfcb7*_ga*Mjc1Nzc4NjY2LjE3NzA5NzU2OTk.*_ga_8JE65Q40S6*czE3NzA5NzU2OTgkbzEkZzEkdDE3NzA5NzU3MzIkajI2JGwwJGgw"
            style={{ height: "200px", width: "100%", cursor: "pointer" }}
          />
        </div>
      </Slider>
    </div>
  );
}
