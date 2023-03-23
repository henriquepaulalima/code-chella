import styles from './Footer.module.scss';
import logo from 'assets/imgs/logo_black.png';
import whatsappIcon from 'assets/imgs/whatsapp_icon.png';
import twitchIcon from 'assets/imgs/twitch_icon.png';
import instagramIcon from 'assets/imgs/instagram_icon.png';
import twitterIcon from 'assets/imgs/twitter_icon.png';


export default function Footer() {
  return (
    <footer className={styles.footer__container}>
      <div className={styles.footer__upper_container}>
        <div className={styles.logo__container}>
          <img src={logo} alt="Logo da Code Chella" />
        </div>
        <div className={styles.footer__content_container}>
          <p className={styles.footer__content_title}>Acesse nossas redes:</p>
          <ul className={styles.footer__links_container}>
            <li><a href="https://web.whatsapp.com/"><img src={whatsappIcon} alt="Logo Whatsapp" /></a></li>
            <li><a href="https://www.twitch.tv/"><img src={twitchIcon} alt="Logo Twitch" /></a></li>
            <li><a href="https://www.instagram.com/"><img src={instagramIcon} alt="Logo Instagram" /></a></li>
            <li><a href="https://twitter.com/"><img src={twitterIcon} alt="Logo Twitter" /></a></li>
          </ul>
        </div>
      </div>
      <div>
        <p className={styles.footer__end_text}>Desenvolvimento por Alura. Projeto ficticio sem fins comerciais.</p>
      </div>
    </footer>
  );
}
