import styles from './card.module.css'
import PersonIcon from '@mui/icons-material/Person';
export default function Card({nombre, puesto, onClick}){
    return(
        <div className={styles.container}>
            <div className={styles.iconCard} onClick={onClick}><PersonIcon /></div> 
            <p>{nombre}</p>
            <p>{puesto}</p>
        </div>
    )
}