import React, { useEffect } from 'react';
import './Home.css';
function Home() {
  useEffect(() => {
    document.body.className = 'home'; 
    return () => {
      document.body.className = ''; 
    };
  }, []);

  return (
    <>
      <div className="welcome_text">
        <p>
          <span>Welcome</span> to our coffee haven, where every cup is crafted
          with love and care. Let the rich aroma and warm ambiance make your
          moments unforgettable. Whether you're here for a quick sip or a
          leisurely break, we promise the perfect brew to brighten your day.
          Sit back, relax, and let us serve you happiness in a cup!
        </p>
      </div>
    </>
  );
}

export default Home;
