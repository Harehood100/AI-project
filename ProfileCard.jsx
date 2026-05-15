import React from 'react';

function ProfileCard({ picture, name, age }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '200px' }}>
      <img src={picture} alt={name} style={{ width: '100px', height: '100px' }} />
      <h3>{name}</h3>
      <p>Age: {age}</p>
    </div>
  );
}

export default ProfileCard;