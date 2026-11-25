function AgregarRegalo() {
  var caja = document.getElementById("regalo");
  var texto = caja.value;

  if (texto == "") {
    alert("Escribe un regalo primero");
    return;
  }

  var li = document.createElement("li");
  li.innerText = texto;

  var boton = document.createElement("button");
  boton.innerText = "X";
  boton.className = "eliminar";
  boton.onclick = function () {
    li.remove();
  };

  li.appendChild(boton);
  document.getElementById("listaRegalos").appendChild(li);
  caja.value = "";
}

function LimpiarLista() {
  document.getElementById("listaRegalos").innerHTML = "";
}