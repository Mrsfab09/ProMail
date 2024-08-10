import styles from "./Opinions.module.css";

import USER_1 from "../../assets/user1.jpg";
import USER_2 from "../../assets/user2.jpg";
import USER_3 from "../../assets/user3.jpg";
import USER_4 from "../../assets/user4.jpg";

export function Opinions() {
  const data = [
    {
      image: USER_1,
      heading: "Emma",
      description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Et amet
            autem architecto ipsam sequi est iusto quaerat voluptate inventore
            ad, repellat blanditiis, sint, vitae iste?`,
    },
    {
      image: USER_3,
      heading: "Phew",
      description: `   Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            earum assumenda molestiae aperiam ad aspernatur natus repellat
            facilis sint qui, deserunt doloremque consequuntur at nemo.`,
    },
    {
      image: USER_2,
      heading: "Mia",
      description: `     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet vero
            perferendis doloribus minima? Quibusdam neque libero corrupti
            repellat ab, reprehenderit, adipisci odio eligendi assumenda
            recusandae quod eius aspernatur, ullam quae.`,
    },
    {
      image: USER_4,
      heading: "John",
      description: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Blanditiis, repellat voluptatum a dolor nulla optio praesentium
            adipisci facilis provident vel accusantium sequi incidunt, ut error
            quasi voluptate? Velit, explicabo vel?`,
    },
  ];

  return (
    <section className={styles.sectionOpinions}>
      <h2>Opinions our users</h2>
      <div className={styles.wrapper}>
        {data.map((item, index) => (
          <div
            key={index}
            className={
              item.align_self === "flex-end"
                ? styles.itemRight
                : styles.itemLeft
            }
          >
            <div className={styles.user}>
              <img src={item.image} alt="" />
              <h3>{item.heading}</h3>
            </div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
/*

/*
import styles from "./Opinions.module.css";

import USER_1 from "../../assets/user1.jpg";
import USER_2 from "../../assets/user2.jpg";
import USER_3 from "../../assets/user3.jpg";
import USER_4 from "../../assets/user4.jpg";

export function Opinions() {
  const data = [
    {
      image: USER_1,
      heading: "Emma",
      description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Et amet
            autem architecto ipsam sequi est iusto quaerat voluptate inventore
            ad, repellat blanditiis, sint, vitae iste?`,
    },
    {
      image: USER_3,
      heading: "Phew",
      description: `   Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            earum assumenda molestiae aperiam ad aspernatur natus repellat
            facilis sint qui, deserunt doloremque consequuntur at nemo.`,
    },
    {
      image: USER_2,
      heading: "Mia",
      description: `     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet vero
            perferendis doloribus minima? Quibusdam neque libero corrupti
            repellat ab, reprehenderit, adipisci odio eligendi assumenda
            recusandae quod eius aspernatur, ullam quae.`,
    },
    {
      image: USER_4,
      heading: "John",
      description: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Blanditiis, repellat voluptatum a dolor nulla optio praesentium
            adipisci facilis provident vel accusantium sequi incidunt, ut error
            quasi voluptate? Velit, explicabo vel?`,
    },
  ];

  return (
    <section className={styles.sectionOpinions}>
      <h2>Opinions our users</h2>
      <div className={styles.wrapper}>
        <div className={styles.itemLeft}>
          <div className={styles.user}>
            <img src={USER_1} alt="img" />
            <h3>Emma</h3>
          </div>
          <p></p>
        </div>
        <div className={styles.itemRight}>
          <div className={styles.user}>
            <img src={USER_3} alt="img" />
            <h3>Phew</h3>
          </div>
          <p></p>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.itemLeft}>
          <div className={styles.user}>
            <img src={USER_2} alt="img" />
            <h3>Mia</h3>
          </div>
          <p></p>
        </div>
        <div className={styles.itemRight}>
          <div className={styles.user}>
            <img src={USER_4} alt="img" />
            <h3>John</h3>
          </div>
          <p></p>
        </div>
      </div>
    </section>
  );
}

*/
