var descripciones = {
  santa: "Papá Noel: un señor de barba blanca y traje rojo que reparte regalos la noche del 24.",
  reno: "Reno: tira del trineo de Papá Noel y vuela por el cielo.",
  elfo: "Elfo: ayudante de Papá Noel que fabrica los juguetes en el Polo Norte."
};

function mostrar(personaje) {
  document.getElementById("descripcion").innerText = descripciones[personaje];
}
