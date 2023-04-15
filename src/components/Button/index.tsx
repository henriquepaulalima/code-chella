import styles from './Button.module.scss';
import ticket_icon from 'assets/imgs/ticket_icon.png';

export default function Button(props: {content: string, ticketIcon?: boolean}) {
  return (
    <button className={styles.button_container}>
      <p>{props.content}</p>
      {props.ticketIcon && (
        <img src={ticket_icon} alt="Ícone de ingresso" />
      )}
    </button>
  );
}
