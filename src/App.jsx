import Profile from './components/profile/profile';
import userData from './components/profile/useData.json';

import './App.css'


function App() {
  return (
    <div>
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </div>
  );
}


export default App;
