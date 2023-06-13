import styles from './BuyTicket.module.scss';
import BuyTicketBanner from './BuyTicketBanner/BuyTicketBanner';
import BuyTicketForm from './BuyTicketForm/BuyTicketForm';

export default function BuyTicket() {
  return (
    <main className={styles.buy_ticket__container}>
      <BuyTicketBanner />
      <BuyTicketForm />
    </main>
  );
}
