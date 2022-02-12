import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import '../assets/css/blog.css';
import ListaCategorias from "../components/ListaCategorias";
import ListaPost from "../components/ListaPost";
import { Route } from "react-router-dom"
import { useRouteMatch, Link } from "react-router-dom";
import { busca } from "../api/api";


const Categoria = () => {
  const { id } = useParams()

  const { url, path } = useRouteMatch()
  const [subCategorias, setSubCategorias] = useState([])

  useEffect(() => {
    busca(`/categorias/${id}`, (categoria) => {
      setSubCategorias(categoria.subCategorias)
    })
  }, [id])


  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">Pet Notícias</h2>
      </div>
      <ListaCategorias />
      <ul className="lista-categorias container flex">
        {
          subCategorias.map((subcategoria) => (
            <Link to={`/categoria/${categoria.id}`}>
              <li className={`lista-categorias__categoria lista-categorias__categoria--${id}`} key={subcategoria}>
                {subcategoria.nome}
              </li>
            </Link>
          ))
        }
      </ul>





      <Route exact path={`${path}/`}>
        <ListaPost url={`/posts?categoria=${id}`} />
      </Route>
    </>
  )
}



export default Categoria;