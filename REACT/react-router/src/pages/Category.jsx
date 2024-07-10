import { useState, useEffect } from "react";
import '../assets/css/blog.css'
import { buscar } from "../api/api";
import ListCategories from "../components/ListCategories";
import ListPost from "../components/ListPost";
import { useParams, Routes, Route, Link, useResolvedPath } from "react-router-dom";

const Category = () => {

  const [subCategorias, setSubCategorias] = useState([])

  const {id} = useParams()

  const {url} = useResolvedPath("").pathname

  useEffect(() => {
    buscar(`/categorias?id=${id}`,(response) => {setSubCategorias(response[0].subcategorias)} )
  }, [id])

  return (
    <>
      <div className="container">
        <h2 className="title-page"> Pet Noticias </h2>
      </div>
      <ListCategories/>
      <ul className="category-list container flex">
        {
          subCategorias.map((subcategoria, index) => {
            return (
              <li className={`category-list__category category-list__category--${id}`} key={index}>
                <Link to={`${url}/${subcategoria}`} >
                  {subcategoria}
                </Link>
              </li>
            )
          })
        }
      </ul>
      <Routes>
        <Route path="/" element={<ListPost url={`/posts?categoria=${id}`} />} />
      </Routes>
    </>
  )
}

export default Category
