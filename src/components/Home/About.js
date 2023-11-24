import React from 'react';
import Sydney from '../../images/sydney1.png';
import '../../css/About.css';

function About() {
  const containerStyle = {
    height: '80vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  };

  const imageStyle = {
    width: '65vw',
    height: '70vh',
  };

  const textContainerStyle = {
    width: '20vw',
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    overflowY: 'auto',
  };

  const textStyle = {
    fontSize: '16px',
    textAlign: 'justify',
  };

  return (
    <div className="containerStyle">
      <div>
        <img src={Sydney} alt="Sydney Harbour" className="img-fluid syd imageStyle" />
      </div>
      <div className="textContainerStyle">
        <h1>About Us</h1>
        <p className="textStyle">It is our goal to make your experience as stress-free as possible.</p>
        <p className="textStyle">As an inclusive and welcoming firm, we have built a diverse client base locally and internationally, specializing in assisting migrants and refugees for over 20 years.</p>
        <p className="textStyle">Renowned for our innovative approach, we excel in finding creative solutions for complex legal matters, particularly in the areas of business and skilled migration, family migration, and refugee and humanitarian cases.</p>
        <p className="textStyle">Transparency regarding fees is a top priority for us, as we primarily offer fixed fees for most of our services.</p>
        <p className="textStyle">Additionally, we offer legal services in multiple languages, including Hazaragi, Dari, Farsi, Urdu, and Pashto.</p>
      </div>
    </div>
  );
}

export default About;
