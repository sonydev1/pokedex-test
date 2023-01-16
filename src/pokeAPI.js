

export function pokenom() {
  
console.log('sony dev');
}

 async function getPokemon(id) {
   try {
     const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
     const pokeData = await res.json();
     setPokemon(pokeData);
   } catch (error) {
     console.log(error);
   }
 } 