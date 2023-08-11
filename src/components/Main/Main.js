import "./Main.css";
import { HomeCard } from "./homeCard";
import { Services } from "./features/services";
import { Difference } from "./features/difference";
import { Global } from "../reusable/global/global";
import image from "../assets/business.jpg";
import { homeGlobalData } from "../../datas/allDatas";
import { Profile } from "./Profile";
import { AdditionalContent } from "./additionalContent/additionalContent";

//


// Main Component
export const Main = () => {
  const homeData = {
    headline: "Work, meet flow",
    subtitle:
      "Spend more time on the stuff that matters. Let us worry about the rest.",
    image: image,
  };
  return (
    <div className="main-container">
      <HomeCard data={homeData} />
      <Services />
      <Difference />
      <Global globalData={homeGlobalData} link="/careers" />
      <Profile />
      <AdditionalContent/>
    </div>
  );
};
