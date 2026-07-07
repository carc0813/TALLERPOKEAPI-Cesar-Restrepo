const prompt = require("prompt-sync")();
async function pedirNombre() {
  //buscarPokemon(nombre);
  for (let i = 0; i < 3; i++) {
    let nombre = prompt("Escribe Nombre: ").toLowerCase();
   const datos= await buscarPokemon(nombre);
   mostrarFicha(datos);

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
//  console.log("Nombre:", datos.name.toUpperCase(), "ID:", datos.id);
  return datos;
}

function mostrarFicha(datos) {

  if (!datos) {
    console.log("No hay datos que mostrar");
    return;
  }

  console.log("Nombre:", datos.name.toUpperCase());
  console.log("ID:", datos.id);

  // Tipos
  let tipos = [];

  for (let i = 0; i < datos.types.length; i++) {
    tipos.push(datos.types[i].type.name);
  }

  console.log("Tipos:", tipos.join(" / "));

  // Altura y peso
  console.log("Altura:", datos.height * 10, "cm");
  console.log("Peso:", datos.weight / 10, "kg");

  // Estadísticas
  console.log("Estadísticas:");
  for (let i = 0; i < datos.stats.length; i++) {
    console.log(datos.stats[i].stat.name + ": " + datos.stats[i].base_stat);
  }

  // Habilidades
  console.log("Habilidades:");
  for (let i = 0; i < datos.abilities.length; i++) {
    let habilidad = datos.abilities[i].ability.name;

    if (datos.abilities[i].is_hidden) {
      habilidad += " (oculta)";
    }

    console.log(habilidad);
  }
}