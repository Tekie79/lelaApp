import image from "../assets/work.jpg";
import { HomeCard } from "../Main/homeCard";

export const Careers = () => {
  const homeData = {
    headline: "Work with us",
    subtitle:
      "Explore remote-friendly, hybrid opportunities and join our mission to make tech smarter.",
    image: image,
  };
  return (
    <div>
      <HomeCard data={homeData} />
    </div>
  );
};
