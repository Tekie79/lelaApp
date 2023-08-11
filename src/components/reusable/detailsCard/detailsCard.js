import "./detailsCard.css";

export const DetailsCard = ({ contentData }) => {
  const { title, description } = contentData;
  return (
    <div className="details_card">
      <h1 className="details_title">{title}</h1>
      <p className="details_description">{description}</p>
    </div>
  );
};
