import "./global.css";
import worldMap from "../../assets/world.png";
import { Button } from "../buttons/Button";
export const Global = ({ globalData, link }) => {
  const { title, description, lists, btnName } = globalData;
  const renderLists = lists.map((list) => {
    return (
      <em key={list.id}>
        <li>{list.content}</li>
      </em>
    );
  });
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="global_section">
      <div className="global_body">
        <div className="global_body-map">
          <img src={worldMap} alt="world map" className="dotted_map" />
        </div>
        <div className="global_body-description">
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="global_list">
            <ul>{renderLists}</ul>
            <Button
              btnName={btnName}
              linkAddress={link}
              handleClick={handleScroll}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
