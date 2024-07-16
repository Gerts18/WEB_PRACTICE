import Banner from "components/Banner"
import Card from "components/Card"
import Titulo from "components/Titulo"
import styles from './Inicio.module.css'
import { useEffect, useState } from "react"

const Inicio = () => {

  const [videos, setVideos] = useState([])

  useEffect( () => {
     fetch("https://my-json-server.typicode.com/Gerts18/api-videos/videos")
    .then(response => response.json())
    .then(data => setVideos(data))
  }, []);

  return (
    <>
      <Banner img='home' color='#154580' />
      <Titulo>
        <h1>Un lugar para guardar sus videos favoritos </h1>
      </Titulo>

      <section className={styles.container}>
        {
          videos.map((video) => {
            return <Card {...video} key={video.id} />
          })
        }
      </section>
    </>
  )
}

export default Inicio
