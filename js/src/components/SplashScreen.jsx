import React from 'react';
import styles from './SplashScreen.css';

const SplashScreen = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.splash}>
        <img src="../icons/magnify.gif" title="Analyzing page..." />
        <h3>Analyzing page...</h3>
      </div>
    </div>
  );
};

export default SplashScreen;
