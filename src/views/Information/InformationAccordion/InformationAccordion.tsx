import styles from './InformationAccordion.module.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function InformationAccordion() {
  return (
    <div className={styles.accordion__container}>
      <Accordion className={styles.accordion__box}>
        <AccordionSummary
          className={styles.accordion_title__container}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={styles.accordion_title__text}>Quais serão as atrações?</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.accordion_content__container}>
          <Typography className={styles.accordion_content__text}>
            Teremos dois dias de shows, o primeiro (11/03) com bandas de rock, e o segundo (12/03) com bandas pop. Confira o line-up em detalhes clicando <Link to="/" className={styles.accordion_content__text_link}>neste link!</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion__box}>
        <AccordionSummary
          className={styles.accordion_title__container}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={styles.accordion_title__text}>Qual é a classificação etária?</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.accordion_content__container}>
          <Typography className={styles.accordion_content__text}>
            A partir de 16 anos, todo mundo pode entrar. De 13 a 15 anos, tem que estar acompanhado dos pais ou responsáveis legais. Menores de 10 anos não podem entrar.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion__box}>
        <AccordionSummary
          className={styles.accordion_title__container}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={styles.accordion_title__text}>Quais são os setores disponíveis?</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.accordion_content__container}>
          <Typography className={styles.accordion_content__text}>
            Pista PremiumPista ComumCadeiras térreoCadeiras superioresRampas
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion__box}>
        <AccordionSummary
          className={styles.accordion_title__container}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={styles.accordion_title__text}>Quais são os itens proibidos?</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.accordion_content__container}>
          <Typography className={styles.accordion_content__text}>
            Garrafas, latas, bebidas, utensílios de armazenagem, embalagens rígidas com tampa, capacetes, cadeiras ou bancos, armas de fogo e armas brancas, objetos pontiagudos, cortantes e/ou perfurantes, correntes e cinturões, fogos de artifício, objetos de vidro, substâncias inflamáveis, cigarro eletrônico, corrosivas e ou tóxicas, revistas, jornais, livros e copo térmico ou similares.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion__box}>
        <AccordionSummary
          className={styles.accordion_title__container}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={styles.accordion_title__text}>Quem tem direito a meia-entrada?</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.accordion_content__container}>
          <Typography className={styles.accordion_content__text}>
            De acordo com a Lei Federal, têm direito ao benefício da meia-entrada aqueles que preencherem os requisitos e apresentarem os documentos comprobatórios.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
