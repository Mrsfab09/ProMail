import styles from "./Faq.module.css";
import FAQ from "../../assets/Faq.png";

export function Faq() {
  const data = [
    {
      title: "What is promail for ?",
      description: "",
    },
    {
      title: "What is promail for ?",
      description: "",
    },
    {
      title: "What is promail for ?",
      description: "",
    },
  ];

  return (
    <section className={styles.faqSection}>
      <div className={styles.faqContent}>
        <h2>Frequently Asked Questions</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur,
          suscipit! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Voluptatem, obcaecati!
        </p>
      </div>
      <div className={styles.container}>
        <img src={FAQ} alt="" />
        <div className={styles.accordion}>
          {data.map(({ title, description }, index) => {
            return (
              <div key={index} className={styles.item}>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
