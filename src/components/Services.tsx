import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import { Button } from "@mui/material";

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
            sx={{
              textAlign: "center",
            }}
          >
            <Typography variant="h5" color="orange">
              Services
            </Typography>
            <Typography variant="h3" sx={{ mb: 2 }}>
              3D Web Applications
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "justify", padding: "0px 20px 0px 40px", mb: 2 }}
            >
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
            <Button variant="contained" color="primary">
              Contact me
            </Button>
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
              Virtual Reality Development
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "justify", padding: "0px 30px 0px 20px" }}
            >
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
            <Button variant="contained" color="primary">
              Contact me
            </Button>
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
            <Typography
              variant="body1"
              sx={{ textAlign: "justify", padding: "0px 20px 0px 40px" }}
            >
              <p>
                Visualising data in three dimensions can make it a lot easier to
                understand. The extra space allows the associated attributes to
                be configured and arranged more effectively than a 2D design.
              </p>{" "}
              <p>
                Having the data inside a web application also makes it highly
                interactive and easier to spot trends and patterns.
              </p>{" "}
              <p>
                I have visualised data from lots of fields including financial,
                medical, health, architecture, sports and many more.
              </p>
            </Typography>
            <Button variant="contained" color="primary">
              Contact me
            </Button>
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
              3D Spline Websites
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "justify", padding: "0px 30px 0px 20px" }}
            >
              <p>
                Spline is a web application that allows you to create
                interactive 3D scenes. It is great for making 3D mockups or
                testing out 3D effects, etc.
              </p>
              <p>
                Through my development work in Spline I have created a number of
                components that can be used to enhance your website.
              </p>
            </Typography>
            <Button variant="contained" color="primary">
              Contact me
            </Button>
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
            <Typography
              variant="body1"
              sx={{ textAlign: "justify", padding: "0px 20px 0px 40px" }}
            >
              <p>
                If you are stuck on what direction to take with your project, or
                need help with all the technical details surrounding 3D graphics
                at the moment, then please get in touch.
              </p>
              <p>
                You can book a free 30 minute call below, completely free and
                with no pressure to hire me or work with me.
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
