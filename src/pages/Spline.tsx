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

const Spline = () => {
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
                materials.
              </p>
            </Typography>
            <Box sx={{ textAlign: "center" }}>
              <Button
                href="https://www.drt-software.com/SleepViz/"
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
                href="https://www.drt-software.com/SleepViz/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Img src="./images/dataViz.jpg" alt="projects" />
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
                href="https://www.drt-software.com/FTSEViz/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Img src="./images/finance.jpg" alt="projects" />
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
                The application visualises the FTSE-100 index for the whole of a
                year. It illustrates the share price trends on a daily, weekly
                and monthly basis. The height of each bar also corresponds to
                the share price trend throughout the year.
              </p>
              <p>
                This amplifies how novel 3D data visualisation can be, showing
                multiple aspects of the data at the same time.
              </p>
            </Typography>
            <Box sx={{ textAlign: "center" }}>
              <Button
                href="https://www.drt-software.com/FTSEViz/"
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
                During the global pandemic, data visualisation played a key role
                in providing information and analysis of the virus. The huge
                quantities of data generated have been utilsied by both
                scientific and governmental bodies to help inform policy
                decisions.
              </p>
              <p>
                They also provide the general public with a means to scrutinise
                all the information. This visualisation shows the virus data for
                the first wave in the UK. It separates out aspects of the data
                so that they may be studied more easily, yet still allows
                comparisons to be made.
              </p>
            </Typography>
            <Box sx={{ textAlign: "center" }}>
              <Button
                href="https://www.drt-software.com/Covid/"
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
                href="https://www.drt-software.com/Covid/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Img src="./images/covid.jpg" alt="projects" />
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

export default Spline;
