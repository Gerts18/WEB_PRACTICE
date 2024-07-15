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
      return {...state, consulta: action.playload};
    case 'SET_FOTOS_DE_GALERIA':
      return {...state, fotosGaleria: action.playload};
    case 'SET_FOTO_SELECCIONADA':
      return {...state, fotoSeleccionada: action.playload};
    case 'ALTERNAR_FAVORITO':
      return {...state,
        fotosGaleria: fotosGaleria.map(fotoGaleria => {
          return {
            ...fotoGaleria,
            favorita: fotoGaleria.id === foto.id ? !foto.favorita : fotoGaleria.favorita
          }
        }),
        fotoSeleccionada:{
          ...state.fotoSeleccionada, favorita: !foto.favorita
        }
      }
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
      //setFotosGaleria([...data]);
      dispatch({type: 'SET_FOTOS_DE_GALERIA', payload: data})
    }

    setTimeout(() => getData(), 5000)

  }, []);

  return (
    <GlobalContext.Provider value={{state, dispatch}}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider


//Cosuming what's in the context