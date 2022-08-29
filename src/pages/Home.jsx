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
    //fazendo requisição para api atravês do endpoint
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=50")
      .then((response) => setPokemons(response.data.results))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <NavBar />
      <Container maxWidth="false">
        <Grid container>
          {pokemons.map((pokemon) => (
            <Grid item xs={3}>
              <PokemonCard name={pokemon.name} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
