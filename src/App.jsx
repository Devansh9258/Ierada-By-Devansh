import Header from "./components/Header";
import Carousel from "./components/Main-carousel";
import Categories from "./components/Categories";
import NewArrival from "./components/New-arrival";
import BuyRegion from "./components/Buy-Region";
export default function App() {
  return (
    <>
      <Header />
      <Carousel />
      <Categories />
      <NewArrival />
      <BuyRegion />
    </>
  );
}
