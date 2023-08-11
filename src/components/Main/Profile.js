import "./profile.css";
import { ProfileCard } from "../reusable/profileCard/profileCard";
import { profileData } from "../../datas/allDatas";
import { useState } from "react";
export const Profile = () => {
  const [selectedProfile, setSelectedProfile] = useState(0);

  //

  //handle Selection
  const handleSelection = (index) => {
    setSelectedProfile(index);
  };
  const renderProfile = profileData.map((profile) => {
    return <ProfileCard key={profile.id} profile={profile} />;
  });
  const renderBtn = profileData.map((profile, index) => {
    return (
      <i
        key={profile.id}
        className={
          index === selectedProfile
            ? "circle-solid"
            : "circle-regular"
        }
        onClick={() => handleSelection(index)}
      ></i>
    );
  });
  return (
    <div className="profile_container">
      {renderProfile[selectedProfile]}
      <div className="selector_container">{renderBtn}</div>
    </div>
  );
};
