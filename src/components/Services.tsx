import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import { Button } from "@mui/material";

const Img = styled("img")({
  display: "block",
  borderRadius: "20px",
  width: "92%",
  border: "10px solid orange",
  boxShadow: "0px 0px 0px 0.75rem #606060",
});

const Services = () => {
  return (
    <Container id="section2" sx={{ mt: 15 }}>
      <Box sx={{ mt: 5, background: "#404040", borderRadius: "20px" }}>
        <Grid container spacing={2} sx={{ mt: 3, padding: "30px" }}>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Img src="./images/dataViz.jpg" alt="projects" />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
            <Typography variant="h5" color="orange">
              Services
            </Typography>
            <Typography variant="h3" sx={{ mb: 2 }}>
              3D Data Visualisation
            </Typography>
            <Typography
              className="paddingProjects"
              variant="body1"
              sx={{ textAlign: "justify" }}
            >
              <p>
                I help organisations turn complex, multi-dimensional data into
                interactive 3D experiences people can explore and understand.
              </p>
              <p>
                Whether it's live operational metrics, scientific results,
                geospatial models, or historical trends, I build visualisations
                that reveal patterns, support decisions, and elevate
                communication.
              </p>
              <p>
                Experience includes finance, healthcare, medical research,
                architecture, sports, and lots more.
              </p>
              <p>
                <em>Your data doesn't have to be flat.</em>
              </p>
            </Typography>
            <Button
              variant="contained"
              color="primary"
              href="mailto:enquiries@drt-software.com"
            >
              Contact me
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mt: 5, background: "#404040", borderRadius: "20px" }}>
        <Grid container spacing={2} sx={{ mt: 3, padding: "30px" }}>
          <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
            <Typography variant="h5" color="orange">
              Services
            </Typography>
            <Typography variant="h3" sx={{ mb: 2 }}>
              Virtual Reality Development
            </Typography>
            <Typography
              className="paddingProjects"
              variant="body1"
              sx={{ textAlign: "justify" }}
            >
              <p>
                I design and build immersive VR applications that create
                memorable experiences. This can be extending data visualisations
                to enhance spatial relationships and hands-on interaction.
                Visualisations don't have to stop at the browser, you can truly
                step into your data.
              </p>

              <p>
                Broader experiences include interactive training, product demos,
                architectural walkthroughs, and interactive educational content.
              </p>
            </Typography>
            <Button
              variant="contained"
              color="primary"
              href="mailto:enquiries@drt-software.com"
            >
              Contact me
            </Button>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Img src="./images/VRDev.jpg" alt="projects" />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mt: 5, background: "#404040", borderRadius: "20px" }}>
        <Grid container spacing={2} sx={{ mt: 3, padding: "30px" }}>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Img src="./images/consult.jpg" alt="projects" />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
            <Typography variant="h5" color="orange">
              Services
            </Typography>
            <Typography variant="h3" sx={{ mb: 2 }}>
              Consultancy
            </Typography>
            <Typography
              className="paddingProjects"
              variant="body1"
              sx={{ textAlign: "justify" }}
            >
              <p>
                Stuck on direction, tools, or technical details? I provide
                independent guidance on architecture, tooling, and delivery for
                interactive 3D.
              </p>

              <p>
                I can help you make the right choices across 3D data
                visualisation and general 3D/VR. We'll clarify goals, pick the
                right tech, and map a practical path to a working prototype or
                production app.
              </p>
            </Typography>
            <Button
              href="https://calendly.com/tony-mdjh/30min"
              variant="contained"
              color="primary"
              target="_blank"
              rel="noreferrer noopener"
            >
              Book a call
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Services;
