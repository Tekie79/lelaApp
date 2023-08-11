import "./footer.css";
import { FooterCard } from "../reusable/footerCard/footerCard";
import { footerData } from "../../datas/allDatas";
import { Link } from "react-router-dom";
export const Footer = () => {
  const handleBrandClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="footer">
      <div className="footer_card-container">
        <FooterCard footerData={footerData} />
      </div>
      <footer className="footer_body-container">
        <div className="footer_links">
          <div className="footer_links-brand" onClick={handleBrandClick}>
            <Link to="/">
              <h5 className="footer_brand">ZEGA</h5>
              <p className="footer_subtitle">Technologies</p>
            </Link>
          </div>
          <div className="footer_social-media">
            <a href="#">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer_sub-menu">
          <p className="footer_sub-headlines">Solutions</p>
          <div className="footer_lists">
            <p>
              <Link to="">Advisory & Transformation</Link>
            </p>
            <p>
              <Link to="">Architecture & Integration</Link>
            </p>
            <p>
              <Link to="">Development & Testing</Link>
            </p>
            <p>
              <Link to="">Support & Maintenance</Link>
            </p>
          </div>
        </div>
        <div className="footer_sub-menu">
          <p className="footer_sub-headlines">Company</p>
          <div className="footer_lists" onClick={handleBrandClick}>
            <p>
              <Link to="/solutions">Solutions</Link>
            </p>
            <p>
              <Link to="/company">About</Link>
            </p>
            <p>
              <Link to="/careers">Careers</Link>
            </p>
            <p>
              <Link to="/contact">Contact Us</Link>
            </p>
          </div>
        </div>
        <div className="footer_sub-menu">
          <p className="footer_sub-headlines">Legal</p>
          <div className="footer_lists">
            <p>
              <Link to="">Terms of Use</Link>
            </p>
            <p>
              <Link to="">Privacy Policy</Link>
            </p>
            <p>
              <Link to="">Candidate Privacy Notice</Link>
            </p>
            <p>
              <Link to="">Cookie Settings</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
