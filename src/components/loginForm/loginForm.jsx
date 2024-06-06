"use client";

import { FaRegUser } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";
import { login } from "@/lib/action";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import Link from "next/link";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <form className={styles.form} action={formAction}>
      <h1>INICIAR SESIÓN</h1>
      <div><input  type="text"  name="username" /><FaRegUser /></div>
      <div><input type="password" placeholder="password" name="password" ></input><IoKeyOutline /></div>
  
      <button className={styles.bbtn}>Login</button>
      {state?.error}
      <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;

