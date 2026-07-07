async function ApiPokedex() {
  const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur");
  // console.log(respuesta);
   const datos = await respuesta.json();
   console.log(datos.name, datos.id , datos.height, datos.weight, datos.types [0].type.name, datos.stats[4], datos.abilities);

   for(let i=0;i<datos.types.length;i++){
    console.log(datos.types[i].type.name);
   }

     for(let j=0;j<datos.stats.length;j++){
    console.log(datos.stats[j].stat.name);
     console.log(datos.stats[j].base_stat);
   }

   for(let i=0;i<datos.abilities.length;i++){
    console.log(datos.abilities[i].ability.name)
   }
}
ApiPokedex();