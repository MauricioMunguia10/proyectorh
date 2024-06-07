import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>VASA</div>
      <div className={styles.text}>
        VASA Construcciones© 2023 | Todos los derechos reservados.
      </div>
    </div>
  );
};

export default Footer;
