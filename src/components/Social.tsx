import Container from "@mui/material/Container";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Social = () => {
  return (
    <Container sx={{ display: "flex", justifyContent: "center", gap: 4 }}>
      <LinkedInIcon color="primary" fontSize="large" />
      <XIcon fontSize="large" />
      <YouTubeIcon color="error" fontSize="large" />
    </Container>
  );
};

export default Social;
