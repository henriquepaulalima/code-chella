import AccessibilityAndInclusion from './AccessibilityAndInclusion/AccessibilityAndInclusion';
import styles from './Experience.module.scss';
import ExperienceBanner from "./ExperienceBanner";

export default function Experience() {
  return (
    <main className={styles.experience__container}>
      <ExperienceBanner />
      <AccessibilityAndInclusion />
    </main>
  );
}
