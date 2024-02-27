import { Link, Outlet } from "react-router-dom";
import CartWidget from "../common/CartWidget";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="containerNavbar">
        <Link to="/" style={{ color: "beige" }}>
          Tinta Virtual
        </Link>
        <ul className="categories">
          <Link to="/">Todas</Link>
          <Link to="/category/nacional">Nacional</Link>
          <Link to="/category/internacional">Internacional</Link>
        </ul>
        <CartWidget />
      </div>
      <Outlet />
    </>
  );
};