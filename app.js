// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado"); // Asegurar que existe este elemento en HTML

function agregarAmigo() {
  const nombre = inputAmigo.value.trim();

  // Validar que el nombre no esté vacío y solo contenga letras y espacios
  let regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;

  if (nombre === "" || !regex.test(nombre)) {
    alert("Por favor, ingresa un nombre válido.");
    return; // Detener la ejecución si el nombre no es válido
  }

  listaAmigos.push(nombre);
  ulListaAmigos.innerHTML += `<li>${nombre}</li>`;

  inputAmigo.value = ""; // Limpiar el campo de input después de agregar
}

function sortearAmigo() {
  if (listaAmigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }

  const random = Math.floor(Math.random() * listaAmigos.length);
  const amigoSecreto = listaAmigos[random];
  
  ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}