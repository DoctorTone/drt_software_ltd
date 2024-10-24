import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";

const Img = styled("img")({
  display: "block",
  borderRadius: "20px",
  width: "100%",
  border: "10px solid orange",
  boxShadow: "0px 0px 0px 0.75rem #606060",
});

const Services = () => {
  return (
    <Container sx={{ mt: 15 }}>
      <Box sx={{ mt: 5, background: "#404040", borderRadius: "20px" }}>
        <Grid container spacing={2} sx={{ mt: 3, padding: "30px" }}>
          <Grid size={6}>
            <Img src="./images/portfolio2.jpg" alt="projects" />
          </Grid>
          <Grid size={6} sx={{ textAlign: "center" }}>
            <Typography variant="h5" color="orange">
              Services
            </Typography>
            <Typography variant="h3">3D Websites</Typography>
            <Typography variant="body1">
              I build websites that are responsive, fast and secure.
            </Typography>
          </Grid>
        </Grid>
      </Box>
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
