import Banner from "components/Banner"
import Cabecera from "components/Cabecera"
import Card from "components/Card"
import Pie from "components/Pie"
import Titulo from "components/Titulo"
import videos from "data/db.json"
import styles from './Inicio.module.css'

const Inicio = () => {
  return (
    <>
      <Cabecera />
      <Banner img='home' color='#154580' />
      <Titulo>
        <h1>Un lugar para guardar sus videos favoritos </h1>
      </Titulo>
        
      <section className={styles.container}>
        {
          videos.map( (video) => {
            return <Card {...video} key={video.id} />
          } )
        }
      </section>

      <Pie />
    </>
  )
}

export default Inicio
