import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { isMobileDevice } from "../utils/Utils";

const Img = styled("img")({
  display: "block",
  borderRadius: "20px",
  width: "100%",
});

const SplineProjects = () => {
  const isMobile = isMobileDevice();

  return (
    <Container sx={{ mt: 15, mb: 5 }}>
      <Box sx={{ mt: 5, background: "#404040", borderRadius: "20px" }}>
        <Grid container spacing={2} sx={{ mt: 3, padding: "30px" }}>
          <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
            <Typography variant="h5" color="#386fc7">
              Spline Components
            </Typography>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Material Effects
            </Typography>
            <Typography
              className="paddingProjects"
              variant="body1"
              sx={{ textAlign: "justify" }}
            >
              <p>
                While building several websites in Spline, I created a
                collection of reusable components.
              </p>
              <p>
                This component shows a collection of animated text effects and
                materials. Click on the button to start.
              </p>
            </Typography>
            <Box sx={{ textAlign: "center" }}>
              <Button
                href="https://my.spline.design/textdemo-61df54446b5ffc181ac8ed02b55444fe/"
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
                href="https://my.spline.design/textdemo-61df54446b5ffc181ac8ed02b55444fe/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Img src="./images/spline.jpg" alt="projects" />
              </a>
              {!isMobile && (
                <Typography className="hoverText" variant="h4">
                  Spline Components
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
                href="https://my.spline.design/trackdemo-da570a5da99a009612d81d8b5f99f61f/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Img src="./images/physics.jpg" alt="projects" />
              </a>
              {!isMobile && (
                <Typography className="hoverText" variant="h4">
                  Spline Components
                </Typography>
              )}
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
            <Typography variant="h5" color="#386fc7">
              Spline Components
            </Typography>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Physics
            </Typography>
            <Typography
              variant="body1"
              className="paddingProjects"
              sx={{ textAlign: "justify" }}
            >
              <p>
                In addition to 3D modelling, Spline also offers a sophisticated
                physics model. This component combines physics, animation and
                interaction to demonstrate how these features can be combined.
              </p>
            </Typography>
            <Box sx={{ textAlign: "center" }}>
              <Button
                href="https://my.spline.design/trackdemo-da570a5da99a009612d81d8b5f99f61f/"
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
      <Box sx={{ mt: 5, background: "#404040", borderRadius: "20px" }}>
        <Grid container spacing={2} sx={{ mt: 3, padding: "30px" }}>
          <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
            <Typography variant="h5" color="#386fc7">
              Spline Components
            </Typography>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Interactive Elements
            </Typography>
            <Typography
              className="paddingProjects"
              variant="body1"
              sx={{ textAlign: "justify" }}
            >
              <p>
                Interaction is a vital part of any 3D application and Spline
                offers a number of interactive 3D elements.
              </p>
              <p>
                This component shows a switch and slider element that allow
                other objects to be controlled in either an on/off mode or in a
                continually varying fashion.
              </p>
            </Typography>
            <Box sx={{ textAlign: "center" }}>
              <Button
                href="https://my.spline.design/elementdemo-51fdc2914af2502bad08325bf14b4019/"
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
                href="https://my.spline.design/elementdemo-51fdc2914af2502bad08325bf14b4019/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Img src="./images/spline2.jpg" alt="projects" />
              </a>
              {!isMobile && (
                <Typography className="hoverText" variant="h4">
                  Spline Components
                </Typography>
              )}
            </div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SplineProjects;
