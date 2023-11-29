import { ReactComponent as Face1 } from '../assets/face_1_plain.svg';

// const profile = {
//   "id": 5,
//   "name": "Fatuma",
//   "profile_age": {
//       "age": "70s"
//   },
//   "sex_and_race": {
//       "sex": "Female",
//       "race": "White"
//   },
//   "profession": "Engineer",
//   "bio": "With several decades of expertise under my belt, I consider myself as a seasoned professional in the engineering field. I am in my 70s but I am unstoppable. Despite my age, I remain as an active and engaged protagonist in this ever-evolving industry. Over the decades, I've had the opportunity to steer major projects that have formulated the engineering landscape today. Even in the twilight years of my life, I continue to foster a burning desire to shape the coming generation of engineers and act as a guiding light for them to navigate through their careers.",
//   "interests": "Outside the constraints of engineering blueprints and prototypes, I found solace in seemingly unusual hobbies. I devote a significant portion of my leisure time in stockers and ballies—two pastimes that, interestingly, tone my strategic thinking and provide a fun way to alleviate routine stress. Stockers feeds my fascination with market dynamics and investment strategies, while ballies, an exciting game, reignites the competitive streak in me, quintessential in my field of work. Amidst these, I enjoy absorbing new knowledge through reading and engaging in community service, subtly maintaining a touch of balance in life.",
//   "photo_url": null,
//   "user_name": "ever-evolving10"
// };

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