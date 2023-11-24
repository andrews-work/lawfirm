import React from 'react';
import Cliff from '../../images/cliff.png';
import styles from '../../css/Skills.module.css';

function Skills() {
  const textContentStyle = {
    backgroundColor: '#2a2fbe', // Apply the background color to the left side
  };

  return (
    <section className={`${styles['your-component']} ${styles['skills-component']}`}>
      <div className={styles['text-container']} style={textContentStyle}>
        <div className={styles['text-content']}>
          <h1 className={styles['display-4']}>Specialist advice, advocacy, and client service</h1>
          <h2 className={styles['h4']}>What our experienced and passionate team can do for you:</h2>
          <p className={`${styles['lead']} ${styles['green-tick']}`}>Skilled migration</p>
          <p className={`${styles['lead']} ${styles['green-tick']}`}>Family migration</p>
          <p className={`${styles['lead']} ${styles['green-tick']}`}>Business migration</p>
          <p className={`${styles['lead']} ${styles['green-tick']}`}>Refugee migration</p>
          <p className={`${styles['lead']} ${styles['green-tick']}`}>Humanitarian migration</p>
        </div>
      </div>
      <div className={styles['image-container']}>
        <img src={Cliff} alt="Cliff" />
      </div>
    </section>
  );
}

export default Skills;
