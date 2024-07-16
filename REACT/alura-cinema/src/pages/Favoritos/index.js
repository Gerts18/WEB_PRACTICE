import Banner from 'components/Banner'
import styles from './Favoritos.module.css'
import Titulo from 'components/Titulo'
import { useFavoritosContext } from 'context/Favoritos'
import Card from 'components/Card'

const Favoritos = () => {

    const {favorito} = useFavoritosContext()

    return (
        <>
            <Banner img='favoritos' color='#154580' />
            <Titulo>
                <h1>Favoritos </h1>
            </Titulo>

            <section className={styles.container}>
                {
                    favorito.map( fav => {
                        return <Card key={fav.id} {...fav} ></Card>
                    })
                }
            </section>

        </>
    )
}

export default Favoritos
