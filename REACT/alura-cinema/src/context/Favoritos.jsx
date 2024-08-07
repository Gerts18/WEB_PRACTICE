const { createContext, useState, useContext } = require("react");


export const FavoritosContext = createContext()

FavoritosContext.displayName = "Favoritos"

const FavoritosProvider = ({ children }) => {

    const [favorito, setFavorito] = useState([])

    return (
        <FavoritosContext.Provider value={{ favorito, setFavorito }}>
            {children}
        </FavoritosContext.Provider>
    )
}

export default FavoritosProvider



export function useFavoritosContext() {
    const { favorito, setFavorito } = useContext(FavoritosContext);

    function agregarFavorito(nuevoFavorito) {
        const favoritoRepetido = favorito.some(
            item => item.id === nuevoFavorito.id
        );

        let nuevaLista = [...favorito]
        if (!favoritoRepetido) {
            nuevaLista.push(nuevoFavorito)
            return setFavorito(nuevaLista)
        }

        nuevaLista = favorito.filter(
            item => item.id !== nuevoFavorito.id
        );
        return setFavorito(nuevaLista)
    }

    return { favorito, agregarFavorito }
}


