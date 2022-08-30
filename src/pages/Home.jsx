import { Container, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import PokemonCard from "../components/PokemonCard/PokemonCard";
import { Skeletons } from "../components/Skeletons/Skeletons";

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  //trabalhando com o ciclo de vida do componente
  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    var endpoints = [];
    for (var i = 1; i < 500; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    console.log(endpoints);

    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemons(res));
  };

  //percorrer o Array de pokemons e ver se as letras pesquisadas se incluem ao nome de algum pokemon
  //caso se inclua, vai ser jogado em um novo array
  //quando a estrutura de repetição terminar, esse array vai ser o novo "setPokemons"
  const pokemonFilter = (name) => {
    var filteredPokemons = [];

    if (name === "") {
      getPokemons();
    }

    //console.log(name);
    for (var i in pokemons) {
      if (pokemons[i].data.name.includes(name)) {
        filteredPokemons.push(pokemons[i]);
      }
    }
    //console.log(filteredPokemons);
    setPokemons(filteredPokemons);
  };

  return (
    <div>
      <NavBar pokemonFilter={pokemonFilter} />
      <Container maxWidth="xg">
        <Grid container spacing={3}>
          {/* Exibição dos "Eskeletons" */}
          {pokemons.lenght === 0 ? (
            <Skeletons />
          ) : (
            pokemons.map((pokemon, key) => (
              <Grid item xs={12} sm={6} md={4} lg={2.4} key={key}>
                <PokemonCard
                  name={pokemon.data.name}
                  image={pokemon.data.sprites.front_default}
                  types={pokemon.data.types}
                />
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </div>
  );
};
