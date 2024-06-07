import styles from './expediente.module.css'
import Card from '../../components/card/card';
const Expediente = () => {
    return (
      <div className={styles.container}>
        <h2>Expedinete Empleados</h2>
        <div className={styles.containerExpedientes}>
        <Card/>
        </div>
       
        </div>
   
    );
  };
  
  export default Expediente;