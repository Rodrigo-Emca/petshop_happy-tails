import { modal, agregarTarjetas, filtrarCoincidencias } from "./module/functions.js"


const $contenedorTarjetas = document.getElementById("contenedorProductos")
const $keyword = document.getElementById("keyword")

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

let filtro = []
let productosSelec = filtro.filter(Boolean)

fetch(`https://mindhub-xj03.onrender.com/api/petshop`)
.then(data => data.json())
.then(response => {
        const productos = modal(response)
        const farmacia = productos.filter( producto => producto.categoria === 'farmacia')    
        agregarTarjetas(farmacia,$contenedorTarjetas);
        
        $keyword.addEventListener("keyup", (e) => {
            $contenedorTarjetas.innerHTML = ``
            const palabras = ($keyword.value).toLowerCase()
            const filtrados = filtrarCoincidencias(farmacia,palabras)
            agregarTarjetas(filtrados,$contenedorTarjetas)
        })
        
        $contenedorTarjetas.addEventListener('click', (e) => {
            if( e.target.localName === 'button'){
                filtro.push( farmacia.find( item => item._id == e.target.id))
                console.log(productosSelec);
            }
        })


    })
    .catch(error => console.log(error))


