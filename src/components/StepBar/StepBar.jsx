/* eslint-disable react/jsx-no-comment-textnodes */
import styles from "./StepBar.module.css";

// Icons
import CHAT from "../../assets/chat-icon.png";
import CLOUD from "../../assets/cloud-icon.png";
import SECURITY from "../../assets/security-icon.png";
import SCHEDULE from "../../assets/schedule-icon.png";

// Brands
import MAIL_BRAND from "../../assets/Mail sent2.png";
import SECURITY_BRAND from "../../assets/Security.png";
import SERVER_BRAND from "../../assets/Server.png";
import CALENDAR_BRAND from "../../assets/Calendar.png";

import { useEffect, useState } from "react";

export function StepBar() {
  const [activeContent, setActiveContent] = useState(1);

  const toggleContent = (id) => {
    setActiveContent(id);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveContent((prevActiveContent) => {
        return prevActiveContent === 4 ? 1 : prevActiveContent + 1;
      });
    }, 7000); // Zmieniaj co 5 sekund

    return () => clearInterval(interval); // Czyszczenie intervalu przy odmontowaniu komponentu
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.steps}>
          {[
            { id: 1, icon: CHAT },
            { id: 2, icon: SECURITY },
            { id: 3, icon: CLOUD },
            { id: 4, icon: SCHEDULE },
          ].map(({ id, icon }) => (
            <span
              key={id}
              className={`${styles.circle} ${
                activeContent === id ? styles.activeCircle : ""
              }`}
              onClick={() => toggleContent(id)}
            >
              <img src={icon} alt="" />
            </span>
          ))}
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
              Our biggest advantage is that you can send messages even from the
              other side of the world. It's just seconds away with ProMail
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
              Another advantage is that we have the best protection of your data
              on the market. Send messages without worrying about your sensitive
              data
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
            <h3>A lot of space for files</h3>
            <p>
              With our file drive, you can store your photos, documents in a
              safe place. Each user gets up to 10 GB to use.
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
          <img src={CALENDAR_BRAND} alt="chat" />
          <div className={styles.wrapperContent}>
            <h3>The best day planner</h3>
            <p>
              With our planner you will plan and implement everything during the
              day. Thanks to notifications you will not forget anything you have
              planned.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
