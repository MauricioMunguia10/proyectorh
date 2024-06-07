import LoginForm from "@/components/loginForm/loginForm";
import Image from "next/image";
import styles from "./login.module.css";

const LoginPage = () => {

  return (
  
    <div className={styles.container}>
     
      <div className={styles.menu}>
      <Image className={styles.fondo} src="/3.png" alt="" width={700} height={800}></Image>
         <Image className={styles.img2} src="/2.png" alt="" width={500} height={700}></Image>
         <Image className={styles.img} src="/8.svg" alt="" width={400} height={400}></Image>
      </div>
      <div className={styles.wrapper}>
        
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
