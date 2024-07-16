import Banner from "components/Banner"
import Cabecera from "components/Cabecera"
import Card from "components/Card"
import Pie from "components/Pie"
import Titulo from "components/Titulo"


const Inicio = () => {
  return (
    <>
      <Cabecera />
      <Banner img='home' color='#154580' />
      <Titulo>
        <h1>Un lugar para guardar sus videos favoritos </h1>
      </Titulo>
      <Card id={1} titulo={'Gato'} capa={'https://t2.ea.ltmcdn.com/es/posts/7/4/3/como_ayudar_a_un_gatito_a_defecar_20347_orig.jpg'} />
      <Pie />
    </>
  )
}

export default Inicio
