import { Link } from 'react-router-dom'
import styles from './Cabecera.module.css'
import logo from './logo-alura.png'

const Cabecera = () => {
  return (
    <header className={styles.cabecera} >
        <Link to={"/"}>
            <section className={styles.logoContainer}>
                <img src={logo} alt='Logo Alura' /> <span>Cinema</span>
            </section>
        </Link>
    </header>
  )
}

export default Cabecera
