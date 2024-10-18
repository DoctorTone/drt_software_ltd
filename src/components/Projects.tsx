import React from "react";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";

const Img = styled("img")({
  display: "block",
  borderRadius: "20px",
  width: "100%",
});

const Projects = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid size={6}>
          <div className="bordered">
            <Img src="./images/effects.jpg" alt="projects" />
          </div>
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
