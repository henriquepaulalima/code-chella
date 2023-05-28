import Attractions from "views/Main/Attractions";
import DateAndLocation from "./DateAndLocation";
import MainBanner from "./MainBanner";
import styles from './Main.module.scss';

export default function Main() {
  return (
    <main className={styles.main__container}>
      <MainBanner />
      <DateAndLocation />
      <Attractions />
    </main>
  );
}
