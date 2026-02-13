import "./Header.css";
import logo from "../assets/IERADA.svg";
import {
  CiLocationOn,
  CiMicrophoneOn,
  CiSearch,
  CiHeart,
  CiShoppingCart,
  CiLogin,
} from "react-icons/ci";

export default function Header() {
  return (
    <>
      <div className="head-navbar">
        <img src={logo} alt="Ierada Logo" className="logo" />

        <div className="location-bar">
          <CiLocationOn size={20} />
          <button className="location-button">Permission Denied</button>
        </div>

        <div className="search-bar">
          <CiSearch size={20} className="icon" />
          <input placeholder="Search for items..." />
          <CiMicrophoneOn size={20} className="icon mic" />
        </div>

        <div className="actions">
          <div className="wishlist-container">
            <CiHeart size={22} />
            <span>Wishlist</span>
          </div>

          <div className="cart-container">
            <CiShoppingCart size={22} />
            <span>Cart</span>
          </div>

          <div className="profile">
            <button className="profile-button">
              <CiLogin size={22} />
            </button>
          </div>
        </div>
      </div>

      <div className="item-nav">
        <a href="#">SHOP</a>
        <a href="#">MEN</a>
        <a href="#">PET CARE</a>
        <a href="#">ELECTRONIC</a>
        <a href="#">HEALTH & BEAUTY</a>
        <a href="#">AUTOMOTIVE</a>
        <a href="#">OFFICE SUPPLIES</a>
        <a href="#">WOMEN</a>
        <a href="#">BABY & KID</a>
        <a href="#">PERSONAL CARE</a>
        <a href="#">TOYS & SPORTS</a>
        <a href="#">LUGGAGE & BAGS</a>
        <a href="#">KITCHEN & COOKWARE</a>
        <a href="#">SCHOOL, OFFICE & STATIONERY</a>
        <a href="#">HOME DECOR & FURNITURE</a>
      </div>
    </>
  );
}
