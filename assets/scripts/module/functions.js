//Funciones Exportadas:

export function modal(lista){
    let aux = []
    let contador = 0
    lista.forEach( item => {
        let modal = contador ++
        item.modal = modal
        aux.push(item)
    });
    return aux
}

export function filtrarPorCategoria(array, categoria){
    const productosPorCategoria = array.filter(producto => producto.categoria == categoria)
    return productosPorCategoria    
}

export function getCategories(nodos){
    const categorias = []
    for(let categoria of nodos){
        if(categoria) {
        categorias.push(categoria.value)
        }    
    }
    return categorias
    }

export function agregarTarjetas(array, elementoDestino){
    if(array.length === 0){return elementoDestino.innerHTML = `
    <div class="d-flex flex-column justify-content-center pt-3">
    <h3 class="text-center pt-2 pb-2">Lo sentimos, no pudimos encontrar lo que buscas. <br>  Por favor, intentalo de nuevo.</h3> <br> <img src="https://media.istockphoto.com/id/1357410154/es/foto/perro-labradoodle-tendido-en-el-suelo-con-expresi%C3%B3n-triste-o-somnolienta.jpg?s=612x612&w=0&k=20&c=ayVTZmZuczlylwr7-VsalOguqNp23hzdupcEeA7HjW4=" height="500rem"></img></div>`}
    else{
        let template = ""
        for (let lista of array){
        template += crearTarjeta(lista)
    }
    elementoDestino.innerHTML += template
    }
}

export function crearTarjeta(lista){
    if (lista.disponibles === 0) {
        // console.log(lista.disponibles)
        return `
        <div class="card text-center col-md-3 m-4" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title pt-1">${lista.producto}</h5>   
            <img src="${lista.imagen}" height="250rem" class="card-img-top p-2" id="imageCard" alt="${lista.producto}">
            <p class="card-text">Precio: $${lista.precio}</p>
            <button type="button" class="btn btn-danger"> ¡Sin Stock disponible! </button> 
            <div class="d-flex justify-content-around"> 
    
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${lista.modal}">
            Detalles
            </button>
    
            <!-- Modal -->
            <div class="modal fade" id="${lista.modal}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">${lista.producto}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <img src="${lista.imagen}" max-height="250rem" class="card-img-top p-2" id="imageCard" alt="${lista.producto}">
                    <p>${lista.descripcion}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Volver</button>
                </div>
                </div>
            </div>
            </div>
    
            </div>
        </div>
        </div>`
    } else if (lista.disponibles > 0 && lista.disponibles < 5) {
        return `
        <div class="card text-center col-md-3 m-4" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title pt-1">${lista.producto}</h5>   
            <img src="${lista.imagen}" height="250rem" class="card-img-top p-2" id="imageCard" alt="${lista.producto}">
            <p class="card-text">Precio: $${lista.precio}</p>
            <p class="card-text">Stock disponible: <button type="button" class="btn btn-danger"> ¡Últimas unidades! </button></p>
            <div class="d-flex justify-content-around">
    
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${lista.modal}">
            Detalles
            </button>
            <a class"carrito-card"><img name="carrito" id="${lista._id}" src="./assets/images/carrito.png" alt="ir_a_compras" height="50rem" ></a>
            
    
            <!-- Modal -->
            <div class="modal fade" id="${lista.modal}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">${lista.producto}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <img src="${lista.imagen}" max-height="250rem" class="card-img-top p-2" id="imageCard" alt="${lista.producto}">
                    <p>${lista.descripcion}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Volver</button>
                </div>
                </div>
            </div>
            </div>
    
            </div>
        </div>
        </div>`
    } else {
        return `
        <div class="card text-center col-md-3 m-4" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title pt-1">${lista.producto}</h5>   
            <img src="${lista.imagen}" height="250rem" class="card-img-top p-2" id="imageCard" alt="${lista.producto}">
            <p class="card-text">Precio: $${lista.precio}</p>
            <p class="card-text">Stock disponible: ${lista.disponibles} unidades</p>
            <div class="d-flex justify-content-around">
    
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${lista.modal}">
            Detalles
            </button>
            <a class"carrito-card"><img name="carrito" id="${lista._id}" src="./assets/images/carrito.png" alt="ir_a_compras" height="50rem" ></a>

            
            <!-- Modal -->
            <div class="modal fade" id="${lista.modal}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">${lista.producto}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <img src="${lista.imagen}" max-height="250rem" class="card-img-top p-2" id="imageCard" alt="${lista.producto}">
                    <p>${lista.descripcion}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Volver</button>
                </div>
                </div>
            </div>
            </div>
            </div>
        </div>
        </div>`
    }
    }

export function filtrarCoincidencias(listaProductos, keywordIngresado) {
    const coincidencias = []
    for (let producto of listaProductos){
        if((producto["producto"].toLowerCase()).includes(keywordIngresado)){
        coincidencias.push(producto)
        // console.log(producto)
    }
    }
    return coincidencias
    }