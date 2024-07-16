import Banner from "components/Banner"
import Card from "components/Card"
import Titulo from "components/Titulo"
import videos from "data/db.json"
import styles from './Inicio.module.css'

const Inicio = () => {
  return (
    <>
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
    </>
  )
}

export default Inicio
