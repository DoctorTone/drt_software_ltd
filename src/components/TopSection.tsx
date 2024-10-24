import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const TopSection = () => {
  return (
    <Container className="plus-jakarta-sans-main" sx={{ mt: 20, mb: 5 }}>
      <img src="./images/tony.png" alt="profile" className="rounded" />
      <Typography variant="h2" sx={{ mt: 3 }}>
        Hi, I'm Tony
      </Typography>
      <Typography variant="h6" sx={{ mt: 3 }}>
        I'm passionate about all things 3D and the capabilities that 3D
        technology can do for you and your business. I don't just build
        pretty-looking websites and applications, I help accelerate your
        business impact and recognition by showing off your products in a new
        light, with the latest cutting-edge technology. Your customers will love
        it, your competitors will be jealous!
      </Typography>
      <Typography variant="h6" sx={{ mt: 3 }}>
        Here are a collection of projects that showcase some of my work.
      </Typography>
    </Container>
  );
};
export default TopSection;
