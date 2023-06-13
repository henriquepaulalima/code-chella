import Button from 'components/Button';
import styles from './BuyTicketForm.module.scss';
import { useNavigate } from 'react-router-dom';

export default function BuyTicketForm() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/ticket');
  }

  return (
    <div className={styles.buy_ticket_form__container}>
      <h2 className={styles.buy_ticket_form__title}>Preencha o formulário a seguir:</h2>
      <form onSubmit={handleSubmit} className={styles.buy_ticket_form__form}>
        <label className={styles.buy_ticket_form_label__container}>
          <p className={styles.buy_ticket_form_label__text}>Nome Completo:</p>
          <input className={styles.buy_ticket_form_label__input} type="text" name="name" id="name" />
        </label>
        <label className={styles.buy_ticket_form_label__container}>
          <p className={styles.buy_ticket_form_label__text}>Email:</p>
          <input className={styles.buy_ticket_form_label__input} type="email" name="email" id="email" />
        </label>
        <div className={styles.buy_ticket_form_double_label__container}>
          <label className={styles.buy_ticket_form_label__container}>
            <p className={styles.buy_ticket_form_label__text}>CPF</p>
            <input className={styles.buy_ticket_form_label__input} type="number" name="cpf" id="cpf" />
          </label>
          <label className={styles.buy_ticket_form_label__container}>
            <p className={styles.buy_ticket_form_label__text}>Data de nascimento</p>
            <input className={styles.buy_ticket_form_label__input} type="date" name="birthday" id="birthday" />
          </label>
        </div>
        <Button >Avançar</Button>
      </form>
    </div>
  );
}
