import "./footerCard.css";
import { Button } from "../buttons/Button";
export const FooterCard = ({ footerData }) => {
  const { title, description, btnName, linkAddress, image } = footerData;

  const styles = {
    background: `linear-gradient(to right,rgba(242, 242, 242, 1), rgba(242, 242, 242, 0.97), rgba(242, 242, 242, 0.5)), url("${image}")`,
  };
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="footer_card" style={styles}>
      <h1 className="footer_title">{title}</h1>
      <p className="footer_description">{description}</p>
      <div className="btn_container">
        <Button
          btnName={btnName}
          linkAddress={linkAddress}
          handleClick={handleScroll}
        />
      </div>
    </div>
  );
};
