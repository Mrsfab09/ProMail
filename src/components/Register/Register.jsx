import styles from "../Login/Login.module.css";

import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { Brand } from "../Brand/Brand";
import { Container } from "../Container/Container";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Toaster, toast } from "sonner";

export function Register() {
  const [id, setId] = useState("");
  const [isName, setIsName] = useState("");
  const [isEmail, setIsEmail] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const [isCorrPassword, setIsCorrPassword] = useState("");

  const navigate = useNavigate();

  const isValidate = () => {
    let register = true;
    if (
      id === "" ||
      isName === "" ||
      isEmail === "" ||
      isPassword === "" ||
      isCorrPassword === ""
    ) {
      register = false;
      toast.error("The field cannot be empty");
    }
    if (
      id === null ||
      isName === null ||
      isEmail === null ||
      isPassword === null ||
      isCorrPassword === null
    ) {
      register = false;
      toast.error("The field cannot be empty");
    }
    if (isPassword !== isCorrPassword) {
      register = false;
      toast.error("Passwords are different");
    }
    return register;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let regobj = { id, isName, isEmail, isPassword, isCorrPassword };
    if (isValidate()) {
      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regobj),
      })
        .then(() => {
          toast.success("Successfully registered");
          navigate("/");
        })
        .catch((err) => {
          toast.error("Registred failed", err.message);
          navigate("/register");
        });
      // console.log(regobj);
    }
  };

  return (
    <>
      <Toaster position="top-center" expand={true} />
      <Container>
        <Brand />
        <div className={styles.wrapForm}>
          <form
            className={styles.form}
            method="POST"
            action=""
            onSubmit={handleSubmit}
          >
            <h2>Sign Up</h2>
            <Input
              name="Login"
              type={"text"}
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <Input
              name="Name"
              type={"text"}
              value={isName}
              onChange={(e) => setIsName(e.target.value)}
            />
            <Input
              name="E-mail"
              type={"text"}
              value={isEmail}
              onChange={(e) => setIsEmail(e.target.value)}
            />
            <Input
              name="Password"
              type={"password"}
              value={isPassword}
              onChange={(e) => setIsPassword(e.target.value)}
            />
            <Input
              name="Correct password"
              type={"password"}
              value={isCorrPassword}
              onChange={(e) => setIsCorrPassword(e.target.value)}
            />
            <Button name="Sign Up" type={"submit"} />
          </form>
          <span className={styles.span2}>
            You already have an account?{" "}
            <Link className={styles.link} to={"/"}>
              Log in
            </Link>
          </span>
        </div>
      </Container>
    </>
  );
}
