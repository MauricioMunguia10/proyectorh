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
    <div> {/* Elimina el Layout aquí */}
      <form className={styles.form} action={formAction}>
        <h1 className={styles.titulo}>INICIAR SESIÓN</h1>
        <div className={styles.tesssto}>Usuario<br/><div className={styles.divs}><input  type="text"  name="username" ></input><FaRegUser className={styles.icon}/></div></div>
        <div className={styles.tesssto}>Contraseña<div className={styles.divs}><input type="password"  name="password" ></input><IoKeyOutline className={styles.icon} /></div></div>
    
        <button className={styles.bbtn}>Iniciar</button>
        {state?.error}
       
      </form>
    </div>
  );
};

export default LoginForm;

