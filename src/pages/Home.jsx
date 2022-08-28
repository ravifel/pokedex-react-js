import { Container, Grid } from "@mui/material";
import React from "react";
import NavBar from "../components/NavBar/NavBar";
import PokemonCard from "../components/PokemonCard/PokemonCard";

export const Home = () => {
  return (
    <div>
      <NavBar />
      <Container maxWidth="false">
        <Grid container>
          <Grid item xs={3}>
            <PokemonCard />
          </Grid>

          <Grid item xs={3}>
            <PokemonCard />
          </Grid>

          <Grid item xs={3}>
            <PokemonCard />
          </Grid>

          <Grid item xs={3}>
            <PokemonCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
