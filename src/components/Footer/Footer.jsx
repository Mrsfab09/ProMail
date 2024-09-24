import styles from "./Footer.module.css";
import LOGO from "../../assets/logo.png";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <img className={styles.logo} src={LOGO} alt="" />
      <div className={styles.footerContent}>
        <ul className={styles.footerList}>
          <li>Features</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
      </div>
      <p>© Copyright 2024</p>
    </footer>
  );
}
