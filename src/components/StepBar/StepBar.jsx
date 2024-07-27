import styles from "./StepBar.module.css";

// Icons
import CHAT from "../../assets/chat-icon.png";
import CLOUD from "../../assets/cloud-icon.png";
import SECURITY from "../../assets/security-icon.png";

// Brands
import MAIL_BRAND from "../../assets/Mail sent2.png";
import SECURITY_BRAND from "../../assets/Security.png";
import SERVER_BRAND from "../../assets/Server.png";

import { useState } from "react";

export function StepBar() {
  const [activeContent, setActiveContent] = useState(1);
  //   const [isActive, setActive] = useState(false);

  const toggleContent = (id) => {
    setActiveContent(activeContent === id ? null : id);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.steps}>
          <span className={`${styles.circle}`} onClick={() => toggleContent(1)}>
            <img src={CHAT} alt="" />
          </span>
          <span className={styles.circle} onClick={() => toggleContent(2)}>
            <img src={SECURITY} alt="" />
          </span>
          <span className={styles.circle} onClick={() => toggleContent(3)}>
            <img src={CLOUD} alt="" />
          </span>
          <span className={styles.circle} onClick={() => toggleContent(4)}>
            <img src={CHAT} alt="" />
          </span>
          <div className={styles.progress}>
            <span className={styles.indicator}></span>
          </div>
        </div>
      </div>
      <div
        id="content-1"
        className={`${styles.content} ${
          activeContent === 1 ? styles.active : ""
        }`}
      >
        <div className={styles.wrapper}>
          <img src={MAIL_BRAND} alt="chat" />
          <div className={styles.wrapperContent}>
            <h3>Fast Sending</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              neque impedit rem atque iste deleniti assumenda explicabo.
              Deleniti, sunt facere.
            </p>
          </div>
        </div>
      </div>
      <div
        id="content-2"
        className={`${styles.content} ${
          activeContent === 2 ? styles.active : ""
        }`}
      >
        <div className={styles.wrapper}>
          <img src={SECURITY_BRAND} alt="chat" />
          <div className={styles.wrapperContent}>
            <h3>Strong Protection</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              neque impedit rem atque iste deleniti assumenda explicabo.
              Deleniti, sunt facere.
            </p>
          </div>
        </div>
      </div>
      <div
        id="content-3"
        className={`${styles.content} ${
          activeContent === 3 ? styles.active : ""
        }`}
      >
        <div className={styles.wrapper}>
          <img src={SERVER_BRAND} alt="chat" />
          <div className={styles.wrapperContent}>
            <h3>Data synchronization </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              neque impedit rem atque iste deleniti assumenda explicabo.
              Deleniti, sunt facere.
            </p>
          </div>
        </div>
      </div>
      <div
        id="content-4"
        className={`${styles.content} ${
          activeContent === 4 ? styles.active : ""
        }`}
      >
        <div className={styles.wrapper}>
          <img src={SERVER_BRAND} alt="chat" />
          <div className={styles.wrapperContent}>
            <h3>Fast Sending</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              neque impedit rem atque iste deleniti assumenda explicabo.
              Deleniti, sunt facere.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
