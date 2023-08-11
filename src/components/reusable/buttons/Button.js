import "./button.css";
import { Link } from "react-router-dom";
export const Button = ({ btnName, linkAddress, handleClick }) => {
  return (
    <Link to={linkAddress}>
      <button className="btn_main" onClick={handleClick}>
        {btnName}
      </button>
    </Link>
  );
};
