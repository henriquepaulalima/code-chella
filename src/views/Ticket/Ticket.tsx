import styles from './Ticket.module.scss';
import TicketBanner from './TicketBanner/TicketBanner';
import TicketCard from './TicketCard/TicketCard';

export default function Ticket() {
  return (
    <main className={styles.ticket__container}>
      <TicketBanner />
      <TicketCard />
    </main>
  );
}
