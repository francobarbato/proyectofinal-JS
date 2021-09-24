let carrito = [];

if(localStorage.carrito != null){
    carrito = JSON.parse(localStorage.carrito);
    document.getElementById("contador").innerHTML = carrito.length;
}

class Antiparras{
    constructor(marca, nombre, precio, img) {
        this.marca = marca;
        this.nombre  = nombre;
        this.precio = precio;
        this.img = img;
    }    
}

const producto_uno = new Antiparras("Atomic", "HAWX 130+ ", "399", "../imagenes/hawx130.png");
const producto_dos = new Antiparras("Atomic", "HAWX 120 ", "250", "../imagenes/hawx120.png");
const producto_tres = new Antiparras("Atomic", "HAWX 130", "470", "../imagenes/hawx130.png");

const baseDeDatos = [producto_uno, producto_dos, producto_tres];

// Tarjetas
function tarjetas() {
    let acumulador=``

    baseDeDatos.forEach((productos)=> {
    acumulador += `
    <article class="row">
        <div class="col-12 col-md-4 mt-3 mt-md-5">
            <div class="card">
                <img src="${productos.img}" class="card-img-top">
                <div class="card-body">
                    <h3 class="card-title titulos">${productos.marca}</h3>
                    <h4 class="card-title titulos">${productos.nombre}</h4>
                    <p class="card-text parrafos">Hawx es una bota de esquí ligera, deportiva y de horma media con flexibilidad y comodidad para la montaña.</p>
                    <p class="card-text cardparrafo">$${productos.precio} </p>
                    <a href="#" type="button" class="btn btn-primary" id="button" onclick="agregar('${productos.marca}')">Agregar al carrito</a>
                </div>
            </div>
        </div>
    </article>`
});
document.getElementById("cardsBotas").innerHTML = acumulador;

}
tarjetas();

function agregar(marca){

    const productoEncontrado = baseDeDatos.find(productos => productos.marca === marca )

    if(productoEncontrado != undefined){
        carrito.push(productoEncontrado);
    }
    const storage = localStorage.carrito = JSON.stringify(carrito);

    $('#contador').html(carrito.length);

    document.getElementById("prodcutos-agregados").innerHTML = storage;

    console.log(carrito);
}

const addCarro = document.getElementById("button")

const div = document.getElementById("respuesta")

addCarro.addEventListener("click", respuesta)

function respuesta(){
  console.log("Se agrego el producto al carrito");
}