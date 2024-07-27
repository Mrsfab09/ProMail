import { StepBar } from "../StepBar/StepBar";
import styles from "./Features.module.css";

export function Features() {
  return (
    <section className={styles.sectionFeatures}>
      <div className={styles.featuresContent}>
        <h2>Features</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          accusantium voluptatum cupiditate qui vel modi quia nostrum ea libero
          perferendis!
        </p>
      </div>
      <StepBar />
    </section>
  );
}
