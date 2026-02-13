import Header from "./components/Header";
import Carousel from "./components/Main-carousel";
import Categories from "./components/Categories";
import NewArrival from "./components/New-arrival";
import BuyRegion from "./components/Buy-Region";
import RecentlyViewed from "./components/Recently-viewed";
import "./App.css";
export default function App() {
  return (
    <>
      <Header />
      <Carousel />
      <Categories />
      <NewArrival />
      <BuyRegion />
      <RecentlyViewed />
    </>
  );
}
