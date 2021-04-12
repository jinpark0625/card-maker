import axios from "axios";

class Pokemon {
  constructor() {
    this.pokeList = [];
  }
  // async fetchKantoPokemon() {
  //   const url = "https://pokeapi.co/api/v2/pokemon?limit=151";
  //   const response = await fetch(url); //
  //   const result = await response.json();
  //   return result;
  // }
  // async fetchPokemonData(pokemon) {
  //   let url = pokemon.url; // <--- this is saving the pokemon url to a  variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
  //   const response = await fetch(url);
  //   const result = await response.json();
  //   return this.pokeList.push(result);
  // }
  // async getPokeData() {
  //   const that = this;
  //   try {
  //     const callKanto = await this.fetchKantoPokemon();
  //     console.log(callKanto.results);
  //     // await callKanto.results.map((pokemon) => {
  //     //   that.fetchPokemonData(pokemon);
  //     // });
  //     return this.pokeList;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  async fetchKantoPokemon() {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=151";
    const response = await axios.get(url); //
    this.finalList = [];
    response.data.results.map((item) => {
      return this.pokeList.push(this.fetchPokemonData(item));
    });
    return Promise.all(this.pokeList).then((values) => values);
  }
  async fetchPokemonData(pokemon) {
    let url = pokemon.url; // <--- this is saving the pokemon url to a  variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
    const response = await axios.get(url);
    return response;
  }
}

export default Pokemon;
