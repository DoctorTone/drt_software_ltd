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
          <Grid
            size={6}
            sx={{ textAlign: "center", padding: "0px 20px 0px 30px" }}
          >
            <Typography variant="h5" color="orange">
              Services
            </Typography>
            <Typography variant="h3" sx={{ mb: 2 }}>
              3D Web Applications
            </Typography>
            <Typography variant="body1">
              <p>
                3D technology can create a website that looks amazing, or an
                application that allows real-time interaction right in your
                browser.
              </p>{" "}
              <p>
                But it's not just about looking good. The increased interaction
                makes the site more engaging and compelling, it will leave a
                lasting impression. Your site can become more of an experience
                or story as opposed to a collection of static images.
              </p>{" "}
              Think what this can do for your business. You now have a method
              for accelerating your impact and recognition.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mt: 5, background: "#404040", borderRadius: "20px" }}>
        <Grid container spacing={2} sx={{ mt: 3, padding: "30px" }}>
          <Grid
            size={6}
            sx={{ textAlign: "center", padding: "0px 20px 0px 30px" }}
          >
            <Typography variant="h5" color="orange">
              Services
            </Typography>
            <Typography variant="h3" sx={{ mb: 2 }}>
              Virtual Reality Development
            </Typography>
            <Typography variant="body1">
              <p>
                Imagine being able to guide your visitors through a virtual
                experience of your business, or being able to showcase your
                products as if they were right in front of you.
              </p>{" "}
              <p>
                Experiencing a world in virtual reality takes the feeling of
                immersion to another level. Once you have walked around a
                virtual space or interacted with objects by reaching out and
                touching them, you will not believe the level of engagement.
              </p>
              <p>
                {" "}
                Our virtual art gallery is a great example - you can see and
                experience beautiful art in a way that you never could before.
              </p>
            </Typography>
          </Grid>
          <Grid size={6}>
            <Img src="./images/VRDev.jpg" alt="projects" />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mt: 5, background: "#404040", borderRadius: "20px" }}>
        <Grid container spacing={2} sx={{ mt: 3, padding: "30px" }}>
          <Grid size={6}>
            <Img src="./images/covid.jpg" alt="projects" />
          </Grid>
          <Grid size={6} sx={{ textAlign: "center" }}>
            <Typography variant="h5" color="orange">
              Services
            </Typography>
            <Typography variant="h3" sx={{ mb: 2 }}>
              3D Data Visualisation
            </Typography>
            <Typography variant="body1">
              I build websites that are responsive, fast and secure.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mt: 5, background: "#404040", borderRadius: "20px" }}>
        <Grid container spacing={2} sx={{ mt: 3, padding: "30px" }}>
          <Grid size={6} sx={{ textAlign: "center" }}>
            <Typography variant="h5" color="orange">
              Services
            </Typography>
            <Typography variant="h3" sx={{ mb: 2 }}>
              3D Spline Websites
            </Typography>
            <Typography variant="body1">
              I build websites that are responsive, fast and secure.
            </Typography>
          </Grid>
          <Grid size={6}>
            <Img src="./images/spline2.jpg" alt="projects" />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mt: 5, background: "#404040", borderRadius: "20px" }}>
        <Grid container spacing={2} sx={{ mt: 3, padding: "30px" }}>
          <Grid size={6}>
            <Img src="./images/consult.jpg" alt="projects" />
          </Grid>
          <Grid size={6} sx={{ textAlign: "center" }}>
            <Typography variant="h5" color="orange">
              Services
            </Typography>
            <Typography variant="h3" sx={{ mb: 2 }}>
              Consultancy
            </Typography>
            <Typography variant="body1">
              I build websites that are responsive, fast and secure.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Services;
