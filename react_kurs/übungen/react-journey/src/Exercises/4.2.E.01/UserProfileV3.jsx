import React, { useState, useEffect, useRef } from 'react';
import styles from './UserProfile.module.css';
function UserProfile({ userName, userEmail, userImage }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleButtonRef = useRef(null);

  useEffect(() => {
    console.log(`isExpanded: ${isExpanded}`);
  }, [isExpanded]);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
    toggleButtonRef.current.focus();
  };

  return (
    <div className={styles.profileContainer}>
      <img src={userImage} alt={`${userName}'s profile`} className={styles.profilePicture} />
      <h2>{userName}</h2>
      {isExpanded && <p>{userEmail}</p>}
      <button ref={toggleButtonRef} onClick={handleToggle}>
        {isExpanded ? 'Weniger anzeigen' : 'Mehr anzeigen'}
      </button>
    </div>
  );
}

function UserProfileV3() {
  return (
    <UserProfile
      userName="Max Mustermann"
      userEmail="max.mustermann@example.com"
      userImage="https://picsum.photos/100"
    />
  );
}

export default UserProfileV3;

