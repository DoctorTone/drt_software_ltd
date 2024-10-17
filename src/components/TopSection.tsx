import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const TopSection = () => {
  return (
    <Container className="plus-jakarta-sans-main" sx={{ mt: 20 }}>
      <img src="./images/tony.png" alt="profile" className="rounded" />
      <Typography variant="h2" sx={{ mt: 3 }}>
        Hi, I'm Tony
      </Typography>
    </Container>
  );
};
export default TopSection;
