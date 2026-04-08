import React, { useState, useContext, useRef, useEffect } from 'react';
import './UserProfileV2.css';

// Kontext erstellen
const ThemeContext = React.createContext('light'); 

function UserProfile() {
  const [user, setUser] = useState({
    name: 'Max Mustermann',
    age: 30,
    hobby: 'Lesen'
  });
  const theme = useContext(ThemeContext);
  const inputRef = useRef(null);

  useEffect(() => {
    // Fokussiert das Input-Feld beim Mounten
    inputRef.current.focus();
  }, []);

  const updateName = () => {
    setUser({ ...user, name: inputRef.current.value });
  };

  return (
    <div className={`user-profile ${theme}`}>
      <p>Name: {user.name}</p>
      <p>Alter: {user.age}</p>
      <p>Hobby: {user.hobby}</p>
      <input ref={inputRef} type="text" placeholder="Neuen Namen eingeben" />
      <button onClick={updateName}>Namen aktualisieren</button>
    </div>
  );
}

// Wrapper-Komponente mit ThemeContext.Provider
// Ändere value="dark" zu value="light" um das Theme zu wechseln
function UserProfileV2() {
  return (
    <ThemeContext.Provider value="dark">
      <UserProfile />
    </ThemeContext.Provider>
  );
}

export default UserProfileV2;