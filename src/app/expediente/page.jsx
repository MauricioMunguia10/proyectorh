"use client";
import styles from "./expediente.module.css";
import Card from "../../components/card/card";
import ModalExpediente from "@/components/modalExpediente/modal";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";
import { useEffect } from "react";

const Expediente = () => {
  const [visible, setVisible] = useState(true);
  const [nombre, setNombre] = useState("user");
  const mostrarModal = (name) => {
    setVisible(!visible);
    setNombre(name);
    console.log("Entra");
  };

  return (
      <div className={styles.container}>
        <h2>Expedinete Empleados</h2>

        <div className={visible ? styles.modal : styles.modalInvisible}>
          <div className={styles.side}>
            <PersonIcon />
            <h1>{nombre}</h1>
          </div>
        </div>

        <div className={styles.containerExpedientes}>
          <Card
            nombre="Juan Diaz"
            puesto="Desarrollador"
            onClick={() => mostrarModal("Juan Diaz")}
          />
          <Card
            nombre="Mauricio M."
            puesto="Desarrollador"
            onClick={() => mostrarModal("Mauricio Munguia")}
          />
        </div>
      </div>
  );
};

export default Expediente;
