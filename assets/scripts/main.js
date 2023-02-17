import{filtrarPorCategoria, agregarTarjetas, filtrarCoincidencias} from "./module/functions.js"
const $contenedorTarjetas = document.getElementById("contenedorProductos")

let productos;
let categorias;

fetch(`https://mindhub-xj03.onrender.com/api/petshop`)
    .then( data => data.json())
    .then( response => {
        console.log(response)
        productos = response;
        agregarTarjetas(productos, $contenedorTarjetas);

        categorias = [...new Set(productos.map(producto => producto.categoria))]
        console.log(categorias)

        
        console.log(filtrarPorCategoria(productos, "farmacia"))
        console.log(filtrarPorCategoria(productos, "jugueteria"))
    }
    )
    .catch(error => console.log(error))