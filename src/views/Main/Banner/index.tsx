import styles from './Banner.module.scss';
import bannerMobile from 'assets/imgs/banner_mobile.jpg';
import bannerTablet from 'assets/imgs/banner_tablet.jpg';
import bannerDesktop from 'assets/imgs/banner_desktop.jpg';
import { useEffect, useState } from 'react';

export default function Banner() {
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
    <section className={styles.banner__container}>
      <img src={currentBackground} alt="Imagem do banner" />
      <div className={styles.banner__text}>
        <h1>Boas-vindas ao<br/>#CodeChella2023!</h1>
      </div>
    </section>
  );
}
