import { useState } from "react";

export function Content() {
  const [activeContent, setActiveContent] = useState(null);
  return (
    <>
      <div
        id="content-1"
        className={`${styles.content} ${
          activeContent === 1 ? styles.active : ""
        }`}
      >
        <p>Content for Chat</p>
      </div>
      <div
        id="content-2"
        className={`${styles.content} ${
          activeContent === 2 ? styles.active : ""
        }`}
      >
        <p>Content for Security</p>
      </div>
      <div
        id="content-3"
        className={`${styles.content} ${
          activeContent === 3 ? styles.active : ""
        }`}
      >
        <p>Content for Cloud</p>
      </div>
      <div
        id="content-4"
        className={`${styles.content} ${
          activeContent === 4 ? styles.active : ""
        }`}
      >
        <p>More Content for Chat</p>
      </div>
    </>
  );
}
