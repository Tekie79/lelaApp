import "./smallCard.css";

export const SmallCard = ({ smallCardData }) => {
  const { iconClass, title, description } = smallCardData;
  return (
    <div className="small_card-container">
      <i className={`small_card-icon ${iconClass}`}></i>
      <h5 className="small_card-title">{title}</h5>
      <p className="small_card-description">{description}</p>
    </div>
  );
};
