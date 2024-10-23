import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
const About = () => {
  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 5, color: "#386fc7" }}>
        About
      </Typography>
      <Box sx={{ mt: 3, textAlign: "center" }}>
        <img src="./images/tony.png" alt="profile" className="roundedSmall" />
      </Box>
      <Grid container sx={{ textAlign: "center" }}>
        <Grid size={8} offset={2}>
          <Typography variant="h6">
            As a seasoned software developer with over 25 years of experience, I
            excel in creating highly interactive 3D graphical applications. I
            have worked with small and large companies, start-ups and academic
            institutions. I am passionate about all things 3D and have built
            applications in virtual reality, data visualisation, 3D graphical
            tools, simulation and many more. Let's create something fantastic!
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
