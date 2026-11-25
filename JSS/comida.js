var carrito = [];

function agregarPlato(nombre, precio) {
  carrito.push({ nombre: nombre, precio: precio });
  mostrarCarrito();
}

function quitarPlato(posicion) {
  carrito.splice(posicion, 1);
  mostrarCarrito();
}

function vaciarCarrito() {
  carrito = [];
  mostrarCarrito();
}

function mostrarCarrito() {
  var lista = document.getElementById("carrito");
  var total = 0;
  lista.innerHTML = "";

  for (var i = 0; i < carrito.length; i++) {
    total = total + carrito[i].precio;
    lista.innerHTML += "<li>" + carrito[i].nombre + " - S/ " + carrito[i].precio +
      " <button class='eliminar' onclick='quitarPlato(" + i + ")'>X</button></li>";
  }
  document.getElementById("total").innerText = total;
}