import styles from "./Login.module.css";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

export function Login() {
  return (
    <div className={styles.wrapForm}>
      <form className={styles.form} method="POST" action="">
        <h2>Login</h2>
        <Input name="Login" />
        <Input name="Password" />
        <Button name="Login in" />
      </form>
      <span className={styles.span}>
        You dont have an account? <a href="">Sign Up</a>
      </span>
    </div>
  );
}
