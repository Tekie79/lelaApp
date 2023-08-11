import "./additionalContent.css";
import { DetailsCard } from "../../reusable/detailsCard/detailsCard";
import { additionalData } from "../../../datas/allDatas";
import { SmallCard } from "../../reusable/smallCard/smallCard";
export const AdditionalContent = () => {
  const contentData = {
    title: "Why we're here",
    description:
      "We're here because we believe real change doesn't happen through words, it happens through actions. It only happens when people come together to drive work forward. We are not a technology company powered by people, we are a people company driven by technology. Our people are curious, ambitious, and kind, always dreaming of a better future. Look around and you’ll see there's no greater opportunity to change the world than with technology.",
  };
  //
  //Render Card
  const renderAdditionalCards = additionalData.map((cardContent) => {
    return <SmallCard key={cardContent.id} smallCardData={cardContent} />;
  });
  return (
    <div className="home_additonal-content">
      <DetailsCard contentData={contentData} />
      <div className="small-cards-container">
      {renderAdditionalCards}
      </div>
      
    </div>
  );
};
