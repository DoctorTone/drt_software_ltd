import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import { isMobileDevice } from "../utils/Utils";

const Img = styled("img")({
  display: "block",
  borderRadius: "20px",
  width: "100%",
});

const PhysicsProjects = () => {
  const isMobile = isMobileDevice();

  return (
    <Container sx={{ mt: 15, mb: 5 }}>
      <Box sx={{ mt: 5, background: "#404040", borderRadius: "20px" }}>
        <Grid container spacing={2} sx={{ mt: 3, padding: "30px" }}>
          <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
            <Typography variant="h5" color="#386fc7">
              Physics & Simulation
            </Typography>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Solar System
            </Typography>
            <Typography
              className="paddingProjects"
              variant="body1"
              sx={{ textAlign: "justify" }}
            >
              <p>
                This demo was built for schools to help visualise the solar
                system - to get a sense of how far away everything is and how
                big the planets are, especially in relation to the Earth.
              </p>
            </Typography>
            <Box sx={{ textAlign: "center" }}>
              <Button
                href="https://www.drt-software.com/Solar/"
                target="_blank"
                rel="noreferrer noopener"
                variant="contained"
              >
                Go to Demo
              </Button>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <div className="bordered">
              <a
                href="https://www.drt-software.com/Solar/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Img src="./images/space.jpg" alt="projects" />
              </a>
              {!isMobile && (
                <Typography className="hoverText" variant="h4">
                  Physics & Simulation
                </Typography>
              )}
            </div>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mt: 5, background: "#404040", borderRadius: "20px" }}>
        <Grid container spacing={2} sx={{ mt: 3, padding: "30px" }}>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <div className="bordered">
              <a
                href="https://drt-software.com/Demos/Physics/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Img src="./images/physicsGame.jpg" alt="projects" />
              </a>
              {!isMobile && (
                <Typography className="hoverText" variant="h4">
                  Physics & Simulation
                </Typography>
              )}
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
            <Typography variant="h5" color="#386fc7">
              Physics & Simulation
            </Typography>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Game Physics
            </Typography>
            <Typography
              variant="body1"
              className="paddingProjects"
              sx={{ textAlign: "justify" }}
            >
              <p>
                Sophisticated physics simulations are now possible in the
                browser. The following demo uses the rapier physics engine to
                let you play a simple game level. Enjoy!
              </p>
            </Typography>
            <Box sx={{ textAlign: "center" }}>
              <Button
                href="https://drt-software.com/Demos/Physics/"
                target="_blank"
                rel="noreferrer noopener"
                variant="contained"
              >
                Go to Demo
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default PhysicsProjects;
