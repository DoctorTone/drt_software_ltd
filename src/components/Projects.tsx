import React from "react";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";

const Img = styled("img")({
  display: "block",
  border: "2px solid #e0e0e0",
  borderRadius: "20px",
  width: "95%",
  padding: "10px",
});

const Projects = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid size={6}>
          <Img src="./images/effects.jpg" alt="projects" />
        </Grid>
        <Grid size={6}>
          <Img src="./images/effects.jpg" alt="projects" />
        </Grid>
        <Grid size={6}>
          <Img src="./images/effects.jpg" alt="projects" />
        </Grid>
        <Grid size={6}>
          <Img src="./images/effects.jpg" alt="projects" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Projects;
