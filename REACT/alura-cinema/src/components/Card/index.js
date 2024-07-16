import { useFavoritosContext } from 'context/Favoritos'
import styles from './Card.module.css'
import iconNoFavorito from './favorite-empty.png'
import iconFavorito from './favorite-full.png'
import { Link } from 'react-router-dom'

const Card = ({id, capa, titulo}) => {

  const {favorito, agregarFavorito} = useFavoritosContext()

  const isFavorito = favorito.some(fav => fav.id === id)

  const icon = isFavorito ? iconFavorito : iconNoFavorito

  return (
    <div className={styles.container} >
        <Link className={styles.link} to={`/${id }`} >
          <img src={capa} alt={titulo} className={styles.capa} />
          <h2>{titulo} </h2>
        </Link>
        <img src={icon} alt='Icono favorito' onClick={() => agregarFavorito({id, titulo, capa})} />
    </div>
  )
}

export default Card
