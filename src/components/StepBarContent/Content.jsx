import styles from "./Content.module.css";

export function Content({ id, activeContent, brandImage, title, description }) {
  return (
    <div
      id={`content-${id}`}
      className={`${styles.content} ${
        activeContent === id ? styles.active : ""
      }`}
    >
      <div className={styles.wrapper}>
        <img src={brandImage} alt={title} />
        <div className={styles.wrapperContent}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
