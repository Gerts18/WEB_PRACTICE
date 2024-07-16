import styles from './Card.module.css'
import iconNoFavorito from './favorite-empty.png'
import iconFavorito from './favorite-full.png'

const Card = ({id, capa, titulo}) => {
  return (
    <div className={styles.container} >
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo} </h2>
        <img src={iconNoFavorito} alt='Icono favorito'  />
    </div>
  )
}

export default Card
