import { HomeCard } from "../Main/homeCard";
import image from "../assets/skyline.jpg";
export const Company = () => {
  const homeData = {
    headline: "Deliver productivity at scale",
    subtitle: "Powering the next generation of scalable IT productivity.",
    image: image,
  };
  return (
    <div className="company_container">
      <HomeCard data={homeData} />
    </div>
  );
};
