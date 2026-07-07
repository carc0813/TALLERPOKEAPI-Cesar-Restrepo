const prompt = require("prompt-sync")();
async function pedirNombre() {
  //buscarPokemon(nombre);
  for (let i = 0; i < 3; i++) {
    let nombre = prompt("Escribe Nombre: ").toLowerCase();
    await buscarPokemon(nombre);
  }
}

pedirNombre();

async function buscarPokemon(nombre) {
  const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/" + nombre);
  if (!respuesta.ok) {
    console.log("Error:", respuesta.status);
    return null;
  }
  const datos = await respuesta.json();
  console.log("Nombre:", datos.name.toUpperCase(), "ID:", datos.id);
}

async function mostrarFicha(datos) {
  const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/");
  if (!datos) {
    console.log("No hay datos que Mostrar");
    return;
  }

  const datos = respuesta.json();
  console.log("Nobre:", datos.name.toUpperCase());
  console.log("ID:", datos.id);
  //tipos
  let tipos = [];
  for (let i = 0; i < datos.types.length; i++) {
    tipos.push(datos.types[i].type.name);
  }
  console.log("Tipos:", tipos.join("/"));

  //altura y peso
  console.log("Altura:", datos.height * 10, "cm");
  console.log("Peso:", datos.weight / 10, "Kg");

  //estadisticas
  for (let i = 0; i < datos.stats.length; i++) {
    console.log(datos.stats[i].name + ":" + datos.stats[i].base_stat);
  }
  //habilidades
  console.log("Habilidades");
  for (let i = 0; i < datos.abilities; i++) {
    let habilidad = datos.abilities[i].ability.name;
    if (datos.abilities[i].is_hidden) {
      habilidad += "oculta";
    }
    console.log(habilidad);
  }
}
