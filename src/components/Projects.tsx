import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { isMobileDevice } from "../utils/Utils";
import { Button } from "@mui/material";

const Img = styled("img")({
  display: "block",
  borderRadius: "20px",
  width: "100%",
});

const items = [
  "Enhanced engagement - interact with 3D models, feel more involved.",
  "Improved visualisation - see realistic products from any angle.",
  "Innovative branding - 3D websites tell your story differently.",
  "Increased visitors - engaging and interactive sites encourage visitors, who are more tempted to stay.",
  "Compelling experiences - highly interactive sites provide increased depth and context.",
  "Competitive edge - your site will have an edge over your competitors.",
];

const generateListItems = (items: string[]) => {
  return items.map((item, index) => (
    <ListItem disablePadding key={index}>
      <ListItemIcon>
        <AutoAwesomeIcon color="warning" />
      </ListItemIcon>
      <ListItemText primary={item} />
    </ListItem>
  ));
};

const Projects = () => {
  const isMobile = isMobileDevice();

  return (
    <Container id="section1">
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
              Medical Visualisation
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
