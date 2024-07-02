import styles from "../Login/Login.module.css";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

export function Register() {
  return (
    <div className={styles.wrapForm}>
      <form className={styles.form} method="POST" action="">
        <h2>Sign Up</h2>
        <Input name="Name" />
        <Input name="E-mail" />
        <Input name="Password" />
        <Input name="Correct password" />
        <Button name="Sign Up" />
      </form>
      <span className={styles.span2}>
        You already have an account? <a href="">Log in</a>
      </span>
    </div>
  );
}
