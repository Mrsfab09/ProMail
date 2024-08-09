import styles from "./Cta.module.css";

export function Cta() {
  return (
    <section className={styles.sectionCta}>
      <div className={styles.container}>
        <p>Join over 10,000 people</p>
        <h2>Stay up to date with our news</h2>
        <form className={styles.form}>
          <input type="text" placeholder="Enter your email address" />
          <button>Contact Us</button>
        </form>
      </div>
    </section>
  );
}
