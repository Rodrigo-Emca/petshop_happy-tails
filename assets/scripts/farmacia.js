import { modal, agregarTarjetas, filtrarCoincidencias } from "./module/functions.js"


const $contenedorTarjetas = document.getElementById("contenedorProductos")
const $keyword = document.getElementById("keyword")

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

let productosSelec = []

fetch(`https://mindhub-xj03.onrender.com/api/petshop`)
.then(data => data.json())
.then(response => {
        const productos = response.filter( item => item.categoria === 'farmacia')
        const farmacia = modal(productos)    
        // console.log(farmacia);    
        agregarTarjetas(farmacia,$contenedorTarjetas);
        
        $keyword.addEventListener("keyup", () => {
            $contenedorTarjetas.innerHTML = ``
            const palabras = ($keyword.value).toLowerCase()
            const filtrados = filtrarCoincidencias(farmacia,palabras)
            agregarTarjetas(filtrados,$contenedorTarjetas)
        })
        
        $contenedorTarjetas.addEventListener('click', (e) => {
            if( e.target.localName === 'button'){
                productosSelec.push( farmacia.find( item => item._id === e.target.id))
                console.log(productosSelec);
            }
        })


    })
    .catch(error => console.log(error))


