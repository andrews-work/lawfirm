import React from 'react';
import Logo from '../../images/logo5.png';

function Country() {
  const anchorStyles = {
    textDecoration: 'none', // Remove underline
  };

  const flexContainerStyles = {
    display: 'flex',
    justifyContent: 'space-evenly', // Change to space-evenly
    alignItems: 'center',
  };

  const imageStyles = {
    height: '30px', // Adjust the height for mobile devices
    width: 'auto', // Maintain aspect ratio
  };

  const h1Styles = {
    fontSize: '14px', // Adjust font size for smaller screens
  };

  return (
    <a href="https://www.wurundjeri.com.au" className={`bg-black text-white p-3 d-block`} style={{ width: '100vw', minHeight: '5vh', maxHeight: '10vh', ...anchorStyles }}>
      <div style={flexContainerStyles}>
        <img src={Logo} alt="Wurundjeri Logo" className="img-fluid" style={imageStyles} />
        <h1 className={`text-white small`} style={h1Styles}>We pay our respects to the Wurundjeri people of the Kulin nation on whose lands we live and work</h1>
        <img src={Logo} alt="Wurundjeri Logo" className="img-fluid" style={imageStyles} />
      </div>
    </a>
  );
}

export default Country;
