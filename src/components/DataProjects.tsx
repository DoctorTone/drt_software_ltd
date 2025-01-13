import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import { isMobileDevice } from "../utils/Utils";

const Img = styled("img")({
  display: "block",
  borderRadius: "20px",
  width: "100%",
});

const DataProjects = () => {
  const isMobile = isMobileDevice();

  return (
    <Container>
      <Box sx={{ mt: 5, background: "#404040", borderRadius: "20px" }}>
        <Grid container spacing={2} sx={{ mt: 3, padding: "30px" }}>
          <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
            <Typography variant="h5" color="#386fc7">
              Data Visualisation
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
                Data visualisation is commonly associated with bar charts, pie
                charts and dashboards in a two-dimensional setting. There is
                absolutely nothing wrong with this but there are other ways to
                display your data.
              </p>{" "}
              <p>
                We can use the additional space of three dimensions to arrange
                the data more effectively. I have visualised data from many
                fields including climate, sports, finance, medical, financial
                and many others.
              </p>
            </Typography>
            <Box sx={{ textAlign: "center" }}>
              <Button href="/#dataviz" variant="contained">
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
                  3D Data Visualisation
                </Typography>
              )}
            </div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default DataProjects;
