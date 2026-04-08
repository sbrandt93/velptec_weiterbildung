import React, { useState } from 'react';

const UserProfile = ({ username, age, hobbies }) => {
  const [showHobbies, setShowHobbies] = useState(true);

  const toggleHobbies = () => {
    setShowHobbies(!showHobbies);
  };

  return (
    <div>
      <h1>{username}</h1>
      <p>Alter: {age}</p>
      <button onClick={toggleHobbies}>
        {showHobbies ? 'Hobbys verstecken' : 'Hobbys anzeigen'}
      </button>
      {showHobbies ? (
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      ) : (
        <p>Hobbys sind versteckt</p>
      )}
    </div>
  );
};

export default UserProfile;