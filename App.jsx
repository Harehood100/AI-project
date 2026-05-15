import React from 'react';
import ProfileCard from './ProfileCard';

function App() {
  return (
    <div>
      <h1>Profile Cards</h1>
      <ProfileCard picture="https://via.placeholder.com/100" name="John Doe" age={25} />
      <ProfileCard picture="https://via.placeholder.com/100" name="Jane Smith" age={30} />
      <ProfileCard picture="https://via.placeholder.com/100" name="Bob Johnson" age={35} />
    </div>
  );
}

export default App;