import { NavigateFunction } from 'react-router-dom';
import styles from './Button.module.scss';
import ticket_icon from 'assets/imgs/ticket_icon.png';

type Props = {
  children: string,
  ticketIcon?: boolean,
  onClick?: any,
}

export default function Button({children, ticketIcon, onClick, ...props}: Props) {
  return (
    <button onClick={onClick} className={styles.button_container}>
      <p {...props}>{children}</p>
      {ticketIcon && (
        <img src={ticket_icon} alt="Ícone de ingresso" />
      )}
    </button>
  );
}
