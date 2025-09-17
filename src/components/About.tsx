import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
const About = () => {
  return (
    <Container id="section4" sx={{ mb: 3 }}>
      <Box
        sx={{
          mt: 3,
          background: "#202020",
          borderRadius: "20px",
          padding: "10px 0px 25px 0px",
        }}
      >
        <Typography
          variant="h5"
          sx={{ mt: 1, color: "#386fc7", textAlign: "center" }}
        >
          About
        </Typography>
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <img src="./images/tony.png" alt="profile" className="roundedSmall" />
        </Box>
        <Grid container sx={{ textAlign: "center" }}>
          <Grid size={10} offset={1}>
            <Typography variant="h6">
              I'm a software developer with over 25 years of experience building
              interactive 3D applications, specialising in data visualisation
              and virtual reality. I help teams turn complex datasets and ideas
              into immersive, engaging experiences. I've partnered with
              industry, academia, startups, solopreneurs and organisations to
              create stunning real-world applications.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
