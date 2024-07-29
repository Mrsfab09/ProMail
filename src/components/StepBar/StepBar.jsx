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
import { Step } from "../Step/Step";
import { Content } from "../StepBarContent/Content";

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
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const steps = [
    { id: 1, icon: CHAT },
    { id: 2, icon: SECURITY },
    { id: 3, icon: CLOUD },
    { id: 4, icon: SCHEDULE },
  ];

  const contents = [
    {
      id: 1,
      brandImage: MAIL_BRAND,
      title: "Fast Sending",
      description:
        "Our biggest advantage is that you can send messages even from the other side of the world. It's just seconds away with ProMail",
    },
    {
      id: 2,
      brandImage: SECURITY_BRAND,
      title: "Strong Protection",
      description:
        "Another advantage is that we have the best protection of your data on the market. Send messages without worrying about your sensitive data",
    },
    {
      id: 3,
      brandImage: SERVER_BRAND,
      title: "A lot of space for files",
      description:
        "With our file drive, you can store your photos, documents in a safe place. Each user gets up to 10 GB to use.",
    },
    {
      id: 4,
      brandImage: CALENDAR_BRAND,
      title: "The best day planner",
      description:
        "With our planner you will plan and implement everything during the day. Thanks to notifications you will not forget anything you have planned.",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.steps}>
        {steps.map(({ id, icon }) => (
          <Step
            key={id}
            id={id}
            icon={icon}
            isActive={activeContent === id}
            onClick={toggleContent}
          />
        ))}
        <div className={styles.progress}>
          <span className={styles.indicator}></span>
        </div>
      </div>
      {contents.map((content) => (
        <Content
          key={content.id}
          id={content.id}
          activeContent={activeContent}
          brandImage={content.brandImage}
          title={content.title}
          description={content.description}
        />
      ))}
    </div>
  );
}
