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
            <Typography variant="h3" sx={{ mb: 3 }}>
              Virtual Art Gallery
            </Typography>
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
            <Typography variant="h3" sx={{ mb: 3 }}>
              3D Data Visualisation
            </Typography>
            <Typography variant="body1">
              Data visualisation does not have to be confined to two dimensions,
              we can use the additional space of 3D to express the information
              more effectively. I have visualised data from many fields
              including climate, sports, finance, medical, financial and many
              others.
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
      <Box sx={{ mt: 5, background: "#404040", borderRadius: "20px" }}>
        <Grid container spacing={2} sx={{ mt: 3, padding: "30px" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <div className="bordered">
              <Img src="./images/portfolio.jpg" alt="projects" />
              <Typography className="hoverText" variant="h4">
                3D Websites
              </Typography>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
            <Typography variant="h5" color="#386fc7">
              Projects
            </Typography>
            <Typography variant="h3" sx={{ mb: 3 }}>
              3D Websites
            </Typography>
            <Typography variant="body1">
              Websites built with 3D technology can open up a whole new world of
              possibilities right in your browser: ✨Enhanced engagement -
              interact with 3D models, feel more involved. ✨Improved
              visualisation - see realistic products from any angle.
              ✨Innovative branding - 3D websites tell your story differently.
              ✨Increased visitors - engaging and interactive sites encourage
              visitors, who are more tempted to stay. ✨Compelling experiences -
              highly interactive sites provide increased depth and context.
              ✨Competitive edge - your site will have an edge over your
              competitors. The enhanced look and feel of your website will make
              you stand out from the crowd, reinforcing your message whilst
              looking pretty impressive!
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
            <Typography variant="h3" sx={{ mb: 3 }}>
              3D Configurators
            </Typography>
            <Typography variant="body1">
              I have built a range of product configurators for several sectors
              such as the bathroom, furniture and construction industries; each
              one allowing customers to preview products before they make a
              purchase.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <div className="bordered">
              <Img src="./images/configurator.jpg" alt="projects" />
              <Typography className="hoverText" variant="h4">
                3D Configurators
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mt: 5, background: "#404040", borderRadius: "20px" }}>
        <Grid container spacing={2} sx={{ mt: 3, padding: "30px" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <div className="bordered">
              <Img src="./images/space.jpg" alt="projects" />
              <Typography className="hoverText" variant="h4">
                Physics and Simulation
              </Typography>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
            <Typography variant="h5" color="#386fc7">
              Projects
            </Typography>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Physics and Simulation
            </Typography>
            <Typography variant="body1">
              The web isn't just confined to visualisations, it's also capable
              of the realistic simulation of many things from solar systems to
              atomic structures. Here are a couple of examples: ### The Solar
              System This demo was built for schools to help visualise the solar
              system - to get a sense of how far away everything is and how big
              the planets are, especially in relation to the Earth.
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
            <Typography variant="h3" sx={{ mb: 3 }}>
              Spline Components
            </Typography>
            <Typography variant="body1">
              While building several websites in Spline, I created a set of
              reusable components. This component shows a collection of animated
              text effects and materials.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <div className="bordered">
              <Img src="./images/spline.jpg" alt="projects" />
              <Typography className="hoverText" variant="h4">
                Spline Components
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mt: 5, background: "#404040", borderRadius: "20px" }}>
        <Grid container spacing={2} sx={{ mt: 3, padding: "30px" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <div className="bordered">
              <Img src="./images/medical.jpg" alt="projects" />
              <Typography className="hoverText" variant="h4">
                3D Medical Visualisation
              </Typography>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
            <Typography variant="h5" color="#386fc7">
              Projects
            </Typography>
            <Typography variant="h3" sx={{ mb: 3 }}>
              3D Medical Visualisation
            </Typography>
            <Typography variant="body1">
              Medical imaging software can be very complex and expensive, with a
              steep learning curve. We wanted to create an application that
              could be used to measure and monitor tumour lesions that was
              simple to use and gave accurate results. In conjunction with a
              neurosurgeon, I built an application that took a collection of 2D
              medical images and created a 3D volume. This can then be used to
              visualise anatomic structures and identify areas of interest. The
              software allowed specified areas to be isolated, and the
              corresponding data could then be analysed and any cancerous
              lesions were identified and measured. This then allowed monitoring
              of the tumour to determine the effectiveness of any treatments.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Projects;
