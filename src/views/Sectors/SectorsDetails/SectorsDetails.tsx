import styles from './SectorsDetails.module.scss';
import SectorsDetaulsImg1 from 'assets/imgs/sectors_details_img_1.jpg';
import SectorsDetaulsImg2 from 'assets/imgs/sectors_details_img_2.jpg';
import SectorsDetaulsImg3 from 'assets/imgs/sectors_details_img_3.jpg';

export default function SectorsDetails() {
  return (
    <div className={styles.sectors_details__container}>
      <h2>Mais detalhes sobre os setores:</h2>
      <div className={styles.sectors_details__info_list}>
        <div className={styles.sectors_details__info_container}>
          <img src={SectorsDetaulsImg1} alt="Imagem da Pista" />
          <h3>Pista</h3>
          <p>Pista convencional, atendida pelos bares e banheiros das laterais do estádio. Espaço amplo, com local para sentar e descansar. Separada da pista premium por uma grade.</p>
        </div>
        <div className={styles.sectors_details__info_container}>
          <img src={SectorsDetaulsImg2} alt="Imagem da Pista" />
          <h3>Pista Premium</h3>
          <p>Pista mais próxima do palco, com acesso muito próximo a banheiros e bares num raio de 100m. Todas as pessoas idosas e/ou com deficiência têm direito a acesso gratuito a essa área.</p>
        </div>
        <div className={styles.sectors_details__info_container}>
          <img src={SectorsDetaulsImg3} alt="Imagem da Pista" />
          <h3>Cadeiras</h3>
          <p>Opção de cadeiras térreas ou elevadas. Acesso próximo a banheiros e bares, visão um pouco elevada em relação às pistas.</p>
        </div>
      </div>
    </div>
  );
}
