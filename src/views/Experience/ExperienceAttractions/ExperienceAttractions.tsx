import styles from './ExperienceAttractions.module.scss';
import AttractionsImg from 'assets/imgs/attractions_img.jpg'

export default function ExperienceAttractions() {
  return (
    <div className={styles.experience_attractions__container}>
      <img src={AttractionsImg} alt="Imagem de mulher pulando, explicitando acessibilidade e inclusão" />
      <div>
        <h2>Atrações</h2>
        <p>Intervenções artísticas e culturais para todos os gostos! Durante os intervalos dos shows, nossa experiência contará com recreação para crianças, oficina de cerâmica, origami, circo e aquarela! Além disso, nosso espaço contra com 3 praças de alimentação, roda gigante e outros brinquedos!</p>
      </div>
    </div>
  );
}
