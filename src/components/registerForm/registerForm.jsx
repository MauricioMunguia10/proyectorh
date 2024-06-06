"use client";

import { FaRegUser } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";
import { register } from "@/lib/action";
import styles from "./registerForm.module.css";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form className={styles.form} action={formAction}>
    <h1>INICIAR SESIÓN</h1>
    <div><input type="text" placeholder="username" name="username" /><FaRegUser /></div>
    <div><input type="password" placeholder="password" name="password" ></input><IoKeyOutline /></div>

    <button className={styles.bbtn}>Login</button>
    {state?.error}
    <Link href="/register">
      {"Don't have an account?"} <b>Register</b>
    </Link>
  </form>
  );
};

export default RegisterForm;
