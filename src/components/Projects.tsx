import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { isMobileDevice } from "../utils/Utils";
import { Button } from "@mui/material";

const Img = styled("img")({
  display: "block",
  borderRadius: "20px",
  width: "100%",
});

const Projects = () => {
  const isMobile = isMobileDevice();

  return (
    <Container id="section1">
      <Box sx={{ mt: 5, background: "#404040", borderRadius: "20px" }}>
        <Grid container spacing={2} sx={{ mt: 3, padding: "30px" }}>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <div className="bordered">
              <a
                href="https://www.drt-software.com/PointsViz/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Img src="./images/points.jpg" alt="projects" />
              </a>
              {!isMobile && (
                <Typography className="hoverText" variant="h4">
                  3D Data Visualisation
                </Typography>
              )}
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
            <Typography variant="h5" color="#386fc7">
              Visualisations
            </Typography>
            <Typography variant="h6" color="orange">
              Sports
            </Typography>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Results Analysis
            </Typography>
            <Typography
              variant="body1"
              className="paddingProjects"
              sx={{ textAlign: "justify" }}
            >
              <p>
                Here we are comparing cumulative points totals for a football
                team over successive seasons. Showing this in 3D is a novel way
                to compare the different data strands and get a feel for the
                underlying patterns.
              </p>
              <p>
                3D is great for showing multiple aspects of the data and an
                interesting alternative to traditional 2D.
              </p>
            </Typography>
            <Box sx={{ textAlign: "center" }}>
              <Button
                href="https://www.drt-software.com/PointsViz/"
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
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <div className="bordered">
              <a
                href="https://www.drt-software.com/PointsViz/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Img src="./images/points.jpg" alt="projects" />
              </a>
              {!isMobile && (
                <Typography className="hoverText" variant="h4">
                  3D Data Visualisation
                </Typography>
              )}
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
            <Typography variant="h5" color="#386fc7">
              Visualisations
            </Typography>
            <Typography variant="h6" color="orange">
              Music
            </Typography>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Interactive Tuition
            </Typography>
            <Typography
              variant="body1"
              className="paddingProjects"
              sx={{ textAlign: "justify" }}
            >
              <p>
                Here we are comparing cumulative points totals for a football
                team over successive seasons. Showing this in 3D is a novel way
                to compare the different data strands and get a feel for the
                underlying patterns.
              </p>
              <p>
                3D is great for showing multiple aspects of the data and an
                interesting alternative to traditional 2D.
              </p>
            </Typography>
            <Box sx={{ textAlign: "center" }}>
              <Button
                href="https://www.drt-software.com/DrumViz/"
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
              Data Visualisation
            </Typography>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Pandemic Data
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
                  3D Data Visualisation
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
                  3D Data Visualisation
                </Typography>
              )}
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
            <Typography variant="h5" color="#386fc7">
              Data Visualisation
            </Typography>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Financial Data
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
              Data Visualisation
            </Typography>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Real Time
            </Typography>
            <Typography
              variant="body1"
              className="paddingProjects"
              sx={{ textAlign: "justify" }}
            >
              Processing data over the web makes it an ideal platform to be able
              to visualise data in real-time. At the Mayhem Horror festival we
              visualised the EEG activity of film fans as they watched the
              horror! Made in conjunction with colleagues at Thrill Laboratory
              and the Mixed Reality Lab.
            </Typography>
            <Box sx={{ textAlign: "center" }}>
              <Button
                href="https://www.drt-software.com/Horror/"
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
                href="https://www.drt-software.com/Horror/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Img src="./images/horror.jpg" alt="projects" />
              </a>
              {!isMobile && (
                <Typography className="hoverText" variant="h4">
                  3D Data Visualisation
                </Typography>
              )}
            </div>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mt: 5, background: "#404040", borderRadius: "20px" }}>
        <Grid container spacing={2} sx={{ mt: 3, padding: "30px" }}>
          <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
            <Typography variant="h5" color="#386fc7">
              Visualisations
            </Typography>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Sleep Data
            </Typography>
            <Typography
              className="paddingProjects"
              variant="body1"
              sx={{ textAlign: "justify" }}
            >
              <p>
                This example depicts sleep patterns for a subject over a number
                of months, illustrating all the associated attributes. The
                application is fully interactive allowing individual attribute
                selection, scaling and highlighting of any relevant trends.
              </p>{" "}
              <p>
                The extra space allows all the attributes to be separated,
                allowing for much more effective visualisation.
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
              <a href="/#dataviz">
                <Img src="./images/dataViz.jpg" alt="projects" />
              </a>
              {!isMobile && (
                <Typography className="hoverText" variant="h4">
                  3D Data Visualisation
                </Typography>
              )}
            </div>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mt: 5, background: "#404040", borderRadius: "20px" }}>
        <Grid container spacing={2} sx={{ mt: 3, padding: "30px" }}>
          <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
            <Typography variant="h5" color="#386fc7">
              Visualisations
            </Typography>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Medical
            </Typography>
            <Typography
              className="paddingProjects"
              variant="body1"
              sx={{ textAlign: "justify" }}
            >
              <p>
                Medical imaging software can be very complex and expensive, with
                a steep learning curve. We wanted to create an application that
                could be used to measure and monitor tumour lesions that was
                simple to use and gave accurate results.
              </p>{" "}
              <p>
                In conjunction with a neurosurgeon, I built an application that
                took a collection of 2D medical images and created a 3D volume.
                This could then be used to visualise anatomic structures and
                identify areas of interest.
              </p>{" "}
              <p>
                The software allowed specified areas to be isolated, and the
                corresponding data could then be analysed and any cancerous
                lesions were identified and measured. This then allowed
                monitoring of the tumour to determine the effectiveness of any
                treatment.
              </p>
            </Typography>
            <Box sx={{ textAlign: "center" }}>
              <Button
                href="https://www.drt-software.com/MedicalViz/"
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
                href="https://www.drt-software.com/MedicalViz/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Img src="./images/medical.jpg" alt="projects" />
              </a>
              {!isMobile && (
                <Typography className="hoverText" variant="h4">
                  3D Medical Visualisation
                </Typography>
              )}
            </div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Projects;
