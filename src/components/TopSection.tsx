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
      <Typography variant="h5" sx={{ mt: 3 }}>
        I'm passionate about building software that makes a difference.
      </Typography>
    </Container>
  );
};
export default TopSection;
