import styles from './TicketBanner.module.scss';
import ticketBannerImg from 'assets/imgs/ticket_banner_img.jpg';

export default function TicketBanner() {
  return (
    <div className={styles.buy_ticket_banner__container}>
      <img src={ticketBannerImg} alt="Imagem de mulher pulando, explicitando acessibilidade e inclusão" />
      <h1>Seu ingresso está aqui!</h1>
    </div>
  );
}
