import styles from './TicketCard.module.scss';
import codeChellaLogo from 'assets/imgs/logo_black.png';
import codeChellaIcon from 'assets/imgs/icon.png';
import ticketQRCodeImg from 'assets/imgs/ticket_qrcode_img.png';

export default function TicketCard() {
  return (
    <div className={styles.ticket_card__container}>
      <h2 className={styles.ticket_card__title}>
        Uhul, agora sim! Seu ingresso está aqui, apresente na entrada do evento e divirta-se!
      </h2>
      <div className={styles.ticket_card__body}>
        <div className={styles.ticket_card__body_header}>
            <img src={codeChellaLogo} alt="Logo da Code Chella" />
            <img src={codeChellaIcon} alt="Icone da Code Chella" />
        </div>
        <div className={styles.ticket_card__body_qr_code}>
          <img src={ticketQRCodeImg} alt="QR Code do ingresso" />
        </div>
        <div className={styles.ticket_card__body_info}>
          <h3>Moni Hillman</h3>
          <p>Ingresso Cortesia</p>
          <p>Setor Pista</p>
          <p>Data: 11/03</p>
          <p>Local: Sao Paulo - SP</p>
        </div>
      </div>
    </div>
  );
}
