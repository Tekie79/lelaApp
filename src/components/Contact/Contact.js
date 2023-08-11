import image from "../assets/skyline.jpg";
import { HomeCard } from "../Main/homeCard";
export const Contact = () => {
  const homeData = {
    headline: "Contact Us",
    subtitle: "Our door is always open for a good cup of coffee.",
    image: image,
  };
  return (
    <div>
      <HomeCard data={homeData} />
    </div>
  );
};
