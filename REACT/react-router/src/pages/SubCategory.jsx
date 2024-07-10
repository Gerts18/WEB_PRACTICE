import { useParams } from "react-router-dom"
import ListPost from "../components/ListPost"

const SubCategory = () => {
    const { subcategoria } = useParams()
    return (
        <ListPost url={`/posts?subcategorias=${subcategoria}`} />
    )
}

export default SubCategory