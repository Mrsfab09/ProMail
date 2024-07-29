import styles from "./Step.module.css";

export function Step({ id, icon, isActive, onClick }) {
  return (
    <span
      className={`${styles.circle} ${isActive ? styles.activeCircle : ""}`}
      onClick={() => onClick(id)}
    >
      <img src={icon} alt="" />
    </span>
  );
}
