import React from 'react';
import { Link } from 'react-router-dom';
import Team from './Team';

function Consult() {
  const sectionStyle = {
    backgroundColor: '#2a2fbe', // Set the background color to the same dark blue color
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
  };

  const textStyle = {
    fontSize: '20px',
    color: 'white', // Set the text color to white
    textAlign: 'center',
  };

  const paragraphStyle = {
    margin: '5px 0',
  };

  const h1Style = {
    ...textStyle,
    margin: '0',
  };

  // Style the link to be white
  const linkStyle = {
    color: 'white', // Set the link color to white
    textDecoration: 'underline', // Add an underline for better visibility
  };

  return (
    <section className="eleven" style={sectionStyle}>
      <h1 style={h1Style}>We provide free 30-minute consultations to answer your questions</h1>
      <div className="market">
        <p style={{ ...textStyle, ...paragraphStyle }}>
          Contact our friendly team{' '}
          <Link to="/contact" style={linkStyle}>now</Link>
        </p>
      </div>
      <Team />
    </section>
  );
}

export default Consult;
