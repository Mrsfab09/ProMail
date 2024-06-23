import styles from "./Input.module.css";

export function Input({ name }) {
  return (
    <div className={styles.coolinput}>
      <label htmlFor="input" className={styles.text}>
        {name}
      </label>
      <input type="text" name="input" className={styles.input} />
    </div>
  );
}
