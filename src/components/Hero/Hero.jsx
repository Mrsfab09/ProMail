import styles from "./Hero.module.css";
import { Button } from "../Button/Button";
// import HERO from "../../assets/Phone.png";
import MAIL from "../../assets/Mail sent.png";
// import MAIL2 from "../../assets/Mail sent2.png";

export function Hero() {
  return (
    <section className={styles.sectionHero}>
      <div className={styles.wrapper}>
        <div className={styles.hero}>
          <div className={styles.heroImage}>
            <img src={MAIL} alt="hero" />
          </div>
          <div className={styles.heroContent}>
            <h1>A Simple Managing Email manager</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              similique, quos, voluptas ipsum consectetur voluptatum sapiente
              sequi saepe modi delectus veritatis eos accusantium pariatur.
              Quaerat eius in sequi dolorum optio.
            </p>
            <Button name="Download" />
          </div>
        </div>
      </div>
    </section>
  );
}
