import styles from './AccessibilityAndInclusion.module.scss';
import AccessibilityAndInclusionImg from 'assets/imgs/accessibility_and_inclusion_img.png';

export default function AccessibilityAndInclusion() {
  return (
    <div className={styles.accessibility_and_inclusion__container}>
      <img src={AccessibilityAndInclusionImg} alt="Imagem de mulher pulando, explicitando acessibilidade e inclusão" />
      <div>
        <h2>Acessibilidade e Inclusão</h2>
        <p>Nosso evento tenta abraçar um público mais amplo em todos os sentidos, de todas as idades, corpos, gostos e pensamentos!  Isso está presente no  espaço físico, na sinalização, no treinamento da equipe de apoio, na comunicação em libras, braile, visual e tátil. Além disso, dispomos de ingressos gratuitos para pessoas com deficiência e acompanhantes, pessoas idosas e crianças!</p>
      </div>
    </div>
  );
}
