import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Container sx={{ mt: 5, mb: 5, textAlign: "center" }}>
      <Typography variant="h6">
        Copyright &copy; 2025 DRT Software. All rights reserved.
      </Typography>
    </Container>
  );
};

export default Footer;
