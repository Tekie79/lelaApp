import { HomeCard } from "../Main/homeCard";
import image from "../assets/business-2.jpg";
export const Solutions = () => {
  const homeData = {
    headline: "Accelerate your productivity.",
    subtitle:
      "We combine the power and productivity of a large managed services provider, with the agility of a start-up.",
    image: image,
  };
  return (
    <div className="solutions_container">
      <HomeCard data={homeData} />
    </div>
  );
};
