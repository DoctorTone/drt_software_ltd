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
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <div className="bordered">
              <a
                href="https://www.youtube.com/watch?v=iM7GL6MC7M4&t=2s"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Img src="./images/museum.jpg" alt="projects" />
              </a>
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
              Imagine a virtual gallery where you can experience the art as if
              you were relly there. You can view a single piece in a room or
              view multiple pieces in a gallery and even extend the structure to
              as many rooms as you like.
            </Typography>
            <Typography variant="body1">
              The pieces look stunning as they are 3D scans of the originals.
              This opens up the possibility of artists being able to display and
              sell their work from anywhere in the world. We can even create
              copies of famous pieces, so that you could get a chance to see a
              Da Vinci, a Goya or a Constable up close! For the ultimate sense
              of realism, you can view the pieces in VR - seeing the pieces
              through a headset takes the experience to another level!
            </Typography>
            <Typography variant="body1">
              The ArtXR technology has now been used in real world art galleries
              to showcase work like never before. Click on the image for a video
              of the technlogy in action.
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
              Data visualisation is commonly associated with bar charts, pie
              charts and dashboards in a two-dimensional setting, but this does
              not have to be the case. We can use the additional space of 3D to
              arrange the data more effectively. I have visualised data from
              many fields including climate, sports, finance, medical, financial
              and many others.
            </Typography>
            <Typography variant="body1">
              Click on the image to interact with a demo.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <div className="bordered">
              <a
                href="https://www.drt-software.com/SleepViz/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Img src="./images/dataViz.jpg" alt="projects" />
              </a>
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
              <a
                href="https://drt-software.com/Portfolio/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Img src="./images/portfolio.jpg" alt="projects" />
              </a>
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
              possibilities right in your browser:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <AutoAwesomeIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Enhanced engagement - interact with 3D models, feel more involved." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AutoAwesomeIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Improved visualisation - see realistic products from any angle." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AutoAwesomeIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Innovative branding - 3D websites tell your story differently." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AutoAwesomeIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Increased visitors - engaging and interactive sites encourage visitors, who are more tempted to stay." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AutoAwesomeIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Compelling experiences - highly interactive sites provide increased depth and context." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AutoAwesomeIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Competitive edge - your site will have an edge over your competitors." />
              </ListItem>
            </List>
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
              <a
                href="https://drt-software.com/Demos/Configurator/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Img src="./images/configurator.jpg" alt="projects" />
              </a>
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
              <a
                href="https://www.drt-software.com/Solar/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Img src="./images/space.jpg" alt="projects" />
              </a>
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
              <a
                href="https://my.spline.design/textdemo-61df54446b5ffc181ac8ed02b55444fe/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Img src="./images/spline.jpg" alt="projects" />
              </a>
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
              <a
                href="https://www.drt-software.com/MedicalViz/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Img src="./images/medical.jpg" alt="projects" />
              </a>
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
