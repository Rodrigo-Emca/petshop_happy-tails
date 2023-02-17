import { filtrarPorCategoria, agregarTarjetas, filtrarCoincidencias } from "./module/functions.js"


const $contenedorTarjetas = document.getElementById("contenedorProductos")
const $keyword = document.getElementById("keyword")

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')


let productos;
let categorias;
let farmaciaProductos;

fetch(`https://mindhub-xj03.onrender.com/api/petshop`)
    .then(data => data.json())
    .then(response => {
        console.log(response)
        productos = response;
        categorias = [...new Set(productos.map(producto => producto.categoria))]

        farmaciaProductos = filtrarPorCategoria(productos, "farmacia")

        agregarTarjetas(farmaciaProductos, $contenedorTarjetas);

    }
    )
    .catch(error => console.log(error))


//Eventos

$keyword.addEventListener("keyup", () => {
    $contenedorTarjetas.innerHTML = ``

    const palabras = ($keyword.value).toLowerCase()

    agregarTarjetas(filtrarCoincidencias(farmaciaProductos, palabras), $contenedorTarjetas)
}
)