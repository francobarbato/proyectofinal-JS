let carrito = [];

if(localStorage.carrito != null){
    carrito = JSON.parse(localStorage.carrito);
    document.getElementById("contador").innerHTML = carrito.length;
}

class Esquies{
    constructor(marca, precio, img) {
        this.marca = marca;
        this.precio = precio;
        this.img = img;
    }    
}

const producto_uno = new Esquies("BLIZZARD QUATTRO S 70", "500", "../imagenes/blizzard1.png");
const producto_dos = new Esquies("BLIZZARD QUATTRO RS 76", "550", "../imagenes/blizzard2.png");
const producto_tres = new Esquies("BLIZZARD QUATTRO S 70", "490", "../imagenes/blizzard3.png");

const baseDeDatos = [producto_uno, producto_dos, producto_tres];

// Tarjetas
function tarjetas() {
    let acumulador=``

    baseDeDatos.forEach((productos)=> {
    acumulador += `
        <div class="col-12 col-md-4 mt-3 mt-md-5">
            <div class="card">
                <img src="${productos.img}" class="card-img-top">
                <div class="card-body">
                    <h3 class="card-title titulos">${productos.marca}</h3>
                    <p class="card-text cardparrafo">$${productos.precio} </p>
                    <a href="#" type="button" class="btn btn-primary" id="button" onclick="agregar('${productos.marca}')">Agregar al carrito</a>
                </div>
            </div>
        </div>`
});
document.getElementById("cardsEsquies").innerHTML = acumulador;

}
tarjetas();

function agregar(marca){

    const productoEncontrado = baseDeDatos.find(productos => productos.marca === marca )

    if(productoEncontrado != undefined){
        carrito.push(productoEncontrado);
        guardarCarrito();
    }
     
    document.getElementById("contador").innerHTML = carrito.length;
    
    imprimirCardsCarrito();
}


function imprimirCardsCarrito() {

    $("#cardCarrito").html(``);
    
    for (let productos of carrito) {
        
        $("#cardCarrito").append(
            `<div class="card" id="${productos.marca}">
            <img src="${productos.img}" class="card-img-top">
            <div class="card-body">
            <h3 class="card-title titulos">${productos.marca} <span class="badge badge-light border border-dark">agotado</span></h3>
            <p class="card-text parrafos">SHRED.wide | Antiparras diseñadas y fabricadas para maximizar tu campo de visión.</p>
            <p class="card-text cardparrafo">$${productos.precio} </p>
            <a href="#" type="button" class="btn btn-primary" id="button" onclick="eliminarDelCarrito('${productos.marca}')">Eliminar producto</a>
            </div>`);
            
        }
        
        if(carrito.length == 0){

            $("#mensajeCarrito").html(
                `<div>
                <p>No tenes ningun producto en el carrito</p>
                </div>`);
            }
    } 
        
    imprimirCardsCarrito();

    function eliminarDelCarrito(marca) {
    
        carrito = carrito.filter(productos => productos.marca !== marca);
    
        const cardEliminada = document.getElementById(marca);
        
        cardEliminada.parentNode.removeChild(cardEliminada);  
        
        document.getElementById("contador").innerHTML = carrito.length;
        
        imprimirCardsCarrito();
        
        guardarCarrito();
        
    }
    eliminarDelCarrito();

    function guardarCarrito() {

        localStorage.carrito = JSON.stringify(carrito);
    }