import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Welcome.css'; // Ensure the CSS file is imported

const Welcome = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowAnimation(false); // Hide the animation after 5 seconds
    }, 5000);

    return () => clearTimeout(timeoutId); // Cleanup the timeout
  }, []);

  return (
    <div className="welcome-container">
      {showAnimation ? (
        <div className="welcome-message">
          <h1>Raita Mitra (ರೈತ ಮಿತ್ರ)</h1>
          <p>"ಹೆಮ್ಮೆಯ ಕೃಷಿಕರ ಬಲವೇ ನಮ್ಮ ರಾಷ್ಟ್ರದ ಶಕ್ತಿ!"</p>
        </div>
      ) : (
        <div className="welcome-content">
          <h1>Welcome to Raita Mitra</h1>
          <p>Connecting farmers directly with buyers for better agricultural practices.</p>
          <div className="welcome-links">
            <Link to="/signup">Sign Up</Link>
            <Link to="/signin">Sign In</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Welcome;