import { createContext, useEffect, useReducer, useState } from "react";

//Create context
export const GlobalContext = createContext();


const initialState = {
  consulta : '',
  fotosGaleria : [],
  fotoSeleccionada: null
}

const reducer = (state, action )=> {
  switch (action.type){
    case 'SET_CONSULTA':
      return;
    case 'SET_FOTOS_DE_GALERIA':
      return;
    case 'SET_FOTO_SELECCIONADA':
      return;
    case 'ALTERNAR_FAVORITO':
      return
    default:
      return state;
  }
  
}

//Share context, create a component to spread my context 
const GlobalContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  //const [consulta, setConsulta] = useState('');
  //const [fotosGaleria, setFotosGaleria] = useState([])
  //const [fotoSeleccionada, setFotoSeleccionada] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const result = await fetch('http://localhost:3000/fotos');
      const data = await result.json();
      setFotosGaleria([...data]);
    }

    setTimeout(() => getData(), 5000)

  }, [])

  const handleFavorite = (foto) => {
    if (foto.id === fotoSeleccionada?.id) {
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

  const globalState = {
    consulta,
    setConsulta,
    fotosGaleria,
    setFotosGaleria,
    fotoSeleccionada,
    setFotoSeleccionada,
    handleFavorite
  }

  return (
    <GlobalContext.Provider value={globalState}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider


//Cosuming what's in the context