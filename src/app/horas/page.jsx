import styles from "./horas.module.css";

//datos de prueba
const students = [
  {
    id: 1,
    name: "Alice Johnson",
    dias:{
      lunes:8,
      martes:8,
      miercoles:8,
      jueves:8,
      viernes:8,
    },
    major: "Computer Science",
  },
  { id: 2, name: "Bob Smith", dob: "2000-09-08", major: "Mathematics" },
  { id: 3, name: "Carol Williams", dob: "1999-02-23", major: "Physics" },
  
];
const Horas = () => {
  return (
    <div className={styles.container}>
      <h2>Horas Trabajadas</h2>
      <div className={styles.table}>

      </div>
    </div>
  );
};

export default Horas;
