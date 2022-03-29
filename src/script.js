var frutas = [];

var laticínios = [];

var congelados = [];

var doces = [];

function adicionar() {
  var adicionar = document.getElementById("lista").value;

  var categoria = document.getElementById("categoria").value;

  if (categoria == "frutas") {
    frutas.push(adicionar);
  }

  if (categoria == "laticinios") {
    laticínios.push(adicionar);
  }

  if (categoria == "congelados") {
    congelados.push(adicionar);
  }

  if (categoria == "doces") {
    doces.push(adicionar);
  }

  var listafrutas = document.getElementById("frutas");

  for (var i = 0; i < frutas.length; i++) {
    if (adicionar == frutas[i]) {
      listafrutas.innerHTML = listafrutas.innerHTML + adicionar + "<br>";
    }
  }

  var listalati = document.getElementById("laticinios");
  for (var i = 0; i < laticínios.length; i++) {
    if (adicionar === laticínios[i]) {
      listalati.innerHTML = listalati.innerHTML + adicionar + "<br>";
    }
  }

  var listacongelados = document.getElementById("congelados");
  for (var i = 0; i < congelados.length; i++) {
    if (adicionar === congelados[i]) {
      listacongelados.innerHTML =
        listacongelados.innerHTML + adicionar + "<br>";
    }
  }

  var listadoces = document.getElementById("doces");
  for (var i = 0; i < doces.length; i++) {
    if (adicionar === doces[i]) {
      listadoces.innerHTML = listadoces.innerHTML + adicionar + "<br>";
    }
  }
}
