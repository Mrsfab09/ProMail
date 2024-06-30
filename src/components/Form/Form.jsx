import styles from "./Form.module.css";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

export function Form({ formName, value, question }) {
  return (
    <div className={styles.wrapForm}>
      <form className={styles.form} method="POST" action="">
        <h2>{formName}</h2>
        <Input name="Login" />
        <Input name="Password" />
        <Button name="Login in" />
      </form>
      <span className={styles.span}>
        {question} <a href="">{value}</a>
      </span>
    </div>
  );
}
