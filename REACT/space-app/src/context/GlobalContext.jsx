import { createContext, useEffect, useReducer } from "react";

// Crear contexto
export const GlobalContext = createContext();

const initialState = {
  consulta: '',
  fotosGaleria: [],
  fotoSeleccionada: null,
  loading: true
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_CONSULTA':
      return { ...state, consulta: action.payload };
    case 'SET_FOTOS_DE_GALERIA':
      return { ...state, fotosGaleria: action.payload, loading: false };
    case 'SET_FOTO_SELECCIONADA':
      return { ...state, fotoSeleccionada: action.payload };
    case 'ALTERNAR_FAVORITO':
      
      const fotosDeGaleria = state.fotosGaleria.map(fotoGaleria => {
        return {
          ...fotoGaleria,
          favorita: fotoGaleria.id === action.payload.id ? !fotoGaleria.favorita : fotoGaleria.favorita
        };
      });

      if (action.payload.id === state.fotoSeleccionada?.id) {
        return {
          ...state,
          fotosGaleria: fotosDeGaleria,
          fotoSeleccionada: {
            ...state.fotoSeleccionada,
            favorita: !state.fotoSeleccionada.favorita
          }
        };
      } else {
        return { ...state, fotosGaleria: fotosDeGaleria };
      }
    default:
      return state;
  }
};

// Compartir contexto, crear un componente para extender mi contexto
const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getData = async () => {
      const result = await fetch('http://localhost:3000/fotos');
      const data = await result.json();
      dispatch({ type: 'SET_FOTOS_DE_GALERIA', payload: data });
    };

    setTimeout(() => getData(), 5000);
  }, []);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
