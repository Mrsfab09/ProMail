import styles from "./Button.module.css";

export function Button({ name, type }) {
  return (
    <button className={styles.button} type={type}>
      <span className={styles.buttonContent}>{name}</span>
    </button>
  );
}
