import Header from "./components/Header";
import Carousel from "./components/Main-carousel";
import Categories from "./components/Categories";
import NewArrival from "./components/New-arrival";
import BuyRegion from "./components/Buy-Region";
import RecentlyViewed from "./components/Recently-viewed";
export default function App() {
  return (
    <>
      <Header />
      <Carousel />
      <Categories />
      <NewArrival />
      <BuyRegion />
      <RecentlyViewed />

      <footer>
        <p className="footer">
          Copyright © 2026. All rights reserved by Devansh Mehra.
        </p>
      </footer>
    </>
  );
}
