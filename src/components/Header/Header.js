import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";
export const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="header-container">
      <div className="brand">
        <Link to="/">
          <h5>ZEGA</h5>
          <p className="subtitle">Technologies</p>
        </Link>
      </div>
      <div className="active">
        <span className="burger">
          <i className="fa fa-bars" onClick={() => setShow(true)}></i>
        </span>
      </div>

      <div
        className={show ? "show menu-container" : "menu-container"}
        onClick={() => setShow(false)}
      >
        <Link to="/solutions" ><span className="menu">Solutions</span></Link>
        <Link to="/company"><span className="menu">Company</span></Link>
        <Link to="/careers"><span className="menu">Careers</span></Link>
        <Link to="/contact"><span className="menu">Contact Us</span></Link>
        <Link to="/login">
          <button className="btn-join">Login</button>
        </Link>
      </div>
    </div>
  );
};
