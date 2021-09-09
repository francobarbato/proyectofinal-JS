// llevarlo a productos
class Cascos{
    constructor(marca, color, precio, img) {
        this.marca = marca;
        this.color  = color;
        this.precio = precio;
        this.img = img;
    }    
}

let carrito = [];

if(localStorage.carrito != null){
    carrito = JSON.parse(localStorage.carrito);
    document.getElementById("contador").innerHTML = carrito.length;
}

const producto1 = new Cascos("Shred", "Negro", "300", "../imagenes/shred1.jpg");
const producto2 = new Cascos("Salomon", "Rojo", "200", "../imagenes/shred2.jpg");
const producto3 = new Cascos("Blizzard", "Blanco", "450", "../imagenes/shred3.jpg");

const baseDeDatos = [producto1, producto2, producto3];

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
                    <p class="card-text parrafos">SHRED.wide | Antiparras diseñadas y fabricadas para maximizar tu campo de visión.</p>
                    <p class="card-text cardparrafo">$${productos.precio} </p>
                    <a href="#" type="button" class="btn btn-primary" id="button" onclick="agregar('${productos.marca}')">Agregar al carrito</a>
                </div>
            </div>
        </div>
    </article>`
});
document.getElementById("cards").innerHTML = acumulador;

}
tarjetas();

function agregar(marca){

    const productoEncontrado = baseDeDatos.find(productos => productos.marca === marca )

    if(productoEncontrado != undefined){
        carrito.push(productoEncontrado);
    }
    const storage = localStorage.carrito = JSON.stringify(carrito);

    document.getElementById("contador").innerHTML = carrito.length;

    document.getElementById("prodcutos-agregados").innerHTML = storage;

    console.log(carrito);
}


 
const addCarro = document.getElementById("button")

const div = document.getElementById("respuesta")

addCarro.addEventListener("click", respuesta)

function respuesta(){
  console.log("Se agrego el producto al carrito");
}



