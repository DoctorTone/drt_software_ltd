import React from "react";
import { Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";

const Img = styled("img")({
  display: "block",
  borderRadius: "20px",
  width: "100%",
  border: "2px solid #00ff00",
  padding: "16px",
});

const Services = () => {
  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 3 }}>
        Services
      </Typography>
      <Grid container spacing={2} sx={{ mt: 3 }}>
        <Grid size={6}>
          <Img src="./images/portfolio.jpg" alt="projects" />
        </Grid>
        <Grid size={6} sx={{ textAlign: "center" }}>
          <Typography variant="h3">3D Websites</Typography>
          <Typography variant="body1">
            I build websites that are responsive, fast and secure.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 3 }}>
        <Grid size={6} sx={{ textAlign: "center" }}>
          <Typography variant="h4">3D Websites</Typography>
          <Typography variant="body1">
            I build websites that are responsive, fast and secure.
          </Typography>
        </Grid>
        <Grid size={6}>
          <Img src="./images/portfolio.jpg" alt="projects" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Services;
