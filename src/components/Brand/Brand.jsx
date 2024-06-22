import styles from "./Brand.module.css";

import LOGO from "../../assets/logo.png";
import BRAND from "../../assets/brand.jpg";

export function Brand() {
  return (
    <div className={styles.brand}>
      <img className={styles.logo} src={LOGO} alt="logo" />
      <img src={BRAND} alt="brand" />
    </div>
  );
}
