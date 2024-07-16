import Banner from 'components/Banner'
import styles from './Favoritos.module.css'
import Titulo from 'components/Titulo'

const Favoritos = () => {
    return (
        <>
            <Banner img='favoritos' color='#154580' />
            <Titulo>
                <h1>Favoritos </h1>
            </Titulo>

            <section className={styles.container}>
                
            </section>

        </>
    )
}

export default Favoritos
