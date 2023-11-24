import React from 'react';
import logo2 from '../../images/logo2.jpeg';
import logo3 from '../../images/logo3.png';
import logo4 from '../../images/logo4.jpeg';

function Logo() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly', // Horizontally centers the images with even spacing
        alignItems: 'center', // Vertically centers the images
        height: '30vh',
      }}
    >
      <img src={logo2} alt="" style={{ height: '15vh' }} />
      <img src={logo3} alt="" style={{ height: '15vh' }} />
      <img src={logo4} alt="" style={{ height: '15vh' }} />
    </div>
  );
}

export default Logo;
