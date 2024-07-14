import { createContext } from "react";

//Create context
const GlobalContext = createContext();

//Share context, create a component to spread my context 

const GlobalContextProvider = ({ childern }) => {

    const [consulta, setConsulta] = useState('');
    const [fotosGaleria, setFotosGaleria] = useState([])
    const [fotoSeleccionada, setFotoSeleccionada] = useState(null)

    useEffect(() => {
        const getData = async () => {
          const result = await fetch('http://localhost:3000/fotos');
          const data = await result.json();
          setFotosGaleria([...data]);
        }
    
        setTimeout(() => getData(), 5000)
    
      }, [])

      const handleFavorite = (foto) => {
        if(foto.id === fotoSeleccionada?.id){
          setFotoSeleccionada({
            ...fotoSeleccionada,
            favorita: !foto.favorita
          })
        }

        setFotosGaleria(fotosGaleria.map(fotoGaleria => {
          return {
            ...fotoGaleria,
            favorita: fotoGaleria.id === foto.id ? !foto.favorita : fotoGaleria.favorita
          }
        }))
      }
    return (
        <GlobalContext.Provider 
        value={{
            consulta, setConsulta, fotosGaleria, setFotosGaleria, fotoSeleccionada, setFotoSeleccionada,handleFavorite
            }} 
        >
            {childern}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider


//Cosuming what's in the context