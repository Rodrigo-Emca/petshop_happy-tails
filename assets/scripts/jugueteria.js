import{ modal, agregarTarjetas, filtrarCoincidencias} from "./module/functions.js"


const $contenedorTarjetas = document.getElementById("contenedorProductos")
const $keyword = document.getElementById("keyword")



fetch(`https://mindhub-xj03.onrender.com/api/petshop`)
    .then( data => data.json())
    .then( response => {
        const productos = modal(response)
        const jugueteria = productos.filter( producto => producto.categoria == 'jugueteria')
        agregarTarjetas(jugueteria,$contenedorTarjetas)

        $keyword.addEventListener("keyup", () => {
            $contenedorTarjetas.innerHTML = ``
            const palabras = ($keyword.value).toLowerCase()
            const filtrados = filtrarCoincidencias(jugueteria,palabras)
            agregarTarjetas(filtrados,$contenedorTarjetas)
            }
            )
    }
    )
    .catch(error => console.log(error))



