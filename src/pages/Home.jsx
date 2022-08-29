import { Container, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import PokemonCard from "../components/PokemonCard/PokemonCard";

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  //trabalhando com o ciclo de vida do componente
  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    var endpoints = [];
    for (var i = 1; i < 50; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    console.log(endpoints);

    var response = axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemons(res));
  };

  return (
    <div>
      <NavBar />
      <Container maxWidth="false">
        <Grid container spacing={4}>
          {pokemons.map((pokemon, key) => (
            <Grid item xs={2} key={key}>
              <PokemonCard
                name={pokemon.data.name}
                image={pokemon.data.sprites.front_default}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
