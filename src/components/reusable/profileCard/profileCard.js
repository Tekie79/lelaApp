import "./profileCard.css"
export const ProfileCard = ({ profile }) => {
  const { picture, testimony, name, department } = profile;
  return (
    <div className="profile_card">
      <div >
        <img src={picture} alt={name}  className="profile_picture"/>
      </div>
     <p className="profile_testimony">{testimony}</p>
      <div className="profile_title">
        <strong className="profile_name">{name}</strong>
        <p className="profile_department">{department}</p>
      </div>
    </div>
  );
};
