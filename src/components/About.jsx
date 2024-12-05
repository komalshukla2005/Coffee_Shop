import React, { useEffect } from 'react';
import './about.css';

function About() {
  useEffect(() => {
    document.body.className = 'about';
    return () => {
      document.body.className = '';
    };
  }, []);

  return (
    <>
      <h1>About Our Cafe</h1>
      <div className='right'>
        <p>At <span>My Project Cafe,</span>  we offer freshly brewed coffee, cozy ambiance, and delicious treats, all made with love and care. We prioritize sustainability, using ethically sourced ingredients and supporting local farmers. Whether you're unwinding or working, our café is the perfect space to relax and enjoy quality coffee and special events.</p>
      </div>
      <div className='pics'>
        <h1>Pictures of my Cafe</h1>
        <div className='cafes'>
          <div className='one' id='move-left'>
            <img src='https://haydenrue.com/wp-content/uploads/2023/06/Best-cafes-in-Jaipur.jpg' />
          </div>
          <div className='one'>
            <img src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/71/08/87/photo1jpg.jpg' />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
