import styles from "./Form.module.css";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

export function Form({ formName, value }) {
  return (
    <div className={styles.wrapForm}>
      <form className={styles.form}>
        <h2>{formName}</h2>
        <Input name="Login" />
        <Input name="Password" />
        <Button name={"Login in"} />
      </form>
      <span className={styles.span}>
        You dont have an account? <a href="">{value}</a>
      </span>
    </div>
  );
}
