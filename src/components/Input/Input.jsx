import styles from "./Input.module.css";

export function Input({ name, value, onChange, type }) {
  return (
    <div className={styles.coolinput}>
      <label htmlFor="input" className={styles.text}>
        {name}
      </label>
      <input
        type={type}
        name="input"
        className={styles.input}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
