function saludar() {
 let nombreUsuario = prompt('ingresa tu nombre');
 if (nombreUsuario === "") {
    alert("No ingresó un nombre.")
 } else {
    alert("Hola "+nombreUsuario+ ", Bienvenido a London Hotel.")
 }
 confirm("¿Desea reservar una habitacion?")
 }
class Producto {
    constructor (id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = Number(precio);
    }
}

const arrayProductos = [];


const producto1 = new Producto(1, 'Queen room', 10000);
const producto2 = new Producto(2, 'King room', 30000);
const producto3 = new Producto(3, 'Studio room', 40000);
arrayProductos.push(producto1, producto2, producto3);

// Función para ordenar precio de menor a mayor
const ordenarMenorMayor = () => {
    arrayProductos.sort((a, b) => a.precio - b.precio);
    mostrarListaOrdenada();
};

// Función para ordenar precio de mayor a menor
const ordenarMayorMenor = () => {
    arrayProductos.sort((a, b) => b.precio - a.precio);
    mostrarListaOrdenada();
};

const mostrarListaOrdenada = () => {
    let array = [];
    arrayProductos.forEach(producto => array.push(producto.nombre+' $'+producto.precio));
    alert('Lista de precios:'+'\n'+array.join('\n'));
};


function comprarProductos() {
    let productoNombre = '';
    let productoCantidad = 0;
    let total = 0;
    let seguirComprando = false;

    do {
        productoNombre = prompt('¿Que habitacion desea alquilar? Queen room, King room,Studio room ', 'Ej: King room');
        productoCantidad = parseInt(prompt('¿Cuantos dias desea alquilar?'));

        const producto = arrayProductos.find(producto => producto.nombre === productoNombre);

        if (producto) {
            total += producto.precio * productoCantidad;
        } else {
            alert(' No se encuentra disponible.');
        }
        alert('El total de su reserva es $'+total+'.')

        seguirComprando = confirm('¿Desea reservar otra?');

    } while (seguirComprando)

    aplicarDescuento(total);
}

function aplicarDescuento(totalCompra) {
    if (totalCompra >= 80000) {
        totalCompra = totalCompra * 0.80;
        alert('Tenes un 20% de descuento!');
    }
    calcularCena(totalCompra)
}

function calcularCena(totalCompra) {
    let tieneCenaIncluida = confirm('Desea agregar el sevicio de cena a su estadia?');
  if (tieneCenaIncluida && totalCompra >= 50000) {
  alert('Tenes cena incluida. El total de la compra es: '+totalCompra)
  } else if (tieneCenaIncluida && totalCompra < 50000 && totalCompra !== 0) {
   totalCompra += 10000;
    alert('El servicio de cena esta incluido. El total de la compra es: '+totalCompra);
  } else {
    alert('El total de la compra es: '+totalCompra);
  }
}
function comprar() {
    const quieroOrdenar =confirm('¿Querés ordenar la lista de productos del mas barato al mas caro?');
    if (quieroOrdenar) {
        ordenarMenorMayor();
    } else {
        ordenarMayorMenor();
    }

    comprarProductos();
};

saludar();
comprar();