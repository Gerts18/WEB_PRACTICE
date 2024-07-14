import { createContext } from "react";

//Create context
const GlobalContext = createContext();

//Share context, create a component to spread my context 

const GlobalContextProvider = ({ childern }) => {

    const [consulta, setConsulta] = useState('')

    return (
        <GlobalContext.Provider value={{consulta, setConsulta}} >
            {childern}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider


//Cosuming what's in the context