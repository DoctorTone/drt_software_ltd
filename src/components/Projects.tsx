import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Img = styled("img")({
  display: "block",
  borderRadius: "20px",
  width: "100%",
});

const Projects = () => {
  return (
    <Container>
      <Box sx={{ mt: 5, background: "#404040", borderRadius: "20px" }}>
        <Grid container spacing={2} sx={{ mt: 3, padding: "30px" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <div className="bordered">
              <Img src="./images/museum.jpg" alt="projects" />
              <Typography className="hoverText" variant="h4">
                Virtual Art Gallery
              </Typography>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
            <Typography variant="h5" color="#386fc7">
              Projects
            </Typography>
            <Typography variant="h3">Virtual Art Gallery</Typography>
            <Typography variant="body1">
              You can view realistic art pieces, such as a single painting or a
              gallery where collections are situated in adjoining rooms,
              potentially allowing the gallery to go on forever! The artefacts
              looked stunning as they were 3D scans of the originals. This
              allowed artists to display and potentially sell their artwork from
              anywhere in the world. Alternatively, it allows famous pieces of
              art to be put on display so that you can get a chance to view the
              Mona Lisa or a Constable up close! For the ultimate sense of
              realism, you can view the pieces in VR - seeing the pieces through
              a headset takes the experience to another level! The project is
              still ongoing and has already recruited artists to exhibit on the
              platform. You can get a sense of the experience below:
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mt: 5, background: "#404040", borderRadius: "20px" }}>
        <Grid container spacing={2} sx={{ mt: 3, padding: "30px" }}>
          <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
            <Typography variant="h5" color="#386fc7">
              Projects
            </Typography>
            <Typography variant="h3">3D Data Visualisation</Typography>
            <Typography variant="body1">
              You can view realistic art pieces, such as a single painting or a
              gallery where collections are situated in adjoining rooms,
              potentially allowing the gallery to go on forever! The artefacts
              looked stunning as they were 3D scans of the originals. This
              allowed artists to display and potentially sell their artwork from
              anywhere in the world. Alternatively, it allows famous pieces of
              art to be put on display so that you can get a chance to view the
              Mona Lisa or a Constable up close! For the ultimate sense of
              realism, you can view the pieces in VR - seeing the pieces through
              a headset takes the experience to another level! The project is
              still ongoing and has already recruited artists to exhibit on the
              platform. You can get a sense of the experience below:
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <div className="bordered">
              <Img src="./images/dataViz.jpg" alt="projects" />
              <Typography className="hoverText" variant="h4">
                3D Data Visualisation
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Projects;
