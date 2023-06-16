import useCustomerData from 'state/hooks/useCustomerData';
import styles from './Ticket.module.scss';
import TicketBanner from './TicketBanner/TicketBanner';
import TicketCard from './TicketCard/TicketCard';

export default function Ticket() {
  const [customerData] = useCustomerData();

  return (
    <main className={styles.ticket__container}>
      <TicketBanner />
      <TicketCard {...customerData} />
    </main>
  );
}
