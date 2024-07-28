import { StepBar } from "../StepBar/StepBar";
import styles from "./Features.module.css";

export function Features() {
  return (
    <section className={styles.sectionFeatures}>
      <div className={styles.featuresContent}>
        <h2>Features</h2>
        <p>
          Our goal is to give you quick and easy access to your email. Your
          messages and all your files sync across your devices, so you can
          access them on the go.
        </p>
      </div>
      <StepBar />
    </section>
  );
}
