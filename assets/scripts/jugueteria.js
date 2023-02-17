import{filtrarPorCategoria, agregarTarjetas, filtrarCoincidencias} from "./module/functions.js"


const $contenedorTarjetas = document.getElementById("contenedorProductos")
const $keyword = document.getElementById("keyword")

let productos;
let categorias;
let jugueteriaProductos;

fetch(`https://mindhub-xj03.onrender.com/api/petshop`)
    .then( data => data.json())
    .then( response => {
        productos = response;
        jugueteriaProductos= filtrarPorCategoria(productos, "jugueteria")

        categorias = [...new Set(productos.map(producto => producto.categoria))]

        agregarTarjetas(jugueteriaProductos, $contenedorTarjetas);
    }
    )
    .catch(error => console.log(error))

//EVENTOS

$keyword.addEventListener("keyup", () => {
    $contenedorTarjetas.innerHTML = ``
    
    const palabras = ($keyword.value).toLowerCase()
    
    agregarTarjetas(filtrarCoincidencias(jugueteriaProductos, palabras), $contenedorTarjetas)
    }
    )