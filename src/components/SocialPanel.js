import { ReactComponent as Face1 } from '../assets/face_1_plain.svg';


const SocialPanel = (props) => {
  const profile = props.profile;

  return (
    <div className="social-panel">
      <div className="title">
        <h2>{profile.name}</h2>
      </div>
      <div className="photo-panel panel-section">
        <div className="photo-container">
          <div className="photo">
            {
              !profile.photo_url
              ? <Face1 />
              : <img src={profile.photo_url} />
            }
          </div>
        </div>
        <div className="details">
          <div className="profile-item"><p><strong>Profession:</strong></p><p>{profile.profession}</p></div>
          <div className="profile-item"><p><strong>Username:</strong></p><p>{profile.user_name}</p></div>
          <div className="profile-item"><p><strong>Sex:</strong></p><p>{profile.sex_and_race.sex}</p></div>
          <div className="profile-item"><p><strong>Race:</strong></p><p>{profile.sex_and_race.race}</p></div>
        </div>
      </div>
      <div className="bio panel-section">
        <h3>Bio</h3>
        <p>{profile.bio}</p>
      </div>
      <div className="interests panel-section">
        <h3>Interests</h3>
        <p>{profile.interests}</p>
      </div>

    </div>
  );
};

export default SocialPanel;