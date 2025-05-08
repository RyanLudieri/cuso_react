import styles from './Cars.module.css'

const Cars = ({color,brand,km}) => {
  return (
    <div className={styles.card}>
        <h2 className={styles.h2}>Detalhes do carro</h2>
        <p className={styles.p}>Color: {color}</p>
        <p className={styles.p}>Brand: {brand}</p>
        <p className={styles.p}>Km: {km}</p>
    </div>
  )
}

export default Cars