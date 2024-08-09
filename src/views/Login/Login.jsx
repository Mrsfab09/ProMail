import styles from "./Login.module.css";

import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";

import { Toaster, toast } from "sonner";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "../../components/Container/Container";
import { Brand } from "../../components/Brand/Brand";
import { Center } from "../../components/Center/Center";

export function Login() {
  // const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3000/users/";

  const [isUsername, setIsUsername] = useState("");
  const [isPassword, setIsPassword] = useState("");

  const navigate = useNavigate();

  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      fetch("http://localhost:3000/users/" + isUsername)
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          if (Object.keys(resp).length === 0) {
            toast.error("Please enter valid username");
          } else {
            if (resp.isPassword === isPassword) {
              toast.success("Success");
              navigate("/dashboard");
            } else {
              toast.error("Please enter valid password");
            }
          }
        })
        .catch((err) => {
          toast.error("Login failed", err.message);
        });
    }
  };

  const validate = () => {
    let result = true;
    if (isUsername === "" || isUsername === null) {
      result = false;
      toast.error("Please enter username");
    }
    if (isPassword === "" || isPassword === null) {
      result = false;
      toast.error("Please enter password");
    }
    return result;
  };

  return (
    <>
      <Toaster position="top-center" expand={true} />
      <Center>
        <Container>
          <Brand />
          <div className={styles.wrapForm}>
            <form
              className={styles.form}
              method="POST"
              action=""
              onSubmit={ProceedLogin}
            >
              <h2>Login</h2>
              <Input
                type={"text"}
                name="Login"
                value={isUsername}
                onChange={(e) => setIsUsername(e.target.value)}
              />
              <Input
                type={"password"}
                name="Password"
                value={isPassword}
                onChange={(e) => setIsPassword(e.target.value)}
              />
              <Button name="Login in" type={"submit"} />
            </form>
            <span className={styles.span}>
              You dont have an account?
              <Link className={styles.link} to={"/register"}>
                Sign Up
              </Link>
            </span>
          </div>
        </Container>
      </Center>
    </>
  );
}
