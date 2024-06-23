import styles from "./Button.module.css";

export function Button({ name }) {
  return (
    <button className={styles.button}>
      <span className={styles.buttonContent}>{name}</span>
    </button>
  );
}
