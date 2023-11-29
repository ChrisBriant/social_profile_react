import { useEffect } from 'react';
import { getProfile } from './network/apiActions';
import './App.css';
import { useState } from 'react';
import SocialPanel from './components/SocialPanel';

function App() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getProfile().then((data) => {
      console.log('Profile', data);
      setProfile(data);
    });
  },[]);

  return (
    <div className="App">
      <header>
        <h1>Social Profile</h1>
        <p>Refresh to generate a fake social profile!</p>
      </header>
      <main>
        {
          profile
          ?  <SocialPanel profile={profile} />
          : <p>Loading...</p>
        }
      </main>
      <footer>
        <p>By Chris Briant {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
