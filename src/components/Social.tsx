import Container from "@mui/material/Container";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Social = () => {
  return (
    <Container sx={{ display: "flex", justifyContent: "center", gap: 4 }}>
      <a
        href="https://www.linkedin.com/in/tonyglover/"
        target="_blank"
        rel="noreferrer noopener"
      >
        {" "}
        <LinkedInIcon color="primary" fontSize="large" />
      </a>
      <a
        href="https://x.com/DrtSoftware"
        target="_blank"
        rel="noreferrer noopener"
      >
        <XIcon sx={{ color: "white" }} fontSize="large" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCNYHLpd8oKLoE2xw49ZX1nQ?"
        target="_blank"
        rel="noreferrer noopener"
      >
        <YouTubeIcon color="error" fontSize="large" />
      </a>
    </Container>
  );
};

export default Social;
