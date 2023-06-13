import styles from './BuyTicket.module.scss';
import BuyTicketBanner from './BuyTicketBanner/BuyTicketBanner';

export default function BuyTicket() {
  return (
    <main className={styles.buy_ticket__container}>
      <BuyTicketBanner />
    </main>
  );
}
