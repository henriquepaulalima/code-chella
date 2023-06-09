import styles from './Header.module.scss';
import logo from 'assets/imgs/logo_white.png';
import menuIcon from 'assets/imgs/menu.svg';
import closeIcon from 'assets/imgs/close.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleCloseMenuOnNavitage = () => {
    if (isMenuOpened) {
      setIsMenuOpened(!isMenuOpened);
    }
  }

  return (
    <nav className={styles.header__container}>
      <Link to="/">
        <img className={styles.header__logo} src={logo} alt="Logo do Code Chella" />
      </Link>
      {
        isMenuOpened && (
          <div className={styles.header__links}>
            <img onClick={() => setIsMenuOpened(!isMenuOpened)} src={closeIcon} alt="Ícone do menu lateral" />
            <ul>
              <Link to="/experience" onClick={handleCloseMenuOnNavitage}><li><p>A experiência</p></li></Link>
              <Link to="/sectors" onClick={handleCloseMenuOnNavitage}><li><p>Mapa de Setores</p></li></Link>
              <Link to="/information" onClick={handleCloseMenuOnNavitage}><li><p>Informações</p></li></Link>
              <Link to="/buy-ticket" onClick={handleCloseMenuOnNavitage}><li><p>Ingresso</p></li></Link>
            </ul>
          </div>
        )
      }
      <div className={styles.header__desktop_links}>
        <ul>
          <Link to="/experience" onClick={handleCloseMenuOnNavitage}><li><p>A experiência</p></li></Link>
          <Link to="/sectors" onClick={handleCloseMenuOnNavitage}><li><p>Mapa de Setores</p></li></Link>
          <Link to="/information" onClick={handleCloseMenuOnNavitage}><li><p>Informações</p></li></Link>
          <Link to="/buy-ticket" onClick={handleCloseMenuOnNavitage}><li><p>Ingresso</p></li></Link>
        </ul>
      </div>
      <img onClick={() => setIsMenuOpened(!isMenuOpened)} className={styles.header__menu} src={menuIcon} alt="Ícone do menu lateral" />
    </nav>
  );
}

export default Header;