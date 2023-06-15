import Button from 'components/Button';
import styles from './BuyTicketForm.module.scss';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import classNames from 'classnames';
import cpfMask from 'utils/cpfMask';

export default function BuyTicketForm() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [isNameValid, setIsNameValid] = useState<boolean | null>(null);
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState<boolean | null>(null);
  const [cpf, setCPF] = useState('');
  const [isCPFValid, setIsCPFValid] = useState<boolean | null>(null);
  const [birthdate, setBirthdate] = useState<any>(0);
  const [isBirthdatValid, setIsBirthdatValid] = useState<boolean | null>(null);
  const [isSubmitValid, setIsSubmitValid] = useState<boolean | null>(true);

  const handleNameInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const handleEmailInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const handleCPFInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCPF(cpfMask(event.target.value));
  }

  const handleBirthdateInputChange = (event: React.ChangeEvent<HTMLDataElement>) => {
    setBirthdate(event.target.value);
  }

  const verifyName = () => {    
    const nameRegex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;

    if (!nameRegex.test(name) || name === '') {
      setIsNameValid(false);
    } else {
      setIsNameValid(true);
    }

    console.log(name, isNameValid);
    
  }

  const verifyEmail = () => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(email) || email === '') {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
    }

    console.log(email, isEmailValid);
    
  }

  const verifyCPF = () => {
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

    if (!cpfRegex.test(cpf) || cpf === '') {
      setIsCPFValid(false);
    } else {
      setIsCPFValid(true);
    }

    console.log(cpf, isCPFValid);
    
  }

  const verifyBirthday = () => {
    if (birthdate === 0) {
      setIsBirthdatValid(false);
    } else {
      setIsBirthdatValid(true);
    }

    console.log(birthdate, isBirthdatValid);
    
  }

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    verifyName();
    verifyEmail();
    verifyCPF();
    verifyBirthday();

    if (isNameValid && isEmailValid && isCPFValid && isBirthdatValid) {
      setIsSubmitValid(true);
      navigate('/ticket');
    } else {
      setIsSubmitValid(false);
    }

    console.log(isSubmitValid);
    
  }

  return (
    <div className={styles.buy_ticket_form__container}>
      <h2 className={styles.buy_ticket_form__title}>Preencha o formulário a seguir:</h2>
      <form onSubmit={handleSubmit} className={styles.buy_ticket_form__form}>
        <label className={styles.buy_ticket_form_label__container}>
          <p className={styles.buy_ticket_form_label__text}>Nome Completo:</p>
          <input
            className={classNames({
              [styles.buy_ticket_form_label__input]: true,
              [styles.inputError]: isNameValid === false,
            })}
            onChange={handleNameInputChange}
            onBlur={verifyName}
            value={name}
            type="text"
            name="name"
            id="name"
          />
        </label>
        <label className={styles.buy_ticket_form_label__container}>
          <p className={styles.buy_ticket_form_label__text}>Email:</p>
          <input
            className={classNames({
              [styles.buy_ticket_form_label__input]: true,
              [styles.inputError]: isEmailValid === false,
            })}
            onChange={handleEmailInputChange}
            onBlur={verifyEmail}
            value={email}
            type="email"
            name="email"
            id="email"
          />
        </label>
        <div className={styles.buy_ticket_form_double_label__container}>
          <label className={styles.buy_ticket_form_label__container}>
            <p className={styles.buy_ticket_form_label__text}>CPF</p>
            <input
              className={classNames({
                [styles.buy_ticket_form_label__input]: true,
                [styles.inputError]: isCPFValid === false,
              })}
              onChange={handleCPFInputChange}
              onBlur={verifyCPF}
              value={cpf}
              type="text"
              name="cpf"
              id="cpf"
            />
          </label>
          <label className={styles.buy_ticket_form_label__container}>
            <p className={styles.buy_ticket_form_label__text}>Data de nascimento</p>
            <input
              className={classNames({
                [styles.buy_ticket_form_label__input]: true,
                [styles.inputError]: isBirthdatValid === false,
              })}
              onChange={handleBirthdateInputChange}
              onBlur={verifyBirthday}
              value={birthdate}
              type="date"
              name="birthday"
              id="birthday"
            />
          </label>
        </div>
        <Button type="submit">Avançar</Button>
      </form>
    </div>
  );
}
