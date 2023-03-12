import styles from './Header.module.scss';
import logo from 'assets/imgs/logo_white.png';
import menuIcon from 'assets/imgs/menu.svg';
import closeIcon from 'assets/imgs/close.svg';
import { useState } from 'react';

function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <nav className={styles.header__container}>
      <img className={styles.header__logo} src={logo} alt="Logo do Code Chella" />
      {
        isMenuOpened && (
          <div className={styles.header__links}>
            <img onClick={() => setIsMenuOpened(!isMenuOpened)} src={closeIcon} alt="Ícone do menu lateral" />
            <ul>
              <li><p>A experiência</p></li>
              <li><p>Mapa de Setores</p></li>
              <li><p>Informações</p></li>
              <li><p>Ingresso</p></li>
            </ul>
          </div>
        )
      }
      <div className={styles.header__desktop_links}>
        <ul>
          <li><p>A experiência</p></li>
          <li><p>Mapa de Setores</p></li>
          <li><p>Informações</p></li>
          <li><p>Ingresso</p></li>
        </ul>
      </div>
      <img onClick={() => setIsMenuOpened(!isMenuOpened)} className={styles.header__menu} src={menuIcon} alt="Ícone do menu lateral" />
    </nav>
  );
}

export default Header;