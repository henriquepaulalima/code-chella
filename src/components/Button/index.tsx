import styles from './Button.module.scss';
import ticket_icon from 'assets/imgs/ticket_icon.png';

type Props = {
  children: string,
  ticketIcon?: boolean,
  onClick?: any,
  disabled?: boolean,
  type?: "button" | "submit" | "reset" | undefined,
}

export default function Button({children, ticketIcon, onClick, disabled, type, ...props}: Props) {
  return (
    <button onClick={onClick} className={styles.button_container} disabled={disabled} type={type}>
      <p {...props}>{children}</p>
      {ticketIcon && (
        <img src={ticket_icon} alt="Ícone de ingresso" />
      )}
    </button>
  );
}
