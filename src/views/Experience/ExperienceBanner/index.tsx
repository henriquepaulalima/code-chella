import { useState, useEffect } from 'react';
import styles from './ExperienceBanner.module.scss';
import bannerMobile from 'assets/imgs/experience_banner_mobile.jpg';
import bannerTablet from 'assets/imgs/experience_banner_tablet.jpg';
import bannerDesktop from 'assets/imgs/experience_banner_desktop.jpg';

export default function ExperienceBanner() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [currentBackground, setCurrentBackground] = useState('');
  
  useEffect(() => {
    setScreenWidth(window.innerWidth);
    getCurrentBackground(screenWidth)
  }, [screenWidth]);

  function getCurrentBackground(width: number) {
    if (width < 768) {
      setCurrentBackground(bannerMobile);
    } else if (width >= 768 && width < 1023) {
      setCurrentBackground(bannerTablet)
    } else if (width > 1023) {
      setCurrentBackground(bannerDesktop);
    } else {
      throw new Error('Invalid screen width value');
    }
  }
  
  return (
    <div className={styles.experience_banner__container}>
      <img src={currentBackground} alt='Banner da Experiência' />
      <p>A Experiência</p>
    </div>
  );
}
